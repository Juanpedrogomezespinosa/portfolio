import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Definimos qué textos espera recibir este componente
interface ContactFormProps {
  ui: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    buttonSend: string;
    buttonSending: string;
    buttonSuccess: string;
    buttonError: string;
  };
}

export const ContactForm = ({ ui }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    // He quitado el contenedor con bg-[#111] para que se adapte mejor al layout de Astro,
    // pero mantengo los estilos de los inputs que te gustaban.
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-5 w-full"
    >
      {/* Campo Nombre */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-gray-400 text-sm font-medium ml-1"
        >
          {ui.nameLabel}
        </label>
        <input
          type="text"
          name="name"
          required
          className="bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-main)] p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
          placeholder={ui.placeholderName}
        />
      </div>

      {/* Campo Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-gray-400 text-sm font-medium ml-1"
        >
          {ui.emailLabel}
        </label>
        <input
          type="email"
          name="email"
          required
          className="bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-main)] p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
          placeholder={ui.placeholderEmail}
        />
      </div>

      {/* Campo Mensaje */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-gray-400 text-sm font-medium ml-1"
        >
          {ui.messageLabel}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="bg-[var(--bg-input)] border border-[var(--border-color)] text-[var(--text-main)] p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-500"
          placeholder={ui.placeholderMessage}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className={`mt-2 py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                ${
                  status === "idle"
                    ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                    : ""
                }
                ${status === "sending" ? "bg-gray-600 cursor-wait" : ""}
                ${
                  status === "success" ? "bg-green-500 pointer-events-none" : ""
                }
                ${status === "error" ? "bg-red-500" : ""}
            `}
      >
        {status === "idle" && ui.buttonSend}
        {status === "sending" && (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
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
            {ui.buttonSending}
          </span>
        )}
        {status === "success" && ui.buttonSuccess}
        {status === "error" && ui.buttonError}
      </button>
    </form>
  );
};
