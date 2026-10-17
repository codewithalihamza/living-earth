import type { CSSProperties, ReactNode } from "react";
import PlanetCanvas from "./components/PlanetCanvas";
import ScrollEffects from "./components/ScrollEffects";
import SignupModal from "./components/SignupModal";
import Year from "./components/Year";
import {
  AnalyticsIcon,
  ArrowIcon,
  BoltIcon,
  CompassIcon,
  GlobeIcon,
  LeadsIcon,
  ShieldIcon,
} from "./components/Icons";

const rd = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;
const CONTACT = "mailto:hello@travel.example?subject=Talk%20to%20a%20travel%20expert";

const NAV: [string, string][] = [
  ["Experiences", "#experiences"],
  ["Destinations", "#destinations"],
  ["Plans", "#plans"],
  ["Guides", "#guides"],
];

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <CompassIcon />, title: "Smart itineraries", text: "Tell us your dates and vibe — get a day-by-day plan with flights, stays, and hidden gems in seconds." },
  { icon: <AnalyticsIcon />, title: "Live fare tracking", text: "We watch prices around the clock and ping you the moment your route drops to its best fare." },
  { icon: <LeadsIcon />, title: "Group trips, sorted", text: "Shared plans, split costs, and one-tap voting so the whole crew agrees on where to go next." },
  { icon: <BoltIcon />, title: "Instant rebooking", text: "Flight delayed or cancelled? We rebook you automatically before you even reach the gate." },
  { icon: <ShieldIcon />, title: "Travel protection", text: "Trip insurance, 24/7 support, and verified stays baked in — so you can wander without worry." },
  { icon: <GlobeIcon />, title: "190+ countries", text: "Local currencies, offline maps, and visa tips everywhere your passport can take you." },
];

const BARS = [62, 88, 47, 95, 71, 80, 58];
const ROWS: [string, number][] = [
  ["Bali", 90],
  ["Kyoto", 72],
  ["Lisbon", 48],
  ["Reykjavík", 34],
];
const STATS: [string, string][] = [
  ["2.4M", "Trips planned"],
  ["38%", "Average fare savings"],
  ["190+", "Countries covered"],
  ["4.9★", "Traveler rating"],
];
const LOGOS = ["Skyline", "Nomad", "Atlas", "Horizon", "Wanderly", "Aerio"];

const PLANS: { name: string; price: string; desc: string; perks: string[]; featured?: boolean }[] = [
  { name: "Explorer", price: "$0", desc: "For the occasional getaway.", perks: ["3 trip plans per year", "Fare alerts on 5 routes", "Offline maps", "Community guides"] },
  { name: "Voyager", price: "$12", desc: "For travelers who are always planning the next one.", perks: ["Unlimited trip plans", "Unlimited fare alerts", "Instant rebooking", "Group trips & cost splitting", "Priority support"], featured: true },
  { name: "Globetrotter", price: "$29", desc: "For frequent flyers and digital nomads.", perks: ["Everything in Voyager", "Travel insurance included", "Airport lounge passes", "Personal travel concierge"] },
];

const GUIDES: { tag: string; title: string; meta: string; body: string[] }[] = [
  { tag: "Asia", title: "Kyoto in 5 days: temples, tea & tiny alleys", meta: "8 min read · Spring", body: ["Arrive mid-week to dodge weekend crowds at Fushimi Inari.", "Book a machiya townhouse in Higashiyama for walkable mornings.", "Take the JR Nara line for an easy day trip to the deer park."] },
  { tag: "Europe", title: "Lisbon on a budget: the locals’ playbook", meta: "6 min read · Year-round", body: ["Grab a Viva Viagem card — trams and ferries for a fraction of taxi fares.", "Eat the prato do dia at tascas for a full lunch under €12.", "Catch sunset at Miradouro da Graça instead of the crowded viewpoints."] },
  { tag: "Nordics", title: "Chasing the northern lights in Iceland", meta: "7 min read · Winter", body: ["Visit between late September and March for the darkest skies.", "Stay outside Reykjavík to escape light pollution.", "Enable aurora alerts in Travel — we’ll wake you when the forecast peaks."] },
];

const FOOTER: [string, [string, string][]][] = [
  ["Product", [["Experiences", "#experiences"], ["Destinations", "#destinations"], ["Plans", "#plans"]]],
  ["Company", [["Guides", "#guides"], ["Careers", "mailto:careers@travel.example"], ["Contact", CONTACT]]],
  ["Account", [["Sign up", "#signup"], ["Get started", "#cta"], ["Back to top", "#top"]]],
];

const Brand = () => (
  <a href="#top" className="brand">
    <span className="brand-mark">▲</span>Travel
  </a>
);

export default function Home() {
  return (
    <>
      <PlanetCanvas />
      <ScrollEffects />
      <SignupModal />
      <div className="page" id="top">
        {/* SECTION 1 · HERO */}
        <header className="hero">
          <nav className="nav">
            <Brand />
            <div className="nav-links">
              {NAV.map(([label, href]) => (
                <a href={href} key={label}>{label}</a>
              ))}
            </div>
            <a href="#signup" className="btn btn-ghost">Sign Up</a>
          </nav>
          <div className="hero-inner">
            <h1 className="hero-title" data-reveal="" style={rd(60)}>
              See the World,<br />Your <em>Way</em>
            </h1>
            <p className="hero-sub" data-reveal="" style={rd(180)}>
              Plan smarter trips with AI itineraries, live fare tracking, and seamless bookings —
              your whole journey in one beautiful place.
            </p>
            <div className="hero-actions" data-reveal="" style={rd(300)}>
              <a href="#signup" className="btn btn-primary">Start Planning Free <ArrowIcon /></a>
              <a href={CONTACT} className="btn btn-outline">Talk to an Expert</a>
            </div>
          </div>
          <div className="logos" data-reveal="" style={rd(420)}>
            <div className="logos-label">Partnered with leading travel brands</div>
            <div className="logos-row">
              {LOGOS.map((l) => (
                <span className="logo" key={l}>{l}</span>
              ))}
            </div>
          </div>
        </header>

        {/* SECTION 2 · EXPERIENCES */}
        <section className="section features" id="experiences">
          <div className="section-head">
            <span className="eyebrow" data-reveal="">Everything for the journey</span>
            <h2 data-reveal="" style={rd(80)}>One app to plan, book, and enjoy every trip</h2>
            <p data-reveal="" style={rd(160)}>
              Stop juggling ten tabs and five apps. Travel brings inspiration, booking, and on-the-go
              help into a single companion you’ll actually love using.
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

        {/* SECTION 3 · DESTINATIONS + STATS */}
        <section className="section showcase" id="destinations">
          <div className="showcase-grid">
            <div className="showcase-copy">
              <span className="eyebrow" data-reveal="">Where the world is going</span>
              <h2 data-reveal="" style={rd(90)}>Discover trending destinations in real time</h2>
              <p data-reveal="" style={rd(180)}>
                Every search, every booking, every review — rendered live. See where travelers are
                heading this season and lock in the best fares before everyone else.
              </p>
              <div data-reveal="" style={rd(270)}>
                <a href="#guides" className="btn btn-primary">Browse travel guides <ArrowIcon /></a>
              </div>
            </div>
            <div className="dashboard" data-reveal="" style={rd(160)}>
              <div className="dash-top">
                <span>Bookings · This week</span>
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

        {/* SECTION 4 · PLANS */}
        <section className="section plans" id="plans">
          <div className="section-head">
            <span className="eyebrow" data-reveal="">Simple pricing</span>
            <h2 data-reveal="" style={rd(80)}>Pick the plan that fits your wanderlust</h2>
            <p data-reveal="" style={rd(160)}>Start free and upgrade whenever your travels grow. Switch or cancel anytime.</p>
          </div>
          <div className="plan-grid">
            {PLANS.map((p, i) => (
              <div className={`plan${p.featured ? " featured" : ""}`} data-reveal="" style={rd(i * 90)} key={p.name}>
                {p.featured && <span className="plan-badge">Most popular</span>}
                <h3>{p.name}</h3>
                <div className="plan-price">{p.price}<span> /month</span></div>
                <p className="plan-desc">{p.desc}</p>
                <ul>
                  {p.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
                <a href="#signup" data-plan={p.name} className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`}>
                  {p.price === "$0" ? "Start for free" : `Choose ${p.name}`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 · GUIDES */}
        <section className="section guides" id="guides">
          <div className="section-head">
            <span className="eyebrow" data-reveal="">Travel guides</span>
            <h2 data-reveal="" style={rd(80)}>Insider tips from people who’ve been there</h2>
            <p data-reveal="" style={rd(160)}>Hand-picked guides written by locals and seasoned travelers.</p>
          </div>
          <div className="guide-grid">
            {GUIDES.map((g, i) => (
              <details className="guide" data-reveal="" style={rd(i * 90)} key={g.title}>
                <summary>
                  <span className="guide-tag">{g.tag}</span>
                  <h3>{g.title}</h3>
                  <div className="guide-meta">{g.meta}</div>
                  <span className="guide-more">Read tips</span>
                </summary>
                <ul className="guide-body">
                  {g.body.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 6 · CTA + FOOTER */}
        <section className="section cta" id="cta">
          <div className="cta-card">
            <span className="eyebrow" data-reveal="" style={rd(60)}>Ready when you are</span>
            <h2 data-reveal="" style={rd(140)}>Your next adventure starts here</h2>
            <p data-reveal="" style={rd(220)}>
              Plan in minutes. No credit card. Cancel anytime. Join millions of travelers exploring
              the world with Travel.
            </p>
            <div className="hero-actions" data-reveal="" style={rd(300)}>
              <a href="#signup" className="btn btn-primary">Start Planning Free <ArrowIcon /></a>
              <a href={CONTACT} className="btn btn-outline">Talk to an Expert</a>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-brand">
              <Brand />
              <p>The travel companion for curious explorers.</p>
            </div>
            <div className="footer-cols">
              {FOOTER.map(([h, links]) => (
                <div className="footer-col" key={h}>
                  <h4>{h}</h4>
                  {links.map(([label, href]) => (
                    <a href={href} key={label}>{label}</a>
                  ))}
                </div>
              ))}
            </div>
          </footer>
          <p className="copyright">
            © <Year /> Travel, Inc. — Built among the stars.
          </p>
        </section>
      </div>
    </>
  );
}
