import { NextResponse } from "next/server";

const centralSupportUrl = "https://akos-core.vercel.app/support";

export function GET(request: Request) {
  const supportUrl = process.env.BUY_ME_A_COFFEE_URL?.trim();
  const isCentralDeployment = new URL(request.url).hostname === "akos-core.vercel.app";

  if (supportUrl) {
    return NextResponse.redirect(supportUrl, 307);
  }

  if (!isCentralDeployment) {
    return NextResponse.redirect(centralSupportUrl, 307);
  }

  return NextResponse.redirect("https://akos-core.vercel.app/pricing", 307);
}
