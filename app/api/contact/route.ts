import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parse = contactSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ ok: false, errors: parse.error.flatten() }, { status: 400 });
  }
  // Here you could send an email or store in DB. We just fake success.
  return NextResponse.json({ ok: true });
}
