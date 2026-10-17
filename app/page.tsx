import type { CSSProperties, ReactNode } from "react";
import PlanetCanvas from "./components/PlanetCanvas";
import ScrollEffects from "./components/ScrollEffects";
import Year from "./components/Year";
import {
  AnalyticsIcon,
  ArrowIcon,
  BoltIcon,
  GlobeIcon,
  LeadsIcon,
  ShieldIcon,
  WorkflowIcon,
} from "./components/Icons";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <WorkflowIcon />, title: "Clever workflows", text: "Automate every hand-off with visual, branching pipelines that move deals forward while you sleep." },
  { icon: <AnalyticsIcon />, title: "Live analytics", text: "Real-time dashboards turn raw funnel data into the one number that tells you what to do next." },
  { icon: <LeadsIcon />, title: "Seamless leads", text: "Capture, score, and route every lead automatically — no spreadsheet, no leak, no lag." },
  { icon: <BoltIcon />, title: "Instant triggers", text: "Fire actions across your stack the moment intent appears, in milliseconds not minutes." },
  { icon: <ShieldIcon />, title: "Enterprise-grade", text: "SOC 2, SSO, and granular roles baked in — security that scales quietly with your team." },
  { icon: <GlobeIcon />, title: "Global by default", text: "Multi-region, multi-currency, and low-latency everywhere your customers happen to be." },
];

const BARS = [62, 88, 47, 95, 71, 80, 58];
const ROWS: [string, number][] = [
  ["New leads", 90],
  ["Qualified", 72],
  ["In negotiation", 48],
  ["Closed won", 34],
];
const STATS: [string, string][] = [
  ["3.4×", "Faster pipeline velocity"],
  ["92%", "Lead capture accuracy"],
  ["11k+", "Teams scaling on Ascend"],
  ["$2.1B", "Revenue influenced"],
];
const LOGOS = ["Nimbus", "Pluma", "Citrus", "Spider", "Helod", "Vertx"];
const FOOTER: [string, string[]][] = [
  ["Product", ["Features", "Solutions", "Plans"]],
  ["Company", ["About", "Careers", "Blog"]],
  ["Legal", ["Privacy", "Terms", "Security"]],
];

const Brand = () => (
  <a href="#top" className="brand">
    <span className="brand-mark">▲</span>Ascend
  </a>
);

export default function Home() {
  return (
    <>
      <PlanetCanvas />
      <ScrollEffects />
      <div className="page" id="top">
        {/* SECTION 1 · HERO */}
        <header className="hero">
          <nav className="nav">
            <Brand />
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#solutions">Solutions</a>
              <a href="#cta">Plans</a>
              <a href="#cta">Learning</a>
            </div>
            <a href="#cta" className="btn btn-ghost">Sign Up</a>
          </nav>
          <div className="hero-inner">
            <h1 className="hero-title" data-reveal="" style={rd(60)}>
              Scale Smarter,<br />Not <em>Harder</em>
            </h1>
            <p className="hero-sub" data-reveal="" style={rd(180)}>
              Drive your funnel forward with clever workflows, analytics, and seamless lead
              management — all in one immersive command center.
            </p>
            <div className="hero-actions" data-reveal="" style={rd(300)}>
              <a href="#cta" className="btn btn-primary">Start Free Right Now <ArrowIcon /></a>
              <a href="#cta" className="btn btn-outline">Schedule a Consult</a>
            </div>
          </div>
          <div className="logos" data-reveal="" style={rd(420)}>
            <div className="logos-label">Trusted by fast-moving teams</div>
            <div className="logos-row">
              {LOGOS.map((l) => (
                <span className="logo" key={l}>{l}</span>
              ))}
            </div>
          </div>
        </header>

        {/* SECTION 2 · FEATURES */}
        <section className="section features" id="features">
          <div className="section-head">
            <span className="eyebrow" data-reveal="">Everything in orbit</span>
            <h2 data-reveal="" style={rd(80)}>One platform to run the entire revenue engine</h2>
            <p data-reveal="" style={rd(160)}>
              Stop stitching tools together. Ascend unifies capture, automation, and insight into a
              single surface your whole team actually enjoys using.
            </p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <article className="card" data-reveal="" style={rd(i * 90)} key={f.title}>
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 3 · SHOWCASE + STATS */}
        <section className="section showcase" id="solutions">
          <div className="showcase-grid">
            <div className="showcase-copy">
              <span className="eyebrow" data-reveal="">Built for momentum</span>
              <h2 data-reveal="" style={rd(90)}>See the whole funnel move in real time</h2>
              <p data-reveal="" style={rd(180)}>
                Every stage, every signal, every dollar — rendered live. Ascend gives operators the
                altitude to spot what’s working and the controls to double down instantly.
              </p>
              <div data-reveal="" style={rd(270)}>
                <a href="#cta" className="btn btn-primary">Explore the platform <ArrowIcon /></a>
              </div>
            </div>
            <div className="dashboard" data-reveal="" style={rd(160)}>
              <div className="dash-top">
                <span>Pipeline · Q3</span>
                <span className="dash-live"><i />Live</span>
              </div>
              <div className="dash-bars">
                {BARS.map((h, i) => (
                  <div
                    className="dash-bar"
                    key={i}
                    style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>
              <div className="dash-rows">
                {ROWS.map(([label, w]) => (
                  <div className="dash-row" key={label}>
                    <span>{label}</span>
                    <div className="dash-track">
                      <div className="dash-fill" style={{ "--w": `${w}%` } as CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="stats">
            {STATS.map(([v, l], i) => (
              <div className="stat" data-reveal="" style={rd(i * 80)} key={l}>
                <div className="stat-value">{v}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 · CTA + FOOTER */}
        <section className="section cta" id="cta">
          <div className="cta-card">
            <span className="eyebrow" data-reveal="" style={rd(60)}>Ready when you are</span>
            <h2 data-reveal="" style={rd(140)}>Put your growth on a new trajectory</h2>
            <p data-reveal="" style={rd(220)}>
              Launch in minutes. No credit card. Cancel anytime. Join thousands of teams compounding
              revenue on Ascend.
            </p>
            <div className="hero-actions" data-reveal="" style={rd(300)}>
              <a href="#top" className="btn btn-primary">Start Free Right Now <ArrowIcon /></a>
              <a href="#top" className="btn btn-outline">Talk to Sales</a>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-brand">
              <Brand />
              <p>The revenue command center for ambitious teams.</p>
            </div>
            <div className="footer-cols">
              {FOOTER.map(([h, links]) => (
                <div className="footer-col" key={h}>
                  <h4>{h}</h4>
                  {links.map((l) => (
                    <a href="#top" key={l}>{l}</a>
                  ))}
                </div>
              ))}
            </div>
          </footer>
          <p className="copyright">
            © <Year /> Ascend, Inc. — Built among the stars.
          </p>
        </section>
      </div>
    </>
  );
}
