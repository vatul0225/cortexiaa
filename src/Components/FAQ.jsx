import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#1a4d3c] text-white rotate-180"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

// Category Tab Component
const CategoryTab = ({ label, active, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-[#1a4d3c] text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {Icon && <Icon size={18} />}
    <span>{label}</span>
  </button>
);

// Main FAQ Section
const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("general");
  const sectionRef = useRef(null);

  const faqCategories = [
    { id: "general", label: "General", icon: HelpCircle },
    { id: "services", label: "Services & Pricing", icon: MessageCircle },
    { id: "technical", label: "Technical", icon: HelpCircle },
    { id: "support", label: "Support", icon: MessageCircle },
  ];

  const faqData = {
    general: [
      {
        question: "Who are you and what does your company do?",
        answer:
          "We are a modern digital solutions company helping startups, small businesses, and growing brands build a strong online presence through websites, digital marketing, and custom solutions tailored to their goals.",
      },
      {
        question: "Are you a new company? Can we trust your services?",
        answer:
          "Yes, we are a new-age company built by experienced professionals. Being new means we focus more on quality, transparency, and client satisfaction to build long-term relationships—not just quick sales.",
      },
      {
        question: "Which industries do you work with?",
        answer:
          "We work with businesses across industries including healthcare, food & cloud kitchens, local services, startups, e-commerce, and professional services.",
      },
      {
        question: "Do you work with small budgets or startups?",
        answer:
          "Absolutely. We understand startup challenges and offer flexible plans that can grow with your business.",
      },
      {
        question: "How do we get started with you?",
        answer:
          "Simply contact us through our website or schedule a consultation. We’ll understand your needs and suggest the best solution—no pressure, no obligation.",
      },
    ],
    services: [
      {
        question: "What services do you offer?",
        answer:
          "We provide website design & development, digital marketing, SEO, social media management, redesigns, and custom digital solutions.",
      },
      {
        question: "Can I choose only one service instead of a full package?",
        answer:
          "Yes. You can select individual services or combine them based on your needs and budget.",
      },
      {
        question: "How long does it take to complete a project?",
        answer:
          "Project timelines depend on scope, but most websites take 1–3 weeks, while marketing services start delivering results within the first month.",
      },
      {
        question: "Do you offer customized solutions?",
        answer:
          "Absolutely. Every business is different, so we customize our services to match your specific goals and challenges.",
      },
      {
        question: "Will you guide us on what services we actually need?",
        answer:
          "Yes. We focus on honest recommendations and suggest only what will truly benefit your business.",
      },
    ],
    technical: [
      {
        question: "What technologies and platforms do you work with?",
        answer:
          "We work with modern and reliable technologies based on your project needs. This includes WordPress, Shopify, Webflow, React, and fully custom-built websites. For marketing, we handle platforms like Google Ads, Meta Ads (Facebook & Instagram), LinkedIn, email tools, and analytics systems. We always recommend the best tech stack that fits your goals, budget, and future growth.",
      },
      {
        question: "Will my website be fast, mobile-friendly, and SEO-ready?",
        answer:
          "Yes. Every website we build is fully responsive, optimized for speed, and designed with SEO best practices in mind. This ensures your site looks great on all devices and performs well on search engines from day one.",
      },
      {
        question:
          "Who owns the website and content after the project is completed?",
        answer:
          "You have complete ownership of your website, content, and all digital assets we create. Once the project is completed, we hand over all files, logins, and access details. There are no hidden ownership clauses.",
      },
      {
        question: "Can you work with or improve my existing website?",
        answer:
          "Absolutely. We can redesign, optimize, fix issues, improve performance, or add new features to your existing website without forcing a full rebuild. Our goal is to enhance what you already have whenever possible.",
      },
      {
        question: "Can you integrate third-party tools or custom features?",
        answer:
          "Yes. We regularly integrate contact forms, payment gateways, WhatsApp chat, CRM tools, email automation, analytics, and other third-party services. If you have a specific tool in mind, we’ll check compatibility and suggest the best approach.",
      },
    ],

    support: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We provide reliable and responsive support to ensure your website or service runs smoothly. This includes technical assistance, updates, guidance, and issue resolution. Our focus is long-term support, not just project delivery.",
      },
      {
        question: "How do you communicate during a project?",
        answer:
          "We communicate through calls, WhatsApp, email, and video meetings—whatever works best for you. You’ll always have a clear point of contact, ensuring smooth communication and quick updates.",
      },
      {
        question: "Do you provide support after project completion?",
        answer:
          "Yes. We don’t disappear after delivery. We offer ongoing support, maintenance options, and guidance to help you manage and grow your digital presence confidently.",
      },
      {
        question: "What if I need changes or urgent help?",
        answer:
          "We understand that business needs change. For urgent requests, we prioritize quick response and resolution. Small changes are handled efficiently, and larger updates are discussed transparently before proceeding.",
      },
      {
        question: "What if I want to pause, upgrade, or adjust services?",
        answer:
          "Our services are flexible. You can pause, upgrade, downgrade, or customize your plan based on your needs. Pricing is negotiable, and we’re always open to finding a solution that works for you.",
      },
    ],
  };

  const currentFAQs = faqData[activeCategory];

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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0); // Reset to first item when changing category
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Browse through our most commonly
            asked questions or contact us for more information.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.2s",
          }}
        >
          {faqCategories.map((category) => (
            <CategoryTab
              key={category.id}
              label={category.label}
              icon={category.icon}
              active={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
            />
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div
          className="mt-16 bg-white rounded-3xl p-8 sm:p-12 text-center shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.4s",
          }}
        >
          <div className="w-16 h-16 bg-[#1a4d3c] rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-light text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help.
            Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="bg-[#1a4d3c] text-white px-8 py-4 rounded-full hover:bg-[#2a5d4c]
             transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold cursor-pointer"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
