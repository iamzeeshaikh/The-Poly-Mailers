/**
 * One SMTP sender for /api/order/. Reads the same SMTP_* variables the quote
 * endpoint uses, from process.env at request time so nothing is inlined into a
 * build artefact. The From address is always ours; the buyer goes in Reply-To.
 */
import nodemailer from 'nodemailer';
import { BRAND } from './site';

const env = (key: string) =>
  String((typeof process !== 'undefined' ? process.env?.[key] : undefined) ?? '').trim();

const config = () => {
  const port = Number(env('SMTP_PORT') || 587);
  return {
    host: env('SMTP_HOST'),
    port,
    secure: env('SMTP_SECURE') ? env('SMTP_SECURE').toLowerCase() === 'true' : port === 465,
    user: env('SMTP_USER'),
    pass: env('SMTP_PASS').replace(/\s+/g, ''),
    fromName: env('SMTP_FROM_NAME') || BRAND.name,
    fromEmail: env('SMTP_FROM_EMAIL') || env('SMTP_USER') || BRAND.email,
  };
};

export const smtpConfigured = () => {
  const smtp = config();
  return Boolean(smtp.host && smtp.user && smtp.pass);
};

let transport: nodemailer.Transporter | undefined;
const mailer = () => {
  const smtp = config();
  transport ||= nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    requireTLS: !smtp.secure,
    auth: { user: smtp.user, pass: smtp.pass },
  });
  return transport;
};

const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export type Mail = {
  to: string | string[];
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Array<{ filename: string; content: Buffer; contentType?: string }>;
};

export async function sendMail(mail: Mail) {
  const smtp = config();
  const receipt = await mailer().sendMail({
    from: { name: smtp.fromName, address: smtp.fromEmail },
    to: mail.to,
    replyTo: mail.replyTo || undefined,
    subject: oneLine(mail.subject).slice(0, 180),
    text: mail.text,
    html: mail.html,
    attachments: mail.attachments,
  });
  return { accepted: receipt.accepted, rejected: receipt.rejected };
}
