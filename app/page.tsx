"use client";

import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import ContactUs from "./contact/page";
import AboutUs from "./about/page";
import Footer from "./components/footer";
import { Smartphone, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";
import ProductSection from "./components/productSection";



// Import the Navbar component
import Navbar from "./components/navbar";

export default function Home(): JSX.Element {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white pt-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Flutix</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              We build high‑performance{" "}
              <span className="font-semibold">Flutter mobile apps</span> and modern
              digital products that scale.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-2xl">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl text-white border-white" onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl shadow-xl bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <p className="text-xl font-semibold">Build Fast. Scale Smart.</p>
                <p className="mt-4 text-white/80">
                  One codebase. Multiple platforms. Maximum impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="bg-white text-gray-900 py-20" id="service">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <Smartphone className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Flutter Apps</h3>
                  <p>
                    Cross‑platform Android & iOS apps with beautiful UI and smooth performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <Layers className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">UI / UX Design</h3>
                  <p>
                    Clean, modern and user‑focused designs that convert users into customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <Rocket className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Startup Launch</h3>
                  <p>
                    From idea to production — we help you launch fast and grow confidently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
           {/* About us Section */}
        <AboutUs />
        {/* Products Section */}
<ProductSection />

        {/* Contact Section */}
        <ContactUs />
                
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
