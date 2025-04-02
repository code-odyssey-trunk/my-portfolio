'use client';
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  // Clear feedback message after 5 seconds
  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage(null);
      }, 5000); // 5 seconds

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service_id';
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'default_template_id';
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_API_KEY || 'default_public_key';

    emailjs.sendForm(serviceId, templateId, form, publicKey).then(
      () => {
        setFeedbackMessage('Email successfully sent!');
        setIsError(false);
        form.reset(); // Clear all form fields
      },
      () => {
        setFeedbackMessage('Error sending email. Please try again.');
        setIsError(true);
      }
    );
  };

  return (
    <div id="contact" className="bg-gray-900 py-10 lg:px-30 px-4">
      <div className="container mx-auto">
        <div className="text-3xl text-white text-center mb-10">
          Get in Touch
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-white placeholder-gray-500 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-white placeholder-gray-500 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-white placeholder-gray-500 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="message"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            {feedbackMessage ? (
              <div
                className={`mt-6 p-4 rounded-lg text-center max-w-lg mx-auto ${
                  isError
                    ? 'bg-red-100 border border-red-400 text-red-700'
                    : 'bg-green-100 border border-green-400 text-green-700'
                }`}
              >
                <div className="flex items-center justify-center">
                  {!isError && (
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {isError && (
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="font-medium">{feedbackMessage}</span>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
