import React from "react";
import {
  Code,
  Target,
  Mail,
  Search,
  FileText,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* -------------------- Animation Variants -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

/* -------------------- Service Card -------------------- */
const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="
        bg-[#1a3d2e]/40 backdrop-blur-sm rounded-2xl p-8
        transition-all duration-300 ease-out
        hover:bg-[#1a3d2e]/70
        hover:-translate-y-2 hover:shadow-2xl
        border border-white/10
      "
    >
      {/* Icon */}
      <div
        className="
          w-16 h-16 bg-[#e8d5b7] rounded-xl
          flex items-center justify-center mb-6
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        <Icon size={32} className="text-[#1a3d2e]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <p className="text-gray-400 text-sm mb-6">
        What’s included in this service?
      </p>

      {/* CTA */}
      <Link
        to="/schedule"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-white border border-white/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a3d2e] group"
      >
        <span className="text-sm">Schedule Discussion</span>
        <ChevronRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
};

/* -------------------- Main Section -------------------- */
const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "We develop modern websites and microsites that represent your brand and convert visitors.",
    },
    {
      icon: Target,
      title: "Social Media Marketing",
      description:
        "Strategic campaigns that grow engagement, reach, and brand authority.",
    },
    {
      icon: Mail,
      title: "UI/UX Design",
      description:
        "Intuitive and visually appealing interfaces designed for real users.",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Optimized content and structure to improve rankings and organic traffic.",
    },
    {
      icon: FileText,
      title: "Video Editing",
      description:
        "High-impact video content that captures attention and tells your story.",
    },
    {
      icon: TrendingUp,
      title: "Website Audit",
      description:
        "In-depth analysis to identify performance issues and growth opportunities.",
    },
  ];

  return (
    <section
    id="services"
      className="
        bg-gradient-to-br from-[#1a4d3c] via-[#1a3d2e] to-[#0d2419]
        rounded-3xl p-8 sm:p-12 lg:p-16
        mx-4 sm:mx-6 lg:mx-8 my-20
      "
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-lg">
              Our digital services are designed to grow your online presence and
              deliver measurable results.
            </p>
          </motion.div>

          <Link
            to="/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white border border-white/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a3d2e] group"
          >
            <span className="text-sm">Schedule Discussion</span>
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
