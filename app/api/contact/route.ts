import { NextResponse } from "next/server";
import { getMailgunClient } from "@/app/mailgun";

export const runtime = "nodejs";

type ContactRequest = {
  name?: unknown;
  contact?: unknown;
  age?: unknown;
  program?: unknown;
  message?: unknown;
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const name = readText(body.name, 120);
  const contact = readText(body.contact, 200);
  const age = readText(body.age, 30) || "Belirtilmedi";
  const program = readText(body.program, 120) || "Belirtilmedi";
  const message = readText(body.message, 3000) || "Mesaj bırakılmadı";

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Ad soyad ve iletişim bilgisi zorunludur." },
      { status: 400 },
    );
  }

  const domain = process.env.MAILGUN_DOMAIN;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!domain || !to) {
    console.error("Mailgun domain or contact recipient is not configured");
    return NextResponse.json(
      { error: "E-posta servisi yapılandırılmamış." },
      { status: 500 },
    );
  }

  try {
    const mg = getMailgunClient();
    await mg.messages.create(domain, {
      from:
        process.env.MAILGUN_FROM_EMAIL ||
        `Victory Academy Website <postmaster@${domain}>`,
      to: [to],
      subject: `Victory Academy bilgi talebi — ${name.replace(/[\r\n]/g, " ")}`,
      text: [
        `Ad Soyad: ${name}`,
        `İletişim: ${contact}`,
        `Öğrenci yaşı: ${age}`,
        `İlgilenilen program: ${program}`,
        "",
        "Mesaj:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mailgun send failed", error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 502 },
    );
  }
}
