import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Menu,
  X,
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  Check,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Zap,
  Shield,
  Target,
  Users,
  Link,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spice Drama Restaurant",
    category: "Web Development • UI/UX Design",
    year: "2025",
    tag: "LATEST PROJECT",
    colors: [
      "from-emerald-400 to-teal-500",
      "from-teal-400 to-cyan-500",
      "from-cyan-400 to-blue-500",
    ],
    status: "Under Upgradation",
    image: "image1.png",
  },
  {
    id: 2,
    title: "TriUnity Labs",
    category: "Frontend • Branding",
    year: "2025",
    tag: "FEATURED PROJECT",
    colors: [
      "from-orange-400 to-pink-500",
      "from-pink-400 to-purple-500",
      "from-purple-400 to-indigo-500",
    ],
    status: "Preview Project",
    image: "image2.png",
  },
  {
    id: 3,
    title: "Aayu Dental Paradise",
    category: "Web Development • UI/UX Design",
    year: "2025",
    tag: "DENTAL CLINIC PROJECT",
    colors: [
      "from-lime-400 to-green-500",
      "from-green-400 to-emerald-500",
      "from-emerald-400 to-teal-500",
    ],
    status: "Preview Project",
    image: "image3.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const CortexiaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies.",
      icon: Code,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Boost your online visibility with data-driven SEO strategies.",
      icon: Zap,
      gradient: "from-emerald-600 to-green-700",
    },
    {
      title: "Video Editing",
      description:
        "Professional video editing that brings your vision to life.",
      icon: Globe,
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive strategies to grow your brand and reach your audience.",
      icon: Users,
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      title: "Website Audit",
      description:
        "In-depth analysis of performance, security, and optimization.",
      icon: Shield,
      gradient: "from-cyan-600 to-blue-700",
    },
  ];

  // Contact Section
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_me6xlca", // ✅ your Service ID
        "template_8sscl4t", // 🔴 replace
        formRef.current,
        "QPz8Lhcg2yNI2J0iT" // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .gradient-text { background: linear-gradient(135deg, #10b981 0%, #0891b2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-10 md:h-12 w-auto"
              src="logo1.png"
              alt="Cortexia"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <a
            href="#contact"
            className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-semibold"
          >
            Get Started
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24"
          >
            <nav className="flex flex-col items-center gap-8 py-10">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => {
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                      setIsMenuOpen(false); // 🔥 auto close
                    }}
                    className="text-2xl font-semibold text-gray-800 hover:text-emerald-600 transition-colors"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm shadow-md">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="font-semibold text-gray-700">
                INNOVATIVE WEB SOLUTIONS
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-medium font-black leading-tight">
              <span className="gradient-text">Transform</span> Your
              <br />
              Digital Presence
            </h1>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              We create stunning, high-performance websites and digital
              solutions that drive real business results.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
              >
                View Our Work
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { number: "3", label: "PROJECTS COMPLETED" },
                { number: "3", label: "INDUSTRIES SERVED" },
                { number: "2K", label: "USERS REACHED" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto">
            <div className="aspect-square bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-3xl transform rotate-6 animate-float shadow-2xl"></div>
            <div className="absolute inset-6 bg-transparent rounded-3xl shadow-2xl flex items-center justify-center text-8xl">
              <img src="main.png" className="rounded-3xl" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-normal font-black mt-3">
              Why Choose <span className="gradient-text">Cortexia</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Optimized performance",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Experienced professionals",
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                desc: "Measurable results",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-normal font-black mt-3">
              Comprehensive Digital{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <s.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
                >
                  Get This Service <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-normal font-black mt-3">
              Our <span className="gradient-text">Latest Work</span>
            </h2>
          </motion.div>

          {/* Projects */}
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image Preview */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative rounded-3xl overflow-hidden shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a
                      href="main.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
                    >
                      {project.status}
                    </a>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="text-emerald-600 font-semibold text-sm">
                    {project.tag}
                  </span>

                  <h3 className="text-3xl font-medium mt-3 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.category}</p>

                  <p className="text-sm text-gray-400 mb-6">{project.year}</p>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
                  >
                    Start Similar Project <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-normal font-black mt-3">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <select
                  name="service"
                  className="border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                >
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Search Engine Optimization</option>
                  <option>Video Editing</option>
                  <option>Digital Marketing</option>
                  <option>Website Audit</option>
                </select>
              </div>

              <select
                name="budget"
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
              >
                <option>Select Budget Range</option>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>
                <option>₹50,000+</option>
              </select>

              <textarea
                name="message"
                required
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info Cards (UNCHANGED) */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
              <div className="font-bold mb-1">Office</div>
              <div className="text-sm text-gray-600">Noida, Uttar Pradesh</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Phone className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
              <div className="font-bold mb-1">Phone</div>
              <div className="text-sm text-gray-600">
                +91 9634622182, +91 9358785919
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Mail className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
              <div className="font-bold mb-1">Email</div>
              <a
                href="mailto:cortexia4@gmail.com"
                className="text-sm text-gray-600 hover:text-emerald-600"
              >
                cortexia4@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img className="h-10 w-auto" src="logo1.png" alt="Cortexia" />
              </div>
              <p className="text-gray-400 mb-4">
                Transforming ideas into exceptional digital experiences. Your
                trusted partner for innovative web solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <button
                        onClick={() =>
                          document
                            .getElementById(link.toLowerCase())
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-left"
                      >
                        {link}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "SEO",
                  "Video Editing",
                  "Digital Marketing",
                  "Audit",
                ].map((service) => (
                  <li key={service}>
                    <button
                      onClick={() =>
                        document
                          .getElementById("services")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Cortexia Web Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CortexiaWebsite;
