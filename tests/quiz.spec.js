import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { questions } from "../src/data/questions.js";
const reference = JSON.parse(
  readFileSync(new URL("./fixtures/reference-flow.json", import.meta.url)),
);
const normalize = (text) =>
  text
    .replace(/\d{2}:\d{2}/g, "TIMER")
    .replace(/\s+/g, " ")
    .trim();
async function matchesReference(page, index) {
  await expect
    .poll(async () => normalize(await page.locator("main").innerText()))
    .toBe(
      normalize(
        reference[index].text.replaceAll("Pamela Santos", "Angela Susuki"),
      ),
    );
}
async function choose(page, step, option = 0) {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[step].titulo,
  );
  // Match the original 450ms protection against double taps between questions.
  await page.waitForTimeout(500);
  await page
    .getByRole("button", {
      name: questions[step].opcoes[option].texto,
      exact: false,
    })
    .click();
}
for (let path = 0; path < 4; path++) {
  test(`reference content and complete quiz — answer set ${path + 1}`, async ({
    page,
  }) => {
    const errors = [];
    const unexpectedRequests = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.route("**/*", (route) => {
      if (!route.request().url().startsWith("http://127.0.0.1:4173")) {
        unexpectedRequests.push(route.request().url());
        return route.abort();
      }
      return route.continue();
    });
    await page.goto("/?angulo=neutro&utm_source=teste&utm_campaign=bordado");
    await matchesReference(page, 0);
    await page
      .getByRole("link", { name: "QUERO DESCOBRIR MEU PERFIL" })
      .first()
      .click();
    for (let step = 0; step < questions.length; step++) {
      await matchesReference(page, step + 1);
      await choose(page, step, path % questions[step].opcoes.length);
    }
    await matchesReference(page, 7);
    await page.waitForTimeout(500);
    await page.getByRole("link", { name: "CONTINUAR", exact: true }).click();
    await matchesReference(page, 8);
    await page.getByRole("link", { name: "CONTINUAR MEU PLANO" }).click();
    await matchesReference(page, 9);
    const answers = await page.evaluate(() =>
      JSON.parse(sessionStorage.getItem("funil_quiz")),
    );
    expect(Object.keys(answers)).toHaveLength(6);
    expect(answers.possibilidade).toBe(questions[5].opcoes[path % 4].texto);
    await page.getByRole("button", { name: "Próxima peça" }).click();
    await expect
      .poll(() =>
        page
          .locator("figure")
          .first()
          .evaluate((figure) => figure.parentElement.scrollLeft),
      )
      .toBeGreaterThan(0);
    await expect(
      page
        .getByRole("link", { name: "QUERO GARANTIR MINHA VAGA", exact: true })
        .first(),
    ).toBeVisible();
    const before = await page
      .locator("p")
      .filter({ hasText: "OFERTA POR TEMPO LIMITADO:" })
      .textContent();
    await expect
      .poll(() =>
        page
          .locator("p")
          .filter({ hasText: "OFERTA POR TEMPO LIMITADO:" })
          .textContent(),
      )
      .not.toBe(before);
    expect(errors).toEqual([]);
    expect(unexpectedRequests).toEqual([]);
  });
}

test("back navigation, refresh, answer editing and restart", async ({
  page,
}) => {
  await page.goto("/quiz");
  await choose(page, 0, 2);
  await choose(page, 1, 1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[2].titulo,
  );
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[2].titulo,
  );
  await page.getByRole("button", { name: "Voltar", exact: true }).click();
  await choose(page, 1, 0);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[2].titulo,
  );
  expect(
    await page.evaluate(
      () =>
        JSON.parse(sessionStorage.getItem("funil_quiz")).historico_treinamentos,
    ),
  ).toBe("primeiro_treinamento");
  for (let step = 2; step < 6; step++) await choose(page, step);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Mas precisa ter experiência com artesanato?",
  );
  await page.waitForTimeout(500);
  await page.getByRole("link", { name: "CONTINUAR", exact: true }).click();
  await page.getByRole("link", { name: "Voltar", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Mas precisa ter experiência com artesanato?",
  );
  await page.getByRole("button", { name: "Voltar", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[5].titulo,
  );
  await page.goto("/");
  await page
    .getByRole("link", { name: "QUERO DESCOBRIR MEU PERFIL" })
    .first()
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    questions[0].titulo,
  );
});

test("purchase buttons preserve checkout and attribution without making a purchase", async ({
  page,
}) => {
  const destinations = [];
  await page.route("https://pay.wiapy.com/**", (route) => {
    destinations.push(route.request().url());
    return route.fulfill({
      contentType: "text/html",
      body: "<h1>Checkout destination intercepted by test</h1>",
    });
  });
  for (const index of [0, 1]) {
    await page.goto(
      "/quiz/plano?angulo=neutro&utm_source=teste&utm_campaign=bordado",
    );
    await page
      .getByRole("link", { name: "QUERO GARANTIR MINHA VAGA", exact: true })
      .nth(index)
      .click();
    await expect(page).toHaveURL(/^https:\/\/pay\.wiapy\.com\/5a9Wt7I5wjcT\?/);
    const url = new URL(destinations.at(-1));
    expect(url.searchParams.get("angulo")).toBe("neutro");
    expect(url.searchParams.get("utm_source")).toBe("teste");
    expect(url.searchParams.get("utm_campaign")).toBe("bordado");
  }
});

test("all public pages load locally, images resolve and palette is applied", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of [
    "/",
    "/quiz",
    "/quiz/materiais",
    "/quiz/plano",
    "/obrigado",
  ]) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await page.evaluate(async () => {
      for (const image of document.images) {
        image.loading = "eager";
        await image.decode();
      }
      await document.fonts.ready;
    });
    expect(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every((img) => img.complete && img.naturalWidth > 0),
        ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page.evaluate(() =>
        getComputedStyle(document.documentElement)
          .getPropertyValue("--purple")
          .trim(),
      ),
    ).toBe("#7138b5");
    await expect(page.locator("main")).toHaveCSS(
      "background-color",
      "rgb(255, 255, 255)",
    );
    if (route === "/obrigado")
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        "Pagamento confirmado com sucesso!",
      );
  }
  expect(errors).toEqual([]);
});
