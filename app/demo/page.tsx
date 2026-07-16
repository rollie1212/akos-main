import React from "react";
import { getProfile } from "@/lib/profile";
import PortfolioView from "@/components/PortfolioView";
import ValidationErrorView from "@/components/ValidationErrorView";

export default function DemoPage() {
  const { success, data, error } = getProfile();

  if (!success || !data) {
    return <ValidationErrorView error={error || "Could not load the profile data."} />;
  }

  return <PortfolioView data={data} />;
}
