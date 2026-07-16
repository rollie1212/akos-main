import React from "react";
import SupportFooter from "./SupportFooter";

interface ValidationErrorViewProps {
  error: string;
}

export default function ValidationErrorView({ error }: ValidationErrorViewProps) {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff", color: "var(--ink)" }}>
      <nav className="topbar">
        <a href="/" className="brand">AKOS Core</a>
        <div>
          <a href="/get-started">Get started</a>
          <a href="/prompts">Prompts</a>
        </div>
      </nav>

      <section className="page-hero" style={{ paddingBottom: "48px" }}>
        <p className="eyebrow" style={{ color: "red" }}>Configuration Error</p>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1 }}>AKOS could not load your career profile.</h1>
        <p className="summary" style={{ color: "var(--ink-soft)", marginTop: "16px" }}>
          There is a syntax or validation issue in your <code>career-data/profile.json</code> file.
        </p>
      </section>

      <section className="section" style={{ background: "var(--faint)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "800px", padding: "28px 0" }}>
          <h3 style={{ color: "red", fontSize: "20px", marginBottom: "14px" }}>Error Details</h3>
          <pre style={{
            background: "#fff",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "20px",
            whiteSpace: "pre-wrap",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--ink-soft)",
            maxHeight: "320px",
            overflowY: "auto"
          }}>
            <code>{error}</code>
          </pre>

          <h3 style={{ marginTop: "32px", fontSize: "20px" }}>How to fix this:</h3>
          <ol style={{ paddingLeft: "20px", lineHeight: 1.8, color: "var(--ink-soft)" }}>
            <li>Open <code>career-data/profile.json</code> in your repository.</li>
            <li>Ensure it is valid JSON:
              <ul style={{ paddingLeft: "20px" }}>
                <li>Use standard double quotation marks (<code>"</code>) rather than single or curly quotes.</li>
                <li>Do not add trailing commas after the last item in lists or objects.</li>
                <li>Do not delete required fields: <code>name</code>, <code>headline</code>, <code>location</code>, <code>summary</code>, <code>links</code>, <code>capabilities</code>, <code>experience</code>, <code>projects</code>.</li>
              </ul>
            </li>
            <li>Run the prompt workflow again on the <a href="/prompts" style={{ textDecoration: "underline", color: "var(--accent)" }}>Prompts page</a> if you need to regenerate the JSON file.</li>
          </ol>
        </div>
      </section>

      <SupportFooter />
    </main>
  );
}
