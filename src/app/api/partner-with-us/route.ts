import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, designation, email, company, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'tusharsuthar081@gmail.com',
      subject: `${name} wants to join (Designation: ${designation})`,
      html: `
        <h2>Join Now Submission</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company / Laboratory:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message || 'No message provided.'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
