"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      FormDataEntryValue
    >;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          consent: formData.get("consent") === "on",
        }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Unable to send your enquiry.");
      setState("done");
      form.reset();
    } catch (caught) {
      setState("error");
      setError(
        caught instanceof Error
          ? caught.message
          : "Unable to send your enquiry.",
      );
    }
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="fields">
        <label>
          Full name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone number
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Your phone number"
          />
        </label>
        <label>
          Location
          <input
            name="location"
            autoComplete="address-level2"
            placeholder="City, country"
          />
        </label>
        <label className="wide">
          Subject
          <input
            required
            name="subject"
            placeholder="What would you like to discuss?"
          />
        </label>
        <label className="wide">
          Message
          <textarea
            required
            minLength={20}
            name="message"
            rows={5}
            placeholder="Tell us a little about your goals or enquiry…"
          />
        </label>
        <label className="consent wide">
          <input required type="checkbox" name="consent" />
          <span>I agree to be contacted about my enquiry.</span>
        </label>
        <input
          className="honeypot"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>
      <button disabled={state === "sending"} className="button">
        {state === "sending" ? "Sending…" : "Submit enquiry"}{" "}
        <ArrowRight size={16} />
      </button>
      {state === "done" && (
        <p className="success" role="status">
          Thank you. Your enquiry has been sent successfully.
        </p>
      )}
      {state === "error" && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
