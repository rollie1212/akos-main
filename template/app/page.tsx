import React from "react";
import { getProfile } from "../lib/profile";
import PortfolioView from "../components/PortfolioView";

export default function Home() {
  const result = getProfile();

  if (!result.success) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff", color: "#0e0f11", padding: "48px 32px", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "680px", margin: "40px auto 0" }}>
          <p style={{ textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.1em", fontWeight: "bold", color: "red" }}>
            Configuration Error
          </p>
          <h1 style={{ fontSize: "36px", fontWeight: "700", marginTop: "12px", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            AKOS Template could not load your profile
          </h1>
          <p style={{ fontSize: "16px", color: "#2d3036", lineHeight: 1.6 }}>
            There is an error with the JSON inside <code>career-data/profile.json</code>:
          </p>
          <pre style={{
            background: "#f2f1ed",
            border: "1px solid #e6e4de",
            borderRadius: "8px",
            padding: "20px",
            whiteSpace: "pre-wrap",
            fontSize: "14px",
            color: "#2d3036",
            lineHeight: 1.5,
            margin: "24px 0"
          }}>
            <code>{result.error}</code>
          </pre>
          <p style={{ fontSize: "14px", color: "#717680" }}>
            Ensure your JSON is correctly formatted, with matching quotation marks and no trailing commas.
          </p>
        </div>
      </main>
    );
  }

  return <PortfolioView data={result.data!} />;
}
export const dynamic = "force-dynamic";
