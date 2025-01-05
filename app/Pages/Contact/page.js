import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-24">
        <div className="bg-slate-600 bg-opacity-35 shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-600 bg-opacity-35"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-200"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-600 bg-opacity-35"
              placeholder="Your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-600 bg-opacity-35"
              placeholder="Your message"
            />
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
