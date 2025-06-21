import React from "react";
import Head from "next/head";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - CineSeek</title>
        <meta name="description" content="Get in touch with the CineSeek team." />
      </Head>

      <div className="bg-[#171D22] min-h-screen text-white px-6 md:px-16 lg:px-44 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Contact <span className="text-[#E2D609]">Us</span>
        </h1>

        <p className="text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hi? We&apos;d love to hear from you!
        </p>

        <form className="max-w-3xl mx-auto bg-[#1F1F1F] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded bg-[#121212] border border-[#E2D609] text-white focus:outline-none focus:ring-2 focus:ring-[#E2D609]"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded bg-[#121212] border border-[#E2D609] text-white focus:outline-none focus:ring-2 focus:ring-[#E2D609]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded bg-[#121212] border border-[#E2D609] text-white focus:outline-none focus:ring-2 focus:ring-[#E2D609]"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#E2D609] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
