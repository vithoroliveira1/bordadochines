import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
function classes(...e) {
  return twMerge(clsx(e));
}
import {
  initializeAttribution,
  trackEvent,
  Link,
  setAnalyticsProperty,
} from "../lib/runtime.jsx";
import { createLucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  mariaPhoto,
  Star,
  rosaPhoto,
} from "../data/shared.js";
import { Sparkles } from "lucide-react";
import { clsx } from "clsx";
var ArrowRightIcon = createLucideIcon(`arrow-right`, [
    [
      `path`,
      {
        d: `M5 12h14`,
        key: `1ays0h`,
      },
    ],
    [
      `path`,
      {
        d: `m12 5 7 7-7 7`,
        key: `xquz4c`,
      },
    ],
  ]),
  heroImage = `/images/hero-transformacao-bordado-Whm0GjfW.webp`,
  helenaPhoto = `/images/aluna-helena-C-xsMJJ3.webp`,
  sandraPhoto = `/images/aluna-sandra-regina-DXaUr2rr.webp`,
  cushionImage = `/images/peca-almofada-sashiko-DVGBsSag.webp`,
  pouchImage = `/images/peca-bolsinha-sashiko-BfsosfOl.webp`,
  floralImage = `/images/peca-floral-1-CMxZq39Y.webp`,
  veraPhoto = `/images/depoimento-vera-lucia-BTRdlY5-.webp`,
  beforeImage = `/images/comparativo-bordado-comum-DJ2ha9fz.webp`,
  afterImage = `/images/comparativo-bordado-avancado-D_VjeSgl.webp`;
var buttonVariants = cva(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
          secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-md px-3 text-xs`,
          lg: `h-10 rounded-md px-8`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: {
        variant: `default`,
        size: `default`,
      },
    },
  ),
  Button = React.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
      React.createElement(r ? Slot : `button`, {
        className: classes(
          buttonVariants({
            variant: t,
            size: n,
            className: e,
          }),
        ),
        ref: a,
        ...i,
      }),
  );
Button.displayName = `Button`;
var benefits = [
    `Gratuito`,
    `Menos de 1 minuto`,
    `Resultado imediato`,
    `Para iniciantes e artesãs experientes`,
  ],
  frustrations = [
    `Passa horas produzindo e ganha pouco`,
    `Clientes reclamam do preço`,
    `Tem dificuldade para valorizar suas peças`,
    `Vê outras artesãs cobrando mais caro`,
    `Sente que seu trabalho merece mais reconhecimento`,
    `Quer transformar o bordado em renda consistente`,
    `Gostaria de aprender algo novo para gerar renda`,
    `Tem medo de começar e não conseguir fazer peças bonitas`,
  ],
  testimonialSnippets = [
    `Hoje consigo enxergar meus trabalhos de outra forma.`,
    `Comecei sem experiência e fiquei surpresa com o resultado.`,
    `Finalmente entendi o que valorizava minhas peças.`,
  ],
  audience = [
    `Quem nunca bordou e quer começar`,
    `Quem faz bordados por hobby`,
    `Quem quer transformar o artesanato em renda extra`,
    `Quem já vende peças e quer aumentar o valor percebido`,
    `Quem deseja criar trabalhos mais sofisticados`,
  ],
  participantCount = `+2.300`,
  beforeFeatures = [
    `Pontos irregulares`,
    `Acabamento simples`,
    `Vendido como lembrancinha`,
    `Cliente pede desconto`,
  ],
  afterFeatures = [
    `Flores com relevo e brilho`,
    `Acabamento profissional`,
    `Peça de presente e decoração`,
    `Cliente paga pelo valor`,
  ],
  testimonials = [
    {
      nome: `Simone Ribeiro`,
      cidade: `Gramado/RS`,
      texto: `Aprendi mesmo sem ter experiência. O guia mostra exatamente o que fazer e hoje já vendo algumas peças para complementar minha renda.`,
      foto: floralImage,
      alt: `Peça floral bordada à mão por Simone Ribeiro`,
    },
    {
      nome: `Márcia Oliveira`,
      cidade: `Campinas/SP`,
      texto: `Eu procurava uma atividade para ocupar meu tempo e acabei descobrindo uma forma agradável de ganhar dinheiro em casa.`,
      foto: cushionImage,
      alt: `Almofada artesanal bordada por Márcia Oliveira`,
    },
    {
      nome: `Helena Martins`,
      cidade: `Curitiba/PR`,
      texto: `Os moldes em tamanho real facilitaram muito. Foi só imprimir e começar.`,
      foto: pouchImage,
      alt: `Bolsinha artesanal bordada por Helena Martins`,
    },
    {
      nome: `Vera Lúcia`,
      cidade: `Belo Horizonte/MG`,
      texto: `Não imaginava que conseguiria produzir peças tão bonitas. Recebo elogios e até encomendas.`,
      foto: veraPhoto,
      alt: `Bastidor com bordado chinês de peônias feito por Vera Lúcia`,
    },
  ];
function QuizCTA({ children: e, origem: t }) {
  return (
    <Button
      asChild={!0}
      size={`lg`}
      className={`h-auto min-h-14 w-full rounded-full bg-primary px-5 py-4 text-center text-[15px] font-extrabold leading-tight text-primary-foreground ring-2 ring-primary/30 shadow-pink animate-pulse-soft transition duration-200 hover:scale-[1.015] hover:bg-primary/95 active:scale-[0.98]`}
    >
      <Link
        to={`/quiz`}
        preload={`viewport`}
        suppressHydrationWarning={!0}
        onClick={() => {
          try {
            (window.sessionStorage.removeItem(`quiz_etapa`),
              window.sessionStorage.removeItem(`quiz_respostas_tmp`));
          } catch {}
          try {
            (setAnalyticsProperty(`cta_quiz_click`, t),
              trackEvent(`QuizCtaClicado`, {
                origem: t,
              }));
          } catch {}
        }}
      >
        {e}
      </Link>
    </Button>
  );
}
function Testimonials() {
  let e = React.useRef(null),
    [t, n] = React.useState(0),
    r = (t) => {
      let r = e.current;
      if (!r) return;
      let i = r.querySelector(`[data-depoimento]`);
      if (!i) return;
      let a = Math.max(0, Math.min(testimonials.length - 1, t));
      (r.scrollTo({
        left: a * (i.offsetWidth + 12),
        behavior: `smooth`,
      }),
        n(a));
    };
  return (
    <section className={`py-12`}>
      <p
        className={`text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground`}
      >{`Histórias reais`}</p>
      <h2
        className={`mt-2 text-center font-display text-2xl font-bold leading-tight text-foreground`}
      >{`Quem já começou está amando`}</h2>
      <div
        ref={e}
        onScroll={() => {
          let t = e.current,
            r = t?.querySelector(`[data-depoimento]`);
          !t || !r || n(Math.round(t.scrollLeft / (r.offsetWidth + 12)));
        }}
        className={`-mx-5 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {testimonials.map((e) => (
          <article
            data-depoimento={!0}
            className={`w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-card shadow-blush`}
            key={e.nome}
          >
            <img
              src={e.foto}
              alt={e.alt}
              width={800}
              height={600}
              loading={`lazy`}
              decoding={`async`}
              className={`aspect-[4/3] w-full object-cover`}
            />
            <div className={`p-5`}>
              <div
                className={`flex gap-0.5 text-star`}
                aria-label={`5 de 5 estrelas`}
              >
                {[0, 1, 2, 3, 4].map((e) => (
                  <Star
                    size={13}
                    fill={`currentColor`}
                    strokeWidth={1}
                    key={e}
                  />
                ))}
              </div>
              <h3
                className={`mt-3 font-display text-[17px] font-bold text-foreground`}
              >
                {e.nome}
              </h3>
              <p
                className={`mt-0.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground`}
              >
                {e.cidade}
              </p>
              <p
                className={`mt-4 text-[15px] leading-[1.65] text-foreground/75`}
              >
                {`“`}
                {e.texto}
                {`”`}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className={`mt-3 flex items-center justify-center gap-4`}>
        <Button
          type={`button`}
          variant={`outline`}
          size={`icon`}
          aria-label={`Depoimento anterior`}
          onClick={() => r(t - 1)}
          className={`rounded-full border-border bg-card text-foreground`}
        >
          <ChevronLeft />
        </Button>
        <div className={`flex gap-1.5`} aria-hidden={`true`}>
          {testimonials.map((e, n) => (
            <span
              className={`h-1.5 rounded-full transition-all ${n === t ? `w-5 bg-accent` : `w-1.5 bg-border`}`}
              key={e.nome}
            />
          ))}
        </div>
        <Button
          type={`button`}
          variant={`outline`}
          size={`icon`}
          aria-label={`Próximo depoimento`}
          onClick={() => r(t + 1)}
          className={`rounded-full border-border bg-card text-foreground`}
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}
function Home() {
  return (
    React.useEffect(() => {
      initializeAttribution(`neutro`);
    }, []),
    (
      <main className={`min-h-screen bg-background px-4 pb-28 sm:px-6`}>
        <div
          className={`mx-auto w-full max-w-[440px] overflow-hidden bg-background`}
        >
          <section className={`pb-6 pt-7 text-center`}>
            <p
              className={`inline-flex rounded-full bg-accent/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-accent`}
            >{`✨ Quiz gratuito • Resultado imediato • Menos de 1 minuto`}</p>
            <h1
              className={`mx-auto mt-4 max-w-[400px] font-display text-[1.25rem] font-bold leading-[1.25] text-foreground sm:text-[1.45rem]`}
            >
              {`Descubra por que alguns bordados parecem `}
              <span className={`text-accent`}>{`profissionais`}</span>
              {` e conseguem ser muito mais valorizados pelos clientes.`}
            </h1>
            <p
              className={`mx-auto mt-3 max-w-[380px] text-[14.5px] leading-[1.55] text-foreground/75`}
            >{`Começando do zero ou bordando há anos, este diagnóstico rápido revela os detalhes que aumentam o valor das peças e ajudam a transformar habilidade em renda.`}</p>
            <ul
              className={`mx-auto mt-5 grid max-w-[380px] grid-cols-2 gap-2 text-left`}
            >
              {benefits.map((e) => (
                <li
                  className={`flex items-start gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-[12.5px] font-semibold leading-snug text-foreground`}
                  key={e}
                >
                  <Check
                    size={15}
                    strokeWidth={3}
                    className={`mt-0.5 shrink-0 text-accent`}
                  />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-5`}>
              <QuizCTA origem={`hero`}>{`QUERO DESCOBRIR MEU PERFIL`}</QuizCTA>
            </div>
            <p
              className={`mt-2.5 text-[13px] font-semibold text-muted-foreground`}
            >
              <span className={`text-accent`}>{participantCount}</span>
              {` artesãs já fizeram o diagnóstico`}
            </p>
            <div
              className={`mt-6 rounded-2xl border border-border bg-card px-4 py-5 shadow-blush`}
            >
              <div className={`flex items-center justify-center gap-3`}>
                <div className={`flex -space-x-2.5`}>
                  {[helenaPhoto, mariaPhoto, rosaPhoto, sandraPhoto].map(
                    (e, t) => (
                      <img
                        src={e}
                        alt={``}
                        width={40}
                        height={40}
                        loading={`lazy`}
                        decoding={`async`}
                        className={`h-9 w-9 rounded-full border-2 border-card object-cover`}
                        key={t}
                      />
                    ),
                  )}
                </div>
                <div
                  className={`flex gap-0.5 text-star`}
                  aria-label={`5 de 5 estrelas`}
                >
                  {[0, 1, 2, 3, 4].map((e) => (
                    <Star
                      size={14}
                      fill={`currentColor`}
                      strokeWidth={1}
                      key={e}
                    />
                  ))}
                </div>
              </div>
              <ul className={`mt-3 space-y-1.5`}>
                {testimonialSnippets.map((e) => (
                  <li
                    className={`text-[13.5px] italic leading-snug text-foreground/80`}
                    key={e}
                  >
                    {`“`}
                    {e}
                    {`”`}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`mt-6 overflow-hidden rounded-2xl bg-muted shadow-blush`}
            >
              <img
                src={heroImage}
                alt={`Bordado simples ao lado de um bordado chinês premium com peônias, almofada e quadro finalizados`}
                width={800}
                height={800}
                fetchPriority={`high`}
                decoding={`async`}
                className={`aspect-square h-auto w-full object-cover`}
              />
            </div>
          </section>
          <section className={`py-8`}>
            <h2
              className={`text-center font-display text-2xl font-bold leading-tight text-foreground`}
            >{`Você se identifica com alguma destas situações?`}</h2>
            <div className={`mt-6 grid grid-cols-2 gap-3`}>
              {frustrations.map((e) => (
                <div
                  className={`rounded-2xl border border-border bg-card p-4 text-center text-[13.5px] font-semibold leading-snug text-foreground shadow-blush`}
                  key={e}
                >
                  <span
                    className={`mb-1.5 block text-accent`}
                    aria-hidden={`true`}
                  >{`✕`}</span>
                  {e}
                </div>
              ))}
            </div>
            <div className={`mt-6`}>
              <QuizCTA origem={`dor`}>{`QUERO DESCOBRIR MEU PERFIL`}</QuizCTA>
            </div>
          </section>
          <div
            className={`rounded-2xl bg-secondary px-5 py-5 text-center text-secondary-foreground`}
          >
            <p className={`font-display text-3xl font-bold`}>
              {participantCount}
            </p>
            <p
              className={`mt-1 text-[14px] font-semibold opacity-90`}
            >{`artesãs já descobriram seu perfil através do quiz`}</p>
          </div>
          <Testimonials />
          <div className={`pb-10`}>
            <QuizCTA origem={`prova_social`}>
              {`QUERO FAZER O QUIZ `}
              <ArrowRightIcon />
            </QuizCTA>
          </div>
          <section
            className={`rounded-2xl border-2 border-accent/40 bg-card px-5 py-8 text-center shadow-blush`}
          >
            <Sparkles className={`mx-auto text-accent`} size={26} />
            <h2
              className={`mt-3 font-display text-[1.5rem] font-bold leading-tight text-foreground`}
            >{`O detalhe que faz clientes enxergarem um bordado como comum ou profissional`}</h2>
            <p
              className={`mt-3 text-[15px] leading-[1.6] text-foreground/75`}
            >{`A maioria das pessoas nunca percebe esse detalhe. Mas ele influencia diretamente quanto uma peça parece valer aos olhos dos clientes.`}</p>
            <p
              className={`mt-2 text-[15px] font-semibold leading-[1.6] text-foreground`}
            >{`Descubra se você já domina esse aspecto ou se está deixando valor na mesa.`}</p>
            <div className={`mt-6`}>
              <QuizCTA origem={`curiosidade`}>{`FAZER O QUIZ AGORA`}</QuizCTA>
            </div>
          </section>
          <section className={`py-12`}>
            <h2
              className={`text-center font-display text-2xl font-bold leading-tight text-foreground`}
            >{`A diferença que o cliente enxerga`}</h2>
            <div className={`mt-6 space-y-4`}>
              {[
                {
                  t: `Peça comum`,
                  tag: `ANTES`,
                  img: beforeImage,
                  itens: beforeFeatures,
                  bom: !1,
                },
                {
                  t: `Peça com maior valor percebido`,
                  tag: `DEPOIS`,
                  img: afterImage,
                  itens: afterFeatures,
                  bom: !0,
                },
              ].map((e) => (
                <div
                  className={`overflow-hidden rounded-2xl border-2 bg-card ${e.bom ? `border-accent` : `border-border opacity-90`}`}
                  key={e.t}
                >
                  <img
                    src={e.img}
                    alt={e.t}
                    width={400}
                    height={400}
                    loading={`lazy`}
                    decoding={`async`}
                    className={`aspect-square w-full object-cover ${e.bom ? `` : `grayscale-[60%]`}`}
                  />
                  <div className={`p-4`}>
                    <p
                      className={`text-[11px] font-bold tracking-[0.16em] ${e.bom ? `text-accent` : `text-muted-foreground`}`}
                    >
                      {e.tag}
                    </p>
                    <p
                      className={`mt-0.5 font-display text-[16px] font-bold leading-tight ${e.bom ? `text-accent` : `text-muted-foreground`}`}
                    >
                      {e.t}
                    </p>
                    <ul className={`mt-2 space-y-1.5`}>
                      {e.itens.map((t) => (
                        <li
                          className={`flex gap-1.5 text-[12.5px] leading-snug text-foreground/80`}
                          key={t}
                        >
                          <span
                            aria-hidden={`true`}
                            className={
                              e.bom ? `text-accent` : `text-muted-foreground`
                            }
                          >
                            {e.bom ? `✓` : `✕`}
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p
              className={`mt-4 text-center text-[14px] italic leading-snug text-foreground/70`}
            >{`Pequenos detalhes podem mudar completamente a forma como os clientes enxergam seu trabalho.`}</p>
            <div className={`mt-5`}>
              <QuizCTA
                origem={`comparativo`}
              >{`QUERO DESCOBRIR AGORA`}</QuizCTA>
            </div>
          </section>
          <section className={`pb-12`}>
            <h2
              className={`text-center font-display text-2xl font-bold leading-tight text-foreground`}
            >{`Para quem é este diagnóstico?`}</h2>
            <ul className={`mt-6 space-y-2.5`}>
              {audience.map((e) => (
                <li
                  className={`flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-[14px] font-semibold text-foreground`}
                  key={e}
                >
                  <Check
                    size={17}
                    strokeWidth={3}
                    className={`shrink-0 text-accent`}
                  />
                  {e}
                </li>
              ))}
            </ul>
            <div className={`mt-6`}>
              <QuizCTA
                origem={`para_quem`}
              >{`QUERO DESCOBRIR MEU PERFIL`}</QuizCTA>
            </div>
          </section>
        </div>
      </main>
    )
  );
}
var HomePage = Home;
export { HomePage as component };
