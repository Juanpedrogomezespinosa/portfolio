import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-gray-300 text-sm font-semibold tracking-wide ml-1"
          >
            {ui.nameLabel}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-500 backdrop-blur-sm"
            placeholder={ui.placeholderName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-gray-300 text-sm font-semibold tracking-wide ml-1"
          >
            {ui.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-500 backdrop-blur-sm"
            placeholder={ui.placeholderEmail}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-gray-300 text-sm font-semibold tracking-wide ml-1"
        >
          {ui.messageLabel}
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none placeholder:text-gray-500 backdrop-blur-sm"
          placeholder={ui.placeholderMessage}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className={`mt-4 py-4 px-8 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-xl
                ${
                  status === "idle"
                    ? "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.01] hover:shadow-blue-500/25"
                    : ""
                }
                ${status === "sending" ? "bg-gray-700 cursor-wait" : ""}
                ${
                  status === "success" ? "bg-green-600 pointer-events-none" : ""
                }
                ${status === "error" ? "bg-red-600" : ""}
            `}
      >
        {status === "idle" && ui.buttonSend}
        {status === "sending" && ui.buttonSending}
        {status === "success" && ui.buttonSuccess}
        {status === "error" && ui.buttonError}
      </button>
    </form>
  );
};
