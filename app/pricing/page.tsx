import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";

const plans = [
  {
    name: "AKOS Core",
    price: "Free",
    status: "Available now",
    description: "Create, own and self-host your career operating system.",
    features: [
      "Open-source GitHub template",
      "Portable career-data/profile.json",
      "AI prompt workflow",
      "Portfolio website",
      "Project case-study template",
      "GitHub and Vercel deployment guides",
      "Automatic updates after every commit",
    ],
    action: "Create from template",
    href: "https://github.com/rollie1212/akos-core/generate",
    available: true,
  },
  {
    name: "AKOS Builder",
    price: "Coming soon",
    status: "Planned",
    description: "Generate and review your knowledge base through a guided interface.",
    features: [
      "CV parsing & LinkedIn import",
      "Interactive structured profile editor",
      "Real-time portfolio previewer",
      "Single-click JSON/ZIP export"
    ],
    available: false,
  },
  {
    name: "AKOS Cloud",
    price: "Coming soon",
    status: "Planned",
    description: "Managed workflows without manual GitHub configuration.",
    features: [
      "Multiple profile histories & versions",
      "AI vacancy analysis & role matching",
      "Tailored cover letters & resumes",
      "Application tracking & pipeline analytics"
    ],
    available: false,
  },
];

export default function PricingPage() {
  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <p className="eyebrow">
          Pricing Plans
        </p>
        <h1>
          AKOS Core is entirely free.
        </h1>
        <p className="summary">
          Our template, data format, AI prompt workflows, and self-hosted personal career sites are and will always remain free and open source.
        </p>
      </section>

      {/* Plans Grid */}
      <section className="section">
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.available ? "pricing-card--active" : "pricing-card--soon"}`}
            >
              <p className="eyebrow" style={{ fontSize: "11px", color: plan.available ? "var(--accent)" : "var(--muted)", textTransform: "uppercase", marginBottom: "14px" }}>
                {plan.status}
              </p>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p style={{ margin: "0 0 24px" }}>{plan.description}</p>
              
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {plan.available && plan.href ? (
                <a className="button button--primary" href={plan.href} target="_blank" rel="noreferrer">
                  {plan.action} ↗
                </a>
              ) : (
                <span className="coming-soon">
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Commitments */}
      <section className="section section--split">
        <div>
          <p className="eyebrow">Open-Source Promise</p>
          <h2>
            Your data belongs to you.
          </h2>
        </div>
        <div className="section__intro">
          <p>
            AKOS Core has no telemetry, requires no registration, and stores zero personal data on central databases. You own your source repository, you control your Vercel deployments, and your professional records remain entirely independent.
          </p>
        </div>
      </section>

      <SupportFooter />
    </main>
  );
}
