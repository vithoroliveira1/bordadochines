import React from "react";
import {
  usePreloadRouter,
  initializeAttribution,
  trackEvent,
  saveAnswers,
  Link,
  setAnalyticsProperty,
  beginnerImage,
  questions,
} from "../lib/runtime.jsx";
import { ArrowLeft } from "lucide-react";
import { materialsImage } from "../data/shared.js";
var embroideryImage = `/images/bordado-chines-etapa-BU9vsp--.webp`,
  experienceLevels = {
    "Já faço algumas peças, mas quero melhorar minhas técnicas": `avancado`,
    "Eu sei fazer algumas peças simples, mas quero aprender mais": `intermediario`,
    "Nunca fiz, mas quero começar": `iniciante`,
  },
  trainingHistory = {
    "Nunca fiz nenhum treinamento, esse será o primeiro.": `primeiro_treinamento`,
    "Já fiz outro treinamento": `ja_fez_um`,
    "Já fiz vários treinamentos": `ja_fez_varios`,
  },
  availableTime = {
    "30 minutos - 1 hora": `pouco_tempo`,
    "2 - 4 horas": `tempo_moderado`,
    "Tenho bastante tempo livre!": `muito_tempo`,
  };
function HighlightedTitle(e) {
  if (!e.destaque) return <span>{e.titulo}</span>;
  let t = e.titulo.split(e.destaque);
  return (
    <span>
      {t.map((n, r) => (
        <span key={r}>
          {n}
          {r < t.length - 1 && (
            <span className={`text-[var(--quiz-accent)]`}>{e.destaque}</span>
          )}
        </span>
      ))}
    </span>
  );
}
function Quiz() {
  let router = usePreloadRouter(),
    [step, setStep] = React.useState(0),
    [answers, setAnswers] = React.useState({}),
    [selected, setSelected] = React.useState(null);
  (React.useEffect(() => {
    try {
      let e = Number(window.sessionStorage.getItem(`quiz_etapa`) ?? `0`),
        t = window.sessionStorage.getItem(`quiz_respostas_tmp`);
      (e > 0 && e <= questions.length && setStep(e),
        t && setAnswers(JSON.parse(t)));
    } catch {}
  }, []),
    React.useEffect(() => {
      try {
        (window.sessionStorage.setItem(`quiz_etapa`, String(step)),
          window.sessionStorage.setItem(
            `quiz_respostas_tmp`,
            JSON.stringify(answers),
          ));
      } catch {}
    }, [step, answers]),
    React.useEffect(() => {
      try {
        (initializeAttribution(`neutro`),
          setAnalyticsProperty(`quiz_started`, `true`),
          trackEvent(`quiz_started`));
      } catch {}
      (router
        .preloadRoute({
          to: `/quiz/materiais`,
        })
        .catch(() => {}),
        router
          .preloadRoute({
            to: `/quiz/plano`,
          })
          .catch(() => {}));
      let t = window.setTimeout(() => {
        for (let e of [
          embroideryImage,
          materialsImage.url,
          beginnerImage.url,
        ]) {
          let t = new Image();
          ((t.decoding = `async`), (t.src = e));
        }
      }, 600);
      return () => window.clearTimeout(t);
    }, []));
  let ignoreClicksUntil = React.useRef(0);
  React.useEffect(() => {
    ((ignoreClicksUntil.current = Date.now() + 450),
      window.scrollY > 0 &&
        window.scrollTo({
          top: 0,
          behavior: `auto`,
        }));
  }, [step]);
  let total = questions.length,
    completed = step >= total,
    question = questions[Math.min(step, total - 1)],
    progress = completed ? 88 : Math.min((step + 1) * 12, 100);
  function answerQuestion(e) {
    let r = e;
    question.id === `nivel_bordado`
      ? (r = experienceLevels[e] ?? e)
      : question.id === `historico_treinamentos`
        ? (r = trainingHistory[e] ?? e)
        : question.id === `tempo_disponivel` && (r = availableTime[e] ?? e);
    let i = {
      ...answers,
      [question.id]: r,
    };
    setAnswers(i);
    try {
      saveAnswers(i);
    } catch {}
    let s = step + 1;
    try {
      (setAnalyticsProperty(`quiz_question_${s}`, e),
        trackEvent(`quiz_question_${s}_answered`, {
          resposta: e,
        }),
        s === total &&
          (trackEvent(`quiz_completed`),
          setAnalyticsProperty(`quiz_completed`, `true`)));
    } catch {}
    (setStep(Math.min(s, total)), setSelected(null));
  }
  function selectAnswer(e) {
    selected ||
      Date.now() < ignoreClicksUntil.current ||
      (setSelected(e), window.setTimeout(() => answerQuestion(e), 180));
  }
  return (
    <main
      className={`min-h-screen overflow-x-hidden bg-[var(--quiz-bg)] px-5 py-6`}
    >
      <div className={`mx-auto w-full max-w-[430px]`}>
        <div className={`relative`}>
          {step > 0 && (
            <button
              type={`button`}
              aria-label={`Voltar`}
              onClick={() => {
                (setSelected(null), setStep(Math.max(0, step - 1)));
              }}
              className={`absolute left-0 top-6 z-10 text-[var(--quiz-muted)] transition-colors hover:text-[var(--quiz-text)]`}
            >
              <ArrowLeft size={22} strokeWidth={2} />
            </button>
          )}
          <div
            className={`mx-auto mt-6 h-[8px] w-[80%] overflow-hidden rounded-full bg-[var(--quiz-progress-bg)]`}
          >
            <div
              className={`h-full rounded-full bg-[var(--quiz-accent)] transition-all duration-300`}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
        {completed ? (
          <div className={`animate-fade-in`} key={`info`}>
            <h1
              className={`mt-8 text-center font-[var(--font-quiz-display)] text-[19px] font-semibold leading-[1.3] tracking-tight text-[var(--quiz-text)] sm:text-[22px]`}
            >
              {`Mas precisa ter experiência com`}
              {` `}
              <span
                className={`text-[var(--quiz-accent)]`}
              >{`artesanato`}</span>
              {`?`}
            </h1>
            <img
              src={embroideryImage}
              alt={`Mãos bordando uma flor de bordado chinês em um bastidor`}
              width={1024}
              height={1024}
              loading={`eager`}
              decoding={`async`}
              className={`mt-6 aspect-square w-full rounded-[24px] object-cover`}
            />
            <div className={`mt-5 flex justify-center`}>
              <span
                className={`rounded-full bg-[var(--quiz-accent)] px-5 py-1.5 font-[var(--font-quiz-display)] text-[13.5px] font-bold text-white`}
              >{`Não`}</span>
            </div>
            <p
              className={`mt-4 px-2 text-center font-[var(--font-quiz-body)] text-[13px] leading-[1.55] text-[var(--quiz-muted)]`}
            >{`O método que eu ensino com moldes é simples e rápido. Você vai bordar suas primeiras peças na primeira semana.`}</p>
            <Link
              to={`/quiz/materiais`}
              onClick={(e) => {
                if (Date.now() < ignoreClicksUntil.current) {
                  e.preventDefault();
                  return;
                }
                try {
                  trackEvent(`quiz_artesanato_continued`);
                } catch {}
              }}
              className={`mt-7 flex w-full items-center justify-center rounded-full bg-[var(--quiz-accent)] px-6 py-4 font-[var(--font-quiz-body)] text-[13.5px] font-bold tracking-[0.08em] text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]`}
            >{`CONTINUAR`}</Link>
          </div>
        ) : (
          <div className={`animate-fade-in`} key={`pergunta-${step}`}>
            <h1
              className={`mt-10 text-center font-[var(--font-quiz-display)] text-[21px] font-semibold leading-[1.3] tracking-tight text-[var(--quiz-text)] sm:text-[24px]`}
            >
              {HighlightedTitle(question)}
            </h1>
            <div className={`mt-10 flex flex-col gap-[18px]`}>
              {question.opcoes.map((e) => {
                let t = selected === e.texto;
                return (
                  <button
                    type={`button`}
                    disabled={!!selected}
                    onClick={() => selectAnswer(e.texto)}
                    className={`
                  group mx-auto flex min-h-[64px] w-[90%] items-center gap-3.5 rounded-[18px] border-2 px-4 py-2.5
                  transition-all duration-200 focus:outline-none
                  ${t ? `scale-[0.98] border-[var(--quiz-accent)] bg-[var(--quiz-card)] shadow-[0_8px_24px_-8px_rgba(91,67,50,0.14)]` : `border-[var(--quiz-border)] bg-[var(--quiz-card)] hover:shadow-[0_8px_24px_-8px_rgba(91,67,50,0.12)]`}
                `}
                    style={{
                      cursor: selected ? `default` : `pointer`,
                    }}
                    key={e.texto}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none`}
                      aria-hidden={`true`}
                    >
                      {e.emoji}
                    </span>
                    <span
                      className={`min-w-0 flex-1 text-left font-[var(--font-quiz-body)] text-[14.5px] font-medium leading-[1.35] text-[var(--quiz-text)]`}
                    >
                      {e.texto}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--quiz-chevron-border)] bg-transparent font-[var(--font-quiz-body)] text-[17px] font-semibold text-[var(--quiz-accent)]`}
                    >{`›`}</span>
                  </button>
                );
              })}
            </div>
            <p
              className={`mt-10 px-4 text-center font-[var(--font-quiz-body)] text-[13px] font-medium text-[var(--quiz-muted)]`}
            >{`Personalizamos o seu pacote de acordo com suas respostas.`}</p>
          </div>
        )}
      </div>
    </main>
  );
}
export { Quiz as component };
