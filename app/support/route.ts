import { NextResponse } from "next/server";

const projectUrl = "https://github.com/rollie1212/akos-main";

export function GET() {
  const supportUrl = process.env.BUY_ME_A_COFFEE_URL?.trim();

  if (supportUrl) {
    return NextResponse.redirect(supportUrl, 307);
  }

  return NextResponse.redirect(projectUrl, 307);
}