import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- STAT BAR ITEM ---------------- */
const StatBarItem = ({ percentage, label, delay, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="stat-container"
    >
      {/* Percentage */}
      <div className="mb-2">
        <span className="text-3xl sm:text-4xl font-light text-black">
          {percentage}%
        </span>
        <span className="text-lg text-gray-400 ml-1">/ 100%</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#1a4d3c] rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${width}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay }}
        />
      </div>

      {/* Label */}
      <p className="text-gray-500 text-sm tracking-wide">{label}</p>
    </motion.div>
  );
};

/* ---------------- ABOUT US SECTION ---------------- */
const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { percentage: 90, label: "Client Retention" },
    { percentage: 56, label: "Budget Growth" },
    { percentage: 82, label: "ROI Improvement" },
    { percentage: 79, label: "Service Demand" },
    { percentage: 65, label: "Agency Growth" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
    id="about"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-16">
            About Us
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <StatBarItem
                key={stat.label}
                percentage={stat.percentage}
                label={stat.label}
                delay={index * 0.15}
                isVisible={isVisible}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
            <span className="font-medium text-black">Cortexia Tech</span>,
            founded in 2025, is a modern technology services company focused on
            delivering reliable, scalable, and results-driven digital solutions.
            We specialize in building future-ready technologies tailored to real
            business needs.
          </p>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            With a strong emphasis on quality, transparency, and long-term
            partnerships, we support businesses from initial consultation to
            deployment and beyond. Cortexia Tech works as a trusted technology
            partner for startups, growing businesses, and evolving enterprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
