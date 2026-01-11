import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  ArrowRight,
  Check,
} from "lucide-react";

const ScheduleDiscussionPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    date: "",
    time: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Website Development",
    "Social Media Marketing",
    "UI/UX Design",
    "SEO Optimization",
    "Video Editing",
    "Website Audit",
  ];

  const budgetRanges = [
    "Under ₹5,000",
    "₹5,000 - ₹10,000",
    "₹10,000 - ₹20,000",
    "₹20,000 - ₹40,000",
    "₹40,000+",
  ];

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.budget ||
      !formData.date ||
      !formData.time ||
      selectedServices.length === 0
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/discussion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          date: "",
          time: "",
          message: "",
        });
        setSelectedServices([]);
      }, 3000);
    } catch (error) {
      alert(error.message || "Server error");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d8] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 text-center max-w-md animate-fadeIn shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Discussion Scheduled!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for scheduling a discussion with us. We've received your
            request and will send you a confirmation email shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#1a4d3c] text-white px-8 py-3 rounded-full hover:bg-[#2a5d4c] transition-all duration-300"
          >
            Schedule Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d8] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <img src="logo1.png" alt="" className="h-15" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
          Schedule Your Project Discussion
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Ready to bring your digital vision to life? Schedule a consultation
          with our team to discuss your project goals and how we can help you
          succeed.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="mr-3 text-[#1a4d3c]" size={24} />
                Contact Information
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                    placeholder="example@gmail.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Inc."
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="mr-3 text-[#1a4d3c]" size={24} />
                Project Details
              </h2>

              <div className="space-y-4">
                {/* Services Interested */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services Interested In *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedServices.includes(service)
                            ? "bg-[#1a4d3c] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a4d3c] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share your project goals, challenges, and what you hope to achieve..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center space-x-2 bg-[#1a4d3c] text-white px-12 py-4 rounded-full hover:bg-[#2a5d4c] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <span>Schedule Discussion</span>
              <ArrowRight size={20} />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              We'll respond within 24 hours to confirm your appointment
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <Calendar className="mx-auto mb-4 text-[#1a4d3c]" size={40} />
          <h3 className="font-semibold text-gray-900 mb-2">
            Flexible Scheduling
          </h3>
          <p className="text-gray-600 text-sm">
            Choose a time that works best for your schedule
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <MessageSquare className="mx-auto mb-4 text-[#1a4d3c]" size={40} />
          <h3 className="font-semibold text-gray-900 mb-2">
            Free Consultation
          </h3>
          <p className="text-gray-600 text-sm">
            No-obligation discussion about your project needs
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <Check className="mx-auto mb-4 text-[#1a4d3c]" size={40} />
          <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
          <p className="text-gray-600 text-sm">
            We'll confirm your meeting within 24 hours
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ScheduleDiscussionPage;
