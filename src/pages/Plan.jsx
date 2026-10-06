import { CHECKOUT_URL } from "../lib/config.js";
import React from "react";
import {
  initializeAttribution,
  trackEvent,
  lazyModule,
  Link,
  trackEvent as trackEventImported,
  checkoutUrl,
  beginnerImage,
} from "../lib/runtime.jsx";
import { createLucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Check } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  mariaPhoto,
  Star,
  rosaPhoto,
} from "../data/shared.js";
import { Lock } from "lucide-react";
import { ShieldCheck } from "lucide-react";
var b = createLucideIcon(`credit-card`, [
    [
      `rect`,
      {
        width: `20`,
        height: `14`,
        x: `2`,
        y: `5`,
        rx: `2`,
        key: `ynyp8z`,
      },
    ],
    [
      `line`,
      {
        x1: `2`,
        x2: `22`,
        y1: `10`,
        y2: `10`,
        key: `1b3vmo`,
      },
    ],
  ]),
  ViewX = createLucideIcon(`gift`, [
    [
      `path`,
      {
        d: `M12 7v14`,
        key: `1akyts`,
      },
    ],
    [
      `path`,
      {
        d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`,
        key: `1sqzm4`,
      },
    ],
    [
      `path`,
      {
        d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,
        key: `kc0143`,
      },
    ],
    [
      `rect`,
      {
        x: `3`,
        y: `7`,
        width: `18`,
        height: `4`,
        rx: `1`,
        key: `1hberx`,
      },
    ],
  ]),
  authorImage = {
    url: `/images/capa-guia-bordado-chines.jpeg`,
  },
  guideImage = {
    url: `/images/guia-ilustrado.webp`,
  },
  terezinhaPhoto = `/images/aluna-terezinha-CvSYGDUX.webp`,
  guaranteeImage = `/images/selo-garantia-CWZ7_fVN.webp`,
  intermediateImage = {
    url: `/images/carrossel-nivel2.webp`,
  },
  advancedImage = {
    url: `/images/carrossel-nivel3.webp`,
  },
  masterImage = {
    url: `/images/carrossel-nivel4.webp`,
  },
  defaultCheckout = CHECKOUT_URL;
function useCheckoutUrl() {
  let [e, t] = React.useState(defaultCheckout);
  return (
    React.useEffect(() => {
      let e = () => t(checkoutUrl(defaultCheckout));
      return (
        e(),
        window.addEventListener(`funil-tracking-atualizado`, e),
        () => window.removeEventListener(`funil-tracking-atualizado`, e)
      );
    }, []),
    e
  );
}
function trackOptionalPixelEvent(e, t) {
  let n = window.fbq;
  try {
    n?.(`trackCustom`, e, t);
  } catch {}
}
var headingStyle = `font-[var(--font-quiz-display)] text-[var(--quiz-text)]`,
  bodyStyle = `font-[var(--font-quiz-body)] text-[var(--quiz-text)]`;
function Congratulations() {
  let e = React.useRef(null),
    t = React.useRef(!1),
    n = async () => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let t = e.current;
      if (!t) return;
      let { default: n } = await lazyModule(async () => {
          let { default: e } = await import("canvas-confetti");
          return {
            default: e,
          };
        }, []),
        r = t.getBoundingClientRect(),
        i = r.top >= 0 && r.bottom <= window.innerHeight,
        o = i
          ? Math.min(1, Math.max(0, (r.left + r.width / 2) / window.innerWidth))
          : 0.5,
        s = i
          ? Math.min(
              1,
              Math.max(0, (r.top + r.height / 2) / window.innerHeight),
            )
          : 0.35,
        c = getComputedStyle(document.documentElement),
        l = document.createElement(`canvas`).getContext(`2d`),
        u = [
          `--quiz-accent`,
          `--quiz-success`,
          `--quiz-guarantee`,
          `--quiz-blue`,
        ].map((e) => {
          if (!l) return `#c76a34`;
          ((l.fillStyle = c.getPropertyValue(e).trim()),
            l.fillRect(0, 0, 1, 1));
          let t = l.getImageData(0, 0, 1, 1).data;
          return `#${Array.from(t.slice(0, 3), (e) => e.toString(16).padStart(2, `0`)).join(``)}`;
        });
      n({
        particleCount: 85,
        spread: 78,
        startVelocity: 27,
        gravity: 1.15,
        ticks: 115,
        scalar: 0.8,
        origin: {
          x: o,
          y: s,
        },
        colors: u,
      });
    },
    r = () => {
      t.current || ((t.current = !0), n());
    };
  return (
    React.useEffect(() => {
      let t = e.current,
        n = window.setTimeout(() => {
          if (!t) {
            r();
            return;
          }
          let e = t.getBoundingClientRect();
          e.top >= 0 && e.top < window.innerHeight && r();
        }, 350),
        i;
      return (
        t &&
          `IntersectionObserver` in window &&
          ((i = new IntersectionObserver(
            (e) => {
              e.some((e) => e.isIntersecting) && (r(), i?.disconnect());
            },
            {
              threshold: 0.4,
            },
          )),
          i.observe(t)),
        () => {
          (window.clearTimeout(n), i?.disconnect());
        }
      );
    }, []),
    (
      <div
        className={`rounded-3xl border-2 border-[var(--quiz-accent)] bg-[var(--quiz-guarantee-soft)] px-4 py-6 shadow-[0_14px_34px_-18px_rgba(91,67,50,0.45)]`}
      >
        <div className={`relative flex items-center justify-center`}>
          <h1
            ref={e}
            className={`${headingStyle} text-[36px] font-bold`}
          >{`Parabéns!`}</h1>
        </div>
        <p
          className={`${bodyStyle} mt-3 text-[17px] leading-[1.6]`}
        >{`Você está qualificada para aprender uma habilidade artesanal que pode transformar seu tempo livre em uma nova fonte de renda.`}</p>
      </div>
    )
  );
}
var benefits = [
    `Acesso vitalício ao guia ilustrado`,
    `Moldes em tamanho real para imprimir`,
    `Passo a passo fotográfico do início ao fim`,
    `Técnicas milenares do bordado chinês`,
    `Como escolher materiais sem gastar muito`,
    `Como criar peças mesmo sendo iniciante`,
    `Dicas para acabamento profissional`,
    `Como transformar o bordado em renda extra`,
    `Estratégias simples para vender suas peças`,
    `Projetos práticos para treinar e evoluir`,
    `Aprenda no seu ritmo`,
    `Mesmo que nunca tenha bordado antes`,
  ],
  bonuses = [`Moldes extras exclusivos`, `Guia rápido de materiais`],
  securityBadges = [
    {
      icone: Lock,
      texto: `Compra segura`,
    },
    {
      icone: ShieldCheck,
      texto: `Ambiente protegido`,
    },
    {
      icone: b,
      texto: `Pagamento criptografado`,
    },
    {
      icone: Check,
      texto: `Garantia de 7 dias`,
    },
  ],
  testimonials = [
    {
      foto: mariaPhoto,
      nome: `Maria de Fátima, 58`,
      cidade: `Campinas/SP`,
      texto: `Nunca tinha bordado. Com o guia fiz minhas primeiras flores e já vendi peças para vizinhas.`,
    },
    {
      foto: rosaPhoto,
      nome: `Rosa Maria, 62`,
      cidade: `Belo Horizonte/MG`,
      texto: `O passo a passo é muito fácil de seguir. Hoje bordo à tarde e isso virou um dinheirinho extra.`,
    },
    {
      foto: terezinhaPhoto,
      nome: `Terezinha Alves, 55`,
      cidade: `Curitiba/PR`,
      texto: `Achei que não ia conseguir na minha idade. Consegui, e já recebo encomendas de conhecidas.`,
    },
  ],
  gallery = [
    {
      imagem: beginnerImage.url,
      alt: `Bordado chinês para iniciantes: flor simples em bastidor de madeira`,
      nivel: `Iniciante`,
    },
    {
      imagem: intermediateImage.url,
      alt: `Bordado chinês intermediário: ramo de flores de cerejeira em bastidor`,
      nivel: `Intermediário`,
    },
    {
      imagem: advancedImage.url,
      alt: `Bordado chinês avançado: pássaro colorido em galho florido, emoldurado`,
      nivel: `Avançado`,
    },
    {
      imagem: masterImage.url,
      alt: `Bordado chinês nível mestre: almofada decorativa com peônias em relevo`,
      nivel: `Nível mestre`,
    },
  ];
function Gallery() {
  let e = React.useRef(null),
    t = React.useRef(!1),
    [n, r] = React.useState(0);
  React.useEffect(() => {
    let n = window.setInterval(() => {
      t.current ||
        r((t) => {
          let n = (t + 1) % gallery.length,
            r = e.current;
          return (
            r &&
              r.scrollTo({
                left: n * r.clientWidth,
                behavior: `smooth`,
              }),
            n
          );
        });
    }, 3e3);
    return () => window.clearInterval(n);
  }, []);
  let i = (n) => {
    t.current = !0;
    let i = e.current;
    if (!i) return;
    let a = Math.max(0, Math.min(gallery.length - 1, n));
    (i.scrollTo({
      left: a * i.clientWidth,
      behavior: `smooth`,
    }),
      r(a));
  };
  return (
    <section>
      <h2
        className={`${headingStyle} text-center text-[24px] font-bold leading-snug`}
      >{`Veja alguns dos modelos que você vai aprender comigo:`}</h2>
      <div className={`relative mt-5`}>
        <div
          ref={e}
          onScroll={() => {
            let t = e.current;
            !t ||
              t.clientWidth === 0 ||
              r(Math.round(t.scrollLeft / t.clientWidth));
          }}
          onTouchStart={() => {
            t.current = !0;
          }}
          className={`flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          {gallery.map((e, t) => (
            <figure
              className={`w-full shrink-0 snap-center px-1`}
              key={e.nivel}
            >
              <img
                src={e.imagem}
                alt={e.alt}
                width={1024}
                height={1024}
                loading={t === 0 ? `eager` : `lazy`}
                fetchPriority={t === 0 ? `high` : `auto`}
                decoding={`async`}
                className={`aspect-square w-full rounded-3xl border border-[var(--quiz-border)] object-cover shadow-[0_14px_34px_-18px_rgba(91,67,50,0.35)]`}
              />
              <figcaption
                className={`${bodyStyle} mt-3 text-center text-[14px] font-semibold text-[var(--quiz-muted)]`}
              >
                {e.nivel}
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type={`button`}
          onClick={() => i(n - 1)}
          aria-label={`Peça anterior`}
          className={`absolute left-2 top-[38%] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--quiz-border)] bg-[var(--quiz-surface)] text-[var(--quiz-text)] shadow-md`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type={`button`}
          onClick={() => i(n + 1)}
          aria-label={`Próxima peça`}
          className={`absolute right-2 top-[38%] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--quiz-border)] bg-[var(--quiz-surface)] text-[var(--quiz-text)] shadow-md`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className={`mt-4 flex justify-center gap-2`} aria-hidden={`true`}>
        {gallery.map((e, t) => (
          <span
            className={`h-2 rounded-full transition-all ${t === n ? `w-5 bg-[var(--quiz-accent)]` : `w-2 bg-[var(--quiz-border)]`}`}
            key={e.nivel}
          />
        ))}
      </div>
    </section>
  );
}
function CheckoutOffer({ origem: e }) {
  let t = useCheckoutUrl(),
    [n, r] = React.useState(!1),
    i = (e) => {
      try {
        (trackEventImported(`quiz_plano_cta_clicked`, {
          origem: e,
        }),
          trackOptionalPixelEvent(`quiz_plano_cta_clicked`, {
            origem: e,
          }));
      } catch {}
      window.location.assign(checkoutUrl(CHECKOUT_URL) || t);
    };
  return (
    <div>
      <button
        type={`button`}
        onClick={() => {
          (r(!0), i(`${e}_barra`));
        }}
        className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border-2 border-[var(--quiz-success)] bg-[var(--quiz-surface)] p-4 text-left shadow-[0_10px_24px_-18px_rgba(91,67,50,0.35)] transition-colors hover:bg-[var(--quiz-success-soft)]`}
        aria-pressed={n}
      >
        <div className={`flex items-center gap-2`}>
          <span
            aria-hidden={`true`}
            className={`h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[var(--quiz-success)] transition-colors ${n ? `bg-[var(--quiz-success)]` : `bg-transparent`}`}
          />
          <p
            className={`${headingStyle} text-[15px] font-bold leading-tight`}
          >{`Vivendo de Bordado Chinês`}</p>
        </div>
        <div className={`text-right`}>
          <p className={`${bodyStyle} text-[14px] leading-tight`}>
            <span
              className={`text-[var(--quiz-muted)] line-through`}
            >{`De R$ 180`}</span>
            {` `}
            <span
              className={`font-bold text-[var(--quiz-success)]`}
            >{`Por R$ 37,90`}</span>
          </p>
          <p
            className={`${bodyStyle} mt-0.5 text-[12px] text-[var(--quiz-muted)]`}
          >{`à vista`}</p>
        </div>
      </button>
      <a
        href={t}
        onClick={(t) => {
          (t.preventDefault(), i(e));
        }}
        rel={`noopener`}
        className={`mt-4 block w-full animate-pulse-soft rounded-2xl bg-[var(--quiz-blue)] px-4 py-4 text-center font-[var(--font-quiz-body)] text-[16px] font-bold text-[var(--quiz-blue-foreground)] shadow-[0_14px_30px_-10px_var(--quiz-blue)]`}
        style={{
          "--pulse-color": `var(--quiz-blue)`,
        }}
      >{`QUERO GARANTIR MINHA VAGA`}</a>
      <p
        className={`${bodyStyle} mt-3 rounded-2xl border border-[var(--quiz-blue)]/30 bg-[var(--quiz-blue-soft)] px-4 py-3 text-center text-[15px] font-bold`}
      >
        {`Corra! Falta apenas `}
        <span className={`text-[var(--quiz-blue)]`}>{`8 vagas`}</span>
        {` disponíveis nessa oferta.`}
      </p>
    </div>
  );
}
function PlanContent() {
  return (
    <div className={`space-y-8 pb-10`}>
      <section className={`mt-8 animate-fade-in text-center`}>
        <Congratulations />
        <img
          src={guideImage.url}
          alt={`O que você encontra no Guia Ilustrado Vivendo de Bordado Chinês`}
          width={1536}
          height={1024}
          fetchPriority={`high`}
          className={`mt-6 h-auto w-full rounded-3xl border border-[var(--quiz-border)]`}
        />
        <p
          className={`${bodyStyle} mt-6 text-[17px] font-semibold`}
        >{`Veja tudo o que você vai aprender no guia ilustrado:`}</p>
      </section>
      <section
        className={`rounded-3xl border border-[var(--quiz-border)] bg-[var(--quiz-surface)] p-5`}
      >
        <ul className={`space-y-3`}>
          {benefits.map((e) => (
            <li
              className={`${bodyStyle} flex items-start gap-3 text-[16px] leading-snug`}
              key={e}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--quiz-success)] text-[var(--quiz-success-foreground)]`}
              >
                <Check size={15} strokeWidth={3} />
              </span>
              {e}
            </li>
          ))}
        </ul>
      </section>
      <Gallery />
      <section
        className={`rounded-3xl border border-[var(--quiz-accent)]/30 bg-[var(--quiz-accent-soft)] p-5`}
      >
        <h2 className={`${headingStyle} text-[20px] font-bold leading-snug`}>
          {`🎁 Ganhe 2 `}
          <span className={`text-[var(--quiz-accent)]`}>{`BÔNUS`}</span>
          {` grátis se garantir sua vaga`}
          {` `}
          <span className={`text-[var(--quiz-accent)]`}>{`AGORA`}</span>
          {`:`}
        </h2>
        <p
          className={`${bodyStyle} mt-2 text-[15px]`}
        >{`Ao adquirir hoje, você recebe gratuitamente:`}</p>
        <ul className={`mt-3 space-y-2`}>
          {bonuses.map((e) => (
            <li
              className={`${bodyStyle} flex items-center gap-2 text-[16px] font-semibold`}
              key={e}
            >
              <ViewX size={18} className={`text-[var(--quiz-accent)]`} />
              {` `}
              {e}
            </li>
          ))}
        </ul>
      </section>
      <CheckoutOffer origem={`oferta`} />
      <section className={`grid grid-cols-2 gap-3`}>
        {securityBadges.map(({ icone: ViewE, texto: t }) => (
          <div
            className={`flex items-center gap-2 rounded-2xl border border-[var(--quiz-border)] bg-[var(--quiz-surface)] px-3 py-3`}
            key={t}
          >
            <ViewE
              size={18}
              className={`shrink-0 text-[var(--quiz-success)]`}
            />
            <span className={`${bodyStyle} text-[13px] font-semibold`}>
              {t}
            </span>
          </div>
        ))}
      </section>
      <section>
        <h2
          className={`${headingStyle} text-center text-[24px] font-bold`}
        >{`Mulheres que começaram do zero`}</h2>
        <p
          className={`${bodyStyle} mt-2 text-center text-[15px] text-[var(--quiz-muted)]`}
        >{`Veja alguns relatos de alunas que decidiram aprender bordado chinês.`}</p>
        <div className={`mt-5 space-y-4`}>
          {testimonials.map((e) => (
            <article
              className={`rounded-3xl border border-[var(--quiz-border)] bg-[var(--quiz-surface)] p-5 shadow-[0_10px_24px_-18px_rgba(91,67,50,0.35)]`}
              key={e.nome}
            >
              <div className={`flex items-center gap-3`}>
                <img
                  src={e.foto}
                  alt={e.nome}
                  width={56}
                  height={56}
                  loading={`lazy`}
                  className={`h-14 w-14 rounded-full object-cover`}
                />
                <div>
                  <p className={`${bodyStyle} text-[15px] font-bold`}>
                    {e.nome}
                  </p>
                  <p
                    className={`${bodyStyle} text-[13px] text-[var(--quiz-muted)]`}
                  >
                    {e.cidade}
                  </p>
                  <div
                    className={`mt-0.5 flex text-[var(--quiz-star)]`}
                    aria-label={`5 estrelas`}
                  >
                    {Array.from({
                      length: 5,
                    }).map((e, t) => (
                      <Star size={14} fill={`currentColor`} key={t} />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`${bodyStyle} mt-3 text-[15px] leading-[1.6]`}>
                {`"`}
                {e.texto}
                {`"`}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        className={`rounded-3xl border border-[var(--quiz-guarantee)]/40 bg-[var(--quiz-guarantee-soft)] p-6 text-center`}
      >
        <img
          src={guaranteeImage}
          alt={`Selo de garantia de 7 dias`}
          width={140}
          height={140}
          loading={`lazy`}
          className={`mx-auto h-32 w-32 object-contain`}
        />
        <h2
          className={`${headingStyle} mt-3 text-[24px] font-bold`}
        >{`Garantia de 7 dias`}</h2>
        <p
          className={`${bodyStyle} mt-2 text-[15px] leading-[1.6]`}
        >{`Você pode acessar o guia, conhecer o conteúdo e testar sem riscos. Se não gostar, basta solicitar o reembolso dentro do prazo.`}</p>
      </section>
      <section className={`text-center`}>
        <img
          src={authorImage.url}
          alt={`Angela Susuki segurando o guia Vivendo de Bordado Chinês`}
          width={1024}
          height={1536}
          loading={`lazy`}
          className={`h-auto w-full rounded-3xl border border-[var(--quiz-border)]`}
        />
        <h2
          className={`${headingStyle} mt-5 text-[26px] font-bold`}
        >{`Prazer, Angela Susuki`}</h2>
        <p
          className={`${bodyStyle} mt-3 text-[16px] italic leading-[1.7]`}
        >{`"Descobri no bordado uma forma de transformar momentos simples em algo produtivo e prazeroso. Hoje compartilho esse conhecimento através deste guia ilustrado para ajudar outras mulheres a aprender uma habilidade artesanal e criar uma possível fonte de renda extra."`}</p>
      </section>
      <CheckoutOffer origem={`final`} />
    </div>
  );
}
function Plan() {
  return (
    React.useEffect(() => {
      (initializeAttribution(`neutro`), trackEvent(`quiz_plano_viewed`));
    }, []),
    (
      <main
        className={`min-h-screen overflow-x-hidden bg-[var(--quiz-bg)] px-5 py-6 sm:py-8`}
      >
        <div className={`mx-auto w-full max-w-[430px] animate-fade-in`}>
          <div className={`relative`}>
            <Link
              to={`/quiz/materiais`}
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
                  width: `100%`,
                }}
              />
            </div>
          </div>
          <OfferTimer />
          <PlanContent />
        </div>
      </main>
    )
  );
}
var offerDuration = 114e4;
function OfferTimer() {
  let [e, t] = React.useState(offerDuration);
  React.useEffect(() => {
    let e = Date.now() + offerDuration,
      n = () => t(Math.max(0, e - Date.now()));
    n();
    let r = window.setInterval(n, 1e3);
    return () => window.clearInterval(r);
  }, []);
  let n = String(Math.floor(e / 6e4)).padStart(2, `0`),
    r = String(Math.floor((e % 6e4) / 1e3)).padStart(2, `0`);
  return (
    <div
      aria-hidden={`true`}
      className={`mt-12 rounded-2xl border border-[var(--quiz-guarantee)]/40 bg-[var(--quiz-guarantee-soft)] px-4 py-4 text-center`}
    >
      <p
        className={`font-[var(--font-quiz-body)] text-[14px] font-bold tracking-[0.06em] text-[var(--quiz-text)]`}
      >
        <span
          className={`text-[var(--quiz-success)]`}
        >{`OFERTA POR TEMPO LIMITADO:`}</span>
        {` `}
        {n}
        {`:`}
        {r}
      </p>
    </div>
  );
}
export { Plan as component };
