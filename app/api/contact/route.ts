import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  subject?: string;
  message?: string;
  website?: string;
  consent?: boolean;
};
const clean = (value: unknown, max = 5000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    if (body.website) return NextResponse.json({ ok: true });
    const data = {
      name: clean(body.name, 100),
      email: clean(body.email, 180),
      phone: clean(body.phone, 50),
      location: clean(body.location, 120),
      subject: clean(body.subject, 180),
      message: clean(body.message),
    };
    if (
      !data.name ||
      !/^\S+@\S+\.\S+$/.test(data.email) ||
      !data.phone ||
      !data.subject ||
      data.message.length < 20 ||
      body.consent !== true
    )
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASSWORD,
      CONTACT_RECIPIENT,
    } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD)
      return NextResponse.json(
        { error: "Email delivery is not configured." },
        { status: 503 },
      );
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: SMTP_SECURE !== "false",
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });
    await transporter.sendMail({
      from: `Christian Charles Olsen Website <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT || SMTP_USER,
      replyTo: data.email,
      subject: `Website enquiry: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nLocation: ${data.location || "Not provided"}\n\n${data.message}`,
      html: `<h2>New website enquiry</h2><p><b>Name:</b> ${escapeHtml(data.name)}</p><p><b>Email:</b> ${escapeHtml(data.email)}</p><p><b>Phone:</b> ${escapeHtml(data.phone)}</p><p><b>Location:</b> ${escapeHtml(data.location || "Not provided")}</p><p><b>Subject:</b> ${escapeHtml(data.subject)}</p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character,
  );
}
