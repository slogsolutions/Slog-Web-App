import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'slogcounsellor@gmail.com', // your gmail
      pass: process.env.SMTP_PASS, // app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "slogcounsellor@gmail.com",
      subject: "New Enquiry Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
