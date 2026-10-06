import React, { Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { component as Home } from "./pages/Home.jsx";
import { initializeAttribution } from "./lib/runtime.jsx";
import "./styles/fonts.css";
import "./styles/reference.css";
import "./styles/palette.css";

const page = (loader) =>
  lazy(() => loader().then(({ component }) => ({ default: component })));
const Quiz = page(() => import("./pages/Quiz.jsx"));
const Materials = page(() => import("./pages/Materials.jsx"));
const Plan = page(() => import("./pages/Plan.jsx"));
const ThankYou = page(() => import("./pages/ThankYou.jsx"));
const titles = {
  "/": "Vivendo de Bordado Chinês | Guia Ilustrado Impresso",
  "/quiz": "Seu diagnóstico | Bordado Chinês",
  "/quiz/materiais": "Materiais para começar | Bordado Chinês",
  "/quiz/plano": "Seu plano está pronto | Bordado Chinês",
  "/obrigado": "Compra confirmada | Bordado Chinês",
};
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    initializeAttribution();
    document.title =
      titles[pathname] || "Página não encontrada | Bordado Chinês";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <main className="loading" aria-busy="true">
          Carregando…
        </main>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/materiais" element={<Materials />} />
        <Route path="/quiz/plano" element={<Plan />} />
        <Route path="/obrigado" element={<ThankYou />} />
        <Route
          path="*"
          element={
            <main className="loading">
              <h1>Página não encontrada</h1>
              <a href="/">Voltar ao início</a>
            </main>
          }
        />
      </Routes>
    </Suspense>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
