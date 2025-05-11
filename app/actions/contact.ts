"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  message: string
  recipientEmail: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.recipientEmail,
      replyTo: data.email,
      subject: `Portfolio Contact Form: Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #e94c89;">New Message from Your Portfolio</h2>
  <p><strong>From:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  </div>
  <p style="margin-top: 20px; font-size: 12px; color: #666;">This message was sent from your portfolio contact form.</p>
</div>
      `,
    }

    // If we're in development or don't have email credentials, log instead of sending
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || process.env.NODE_ENV === "development") {
      console.log("Email would be sent with the following data:", {
        to: data.recipientEmail,
        from: data.email,
        subject: `Portfolio Contact Form: Message from ${data.name}`,
        message: data.message,
      })
      return { success: true }
    }

    // Send the email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
