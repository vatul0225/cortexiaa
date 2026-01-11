import React, { useState } from "react";
import { Check, X, Star, ArrowRight, Zap, Crown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- PRICING CARD ---------------- */
const PricingCard = ({ plan, delay, featured }) => {
  const tierIcons = {
    starter: Sparkles,
    professional: Zap,
    enterprise: Crown,
  };
  const TierIcon = tierIcons[plan.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.04 }}
      className={`relative bg-white rounded-3xl p-8 ${
        featured ? "shadow-2xl ring-4 ring-[#1a4d3c]" : "shadow-lg"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-[#1a4d3c] text-white px-6 py-2 rounded-full text-sm flex gap-2 items-center">
            <Star size={16} fill="currentColor" /> Most Popular
          </div>
        </div>
      )}

      <div className="flex gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            featured ? "bg-[#1a4d3c]" : "bg-gray-100"
          }`}
        >
          <TierIcon className={featured ? "text-white" : "text-gray-600"} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{plan.name}</h3>
          <p className="text-sm text-gray-500">{plan.subtitle}</p>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-5xl font-bold">₹{plan.price}</span>
        <span className="text-gray-500 ml-2">/month</span>
        <p className="text-sm text-gray-500">{plan.billingNote}</p>
      </div>

      <p className="text-gray-600 mb-6">{plan.description}</p>

      {/* CTA BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          })
        }
        className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 mb-8 ${
          featured
            ? "bg-[#1a4d3c] text-white hover:bg-[#2a5d4c]"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Get Started <ArrowRight size={18} />
      </motion.button>

      <div className="space-y-3">
        <p className="font-semibold text-sm">What’s included:</p>
        {plan.features.map((f, i) => (
          <div key={i} className="flex gap-3">
            {f.included ? (
              <Check className="text-green-600" />
            ) : (
              <X className="text-gray-300" />
            )}
            <span className={f.included ? "text-gray-700" : "text-gray-400"}>
              {f.text}
            </span>
          </div>
        ))}
      </div>

      {plan.additionalInfo && (
        <p className="text-xs text-gray-500 mt-6 border-t pt-4">
          {plan.additionalInfo}
        </p>
      )}
    </motion.div>
  );
};

/* ---------------- ADD-ON CARD ---------------- */
const ServiceAddon = ({ addon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl"
  >
    <div className="flex justify-between mb-4">
      <div>
        <h4 className="font-semibold text-lg">{addon.name}</h4>
        <p className="text-sm text-gray-600">{addon.description}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-[#1a4d3c]">₹{addon.price}</p>
        <span className="text-xs text-gray-500">{addon.billing}</span>
      </div>
    </div>

    {addon.includes.map((i, idx) => (
      <div key={idx} className="flex gap-2 text-sm">
        <Check className="text-green-600" size={16} /> {i}
      </div>
    ))}
  </motion.div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const PricingServices = () => {
  const [billing, setBilling] = useState("monthly");

  const pricingPlans = [
    {
      tier: "starter",
      name: "Starter",
      subtitle: "Best for new businesses",
      price: billing === "monthly" ? "4,999" : "4,499",
      billingNote: "Affordable entry plan",
      description: "Basic digital setup for startups & local businesses.",
      features: [
        { text: "1–3 Page Website", included: true },
        { text: "Google Business Setup", included: true },
        { text: "Basic SEO", included: true },
        { text: "Paid Ads", included: false },
      ],
    },
    {
      tier: "professional",
      name: "Growth",
      subtitle: "Most popular",
      price: billing === "monthly" ? "9,999" : "8,999",
      billingNote: "Save 10% yearly",
      description: "Marketing + website growth package.",
      features: [
        { text: "Up to 8 Pages Website", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Social Media (2 platforms)", included: true },
        { text: "Lead Forms", included: true },
      ],
    },
    {
      tier: "enterprise",
      name: "Custom",
      subtitle: "Tailored solution",
      price: "Custom",
      billingNote: "On request",
      description: "Fully customized digital solutions.",
      features: [
        { text: "Custom Web / App", included: true },
        { text: "Advanced Marketing", included: true },
        { text: "Dedicated Support", included: true },
      ],
    },
  ];

  const serviceAddons = [
    {
      name: "Website Redesign",
      description: "Modern UI upgrade",
      price: "7,000",
      billing: "one-time",
      includes: ["UI refresh", "Mobile optimization"],
    },
    {
      name: "SEO Boost",
      description: "Improve Google ranking",
      price: "4,000",
      billing: "per month",
      includes: ["Keywords", "On-page SEO"],
    },
    {
      name: "Social Media",
      description: "Monthly management",
      price: "3,000",
      billing: "per month",
      includes: ["Designs", "Posting"],
    },
  ];

  return (
    <section id="charges" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light mb-6">Pricing & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple pricing built for Indian startups and growing brands.
          </p>

          <div className="inline-flex mt-8 bg-gray-200 rounded-full p-1">
            {["monthly", "yearly"].map((t) => (
              <motion.button
                key={t}
                whileTap={{ scale: 0.9 }}
                onClick={() => setBilling(t)}
                className={`px-6 py-2 rounded-full ${
                  billing === t ? "bg-white shadow" : "text-gray-600"
                }`}
              >
                {t === "monthly" ? "Monthly" : "Yearly (Save 10%)"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((p, i) => (
            <PricingCard
              key={p.name}
              plan={p}
              delay={i * 0.1}
              featured={p.tier === "professional"}
            />
          ))}
        </div>

        <h3 className="text-4xl text-center mb-10">Additional Services</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAddons.map((a, i) => (
            <ServiceAddon key={a.name} addon={a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingServices;
