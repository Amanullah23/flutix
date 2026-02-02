"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white text-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Flutix
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
            We are a team of passionate developers and designers creating high-performance
            Flutter apps and digital products that help businesses scale and succeed.
          </p>
        </motion.div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center bg-indigo-50"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Our Mission</h3>
            <p className="text-gray-700">
              Empower businesses with fast, scalable, and beautiful mobile applications
              that drive impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center bg-purple-50 border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading provider of cross-platform mobile solutions, delivering
              innovation and value to our clients worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center bg-pink-50 border-white/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-600">Our Values</h3>
            <p className="text-gray-700">
              Innovation, quality, integrity, and client satisfaction guide everything we do.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
