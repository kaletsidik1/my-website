import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  // Read SMTP credentials from environment variables
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.TO_EMAIL || user;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is missing. Set SMTP_HOST, SMTP_USER and SMTP_PASS in environment.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  const info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to,
    subject: `New contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  });

  return info;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // Protect against forged submissions that attempt to use the site owner's email
    const ownerEmail = 'findkal.here@gmail.com';
    const normalize = (s: string) => String(s || '').trim().toLowerCase();
    const protectedEmails = new Set([
      normalize(ownerEmail),
      normalize(process.env.SMTP_USER || ''),
      normalize(process.env.TO_EMAIL || ''),
    ]);

    if (protectedEmails.has(normalize(email))) {
      return NextResponse.json({ ok: false, error: 'Submissions from this email address are not allowed.' }, { status: 400 });
    }

  await sendEmail({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err?.message || err);
    return NextResponse.json({ ok: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}
