"use client";
import { useState, useRef } from "react";
import { User, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [blurred, setBlurred] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!formRef.current.checkValidity()) {
      return;
    }
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      e.target.reset();
      setSubmitted(false);
      setBlurred({ name: false, email: false, message: false });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get a Quote</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Let's Work Together
          </h3>
          <p className="text-base sm:text-lg text-gray-800 mb-6 text-center">
            Fill out the form below to get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full p-2 rounded border border-gray-400 ${
                  blurred.name || submitted ? "show-validation" : ""
                }`}
                required
                minLength={2}
                onBlur={() => setBlurred((prev) => ({ ...prev, name: true }))}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex items-center text-gray-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full p-2 rounded border border-gray-400 ${
                  blurred.email || submitted ? "show-validation" : ""
                }`}
                required
                onBlur={() => setBlurred((prev) => ({ ...prev, email: true }))}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="flex items-center text-gray-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full p-2 rounded border border-gray-400 ${
                  blurred.message || submitted ? "show-validation" : ""
                }`}
                rows="4"
                required
                minLength={10}
                onBlur={() =>
                  setBlurred((prev) => ({ ...prev, message: true }))
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Quote Request"
              )}
            </button>
            {success && (
              <div className="bg-green-100 text-green-700 p-4 rounded mt-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <p>Quote request sent successfully!</p>
              </div>
            )}
            {error && (
              <p className="text-red-700 mt-4">Something went wrong!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}