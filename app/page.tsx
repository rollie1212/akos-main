import React from "react";
import { getSiteConfig } from "@/lib/siteConfig";
import { getProfile } from "@/lib/profile";
import ProductLandingView from "@/components/ProductLandingView";
import PortfolioView from "@/components/PortfolioView";
import ValidationErrorView from "@/components/ValidationErrorView";

export default function Home() {
  const config = getSiteConfig();
  const isPortfolio = config.mode === "portfolio";

  if (isPortfolio) {
    const { success, data, error } = getProfile();

    if (!success || !data) {
      return <ValidationErrorView error={error || "Could not load the portfolio data."} />;
    }

    return <PortfolioView data={data} />;
  }

  return <ProductLandingView />;
}
