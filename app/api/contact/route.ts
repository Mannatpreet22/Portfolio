// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

interface ContactFormData {
  firstname: string,
  lastname? : string,
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, email, message } = (await request.json()) as ContactFormData

    if (!firstname || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Mail options
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      subject: `New contact form submission from ${firstname} ${lastname ?? ''}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${firstname} ${lastname ?? ''} (${email})</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}