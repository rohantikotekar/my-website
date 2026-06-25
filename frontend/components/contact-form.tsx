"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { postContactMessage, type ContactFieldErrors } from "@/lib/api";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactFieldErrors;
  values?: { name: string; email: string; subject: string; message: string };
};

const initialContactState: ContactFormState = { status: "idle" };

/** Basic email shape check — non-empty local + domain with a dot. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Client action: posts the form to the backend API and maps the response. */
async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = {
    name: (formData.get("name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    subject: (formData.get("subject") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
  };

  // Validate the email before hitting the network.
  if (!EMAIL_RE.test(values.email.trim())) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
      errors: { email: ["Please enter a valid email address."] },
      values,
    };
  }

  try {
    const data = await postContactMessage({
      ...values,
      company: (formData.get("company") as string) ?? "",
    });

    if (data.ok) {
      return { status: "success", message: data.message };
    }
    return {
      status: "error",
      message: data.message ?? "Something went wrong. Please try again.",
      errors: data.errors,
      values,
    };
  } catch {
    return {
      status: "error",
      message: "Couldn't reach the server. Please try again in a moment.",
      values,
    };
  }
}

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={id} className="mt-1 text-xs text-red-600">
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialContactState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the fields once a submission succeeds.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — hidden from real users, off-screen and aria-hidden */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Hiker"
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={!!state.errors?.name}
            aria-describedby="name-error"
            className="mt-1.5"
          />
          <FieldError id="name-error" errors={state.errors?.name} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={!!state.errors?.email}
            aria-describedby="email-error"
            className="mt-1.5"
          />
          <FieldError id="email-error" errors={state.errors?.email} />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">
          Subject <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Let's work together"
          defaultValue={state.values?.subject}
          aria-invalid={!!state.errors?.subject}
          aria-describedby="subject-error"
          className="mt-1.5"
        />
        <FieldError id="subject-error" errors={state.errors?.subject} />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, role, or just say hello…"
          defaultValue={state.values?.message}
          aria-invalid={!!state.errors?.message}
          aria-describedby="message-error"
          className="mt-1.5"
        />
        <FieldError id="message-error" errors={state.errors?.message} />
      </div>

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send message
          </>
        )}
      </Button>

      {/* Status announcement */}
      <div aria-live="polite" className="min-h-5">
        {state.status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-forest">
            <CheckCircle2 className="size-4" />
            {state.message}
          </p>
        )}
        {state.status === "error" && state.message && (
          <p
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-red-600"
            )}
          >
            <AlertCircle className="size-4" />
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
