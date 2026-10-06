import React from "react";
import {
  usePreloadRouter,
  initializeAttribution,
  trackEvent,
  Link,
} from "../lib/runtime.jsx";
import { ArrowLeft } from "lucide-react";
import { materialsImage } from "../data/shared.js";
function Materials() {
  let e = usePreloadRouter();
  return (
    React.useEffect(() => {
      (initializeAttribution(`neutro`),
        trackEvent(`quiz_materiais_viewed`),
        e
          .preloadRoute({
            to: `/quiz/plano`,
          })
          .catch(() => {}));
    }, []),
    (
      <main
        className={`min-h-screen overflow-x-hidden bg-[var(--quiz-bg)] px-5 py-6`}
      >
        <div className={`mx-auto w-full max-w-[430px] animate-fade-in`}>
          <div className={`relative`}>
            <Link
              to={`/quiz`}
              aria-label={`Voltar`}
              className={`absolute left-0 top-6 z-10 text-[var(--quiz-muted)] transition-colors hover:text-[var(--quiz-text)]`}
            >
              <ArrowLeft size={22} strokeWidth={2} />
            </Link>
            <div
              className={`mx-auto mt-6 h-[8px] w-[80%] overflow-hidden rounded-full bg-[var(--quiz-progress-bg)]`}
            >
              <div
                className={`h-full rounded-full bg-[var(--quiz-accent)] transition-all duration-300`}
                style={{
                  width: `88%`,
                }}
              />
            </div>
          </div>
          <h1
            className={`mt-10 text-center font-[var(--font-quiz-display)] text-[20px] font-semibold leading-[1.3] tracking-tight text-[var(--quiz-text)] sm:text-[23px]`}
          >
            {`Preciso `}
            <span
              className={`text-[var(--quiz-accent)]`}
            >{`gastar muito`}</span>
            {` com materiais para começar?`}
          </h1>
          <p
            className={`mt-3 text-center font-[var(--font-quiz-body)] text-[13.5px] font-semibold leading-[1.5] text-[var(--quiz-text)]`}
          >{`Não. Você pode começar com poucos materiais e montar seu kit aos poucos.`}</p>
          <div
            className={`mt-6 rounded-[24px] bg-[var(--quiz-border)]/60 p-2.5`}
          >
            <div
              className={`overflow-hidden rounded-[18px] bg-white shadow-[0_10px_28px_-16px_rgba(91,67,50,0.35)]`}
            >
              <img
                src={materialsImage.url}
                alt={`Kit inicial de bordado chinês: bastidor, linhas, agulhas, tesoura, caneta, tecido, moldes florais e passador de linha`}
                width={720}
                height={585}
                loading={`eager`}
                decoding={`async`}
                fetchPriority={`high`}
                className={`h-auto w-full bg-white p-3`}
              />
              <div
                className={`border-t border-black/5 px-5 pb-5 pt-4`}
                style={{
                  fontFamily: `Arial, Helvetica, sans-serif`,
                }}
              >
                <p
                  className={`text-[15.5px] leading-[1.35] text-black/85`}
                >{`Kit Inicial de Bordado Chinês para Iniciantes`}</p>
                <p
                  className={`mt-3 text-[12.5px] text-black/45 line-through`}
                >{`R$ 79,90`}</p>
                <div className={`mt-1 flex items-center gap-2`}>
                  <span className={`text-[22px] text-black/85`}>
                    {`R$ 34,`}
                    <sup className={`text-[12px]`}>{`90`}</sup>
                  </span>
                  <span
                    className={`rounded bg-[var(--quiz-success)] px-2 py-0.5 text-[13px] font-bold text-[var(--quiz-success-foreground)]`}
                  >{`56% OFF`}</span>
                </div>
                <p
                  className={`mt-3 inline-block rounded bg-[var(--quiz-blue-soft,#dbe8ff)] px-2 py-1 text-[12.5px] text-[var(--quiz-blue,#2f6fd6)]`}
                >{`Frete disponível para todo Brasil`}</p>
              </div>
            </div>
          </div>
          <p
            className={`mt-6 text-center font-[var(--font-quiz-body)] text-[12.5px] leading-[1.65] text-[var(--quiz-muted)]`}
          >{`Para fazer suas primeiras peças, você precisará basicamente de tecido, linhas, agulhas, um bastidor e alguns moldes. Dentro do treinamento você encontra orientações completas sobre quais materiais comprar, como economizar e quais itens realmente são necessários para começar.`}</p>
          <p
            className={`mt-4 text-center font-[var(--font-quiz-body)] text-[12.5px] leading-[1.65] text-[var(--quiz-muted)]`}
          >{`Você não precisa comprar tudo de uma vez. Comece com o essencial e evolua conforme desenvolve suas habilidades e cria suas primeiras peças.`}</p>
          <Link
            to={`/quiz/plano`}
            onClick={() => {
              try {
                trackEvent(`quiz_materiais_continued`);
              } catch {}
            }}
            className={`mt-7 flex w-full items-center justify-center rounded-full bg-[var(--quiz-accent)] px-6 py-4 font-[var(--font-quiz-body)] text-[13.5px] font-bold tracking-[0.08em] text-white shadow-[0_14px_30px_-10px_rgba(199,106,52,0.5)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]`}
          >{`CONTINUAR MEU PLANO`}</Link>
        </div>
      </main>
    )
  );
}
export { Materials as component };
