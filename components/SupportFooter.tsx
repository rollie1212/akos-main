import React from "react";

interface SupportFooterProps {
  isPortfolio?: boolean;
}

export default function SupportFooter({ isPortfolio = false }: SupportFooterProps) {
  const supportUrl = "https://akos-core.vercel.app/support";

  return (
    <footer className="site-footer compact-footer" id="support-footer" style={{ borderTop: "1px solid var(--line)", padding: "56px 28px 76px", marginTop: "auto" }}>
      <div>
        <strong style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink)", fontFamily: "var(--font-display)" }}>
          {isPortfolio ? "Personal Site" : "AKOS Core"}
        </strong>
        <p style={{ color: "var(--muted)", margin: "8px 0 0", fontSize: "14px" }}>
          {isPortfolio ? "All rights reserved." : "Built with AKOS Core. Your career data belongs to you."}
        </p>
      </div>
      <div className="site-footer__links" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {isPortfolio ? (
          <a
            href="https://github.com/rollie1212/akos-core"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--muted)",
              fontSize: "13.5px",
              fontWeight: "550",
            }}
          >
            Powered by AKOS Core ↗
          </a>
        ) : (
          <a
            href={supportUrl}
            className="support-link"
            style={{
              color: "var(--accent)",
              fontWeight: "720",
              fontSize: "14px",
              borderBottom: "1px solid var(--line-strong)",
              paddingBottom: "2px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Support AKOS development
          </a>
        )}
      </div>
    </footer>
  );
}
