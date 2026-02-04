"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { id: 1, image: "/products/app1.png" },
  { id: 2, image: "/products/app2.png" },
  { id: 3, image: "/products/app6.png" },
  { id: 4, image: "/products/app4.png" },
  { id: 5, image: "/products/app5.png" },
];

export default function ProductSection() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our Products
          </h2>
          <p className="text-gray-600 mt-2">
            All designed & built with Flutter
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="min-w-55 h-65 rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            >
              <Image
                src={product.image}
                alt="Flutter App"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

          ))}
        
        </div>


        {/* Show More */}
        <div className="mt-6">
          <Link
            href="/products"
            className="text-indigo-600 font-medium hover:underline"
          >
            Show more →
          </Link>
        </div>
      </div>
    </section>
  );
}
