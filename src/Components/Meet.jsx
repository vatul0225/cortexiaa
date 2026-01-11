import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Team Member Card Component
const TeamMemberCard = ({ name, role, imageUrl, delay }) => {
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

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-[280px] sm:w-[320px]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {/* Image */}
      <div className="mb-6 overflow-hidden rounded-2xl group">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-2xl font-normal text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );
};

// Main Meet Our Team Section
const MeetOurTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const teamMembers = [
    {
      name: "Cody Fisher",
      role: "Nursing Assistant",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      name: "Ronald Richards",
      role: "Dog Trainer",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Eleanor Pena",
      role: "Medical Assistant",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
    {
      name: "Darrell Steward",
      role: "Web Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
    {
      name: "Cameron Williamson",
      role: "Marketing Coordinator",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    },
    {
      name: "Jane Cooper",
      role: "Content Strategist",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    },
    {
      name: "Robert Fox",
      role: "SEO Specialist",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      name: "Jenny Wilson",
      role: "Social Media Manager",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      name: "Albert Flores",
      role: "Brand Strategist",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
    {
      name: "Kristin Watson",
      role: "UX Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
  ];

  const totalPages = Math.ceil(teamMembers.length / 5);

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

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 320; // Width of each card + gap
    const scrollAmount = cardWidth * 5; // Scroll 5 cards at a time

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentPage(Math.max(1, currentPage - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentPage(Math.min(totalPages, currentPage + 1));
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl">
              Meet our team of passionate developer and digital marketing experts, dedicated
              to crafting innovative solutions that fuel success.
            </p>
          </div>

          {/* Navigation Controls */}
          <div
            className="flex items-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition:
                "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            {/* Page Indicator */}
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl font-light">0{currentPage}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">0{totalPages}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => handleScroll("left")}
                disabled={currentPage === 1}
                className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={currentPage === totalPages}
                className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Team Members Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default MeetOurTeamSection;
