import { z } from "zod";

/**
 * Shared contact-form validation. Used by both the client form (for instant
 * feedback) and the server action (as the source of truth), so the rules
 * live in exactly one place.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address.")
    .max(200),
  subject: z
    .string()
    .trim()
    .max(150, "Subject is a bit too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more — at least 10 characters.")
    .max(5000, "That message is very long; please trim it down."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Field-level errors keyed by input name, as returned to the form. */
export type ContactFieldErrors = Partial<
  Record<keyof ContactInput, string[]>
>;
