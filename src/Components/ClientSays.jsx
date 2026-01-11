import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* -------------------- Testimonial Card -------------------- */
const TestimonialCard = ({ name, title, image, testimonial }) => {
  return (
    <div
      className="
        bg-white rounded-3xl p-8 border border-gray-100
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-2 hover:border-gray-300
      "
    >
      {/* Client Info */}
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4
                     transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h4 className="text-lg font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 leading-relaxed">{testimonial}</p>
    </div>
  );
};

/* -------------------- Main Section -------------------- */
const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

  const testimonials = [
    {
      name: "Vipin Singh",
      title: "CEO of Spice Drama Resturant",
      image: "Vipin Singh.jpeg",
      testimonial:
        "Delicious food, warm service, and a cozy atmosphere—every visit feels like a home-cooked experience. Claude’s Kitchen is our go-to place for comfort and quality.",
    },
    {
      name: "Dr. A.N Updhyay",
      title: "CEO of Aayu Dental Clinic",
      image: "A.N Upadhyay.png",
      testimonial:
        "Excellent care with a gentle touch—the staff made me feel comfortable and confident throughout my treatment. Truly a clinic that puts patients first.",
    },
  ];

  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    setDisplayedTestimonials(
      testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    );
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            What Client Says
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
            Our clients’ feedback reflects the impact, quality, and trust we
            build through our digital solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 min-h-[300px]">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="
              w-12 h-12 border-2 border-gray-300 rounded-full
              flex items-center justify-center
              transition-all duration-300
              hover:bg-gray-900 hover:border-gray-900 hover:text-white
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2 text-gray-600 min-w-[80px] justify-center">
            <span className="text-2xl font-light">
              {String(currentPage).padStart(2, "0")}
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="
              w-12 h-12 border-2 border-gray-300 rounded-full
              flex items-center justify-center
              transition-all duration-300
              hover:bg-gray-900 hover:border-gray-900 hover:text-white
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
