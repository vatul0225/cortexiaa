import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Clock,
  CheckCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

// Project Card Component
const ProjectCard = ({ project, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const statusConfig = {
    completed: {
      icon: CheckCircle,
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      label: "Completed",
    },
    "in-progress": {
      icon: Clock,
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      label: "In Progress",
    },
  };

  const StatusIcon = statusConfig[project.status].icon;

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Status */}
        <div
          className={`absolute top-4 right-4 ${
            statusConfig[project.status].bgColor
          }
          ${statusConfig[project.status].textColor}
          px-4 py-2 rounded-full flex items-center gap-2`}
        >
          <StatusIcon size={16} />
          <span className="text-sm font-medium">
            {statusConfig[project.status].label}
          </span>
        </div>

        {/* Overlay CTA */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/70 to-transparent
            flex items-end p-6
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-medium">Live Preview</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#1a4d3c] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Mobile CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden text-center bg-[#1a4d3c] text-white py-3 rounded-full text-sm font-medium mb-4"
        >
          View Project
        </a>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={16} />
            <span className="text-sm">{project.date}</span>
          </div>
          {project.growth && (
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">{project.growth}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter Button
const FilterButton = ({ label, active, onClick, count }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
      active
        ? "bg-[#1a4d3c] text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {label} {count !== undefined && `(${count})`}
  </button>
);

// Main Section
const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Spice Drama Restaurant",
      description:
        "Cloud kitchen platform delivering innovative flavors and seamless ordering.",
      image: "SpiceDrama.png",
      categories: ["Web Development", "UI/UX Design", "E-commerce"],
      status: "in-progress",
      date: "Dec 2025",
      growth: "+80% Traffic",
      link: "/progress",
    },
    {
      id: 2,
      title: "TriUnity Labs",
      description:
        "Salesforce-driven solutions improving CRM and customer engagement.",
      image: "TriUnity.png",
      categories: ["Web Development", "UI/UX Design"],
      status: "completed",
      date: "Aug 2025",
      growth: "+75% Engagement",
      link: "https://www.triunitylabs.com/",
    },
    {
      id: 3,
      title: "Aayu Dental Clinic",
      description:
        "Professional dental care platform delivering trust and growth.",
      image: "AayuDental.png",
      categories: ["Web Development", "UI/UX Design"],
      status: "completed",
      date: "Mar 2025",
      growth: "+70% Recognition",
      link: "https://aayudentalnew-5vr8.vercel.app/",
    },
  ];

  const categories = ["all", "Web Development", "UI/UX Design", "E-commerce"];

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-light text-center mb-12">Our Projects</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <FilterButton
              key={c}
              label={c === "all" ? "All Projects" : c}
              active={activeFilter === c}
              onClick={() => setActiveFilter(c)}
              count={
                c === "all"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(c)).length
              }
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-3 bg-[#1a4d3c] text-white px-10 py-4 rounded-full hover:scale-105 transition"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
