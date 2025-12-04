import { Send, CheckCircle, XCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm({ isVisible }) {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // attach current time to the hidden `time` field for EmailJS
    if (formRef && formRef.current) {
      const timeInput = formRef.current.elements
        ? formRef.current.elements["time"]
        : formRef.current.querySelector('input[name="time"]');
      if (timeInput) timeInput.value = new Date().toLocaleString();
    }

    setIsSubmitting(true);
    setStatus(null);

    // Submission via EmailJS
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`transition-all duration-1000 delay-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        {/* hidden field for EmailJS to receive the submission time */}
        <input type="hidden" name="time" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Send Me a Message
        </h3>

        {status && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-4 flex items-start gap-3 p-3 rounded-lg text-sm ${
              status.type === "success"
                ? "bg-green-100 text-green-600 dark:bg-green-800/20"
                : "bg-red-100 text-red-600 dark:bg-red-800/20"
            }`}
          >
            <div className="mt-0.5">
              {status.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
            </div>

            <div className="flex-1">{status.message}</div>

            <button
              type="button"
              onClick={() => setStatus(null)}
              className="ml-2 text-xs font-medium underline opacity-80 hover:opacity-100"
              aria-label="Dismiss message"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
            placeholder="Son Goku"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
            placeholder="songoku@capsulecorp.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
            placeholder="Collaboration Opportunity"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Let's save the earth together..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
