import React from "react";
import { Link as RouterLink } from "react-router-dom";
export { questions } from "../data/questions.js";
export { beginnerImage } from "../data/shared.js";

// Attribution stays in this browser. No credentials or analytics from the reference site.
const attributionKey = "bordado_attribution";
const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
  "xcod",
  "fbclid",
  "gclid",
  "angulo",
];
function readStored(key, fallback) {
  try {
    return JSON.parse(sessionStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function store(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Private browsing may disable storage. */
  }
}
export function initializeAttribution(defaultAngle = "neutro") {
  const saved = readStored(attributionKey, {});
  const search = new URLSearchParams(window.location.search);
  for (const field of attributionFields) {
    if (search.get(field)) saved[field] = search.get(field);
  }
  saved.angulo ||= defaultAngle;
  store(attributionKey, saved);
}
export function checkoutUrl(destination) {
  const url = new URL(destination, window.location.origin);
  const attribution = readStored(attributionKey, {});
  for (const field of attributionFields) {
    if (attribution[field]) url.searchParams.set(field, attribution[field]);
  }
  url.searchParams.set("angulo", attribution.angulo || "neutro");
  return url.href;
}
export function saveAnswers(answers) {
  store("funil_quiz", answers);
}
export function setAnalyticsProperty(name, value) {
  store("bordado_properties", {
    ...readStored("bordado_properties", {}),
    [name]: value,
  });
}
export function trackEvent(name, data = {}) {
  const events = readStored("bordado_events", []);
  store("bordado_events", [
    ...events.slice(-99),
    { name, data, at: new Date().toISOString() },
  ]);
}
export function Link({ preload, children, ...props }) {
  return <RouterLink {...props}>{children}</RouterLink>;
}
const preloaders = {
  "/quiz": () => import("../pages/Quiz.jsx"),
  "/quiz/materiais": () => import("../pages/Materials.jsx"),
  "/quiz/plano": () => import("../pages/Plan.jsx"),
};
const preloadRouter = {
  preloadRoute: ({ to }) => preloaders[to]?.() ?? Promise.resolve(),
};
export function usePreloadRouter() {
  return preloadRouter;
}
export function lazyModule(factory) {
  return factory();
}
