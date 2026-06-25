import { Resend } from "resend";
import type { ContactInput } from "../validations/contact";

/**
 * Email delivery via Resend. Kept isolated from business logic so the
 * delivery provider can be swapped without touching the contact action.
 */

const resendApiKey = process.env.RESEND_API_KEY;

// Where contact submissions are delivered (your inbox).
const toEmail = process.env.CONTACT_TO_EMAIL;

// Verified sender. In Resend test mode you can use "onboarding@resend.dev",
// which delivers to the account owner's email.
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Send a notification email to the site owner with the submitted message.
 * Returns whether the email was actually dispatched.
 */
export async function sendContactNotification(
  data: ContactInput
): Promise<{ delivered: boolean; error?: string }> {
  if (!resend || !toEmail) {
    // Misconfiguration shouldn't crash the request; the message is still
    // persisted to the database. Surface it in server logs instead.
    console.warn(
      "[email] RESEND_API_KEY or CONTACT_TO_EMAIL not set — skipping email delivery."
    );
    return { delivered: false, error: "Email is not configured." };
  }

  const subject = data.subject?.trim()
    ? `Portfolio contact: ${data.subject}`
    : `New portfolio message from ${data.name}`;

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #2b2a25;">
      <h2 style="margin: 0 0 16px;">New contact-form message</h2>
      <p style="margin: 0 0 4px;"><strong>From:</strong> ${escapeHtml(data.name)}</p>
      <p style="margin: 0 0 4px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${
        data.subject?.trim()
          ? `<p style="margin: 0 0 4px;"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>`
          : ""
      }
      <hr style="border: none; border-top: 1px solid #e0d8c6; margin: 16px 0;" />
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: data.email,
    subject,
    html,
  });

  if (error) {
    console.error("[email] Resend error:", error);
    return { delivered: false, error: error.message };
  }

  return { delivered: true };
}
