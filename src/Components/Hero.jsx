import { Menu, X, Mail, ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d8] pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Title */}
        <div className="flex items-center justify-center mb-6 animate-fadeIn">
          <div className="h-px w-16 bg-gray-400"></div>
          <h2 className="mx-4 text-gray-500 tracking-[0.3em] text-sm sm:text-base">
            CORTEXIA
          </h2>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slideUp">
          TRANSFORM YOUR DIGITAL PRESENCE
        </h1>

        {/* Description */}
        <p
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          We create stunning, high-performance websites and digital solutions
          that drive real business results.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="font-medium flex items-center space-x-2 px-8 py-4 bg-[#1a4d3c] text-white rounded-full hover:bg-[#2a5d4c] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
          </button>
          <button
            onClick={() => {
              const section = document.getElementById("about");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="font-medium flex items-center space-x-2 px-8 py-4 border-2 border-gray-400 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
