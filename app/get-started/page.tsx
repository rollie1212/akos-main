import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";

const steps = [
  {
    number: "01",
    title: "Create an empty personal repository",
    description: "Create a new GitHub repository for your personal AKOS website. The repository, data and deployment remain under your control.",
  },
  {
    number: "02",
    title: "Copy the contents of /template",
    description: "Copy everything inside akos-main/template into the root of your new repository. package.json must be at repository root, not inside another template folder.",
    actionLabel: "Open template folder ↗",
    actionUrl: "https://github.com/rollie1212/akos-main/tree/main/template",
  },
  {
    number: "03",
    title: "Collect your professional source material",
    description: "Prepare your CV, LinkedIn text, project notes, public links, education, languages, verified results and claim boundaries.",
  },
  {
    number: "04",
    title: "Run the AKOS prompt workflow",
    description: "Use the prompts to extract verified facts, resolve missing details, generate profile.json and audit the final claims.",
    actionLabel: "View prompt workflow ↗",
    actionUrl: "/prompts",
  },
  {
    number: "05",
    title: "Replace career-data/profile.json",
    description: "Paste the validated JSON into career-data/profile.json. This file generates the main portfolio content.",
  },
  {
    number: "06",
    title: "Add Markdown knowledge files",
    description: "Create factual .md files under knowledge/. Use separate files for experience, projects, skills, working style and claim boundaries. These files ground the AI assistant.",
  },
  {
    number: "07",
    title: "Deploy to Vercel",
    description: "Import the personal repository into Vercel and keep the default Next.js settings.",
  },
  {
    number: "08",
    title: "Add your DeepSeek key",
    description: "In Vercel Project Settings → Environment Variables add DEEPSEEK_API_KEY with your own private key. Never commit it and never use the NEXT_PUBLIC_ prefix. Redeploy after adding the key.",
  },
  {
    number: "09",
    title: "Run the acceptance check",
    description: "Confirm the portfolio renders correctly, links work, the assistant answers from Markdown and unsupported facts are not invented.",
  },
];

export default function GetStartedPage() {
  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      <section className="page-hero">
        <p className="eyebrow">Onboarding guide</p>
        <h1>Build your personal AKOS website.</h1>
        <p className="summary">Create a portfolio based on the AKOS template, your verified career data, a Markdown knowledge base and your own DeepSeek account.</p>
        <div className="actions">
          <a className="button button--primary" href="https://akos-mu.vercel.app/" target="_blank" rel="noreferrer">View expected result ↗</a>
          <a className="button" href="https://github.com/rollie1212/akos-new" target="_blank" rel="noreferrer">View reference repository ↗</a>
        </div>
      </section>

      <section className="section">
        <div className="process-list">
          {steps.map((step) => (
            <article key={step.number} className="process-step">
              <div><span style={{ fontFamily: "var(--font-mono)", fontSize: 44, fontWeight: 720, color: "var(--line-strong)", lineHeight: 1 }}>{step.number}</span></div>
              <div>
                <h3 style={{ fontSize: 24, marginBottom: 14 }}>{step.title}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.65, margin: 0 }}>{step.description}</p>
                {step.actionUrl ? <div style={{ marginTop: 22 }}><a className="button button--primary" href={step.actionUrl} target={step.actionUrl.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">{step.actionLabel}</a></div> : null}
              </div>
              <div style={{ background: "var(--faint)", border: "1px solid var(--line)", borderRadius: 10, padding: 18 }}>
                <strong style={{ display: "block", color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>Completion check</strong>
                <span style={{ color: "var(--ink-soft)", fontSize: 14 }}>Complete and save this step before continuing.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--faint)" }}>
        <p className="eyebrow">Expected result</p>
        <h2>Same foundation, personal content.</h2>
        <p className="summary" style={{ fontSize: 18 }}>The final website should use the AKOS design, display the user’s verified career data and provide an optional AI assistant grounded in the user’s Markdown files.</p>
      </section>

      <SupportFooter />
    </main>
  );
}
