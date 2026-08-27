import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  ChartPie,
  Mail,
  MessageCircle,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
const services = [
  {
    n: "01",
    icon: CalendarDays,
    title: "Retirement Planning",
    copy: "A successful retirement strategy starts with the life you want to lead, not simply a target date. We bring together pensions, investment accounts, expected spending, healthcare needs and tax-aware income planning to create a practical path from accumulation to dependable retirement income. The result is a flexible plan designed to support independence while adapting to markets and changing priorities.",
  },
  {
    n: "02",
    icon: ChartPie,
    title: "Investment Management",
    copy: "Investment management begins with purpose. Portfolios are built around your objectives, capacity for risk and time horizon, then diversified across suitable markets, sectors and asset classes. Ongoing research and disciplined review help keep the strategy responsive without allowing short-term events to derail the long-term plan. Tax awareness and thoughtful allocation remain central throughout.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Wealth Preservation & Legacy Planning",
    copy: "Preserving wealth requires the same care as building it. We consider investment risk, tax exposure, estate priorities and the way assets may eventually pass to the people or causes that matter to you. From family security and future education to multigenerational planning, the aim is to create an orderly, resilient legacy that reflects your intentions.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Business Financial Consulting",
    copy: "Business owners often need to balance growth inside the company with security outside it. Our consulting work connects cash flow, capital allocation, reinvestment, expansion and succession decisions with the owner's wider financial plan. Recommendations are tailored to the realities of the enterprise, helping strengthen both the business and the personal wealth being created behind it.",
  },
];
export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav">
            {["About", "Services", "Testimonials", "Contact"].map((x) => (
              <a key={x} href={"#" + x.toLowerCase()}>
                {x}
              </a>
            ))}
            <a className="button" href="#contact">
              Book a Consultation
            </a>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Independent financial adviser</span>
              <h1>Christian Charles Olsen</h1>
              <p>
                A considered financial strategy for building opportunity,
                protecting progress and making confident long-term decisions.
              </p>
              <div className="actions">
                <a className="button" href="#contact">
                  Book a Consultation <ArrowRight size={16} />
                </a>
                <a className="text-link" href="#services">
                  Explore Services <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <div className="brand-portrait">
              <img
                className="hero-photo"
                src="/christian-olsen-hero.png"
                alt="Christian Charles Olsen reviewing financial documents in his office"
              />
              <div className="photo-caption">
                <span>Personal guidance</span>
                <b>Clarity for every financial decision.</b>
              </div>
            </div>
          </div>
        </section>
        <section className="trust">
          <div>
            <ShieldCheck />
            <span>
              <b>Independent Advice</b>
              <small>Always centred on your objectives</small>
            </span>
          </div>
          <div>
            <MessageCircle />
            <span>
              <b>Clear Communication</b>
              <small>Straightforward, considered guidance</small>
            </span>
          </div>
          <div>
            <Target />
            <span>
              <b>Long-Term Thinking</b>
              <small>Perspective for every chapter</small>
            </span>
          </div>
        </section>
        <section id="about" className="about section">
          <div className="wrap about-grid">
            <div>
              <span className="eyebrow">About the practice</span>
              <h2>
                Financial planning with purpose,
                <br />
                <em>perspective and discipline.</em>
              </h2>
              <p className="lead">
                The strongest financial strategies begin with a clear
                understanding of the person, family or business behind the
                numbers.
              </p>
              <p>
                Christian Charles Olsen brings a measured approach to financial
                decision-making—combining thoughtful research, practical
                planning and ongoing attention to changing circumstances. Rather
                than reacting to short-term noise, the focus remains on
                resilient strategies that support meaningful objectives over
                time.
              </p>
            </div>
            <div className="feature-grid">
              <article>
                <BadgeCheck />
                <h3>Personal</h3>
                <p>Advice shaped around your life and priorities.</p>
              </article>
              <article>
                <TrendingUp />
                <h3>Strategic</h3>
                <p>Evidence-led planning with a long-term view.</p>
              </article>
              <article>
                <Users />
                <h3>Ongoing</h3>
                <p>A relationship designed to evolve with you.</p>
              </article>
            </div>
          </div>
        </section>
        <section id="services" className="services section">
          <div className="wrap">
            <div className="section-heading row">
              <div>
                <span className="eyebrow">What we do</span>
                <h2>
                  Expertise for important
                  <br />
                  <em>financial decisions.</em>
                </h2>
              </div>
              <p>
                Whether you are preparing for retirement, managing investments,
                protecting a legacy or growing a business, every engagement is
                anchored in clear objectives and practical next steps.
              </p>
            </div>
            <div className="service-grid">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article key={s.n}>
                    <span>{s.n}</span>
                    <Icon />
                    <h3>{s.title}</h3>
                    <p>{s.copy}</p>
                    <a href="#contact">
                      Discuss this service <ArrowRight size={14} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <Testimonials />
        <section className="cta">
          <div>
            <small>Ready when you are</small>
            <h2>Move Forward with Greater Clarity</h2>
            <p>
              Start with a confidential conversation about the future you want
              to build.
            </p>
          </div>
          <a className="button light" href="#contact">
            Schedule an Introductory Call <ArrowRight size={16} />
          </a>
        </section>
        <section id="contact" className="contact section">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2>
                Let’s start a<br />
                <em>conversation.</em>
              </h2>
              <p>
                Share a little about your goals and what you would like help
                with. We’ll respond to arrange a confidential, no-obligation
                introductory conversation.
              </p>
              <div className="contact-lines">
                <a href="mailto:info@christiancharlesolsen.me">
                  <Mail />
                  info@christiancharlesolsen.me
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-grid">
          <div>
            <Logo footer />
            <p>
              Independent financial guidance,
              <br />
              aligned with your goals.
            </p>
          </div>
          <div>
            <b>Explore</b>
            {["About", "Services", "Testimonials", "Contact"].map((x) => (
              <a key={x} href={"#" + x.toLowerCase()}>
                {x}
              </a>
            ))}
          </div>
          <div>
            <b>Information</b>
            <a href="#contact">Book a consultation</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
          </div>
        </div>
        <div className="wrap disclaimer">
          <p>
            Investments can fall as well as rise, and you may get back less than
            you invest. Past performance is not a reliable indicator of future
            results. This website provides general information and does not
            constitute personal financial advice.
          </p>
          <span>© 2026 Christian Charles Olsen. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
