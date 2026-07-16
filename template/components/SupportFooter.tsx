import React from "react";

export default function SupportFooter() {
  return (
    <footer className="site-footer compact-footer" id="support-footer" style={{ borderTop: "1px solid var(--line)", padding: "56px 28px 76px", marginTop: "auto" }}>
      <div>
        <strong style={{ fontSize: "16px", fontWeight: 700, color: "var(--ink)", fontFamily: "var(--font-display)" }}>Personal Site</strong>
        <p style={{ color: "var(--muted)", margin: "8px 0 0", fontSize: "14px" }}>Career data owned by the profile author.</p>
      </div>
      <div className="site-footer__links" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <a href="https://github.com/rollie1212/akos-main" target="_blank" rel="noreferrer" style={{ color: "var(--muted)", fontSize: "13.5px", fontWeight: "550" }}>Powered by AKOS Core ↗</a>
      </div>
    </footer>
  );
}
