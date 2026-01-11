import React, { useState } from "react";

const BrandBoostSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-170 md:-mt-20 mb-20">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl animate-fadeIn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="absolute top-8 left-8 z-20 flex items-center space-x-4 animate-slideRight">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-4 h-4 border-4 border-l-transparent border-black rounded-full"></div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl sm:text-3xl font-bold">BOOST</h3>
            <h3 className="text-2xl sm:text-3xl font-bold">YOUR BRAND</h3>
          </div>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
          alt="Team collaboration"
          className={`w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
    </section>
  );
};

export default BrandBoostSection;
