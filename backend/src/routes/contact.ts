import { Router, type Request, type Response } from "express";
import {
  contactSchema,
  type ContactFieldErrors,
} from "../validations/contact";
import { prisma } from "../lib/prisma";
import { sendContactNotification } from "../lib/email";
import { rateLimit } from "../lib/rate-limit";

export const contactRouter = Router();

/**
 * POST /api/contact
 * Validate → persist → notify. Persistence is the source of truth, so a
 * failed email never loses a message.
 */
contactRouter.post("/", async (req: Request, res: Response) => {
  const body = req.body ?? {};

  // 1. Honeypot — bots fill hidden fields. Pretend success so they don't adapt.
  if (typeof body.company === "string" && body.company.trim()) {
    return res.status(200).json({
      ok: true,
      message: "Thanks! Your message has been sent.",
    });
  }

  // 2. Rate limit per client IP.
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (!rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 }).ok) {
    return res.status(429).json({
      ok: false,
      message:
        "You're sending messages a little fast. Please try again shortly.",
    });
  }

  // 3. Validate.
  const parsed = contactSchema.safeParse({
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message,
  });

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors as ContactFieldErrors;
    return res.status(400).json({
      ok: false,
      message: "Please fix the highlighted fields.",
      errors,
    });
  }

  const data = parsed.data;

  // 4. Persist.
  try {
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject?.trim() ? data.subject : null,
        message: data.message,
      },
    });
  } catch (error) {
    console.error("[contact] Failed to save message:", error);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong saving your message. Please try again.",
    });
  }

  // 5. Notify (best-effort — the message is already saved).
  await sendContactNotification(data);

  return res.status(200).json({
    ok: true,
    message: "Thanks! Your message has been sent — I'll be in touch soon.",
  });
});
