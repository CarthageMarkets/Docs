import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      source: "waitlist",
    }),
  });

  if (!res.ok) {
    const data = await res.json();
    return NextResponse.json(
      { error: data.message || "Failed to subscribe" },
      { status: res.status }
    );
  }

  return NextResponse.json({ success: true });
}
