"use client";

import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const honeyRef = useRef<HTMLInputElement>(null);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required.";
    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.trim().length < MIN_MESSAGE_LENGTH) {
      errs.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
    } else if (form.message.length > MAX_MESSAGE_LENGTH) {
      errs.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const errs = validate();
    setErrors(errs);
    setServerError("");
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _honey: honeyRef.current?.value ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setServerError(data.error || "Something went wrong.");
        }
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-in rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-10 text-center">
        <CheckCircle size={48} className="mx-auto text-cyan-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Thank you for reaching out. I will get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", message: "" });
            setErrors({});
            setServerError("");
          }}
          className="mt-6 rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="_honey">Leave empty</label>
        <input
          id="_honey"
          ref={honeyRef}
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} className="flex-shrink-0" />
          {serverError}
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-300"
        >
          Full Name <span className="text-cyan-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`mt-1.5 w-full rounded-lg border bg-navy-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25 ${
            errors.name ? "border-red-400/60" : "border-white/10"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300"
        >
          Email <span className="text-cyan-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`mt-1.5 w-full rounded-lg border bg-navy-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25 ${
            errors.email ? "border-red-400/60" : "border-white/10"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-300"
        >
          Subject <span className="text-cyan-400">*</span>
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`mt-1.5 w-full rounded-lg border bg-navy-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25 ${
            errors.subject ? "border-red-400/60" : "border-white/10"
          }`}
          placeholder="Subject of your message"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300"
        >
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby="message-info"
          className={`mt-1.5 w-full resize-none rounded-lg border bg-navy-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25 ${
            errors.message ? "border-red-400/60" : "border-white/10"
          }`}
          placeholder="Write your message here..."
        />
        <div id="message-info" className="mt-1 flex justify-between">
          {errors.message ? (
            <p className="text-xs text-red-400" role="alert">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p
            className={`text-xs ${
              form.message.length > MAX_MESSAGE_LENGTH
                ? "text-red-400"
                : "text-slate-500"
            }`}
          >
            {form.message.length} / {MAX_MESSAGE_LENGTH}
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-navy-900 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-900/30 border-t-navy-900" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
