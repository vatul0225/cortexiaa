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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
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
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Status Badge */}
        <div
          className={`absolute top-4 right-4 ${
            statusConfig[project.status].bgColor
          } ${
            statusConfig[project.status].textColor
          } px-4 py-2 rounded-full flex items-center space-x-2 backdrop-blur-sm`}
        >
          <StatusIcon size={16} />
          <span className="text-sm font-medium">
            {statusConfig[project.status].label}
          </span>
        </div>
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span className="text-sm font-medium">
              <a href={project.link} target="_blank">
                Live Preview
              </a>
            </span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Category Tags */}
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
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-gray-500">
            <Calendar size={16} />
            <span className="text-sm">{project.date}</span>
          </div>
          {project.growth && (
            <div className="flex items-center space-x-2 text-green-600">
              <TrendingUp size={16} />
              <span className="text-sm font-medium">{project.growth}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ label, active, onClick, count }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-[#1a4d3c] text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {label}
    {count !== undefined && (
      <span className={`ml-2 ${active ? "text-white/80" : "text-gray-500"}`}>
        ({count})
      </span>
    )}
  </button>
);

// Main Projects Showcase Section
const ProjectsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Spice Drama Resturant",
      description:
        "Discover Spice Drama Cloud Kitchen’s journey—serving delicious meals, innovative flavors, and seamless online ordering experiences that bring our kitchen straight to your doorstep.",
      image: "SpiceDrama.png",
      categories: [
        "Web Development",
        "UI/UX Design",
        "E-commerce",
        "Social Media",
      ],
      status: "in-progress",
      date: "Dec 2025",
      growth: "+80% Traffic",
      link: "progress",
    },
    {
      id: 2,
      title: "TriUnity Labs",
      description:
        "Explore TriUnity Labs’ portfolio of Salesforce solutions—streamlining business processes, boosting customer engagement, and delivering measurable results through smart, customized CRM implementations.",
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
        "Discover Aayu Dental Clinic in Lucknow—providing gentle, expert dental care and creating healthy, confident smiles for every patient.",
      image: "AayuDental.png",
      categories: ["Web Development", "UI/UX Design", "Social Media"],
      status: "completed",
      date: "March 2025",
      growth: "+70% Recognition",
      link: "https://aayudentalnew-5vr8.vercel.app/",
    },
  ];

  const categories = [
    "all",
    "Web Development",
    "Social Media",
    "SEO",
    "UI/UX Design",
    "E-commerce",
  ];

  const getFilteredProjects = () => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  };

  const getProjectCount = (category) => {
    if (category === "all") return projects.length;
    return projects.filter((p) => p.categories.includes(category)).length;
  };

  const completedCount = projects.filter(
    (p) => p.status === "completed"
  ).length;
  const inProgressCount = projects.filter(
    (p) => p.status === "in-progress"
  ).length;

  const filteredProjects = getFilteredProjects();

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

  return (
    <section
      id="work"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Our Projects
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Explore our Cortexia’s portfolio of impactful digital solutions—from
            high-performing marketing campaigns and scalable web applications to
            complete brand transformations—each crafted to deliver measurable
            growth and real business results for our clients.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-light text-[#1a4d3c] mb-1">
                {completedCount}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-light text-blue-600 mb-1">
                {inProgressCount}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-1">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.2s",
          }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category === "all" ? "All Projects" : category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              count={getProjectCount(category)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-16 text-center bg-white rounded-3xl p-12 shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.4s",
          }}
        >
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative
            digital solutions that drive real results.
          </p>
          <Link
            to="/schedule"
            className="group inline-flex items-center gap-3 bg-[#1a4d3c] text-white px-10 py-4 rounded-full font-medium cursor-pointer
             transition-all duration-300 ease-out
             hover:bg-[#2a5d4c] hover:scale-105 hover:shadow-xl
             active:scale-95"
          >
            <span>Schedule a Consultation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
