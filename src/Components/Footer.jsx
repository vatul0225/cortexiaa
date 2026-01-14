import React, { useState, useEffect, useRef } from "react";

// Call to Action Section
import {
  Mail,
  User,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message)");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // const data = await response.json();
<<<<<<< HEAD

      // if (!response.ok) {
      //   throw new Error(data.message || "Something went wrong");
      // }
      const text = await response.text();

      let data = {};
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Server returned invalid JSON");
        }
      }

      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }
=======

      // if (!response.ok) {
      //   throw new Error(data.message || "Something went wrong");
      // }
      const text = await response.text();

let data = {};
if (text) {
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Server returned invalid JSON");
  }
}

if (!response.ok) {
  throw new Error(data.message || "Server error");
}
>>>>>>> dfa55a4ed3447ab5166f4d1568d8fbc845ac29aa

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success message after 3s
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert(error.message || "Server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 rounded-2xl mb-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or questions about our services? We'd love to
            hear from you. Fill out the form below and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div
            className="lg:col-span-2 space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition:
                "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#1a4d3c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">cortexia4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#1a4d3c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 9634622182</p>
                  <p className="text-gray-600">+91 9358785919</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#1a4d3c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Noida, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#1a4d3c]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-[#1a4d3c] to-[#2a5d4c] rounded-3xl p-8 text-white">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-white/90 text-sm mb-4">
                Stay connected and follow our latest updates on social media.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <span className="text-sm font-semibold">
                    <img src="linkedin.png" alt="" className="rounded-xl" />
                  </span>
                </button>
                <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <span className="text-sm font-semibold">
                    <img src="instagram.png" alt="" className="rounded-xl" />
                  </span>
                </button>
                <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300">
                  <span className="text-sm font-semibold">
                    <img src="X.png" alt="" className="rounded-xl" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition:
                "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-light text-gray-900 mb-8">
                    Send us a message
                  </h3>

                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    {/* Phone Field (Optional) */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number{" "}
                        <span className="text-gray-400 text-xs">
                          (Optional)
                        </span>
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare
                          className="absolute left-4 top-4 text-gray-400"
                          size={20}
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="6"
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-[#1a4d3c] text-white py-4 rounded-xl hover:bg-[#2a5d4c] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const menuLinks = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Project", href: "#" },
    { name: "About Us", href: "#" },
  ];

  const serviceLinks = [
    { name: "Website Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Search Engine Optimization", href: "#" },
    { name: "Video Editing", href: "#" },
    { name: "Social Media Marketing", href: "#" },
    { name: "Website Audit", href: "#" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Linkedin", href: "#" },
  ];

  return (
    <footer className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img src="logo1.png" alt="" className="h-15" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Our company delivering reliable, scalable, and business-focused
            digital solutions tailored to real-world needs.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">MENU</h3>
          <ul className="space-y-3">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">SERVICES</h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">SOCIAL MEDIA</h3>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025CORTEXIA. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const ContactAndFooter = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a4d3c] via-[#1a3d2e] to-[#0d2419] rounded-3xl p-8 sm:p-12 lg:p-16 mx-4 sm:mx-6 lg:mx-8 my-20">
      <ContactSection />
      <Footer />
    </section>
  );
};

export default ContactAndFooter;
