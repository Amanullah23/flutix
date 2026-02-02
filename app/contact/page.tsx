"use client";

import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section
      className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600  text-white py-10"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-10">
            Contact Us
          </h2>
          <p className="text-center text-white/90 mb-12">
            Have a project in mind? Let's talk and make it happen!
          </p>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/80 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-2xl bg-white text-indigo-600 hover:bg-white/90"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
        <p className="text-white/90 md:mr-4">
          You can also contact us directly:
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <p className="text-white font-semibold">
            Email:{" "}
            <a
              href="mailto:info@flutix.com"
              className="underline hover:text-indigo-300"
            >
              info@flutix.com
            </a>
          </p>
          <p className="text-white font-semibold">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="underline hover:text-indigo-300"
            >
              +93 700 000 000
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
