import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";

const steps = [
  {
    number: "01",
    title: "Create an empty personal repository",
    description: "Create a new GitHub repository for your portfolio. Keep akos-main as the product source and use your new repository only for your personal AKOS website.",
  },
  {
    number: "02",
    title: "Copy the contents of /template",
    description: "Open the template folder in akos-main and copy its contents into the root of your new repository. package.json, app, components and career-data must be at repository root — not inside another template folder.",
    actionLabel: "Open the template folder ↗",
    actionUrl: "https://github.com/rollie1212/akos-main/tree/main/template",
  },
  {
    number: "03",
    title: "Collect your source materials",
    description: "Prepare your current CV, LinkedIn text, project links, verified outcomes, education, languages and claim boundaries. More verified material produces a stronger profile.",
  },
  {
    number: "04",
    title: "Run the AKOS prompt workflow",
    description: "Use the guided prompts to extract facts, answer clarification questions, generate profile.json and audit every public claim before publishing.",
    actionLabel: "View prompt workflow",
    actionUrl: "/prompts",
  },
  {
    number: "05",
    title: "Replace career-data/profile.json",
    description: "Paste the validated JSON into career-data/profile.json. This file generates the main portfolio: positioning, capabilities, experience, evidence and projects.",
  },
  {
    number: "06",
    title: "Create the Markdown knowledge base",
    description: "Add factual .md files under knowledge/. Use separate files for experience, projects, skills, working style and claim boundaries. These files ground the optional AI assistant.",
    actionLabel: "Read the template instructions ↗",
    actionUrl: "https://github.com/rollie1212/akos-main/blob/main/template/README.md",
  },
  {
    number: "07",
    title: "Deploy and add your DeepSeek key",
    description: "Import the personal repository into Vercel. In Project Settings → Environment Variables add DEEPSEEK_API_KEY with your own private key, then redeploy. Never commit the key and never use the NEXT_PUBLIC_ prefix.",
  },
  {
    number: "08",
    title: "Run the final acceptance check",
    description: "Confirm that the portfolio looks complete, every link works, the assistant answers from Markdown, unsupported questions are not invented and the AKOS support attribution remains in the footer.",
  },
];

export default function GetStartedPage() {
  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      <section className="page-hero">
        <p className="eyebrow">Onboarding guide</p>
        <h1>From source material to a complete AKOS website.</h1>
        <p className="summary">
          Follow the workflow to create a portfolio based on the same foundation as the reference AKOS implementation, with your own data, Markdown knowledge base and DeepSeek account.
        </p>
        <div className="actions">
          <a className="button button--primary" href="https://akos-mu.vercel.app/" target="_blank" rel="noreferrer">View expected result ↗</a>
          <a className="button" href="https://github.com/rollie1212/akos-new" target="_blank" rel="noreferrer">View reference repository ↗</a>
        </div>
      </section>

      <section className="section">
        <div className="process-list">
          {steps.map((step) => (
            <article key={step.number} className="process-step">
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 44, fontWeight: 720, color: "var(--line-strong)", lineHeight: 1 }}>{step.number}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 24, marginBottom: 14 }}>{step.title}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.65, margin: 0 }}>{step.description}</p>
                {step.actionUrl ? (
                  <div style={{ marginTop: 22 }}>
                    <a className="button button--primary" href={step.actionUrl} target={step.actionUrl.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">{step.actionLabel}</a>
                  </div>
                ) : null}
              </div>
              <div style={{ background: "var(--faint)", border: "1px solid var(--line)", borderRadius: 10, padding: 18 }}>
                <strong style={{ display: "block", color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>Completion check</strong>
                <span style={{ color: "var(--ink-soft)", fontSize: 14 }}>Do not continue until this step is complete and saved in GitHub or Vercel.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--faint)" }}>
        <p className="eyebrow">Expected result</p>
        <h2>Same system foundation, personal content.</h2>
        <p className="summary" style={{ fontSize: 18 }}>
          The finished website should use the AKOS editorial design, render the user’s verified career data, include evidence-backed projects and optionally provide an AI assistant grounded in the user’s Markdown files. It should not copy Andrii’s personal content.
        </p>
      </section>

      <SupportFooter />
    </main>
  );
}
