"use client";

import { useActionState } from "react";
import { FormState, submitForm } from "../actions/form-action";

const initialState: FormState = {
  errors: {},
  success: false,
  message: "",
};

export default function ContactForm() {
  const [data, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="md:flex gap-5">
        <div className="flex-1">
          <div className="relative name mb-4">
            <input
              type="text"
              name="name"
              className="card-gradient h-12 w-full bg-white/5 border border-white/10 text-sm text-white placeholder-white/50 rounded focus:outline-0 p-2.5"
              placeholder="Full Name"
            />

            {data.errors?.name && (
              <p className="text-xs text-red-500 absolute top-4 right-4">
                {data.errors.name}
              </p>
            )}
          </div>
          <div className="relative email mb-4">
            <input
              type="text"
              name="email"
              className="card-gradient h-12 w-full bg-white/5 border border-white/10 text-sm text-white placeholder-white/50 rounded focus:outline-0 p-2.5"
              placeholder="Email Address"
            />

            {data.errors?.email && (
              <p className="text-xs text-red-500 absolute top-4 right-4">
                {data.errors.email}
              </p>
            )}
          </div>
          <div className="relative subject mb-4">
            <input
              type="text"
              name="subject"
              className="card-gradient h-12 w-full bg-white/5 border border-white/10 text-sm text-white placeholder-white/50 rounded focus:outline-0 p-2.5"
              placeholder="Subject"
            />

            {data.errors?.subject && (
              <p className="text-xs text-red-500 absolute top-4 right-4">
                {data.errors.subject}
              </p>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative message mb-4">
            <textarea
              name="message"
              className="card-gradient h-44 w-full bg-white/5 border border-white/10 text-sm text-white placeholder-white/50 rounded focus:outline-0 p-2.5"
              placeholder="Please type your message here"
            ></textarea>

            {data.errors?.message && (
              <p className="text-xs text-red-500 absolute top-4 right-4">
                {data.errors.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="button">
        <button
          type="submit"
          disabled={isPending}
          className="card-gradient flex items-center justify-center bg-white/5 border border-white/10 text-white/50 cursor-pointer rounded-3xl px-4 py-2 hover:text-white transition"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
        {data.message && (
          <div
            className={`w-1/3 mt-3 p-4 rounded ${
              data.success
                ? "bg-green-500 text-green-200"
                : "bg-red-500 text-white"
            }`}
          >
            {data.message}
          </div>
        )}
      </div>
    </form>
  );
}
