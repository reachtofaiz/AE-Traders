'use client';

import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function contactUs() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-5xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-lg text-center">
          Ready to elevate your brand? Reach out to us today and let&apos;s start crafting your unique story together. Whether you&apos;re ready to dive in or just have a question, we&apos;re here to help. Get in touch and let&apos;s make something extraordinary happen.
        </p>
        <form
          className="space-y-4 mt-4"
          action="https://formspree.io/f/xblrjkol"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <div className="flex justify-center items-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" 
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contactUs;
