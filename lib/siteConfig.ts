import fs from "fs";
import path from "path";

export interface SiteConfig {
  mode: "product" | "portfolio";
  productHomeUrl: string;
  supportUrl: string;
}

const defaultConfig: SiteConfig = {
  mode: "product",
  productHomeUrl: "https://akos-core.vercel.app",
  supportUrl: "https://akos-core.vercel.app/support",
};

export function getSiteConfig(): SiteConfig {
  try {
    const filePath = path.join(process.cwd(), "config", "site.json");
    if (!fs.existsSync(filePath)) {
      return defaultConfig;
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    return {
      mode: json.mode === "product" ? "product" : "portfolio",
      productHomeUrl: json.productHomeUrl || defaultConfig.productHomeUrl,
      supportUrl: json.supportUrl || defaultConfig.supportUrl,
    };
  } catch (e) {
    return defaultConfig;
  }
}
