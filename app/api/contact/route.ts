import { NextResponse } from "next/server"
import { sendContactEmail } from "@/app/actions/contact"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Send the email using the server action
    const result = await sendContactEmail({
      name,
      email,
      message,
      recipientEmail: "sainikhilreddy.kura@slu.edu",
    })

    if (result.success) {
      return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ error: result.error || "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
