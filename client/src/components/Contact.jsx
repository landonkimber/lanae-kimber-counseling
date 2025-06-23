import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import dayjs from "dayjs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const formData = new FormData(form.current);
    const emailPreferred = form.current.contact_email_preference.checked
      ? "Yes"
      : "No";
    const phonePreferred = form.current.contact_phone_preference.checked
      ? "Yes"
      : "No";
    const textPreferred = form.current.contact_text_preference.checked
      ? "Yes"
      : "No";

    formData.append("to_name", "Lanae");
    formData.append("time_stamp", dayjs().format("ddd, MMM D YYYY h:mm A"));
    formData.append("contact_email_preference", emailPreferred);
    formData.append("contact_phone_preference", phonePreferred);
    formData.append("contact_text_preference", textPreferred);

    const formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formObject,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email send failed:", error.text);
        setIsSent(false);
        setIsLoading(false);
        setErrorMessage(
          "Failed to send message. Refresh the page and try again."
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto p-8 scroll-mt-32">
      <h2 className="text-2xl font-semi-bold font-quicksand text-gray-800 text-center mb-2">
        Call me at{" "}
        <span className="font-bold text-gray-600">(801)-920-6770</span> for a
        free consultation or send me an email using the form below!
      </h2>
      <div className="h-1 w-full bg-teal-600 mx-auto mb-8"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block select-none text-lg font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Jane Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block select-none text-lg font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="janedoe@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block select-none text-lg font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              placeholder="(XXX) - XXX - XXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block select-none text-lg font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <div className="flex gap-6 select-none">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="phone-preference"
                  name="contact_email_preference"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="phone-preference"
                  className="ml-2 block select-none text-md text-gray-700"
                >
                  Phone
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-preference"
                  name="contact_phone_preference"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="email-preference"
                  className="ml-2 block select-none text-lg text-gray-700"
                >
                  Email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="text-preference"
                  name="contact_text_preference"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="text-preference"
                  className="ml-2 block select-none text-lg text-gray-700"
                >
                  Text
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="h-full">
          <label
            htmlFor="message"
            className="block select-none text-lg font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="w-full h-[calc(100%-2rem)] h-60 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-4 flex justify-center mt-6 select-none">
          {isSent ? (
            <button
              type="button"
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              disabled
            >
              Message Sent!
              <FaCheckCircle className="inline ml-2 mb-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="font-bold select-none bg-teal-400 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  Sending...
                  <FaSpinner className="animate-spin" />
                </>
              ) : (
                "Send Message!"
              )}
            </button>
          )}
        </div>
      </form>
      {errorMessage && (
        <div className="w-full text-white bg-red-600 rounded-sm text-center font-semibold m-4 p-2">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
