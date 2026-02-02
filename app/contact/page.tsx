"use client";

import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600  text-white py-10" id="contact">
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
    </section>
  );
}
