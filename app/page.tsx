import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ChartPie,
  Mail,
  MessageCircle,
  ShieldCheck,
  Target,
} from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
const services = [
  {
    n: "01",
    icon: CalendarDays,
    title: "Retirement Planning",
    copy: "Retirement planning is about far more than simply reaching a certain age. It is about making sure the financial resources needed to support your lifestyle are available when you need them most. Through thoughtful planning and disciplined investing, retirement strategies are developed to help clients move confidently from wealth accumulation to sustainable income generation. This includes reviewing retirement accounts, investment portfolios, tax considerations and long-term income requirements. Every retirement plan is tailored to the client’s individual circumstances, including lifestyle goals, anticipated expenses, healthcare needs and the potential effects of market volatility. By combining investment strategy with tax-efficient withdrawal planning, clients can approach retirement with greater confidence and clarity. The objective is to help clients enter retirement knowing their finances are structured to support lasting stability and financial independence.",
  },
  {
    n: "02",
    icon: ChartPie,
    title: "Investment Management",
    copy: "Effective investment management involves much more than selecting stocks or funds. It requires discipline, research, diversification and a long-term strategy shaped around each client’s financial objectives and tolerance for risk. My approach focuses on constructing balanced portfolios designed to pursue consistent growth while managing risk through diversification across asset classes, industries and global markets. Market conditions and economic developments are monitored carefully, allowing portfolios to be reviewed and adjusted when necessary so they continue to reflect the client’s long-term goals. Each portfolio is structured with an emphasis on risk-adjusted performance, tax efficiency and strategic asset allocation, enabling clients to participate in market opportunities while maintaining a disciplined investment framework. The goal is not simply to invest, but to build a portfolio designed to grow and remain resilient through changing market environments.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Wealth Preservation & Legacy Planning",
    copy: "Building wealth is only one part of the financial journey. Protecting that wealth and ensuring it can be transferred efficiently to future generations is equally important. Wealth preservation strategies are designed to safeguard assets from unnecessary risk, reduce avoidable tax exposure and establish a clear structure for long-term financial security. Through careful coordination, clients can ensure their wealth continues to support their families, businesses and wider goals for many years to come. Legacy planning brings investment strategy together with estate considerations so that wealth is transferred in a tax-conscious way that reflects the client’s wishes. Whether the priority is supporting family members, funding education for future generations or creating a lasting financial legacy, thoughtful planning can make a meaningful difference. The objective is to ensure that wealth built over a lifetime continues to provide security, opportunity and stability for generations to come.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Business Financial Consulting",
    copy: "Strong businesses require more than revenue growth. They require strategic financial planning, disciplined capital management and forward-looking guidance. My business financial consulting services help entrepreneurs and business owners structure their finances in ways that support business expansion while also creating long-term personal wealth. Drawing on experience advising owners across a range of industries, I help clients assess cash flow, improve capital allocation and identify opportunities for efficient reinvestment. Whether the objective is scaling operations, strengthening the financial structure, preparing for succession or integrating business profits into a long-term investment strategy, each recommendation is tailored to the owner’s specific priorities and circumstances. The objective is straightforward: build a stronger, more resilient business while simultaneously improving the personal financial position of the individuals behind it.",
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
              <span className="eyebrow">Financial Advisor and Broker</span>
              <h1>Christian Charles Olsen</h1>
              <p>
                A considered financial strategy for building opportunity,
                protecting progress and making confident long-term decisions.
              </p>
              <div className="actions">
                <a className="button" href="#contact">
                  Book a Consultation <ArrowRight size={16} />
                </a>
                <a
                  className="text-link"
                  href="https://files.brokercheck.finra.org/individual/individual_5205101.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Full Report <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <div className="brand-portrait">
              <Image
                className="hero-photo"
                src="/christian-olsen-hero.png"
                alt="Christian Charles Olsen reviewing financial documents in his office"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="photo-caption">
                <span>Personal guidance</span>
                <b>Clarity for every<br />financial decision.</b>
              </div>
            </div>
          </div>
        </section>
        <section className="trust">
          <div>
            <ShieldCheck />
            <span>
              <b>Financial Advice</b>
              <small>Always centred on your objectives</small>
            </span>
          </div>
          <div>
            <MessageCircle />
            <span>
              <b>Responsive Guidance</b>
              <small>Support that adapts as life changes</small>
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
              <span className="eyebrow">About Christian</span>
              <h2>
                Experience, perspective
                <br />
                <em>and disciplined guidance.</em>
              </h2>
              <p className="lead">
                I am Christian Charles Olsen, a Financial Advisor and Broker with
                more than 11 years of experience in the financial services
                industry.
              </p>
              <p>
                Having worked across three established firms, I have helped
                individuals, families and business owners navigate complex
                financial decisions. Throughout my career, I have developed a
                disciplined approach built on research, diversification, risk
                management and long-term planning.
              </p>
              <p>
                My role is to bring clarity and structure to clients’ financial
                lives—whether they are building wealth, planning for retirement,
                managing investments or protecting assets for future generations.
                Holding 33 professional licenses and one FINRA registration, I
                provide a broad range of financial services and investment
                solutions tailored to each client’s goals.
              </p>
              <p>
                My approach is centered on transparency, strategic thinking and
                long-term relationships built on trust and results. I help
                clients navigate evolving financial markets with confidence
                through strategies designed to support long-term growth,
                stability and financial independence.
              </p>
            </div>
            <div className="feature-grid about-stats">
              <article>
                <strong>11</strong>
                <p>Years of Experience</p>
              </article>
              <article>
                <strong>3</strong>
                <p>Established Firms</p>
              </article>
              <article>
                <strong>33</strong>
                <p>State Licenses</p>
              </article>
              <article>
                <strong>1</strong>
                <p>FINRA Registration</p>
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
              Financial guidance,
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
        </div>
        <div className="wrap copyright">© 2026 Christian Charles Olsen. All rights reserved.</div>
      </footer>
    </>
  );
}
