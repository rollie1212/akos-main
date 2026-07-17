import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";

const steps = [
  {
    number: "01",
    title: "Create your repository from the template",
    description: "Open the AKOS template and use GitHub's Use this template flow. GitHub creates a clean independent repository in your own account.",
    actionLabel: "Create from template ↗",
    actionUrl: "https://github.com/rollie1212/akos-template/generate",
  },
  {
    number: "02",
    title: "Collect your professional source material",
    description: "Prepare your CV, LinkedIn text, project notes, public links, education, languages, verified results and claim boundaries.",
  },
  {
    number: "03",
    title: "Run the AKOS prompt workflow",
    description: "Use the prompts to extract verified facts, resolve missing details, generate profile.json and audit the final claims.",
    actionLabel: "View prompt workflow ↗",
    actionUrl: "/prompts",
  },
  {
    number: "04",
    title: "Replace career-data/profile.json",
    description: "Paste the validated JSON into career-data/profile.json. This file generates the main portfolio content.",
  },
  {
    number: "05",
    title: "Replace the Markdown knowledge files",
    description: "Edit the files under knowledge/. Use separate documents for experience, projects, skills, working style and claim boundaries. These files ground the AI assistant.",
  },
  {
    number: "06",
    title: "Deploy to Vercel",
    description: "Import your new personal repository into Vercel and keep the default Next.js settings.",
  },
  {
    number: "07",
    title: "Add your DeepSeek key",
    description: "In Vercel Project Settings → Environment Variables add DEEPSEEK_API_KEY with your own private key. Never commit it and never use the NEXT_PUBLIC_ prefix. Redeploy after adding the key.",
  },
  {
    number: "08",
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
        <h1>Create your personal AKOS repository in one click.</h1>
        <p className="summary">Start from the standalone GitHub template, add verified career data and Markdown knowledge, then deploy with your own Vercel and DeepSeek accounts.</p>
        <div className="actions">
          <a className="button button--primary" href="https://github.com/rollie1212/akos-template/generate" target="_blank" rel="noreferrer">Use this template ↗</a>
          <a className="button" href="https://akos-mu.vercel.app/" target="_blank" rel="noreferrer">View expected result ↗</a>
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
        <p className="eyebrow">Repository roles</p>
        <h2>One product, one clean template, one personal reference.</h2>
        <p className="summary" style={{ fontSize: 18 }}><code>akos-main</code> contains the product and onboarding. <code>akos-template</code> creates user repositories. <code>akos-new</code> remains the personal reference implementation.</p>
      </section>

      <SupportFooter />
    </main>
  );
}
