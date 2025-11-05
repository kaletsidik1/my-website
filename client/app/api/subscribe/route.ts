import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

async function sendSubscribeEmail(email: string) {
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
    secure: port === 465,
    auth: { user, pass },
  });

  const info = await transporter.sendMail({
    from: user,
    to,
    subject: `New newsletter subscription: ${email}`,
    text: `Please add ${email} to the newsletter list.`,
  });

  return info;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ ok: false, error: 'Missing email' }, { status: 400 });
    }
    // Protect against subscriptions that use the site owner's email address
    const ownerEmail = 'findkal.here@gmail.com';
    const normalize = (s: string) => String(s || '').trim().toLowerCase();
    const protectedEmails = new Set([
      normalize(ownerEmail),
      normalize(process.env.SMTP_USER || ''),
      normalize(process.env.TO_EMAIL || ''),
    ]);

    if (protectedEmails.has(normalize(email))) {
      return NextResponse.json({ ok: false, error: 'Subscriptions from this email address are not allowed.' }, { status: 400 });
    }

    await sendSubscribeEmail(email);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Subscribe API error:', err?.message || err);
    return NextResponse.json({ ok: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}
