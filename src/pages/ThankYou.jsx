import React from "react";
import {
  initializeAttribution,
  setAnalyticsProperty,
  trackEvent,
} from "../lib/runtime.jsx";
import { createLucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Lock } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Sparkles } from "lucide-react";
var ViewD = createLucideIcon(`heart-handshake`, [
    [
      `path`,
      {
        d: `M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,
        key: `17lmqv`,
      },
    ],
  ]),
  sakuraImage = `/images/obrigado-sakura-C3yUUVZ2.webp`,
  nextSteps = [
    {
      n: `1️⃣`,
      titulo: `Verifique seu e-mail`,
      texto: `Você receberá os dados de acesso enviados para o e-mail utilizado na compra.`,
    },
    {
      n: `2️⃣`,
      titulo: `Acesse seu material`,
      texto: `Clique no link enviado para começar imediatamente.`,
    },
    {
      n: `3️⃣`,
      titulo: `Escolha seu primeiro projeto`,
      texto: `Separe seus materiais e siga o passo a passo do guia.`,
    },
    {
      n: `4️⃣`,
      titulo: `Aproveite a experiência`,
      texto: `Aprenda no seu ritmo e desenvolva suas habilidades gradualmente.`,
    },
  ];
function Petals() {
  let e = React.useMemo(
    () =>
      Array.from(
        {
          length: 14,
        },
        (e, t) => ({
          left: (t * 7.3 + 3) % 97,
          delay: (t * 1.37) % 12,
          duration: 11 + ((t * 3) % 9),
          size: 10 + ((t * 5) % 12),
          opacity: 0.35 + (t % 4) * 0.12,
        }),
      ),
    [],
  );
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden`}
      aria-hidden={`true`}
    >
      {e.map((e, t) => (
        <span
          className={`absolute -top-8 animate-[sakura-fall_linear_infinite]`}
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            opacity: e.opacity,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            background: `var(--pink)`,
            borderRadius: `60% 0 60% 0`,
          }}
          key={t}
        />
      ))}
    </div>
  );
}
function Reveal({ children: e, delay: t = 0, className: n = `` }) {
  let [r, i] = React.useState(!1);
  return (
    React.useEffect(() => {
      let e = setTimeout(() => i(!0), t);
      return () => clearTimeout(e);
    }, [t]),
    (
      <div
        className={`transition-all duration-400 ease-out ${r ? `translate-y-0 opacity-100` : `translate-y-6 opacity-0`} ${n}`}
      >
        {e}
      </div>
    )
  );
}
function ThankYou() {
  return (
    React.useEffect(() => {
      (initializeAttribution(`neutro`),
        setAnalyticsProperty(`compra_confirmada`, `true`),
        trackEvent(`Purchase`, {
          content_name: `Guia Bordado Chinês`,
          value: 37.9,
          currency: `BRL`,
        }));
    }, []),
    (
      <main
        className={`relative min-h-screen overflow-hidden bg-background pb-16`}
      >
        <style>{`
        @keyframes sakura-fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(420deg); }
        }
        @keyframes success-pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes soft-glow {
          0%,100% { box-shadow: 0 10px 24px -14px color-mix(in oklab, var(--green) 60%, transparent); }
          50% { box-shadow: 0 16px 40px -10px color-mix(in oklab, var(--green) 75%, transparent); }
        }
      `}</style>
        <Petals />
        <div
          className={`relative z-10 mx-auto w-full max-w-[440px] px-5 pt-10 sm:max-w-[520px]`}
        >
          <Reveal>
            <div className={`flex flex-col items-center text-center`}>
              <div
                className={`grid h-20 w-20 place-items-center rounded-full bg-mint text-4xl`}
                style={{
                  animation: `success-pop 0.7s ease-out both`,
                }}
              >
                <Check className={`h-10 w-10 text-green`} strokeWidth={3} />
              </div>
              <span
                className={`mt-4 inline-flex items-center gap-1 rounded-full bg-pink px-4 py-1.5 text-[11px] font-extrabold tracking-wide text-pink-foreground`}
              >{`🎉 COMPRA CONFIRMADA`}</span>
              <h1
                className={`mt-4 font-display text-[1.6rem] leading-tight font-black text-ink sm:text-[2rem]`}
              >{`Pagamento confirmado com sucesso!`}</h1>
              <p
                className={`mt-2 text-[14px] font-semibold text-trust sm:text-[15px]`}
              >
                {`Bem-vinda ao `}
                <span
                  className={`text-pink`}
                >{`Vivendo de Bordado Chinês`}</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div
              className={`mt-7 rounded-3xl bg-blush px-5 py-6 text-center shadow-blush`}
            >
              <p
                className={`font-display text-[1.05rem] font-bold text-ink`}
              >{`Sua jornada no Bordado Chinês começa agora.`}</p>
              <p
                className={`mt-3 text-[13.5px] leading-relaxed text-ink/80`}
              >{`Você acaba de dar um passo incrível para aprender uma arte milenar que encanta gerações há séculos.`}</p>
              <p
                className={`mt-3 text-[13.5px] leading-relaxed text-ink/80`}
              >{`Em breve você descobrirá como transformar linhas, tecido e criatividade em peças únicas, mesmo que esteja começando do zero.`}</p>
              <p
                className={`mt-3 text-[13.5px] leading-relaxed text-ink/80`}
              >{`Reserve alguns minutos para você, aproveite cada aprendizado e permita-se viver essa experiência com calma e prazer.`}</p>
              <p
                className={`mt-3 text-[13.5px] leading-relaxed text-ink/80`}
              >{`Estamos muito felizes por ter você conosco.`}</p>
              <p
                className={`mt-4 text-[14px] font-extrabold text-pink`}
              >{`🌸 Seja muito bem-vinda!`}</p>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <div className={`mt-7 overflow-hidden rounded-3xl shadow-pink`}>
              <img
                src={sakuraImage}
                alt={`Bastidor de bordado chinês sashiko em tecido azul marinho com flores de cerejeira`}
                width={1024}
                height={768}
                loading={`lazy`}
                decoding={`async`}
                className={`h-auto w-full object-cover`}
              />
            </div>
          </Reveal>
          <Reveal delay={170}>
            <section
              className={`mt-8 rounded-3xl border border-trust/20 bg-card px-5 py-6 shadow-blush`}
            >
              <h2
                className={`text-center font-display text-[1.25rem] font-black text-ink`}
              >{`O que acontece agora?`}</h2>
              <ul className={`mt-5 space-y-4`}>
                {nextSteps.map((e) => (
                  <li className={`flex gap-3`} key={e.titulo}>
                    <span className={`mt-0.5 shrink-0 text-[18px]`}>{e.n}</span>
                    <div className={`min-w-0`}>
                      <p className={`text-[13.5px] font-extrabold text-ink`}>
                        {e.titulo}
                      </p>
                      <p
                        className={`mt-1 text-[12.5px] leading-relaxed text-ink/70`}
                      >
                        {e.texto}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal delay={200}>
            <section
              className={`mt-6 rounded-3xl bg-mint/50 px-5 py-6 text-center`}
            >
              <div className={`flex items-center justify-center gap-2`}>
                <ShieldCheck className={`h-5 w-5 shrink-0 text-green`} />
                <h2
                  className={`font-display text-[1.15rem] font-black text-ink`}
                >{`Sua compra está protegida`}</h2>
              </div>
              <p
                className={`mt-3 text-[12.5px] leading-relaxed text-ink/75`}
              >{`Você possui garantia de 7 dias. Se por qualquer motivo o material não atender às suas expectativas, poderá solicitar o reembolso dentro do prazo estabelecido.`}</p>
              <div className={`mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3`}>
                {[
                  {
                    icon: Lock,
                    label: `Compra segura`,
                  },
                  {
                    icon: Sparkles,
                    label: `Acesso imediato`,
                  },
                  {
                    icon: ShieldCheck,
                    label: `Garantia de 7 dias`,
                  },
                ].map(({ icon: ViewE, label: t }) => (
                  <div
                    className={`flex items-center justify-center gap-2 rounded-2xl border border-trust/25 bg-card px-3 py-2.5 transition-transform hover:scale-[1.03]`}
                    key={t}
                  >
                    <ViewE className={`h-4 w-4 shrink-0 text-trust`} />
                    <span className={`text-[12px] font-bold text-ink`}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
          <Reveal delay={230}>
            <section
              className={`mt-6 rounded-3xl bg-blush px-5 py-6 text-center shadow-blush`}
            >
              <ViewD className={`mx-auto h-6 w-6 text-pink`} />
              <h2
                className={`mt-2 font-display text-[1.15rem] leading-snug font-black text-ink`}
              >{`Sua primeira peça começa com o primeiro ponto`}</h2>
              <p
                className={`mt-3 text-[12.5px] leading-relaxed text-ink/75`}
              >{`Muitas alunas chegaram aqui acreditando que não tinham habilidade para bordar.`}</p>
              <p
                className={`mt-2 text-[12.5px] leading-relaxed text-ink/75`}
              >{`Hoje criam peças lindas para decorar a casa, presentear pessoas especiais e aproveitar momentos de tranquilidade através do artesanato.`}</p>
              <p
                className={`mt-3 text-[13px] font-extrabold text-pink`}
              >{`Agora é sua vez.`}</p>
            </section>
          </Reveal>
        </div>
      </main>
    )
  );
}
export { ThankYou as component };
