import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Service", id: "services" },
    { label: "Project", id: "work" },
    { label: "Charges", id: "charges" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const NAVBAR_HEIGHT = 80;

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    // 1️⃣ Close mobile menu first
    if (isOpen) {
      setIsOpen(false);
    }

    // 2️⃣ Wait for menu animation + layout settle
    setTimeout(() => {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 420); // must be > animation duration (0.35s)
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f1e8]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img src="logo1.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className="relative cursor-pointer text-gray-700 text-sm font-medium transition-all hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() =>
              (window.location.href =
                "mailto:cortexia4@gmail.com?subject=Hello&body=I%20would%20like%20to%20get%20in%20touch")
            }
            className="hidden md:flex cursor-pointer items-center gap-2 px-6 py-2 border border-gray-400 rounded-full text-sm font-medium transition-all hover:bg-black hover:text-white hover:scale-105"
          >
            <span>Let’s Talk</span>
            <Mail size={16} />
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-[#f5f1e8] shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="block w-full text-left cursor-pointer text-gray-700 text-base font-medium transition-all hover:text-black hover:translate-x-1"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:cortexia4@gmail.com?subject=Hello&body=I%20would%20like%20to%20get%20in%20touch")
                }
                className="flex w-full cursor-pointer items-center justify-center gap-2 px-6 py-3 mt-4 border border-gray-400 rounded-full text-sm font-medium transition-all hover:bg-black hover:text-white"
              >
                <span>Let’s Talk</span>
                <Mail size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
