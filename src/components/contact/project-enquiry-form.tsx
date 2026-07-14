"use client";

import { useActionState } from "react";

import {
  budgetRanges,
  initialContactFormState,
  projectTypes,
  timelineOptions,
  type ContactFormState,
} from "@/app/contact/form-config";
import { submitProjectEnquiry } from "@/app/contact/actions";

type TextInputProps = {
  id: keyof ContactFormState["errors"];
  label: string;
  type?: "text" | "email" | "url";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-2 text-sm leading-6 text-red-300">
      {message}
    </p>
  );
}

function TextInput({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
  error,
}: TextInputProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 block w-full rounded-none border border-white/[0.12] bg-white/[0.045] px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-blue-300 focus:bg-white/[0.06] focus:ring-2 focus:ring-blue-400/20"
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  error,
}: {
  id: keyof ContactFormState["errors"];
  label: string;
  options: readonly string[];
  error?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-slate-200"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 block w-full rounded-none border border-white/[0.12] bg-[#0b1728] px-4 py-3 text-sm text-white outline-none transition-colors duration-200 hover:border-white/20 focus:border-blue-300 focus:ring-2 focus:ring-blue-400/20"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function ProjectEnquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitProjectEnquiry,
    initialContactFormState,
  );
  const status = pending ? "submitting" : state.status;

  return (
    <section className="border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
      <div className="mb-8 max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
          Project enquiry
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
          Share the details that shape the next step.
        </h2>
      </div>

      <form action={formAction} noValidate className="grid gap-6">
        <div className="sr-only">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TextInput
            id="name"
            label="Name"
            autoComplete="name"
            error={state.errors.name}
          />
          <TextInput
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            error={state.errors.email}
          />
        </div>

        <TextInput
          id="company"
          label="Company or project name"
          autoComplete="organization"
          error={state.errors.company}
        />

        <TextInput
          id="need"
          label="What do you need built?"
          placeholder="Website, MVP, dashboard, AI feature, product improvement..."
          error={state.errors.need}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <SelectField
            id="projectType"
            label="Project type"
            options={projectTypes}
            error={state.errors.projectType}
          />
          <TextInput
            id="url"
            label="Current product or website URL, optional"
            type="url"
            placeholder="https://example.com"
            required={false}
            error={state.errors.url}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SelectField
            id="budget"
            label="Estimated budget"
            options={budgetRanges}
            error={state.errors.budget}
          />
          <SelectField
            id="timeline"
            label="Desired timeline"
            options={timelineOptions}
            error={state.errors.timeline}
          />
        </div>

        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium leading-6 text-slate-200"
          >
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={8}
            aria-invalid={Boolean(state.errors.details)}
            aria-describedby={
              state.errors.details ? "details-error" : "details-hint"
            }
            placeholder="Describe the product idea, current challenge, desired result, users, integrations, constraints, and any important context."
            className="mt-2 block w-full resize-y rounded-none border border-white/[0.12] bg-white/[0.045] px-4 py-3 text-sm leading-7 text-white outline-none transition-colors duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-blue-300 focus:bg-white/[0.06] focus:ring-2 focus:ring-blue-400/20"
          />
          <p id="details-hint" className="mt-2 text-sm leading-6 text-slate-500">
            Include enough context to judge fit, scope, constraints, and the
            practical next step.
          </p>
          <FieldError id="details-error" message={state.errors.details} />
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
            <input
              name="consent"
              type="checkbox"
              required
              aria-invalid={Boolean(state.errors.consent)}
              aria-describedby={
                state.errors.consent ? "consent-error" : undefined
              }
              className="mt-1 h-4 w-4 rounded-none border-white/20 bg-white/[0.04] text-blue-500 focus:ring-2 focus:ring-blue-400/30"
            />
            <span>
              I understand that submitting this form does not create a
              development agreement.
            </span>
          </label>
          <FieldError id="consent-error" message={state.errors.consent} />
        </div>

        <div
          aria-live="polite"
          className={[
            "min-h-0 border px-4 py-3 text-sm leading-6",
            status === "idle"
              ? "sr-only"
              : status === "success"
                ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-100"
                : status === "submitting"
                  ? "border-blue-400/20 bg-blue-400/[0.08] text-blue-100"
                  : "border-red-400/20 bg-red-400/[0.08] text-red-100",
          ].join(" ")}
        >
          {status === "submitting" ? "Sending project details..." : state.message}
          {state.mailtoHref && (
            <a
              href={state.mailtoHref}
              className="ml-2 inline-flex font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Open email draft
            </a>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-4 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition-all duration-300 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending..." : "Send Project Details"}
        </button>
      </form>
    </section>
  );
}
