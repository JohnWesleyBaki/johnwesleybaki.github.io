"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setResponseMessage("Message sent successfully!");
    } catch (error) {
      console.error(error);
      setResponseMessage("Error sending message. Please try again.");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="h-screen w-full m-1 bg-black text-red-300">
      <div className="blob w-64 h-64 rounded-full absolute bottom-0 right-0"></div>
      <div id="contact" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-lg sm:text-2xl md:text-4xl  font-bold text-cusred mb-4 ">
              Contact Me
            </h1>
          </div>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-3">
            If i convinced you to consider me then i think we can meet over a
            zoom call and start discussing 🤞
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full h-10 rounded-md placeholder-gray-700 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full h-10 rounded-md placeholder-gray-700 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Mail"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={7}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black placeholder-gray-700"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter the message"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-cusred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-white">{responseMessage}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
