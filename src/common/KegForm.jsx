import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function KegForm({ handleChange }) {
  const [sentEmail, setSentEmail] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_53uk25n", "template_4aocd7e", form.current, {
        publicKey: "kzWI8WbYVXdc8c5kp",
      })
      .then(
        () => {
          setSentEmail(true);
          console.log("SUCCESS!", sentEmail);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto relative">
      {!sentEmail && (
        <form
          ref={form}
          action="POST"
          className="space-y-6"
          onSubmit={sendEmail}
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              required
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              required
              type="email"
              placeholder="example@example.com"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              required
              type="tel"
              placeholder="555-555-5555"
              name="phone"
              id="phone"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="date"
            >
              Pickup Date
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              required
              type="date"
              name="date"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="tap"
              name="tap"
              className="rounded focus:ring-blue-500 text-blue-500"
            />
            <label htmlFor="tap" className="ml-2 text-sm text-gray-900">
              Do you need a tap for the keg(s)?
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="tub"
              name="tub"
              className="rounded focus:ring-blue-500 text-blue-500"
            />
            <label htmlFor="tub" className="ml-2 text-sm text-gray-900">
              Do you need a tub for the keg(s)?
            </label>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              What keg would you like? Make sure to include the size.
            </label>
            <textarea
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-gray-50 focus:border-blue-500 focus:ring-blue-500"
              required
              name="message"
              id="message"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send
          </button>
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
            onClick={handleChange}
          >
            ✕
          </button>
        </form>
      )}
      {sentEmail && (
        // eslint-disable-next-line react/no-unescaped-entities
        <div>Thank you for your request! You'll receive an email shortly.</div>
      )}
    </div>
  );
}
