/** Client helpers for talking to the backend API. */

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/** Field-level validation errors returned by the backend. */
export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string[]>
>;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — left empty by real users. */
  company: string;
};

export type ContactApiResponse = {
  ok: boolean;
  message?: string;
  errors?: ContactFieldErrors;
};

/** POST a contact message to the backend. */
export async function postContactMessage(
  payload: ContactPayload
): Promise<ContactApiResponse> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as ContactApiResponse;
  return { ...data, ok: res.ok && data.ok !== false };
}
