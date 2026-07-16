import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";

export default function GetStartedPage() {
  const steps = [
    {
      number: "01",
      title: "Create your personal repository",
      description: "Create an independent copy of AKOS Core directly in your personal GitHub account. The code, repository, career data, and eventual deployment remain entirely under your control.",
      actionLabel: "Use GitHub Template ↗",
      actionUrl: "https://github.com/rollie1212/akos-core/generate",
    },
    {
      number: "02",
      title: "Collect your professional source materials",
      description: "Gather your existing professional records to feed the AI workflow. A current CV or LinkedIn profile is enough to start, but richer documentation produces a highly precise result.",
      checklist: [
        "Current and previous CV versions",
        "LinkedIn sections: About, Experience, Education, and Skills",
        "Project details: personal role, timeline, team sizes, and product URLs",
        "Factual outcomes: metrics, certificates, and case-study markdown notes"
      ]
    },
    {
      number: "03",
      title: "Run the guided AI prompt workflow",
      description: "Open ChatGPT, Claude, or Gemini and execute our four-stage prompt workflow in order. It extracts verified facts, resolves timeline gaps, compiles compliant JSON, and audits the result.",
      actionLabel: "View Prompt Workflow ↗",
      actionUrl: "/prompts",
    },
    {
      number: "04",
      title: "Generate your profile.json file",
      description: "The third stage of the prompt workflow outputs a valid JSON block containing your structured career data. This acts as the secure offline database for your entire portfolio website.",
    },
    {
      number: "05",
      title: "Replace the template demo data",
      description: "Open the file career-data/profile.json in your new GitHub repository, click the pencil icon to edit, paste your newly generated JSON, and click 'Commit changes'.",
      warning: "Ensure your JSON does not have trailing commas or markdown syntax blocks."
    },
    {
      number: "06",
      title: "Deploy your portfolio to Vercel",
      description: "Import your personal GitHub repository into Vercel for free serverless hosting. In 30 seconds, Vercel compiles and publishes your live personal career portfolio website.",
      steps: [
        "1. Open Vercel and sign in using your GitHub account.",
        "2. Click 'Add New Project' and select your personalized AKOS repository.",
        "3. Keep the default Next.js build settings unchanged.",
        "4. Click 'Deploy' and wait for compilation to complete.",
        "5. Open your newly generated public Vercel URL."
      ]
    },
    {
      number: "07",
      title: "Update your website via simple commits",
      description: "Whenever you log new milestones, complete projects, or earn certificates, simply edit career-data/profile.json in your GitHub repository. Commit changes, and Vercel automatically redeploys.",
    }
  ];

  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      {/* Hero Section */}
      <section className="page-hero">
        <p className="eyebrow">
          Onboarding Guide
        </p>
        <h1>
          Your portable career website in seven steps.
        </h1>
        <p className="summary">
          A clear, non-technical walkthrough for structuring your professional profile, deploying to Vercel, and owning your data forever.
        </p>
      </section>

      {/* Main Steps List */}
      <section className="section">
        <div className="process-list">
          {steps.map((step) => (
            <article key={step.number} className="process-step">
              <div>
                <span style={{ 
                  fontFamily: "var(--font-mono, monospace)", 
                  fontSize: "48px", 
                  fontWeight: "720", 
                  color: "var(--line-strong)",
                  lineHeight: 1
                }}>
                  {step.number}
                </span>
              </div>
              
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "680", margin: "0 0 16px" }}>{step.title}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                
                {step.actionUrl && (
                  <div style={{ marginTop: "24px" }}>
                    <a href={step.actionUrl} target={step.actionUrl.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="button button--primary">
                      {step.actionLabel}
                    </a>
                  </div>
                )}
              </div>

              <div>
                {/* Right rail supporting info */}
                {step.checklist && (
                  <div style={{ background: "var(--faint)", border: "1px solid var(--line)", borderRadius: "8px", padding: "20px" }}>
                    <strong style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)", display: "block", marginBottom: "12px" }}>
                      Source Checklist
                    </strong>
                    <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", color: "var(--ink-soft)", display: "grid", gap: "8px" }}>
                      {step.checklist.map((item, idx) => (
                        <li key={idx} style={{ lineHeight: 1.4 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.warning && (
                  <div style={{ background: "#fff9f0", border: "1px solid #ffd8a8", borderRadius: "8px", padding: "18px", fontSize: "13.5px", color: "#862e00", lineHeight: 1.5 }}>
                    <strong>Warning:</strong> {step.warning}
                  </div>
                )}

                {step.steps && (
                  <div style={{ background: "var(--faint)", border: "1px solid var(--line)", borderRadius: "8px", padding: "20px" }}>
                    <strong style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)", display: "block", marginBottom: "12px" }}>
                      Deployment Checklist
                    </strong>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, fontSize: "13.5px", color: "var(--ink-soft)", display: "grid", gap: "10px" }}>
                      {step.steps.map((item, idx) => (
                        <li key={idx} style={{ lineHeight: 1.4 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Troubleshooting FAQ Section */}
      <section className="section" style={{ background: "var(--faint)" }}>
        <div className="section__header" style={{ marginBottom: "48px" }}>
          <p className="eyebrow">Self-Service</p>
          <h2>
            Troubleshooting Common Errors
          </h2>
          <p className="summary" style={{ fontSize: "18px", marginTop: "16px" }}>
            The AKOS compiler performs strict schema checks before building to keep your public portfolio completely error-free.
          </p>
        </div>

        <div className="additional-work__grid">
          <div style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "12px" }}>JSON formatting failures</h3>
            <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
              The most common issue is a stray trailing comma (e.g., at the end of the last list item) or using single quotes (<code>'</code>) instead of standard double quotes (<code>"</code>). Check your file in a standard JSON validator before saving.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "12px" }}>Missing required fields</h3>
            <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
              The compiler expects all required keys to exist: <code>name</code>, <code>headline</code>, <code>location</code>, <code>summary</code>, <code>links</code>, <code>capabilities</code>, <code>experience</code>, and <code>projects</code>. If any block is missing, fill it with an empty array or string.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: "12px", padding: "28px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "680", marginBottom: "12px" }}>Broken https:// constraints</h3>
            <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
              For security and performance, all links in your database (LinkedIn, GitHub, project URLs) must start with a valid secure protocol prefix (<code>https://</code>). The validator blocks raw domains without the correct prefix.
            </p>
          </div>
        </div>
      </section>

      <SupportFooter />
    </main>
  );
}
