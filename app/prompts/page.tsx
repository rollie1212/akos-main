import React from "react";
import SiteNav from "@/components/SiteNav";
import SupportFooter from "@/components/SupportFooter";
import CopyButton from "@/components/CopyButton";

const promptWorkflow = [
  {
    id: "prompt-1",
    title: "Stage 1 — Extract Verified Facts",
    purpose: "Extract factual professional information from your raw materials without rewriting, improving, or exaggerating it.",
    whenToUse: "Run this first, pasting your existing CV, LinkedIn sections, and raw project notes into the AI chat.",
    expectedOutput: "A structured, non-embellished factual summary of your professional milestones, tools, and missing information.",
    warning: "Do not let the AI invent dates, metrics, tools, employers, or seniority. Flag all uncertain claims.",
    body: `You are helping me build a factual career knowledge base for AKOS.

I will provide my CV, LinkedIn profile, project notes, portfolio links and other professional materials.

Your first task is not to rewrite my resume.

Extract only the facts that are explicitly supported by the provided material.

Organize the information into:

1. Personal profile
2. Professional positioning currently supported by the evidence
3. Employment history
4. Independent products and projects
5. Responsibilities
6. Achievements and measurable results
7. Tools and technologies
8. Product and business capabilities
9. Education
10. Certifications
11. Languages
12. Professional links
13. Missing or unclear information
14. Potential contradictions

Rules:

- Do not invent facts.
- Do not improve job titles.
- Do not invent metrics.
- Do not assume technical depth.
- Do not merge separate projects.
- Clearly distinguish employment from independent projects.
- Mark uncertain information as uncertain.
- Do not generate the final JSON yet.

After analysing the material, return a structured factual summary.`,
  },
  {
    id: "prompt-2",
    title: "Stage 2 — Ask Clarification Questions",
    purpose: "Identify and resolve critical information gaps before generating the public profile file.",
    whenToUse: "Run this second, in the same conversation, after reviewing the extracted facts from Stage 1.",
    expectedOutput: "A list of up to 12 narrow, targeted questions to fill missing gaps in your career history.",
    warning: "Answer these questions truthfully. The quality of your final portfolio depends directly on the integrity of these answers.",
    body: `Based on the extracted career facts, ask only the clarification questions that are necessary to create an accurate AKOS profile.

Prioritise questions about:

- my exact role;
- my personal contribution;
- whether a project was a concept, prototype, MVP or production product;
- dates;
- employment versus independent work;
- tools I personally used;
- measurable results;
- team size and collaboration;
- target professional role;
- responsibilities I can defend during an interview;
- claims that appear exaggerated or unclear.

Ask a maximum of 12 questions.

Do not ask questions that can already be answered from the supplied material.

Do not generate profile.json yet.`,
  },
  {
    id: "prompt-3",
    title: "Stage 3 — Generate AKOS profile.json",
    purpose: "Compile all verified facts and clarification answers into a valid, compliant AKOS JSON file.",
    whenToUse: "Run this third, once you have answered the clarification questions from Stage 2.",
    expectedOutput: "A single, clean, valid JSON block that complies perfectly with the AKOS JSON schema.",
    warning: "Ensure there are no markdown fences (like ```json) in the raw file, and that all URLs start with https://.",
    body: `Using the verified source material and my clarification answers, create a valid AKOS profile.

Return only valid JSON.

Do not include Markdown fences, comments or explanations.

Rules:

1. Do not invent employers, dates, metrics, tools, clients, responsibilities or achievements.
2. Keep all claims factual and interview-safe.
3. Use concise professional English.
4. Separate employment from independent projects.
5. Do not position me as more senior or technical than the evidence supports.
6. Each experience entry must include evidence points.
7. Each project must describe the problem, product and my contribution.
8. Use an empty string for a missing optional URL.
9. Include only public links that I provided.
10. Make the summary suitable for a professional portfolio, not a generic motivational bio.

Use this exact structure:

{
  "name": "Full name",
  "headline": "Primary professional positioning",
  "location": "City, Country",
  "summary": "Concise evidence-based professional summary",
  "links": [
    {
      "label": "LinkedIn",
      "url": "https://..."
    }
  ],
  "capabilities": [
    "Capability 1",
    "Capability 2"
  ],
  "experience": [
    {
      "company": "Company name",
      "role": "Role title",
      "period": "2022–2025",
      "summary": "What the role involved",
      "evidence": [
        "Verified responsibility, contribution or result"
      ]
    }
  ],
  "projects": [
    {
      "name": "Project name",
      "description": "Problem, product and personal contribution",
      "skills": [
        "Product discovery",
        "AI-assisted prototyping"
      ],
      "url": "https://..."
    }
  ]
}`,
  },
  {
    id: "prompt-4",
    title: "Stage 4 — Run Factual Audit",
    purpose: "Perform a final rigorous verification sweep of the generated JSON file against your original source files.",
    whenToUse: "Run this last, before saving your JSON, to guarantee everything is 100% interview-safe and factual.",
    expectedOutput: "A validation checklist confirming correctness, highlighting parts that might look overstated, and a publication readiness status.",
    warning: "If any claims are flagged as unsupported or exaggerated, address them before committing to GitHub.",
    body: `Audit this AKOS profile against all source materials and clarification answers.

Check for:

- invented facts;
- unsupported metrics;
- incorrect dates;
- exaggerated seniority;
- vague ownership claims;
- tools not confirmed by the user;
- responsibilities that belonged to the wider team;
- production claims for prototypes;
- technical depth not supported by evidence;
- duplicated information;
- generic language;
- statements that would be difficult to defend during an interview;
- accidental exposure of private information;
- invalid or suspicious links;
- JSON formatting errors.

Return:

1. Critical corrections
2. Optional improvements
3. Claims requiring user confirmation
4. Final publication readiness: READY or NOT READY

Do not rewrite the full profile unless I explicitly ask.`,
  },
];

export default function PromptsPage() {
  return (
    <main style={{ background: "#ffffff", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      {/* Hero */}
      <section className="page-hero">
        <p className="eyebrow">
          AI Prompt Pipeline
        </p>
        <h1>
          Structured career discovery.
        </h1>
        <p className="summary">
          Our workflow extracts facts, resolves ambiguities, generates your structured database, and audits every claim before publication.
        </p>
      </section>

      {/* Main content list */}
      <section className="section">
        <div className="process-list">
          {promptWorkflow.map((prompt, index) => (
            <article className="process-step" key={prompt.id} style={{ display: "grid", gap: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: "600", display: "block", marginBottom: "8px" }}>
                    STAGE 0{index + 1}
                  </span>
                  <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 690, margin: 0 }}>{prompt.title}</h2>
                </div>
                <CopyButton text={prompt.body} />
              </div>

              <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", fontSize: "15px", lineHeight: "1.5" }}>
                <div>
                  <strong style={{ display: "block", color: "var(--ink)", marginBottom: "6px" }}>Purpose</strong>
                  <p style={{ color: "var(--ink-soft)", margin: 0 }}>{prompt.purpose}</p>
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--ink)", marginBottom: "6px" }}>When to run</strong>
                  <p style={{ color: "var(--ink-soft)", margin: 0 }}>{prompt.whenToUse}</p>
                </div>
                <div>
                  <strong style={{ display: "block", color: "var(--ink)", marginBottom: "6px" }}>Expected output</strong>
                  <p style={{ color: "var(--ink-soft)", margin: 0 }}>{prompt.expectedOutput}</p>
                </div>
              </div>

              {/* Warning box */}
              <div style={{ 
                background: "#fff9f0", 
                border: "1px solid #ffd8a8", 
                borderRadius: "8px", 
                padding: "16px 20px", 
                fontSize: "14px", 
                lineHeight: 1.5, 
                color: "#862e00",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: "2px", flexShrink: 0 }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div>
                  <strong>Strict Compliance Rule:</strong> {prompt.warning}
                </div>
              </div>

              <div style={{ marginTop: "12px" }}>
                <pre style={{
                  background: "var(--faint)",
                  border: "1px solid var(--line)",
                  borderRadius: "12px",
                  padding: "24px",
                  overflowX: "auto",
                  margin: 0,
                  maxHeight: "360px"
                }}>
                  <code style={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    fontSize: "13.5px",
                    lineHeight: "1.6",
                    color: "var(--ink-soft)",
                    whiteSpace: "pre-wrap"
                  }}>
                    {prompt.body}
                  </code>
                </pre>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="section section--split">
        <div>
          <p className="eyebrow">Interactive Guidelines</p>
          <h2>
            One single, continuous AI conversation.
          </h2>
        </div>
        <div className="section__intro">
          <p style={{ marginBottom: "20px" }}>
            For optimal results, paste these four prompts sequentially in a <strong>single continuous session</strong> with ChatGPT, Claude, or Gemini. 
          </p>
          <ol style={{ paddingLeft: "20px", display: "grid", gap: "12px" }}>
            <li>
              <strong>Stage 1:</strong> Feed the AI your existing raw resumes, LinkedIn text, and notes. Wait for it to analyze and output verified facts.
            </li>
            <li>
              <strong>Stage 2:</strong> Execute Prompt 2 to receive tailored questions filling details on timeline boundaries and personal contributions.
            </li>
            <li>
              <strong>Stage 3:</strong> Provide answers. Execute Prompt 3 to receive the structural JSON representation matching the AKOS schema.
            </li>
            <li>
              <strong>Stage 4:</strong> Run Prompt 4 to audit and check that no claims are invented, exaggerated, or misleading before deploying.
            </li>
          </ol>
        </div>
      </section>

      <SupportFooter />
    </main>
  );
}
