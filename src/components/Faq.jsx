"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How much does a website cost?",
      answer:
        "Website pricing depends on project requirements, features, and design complexity. Contact us for a custom quote based on your needs.",
    },

    {
      question: "How long does a project take?",
      answer:
        "Most projects are completed within a few days to a few weeks depending on the scope and client feedback process.",
    },

    {
      question: "Do you provide revisions?",
      answer:
        "Yes, we provide revisions to ensure the final result matches your vision and expectations.",
    },

    {
      question: "Do you provide support after delivery?",
      answer:
        "Yes, Branding Guide provides support and minor updates after project completion.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#03111F] py-12">
      
      {/* Glow */}
      <div className="absolute left-[-100px] top-0 h-[240px] w-[240px] rounded-full bg-[#086ED0]/10 blur-3xl" />

      <div className="absolute bottom-0 right-[-100px] h-[240px] w-[240px] rounded-full bg-[#FF6D00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1000px] px-6">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-xs font-medium uppercase tracking-[5px] text-[#FF6D00] sm:text-sm">
            FAQ
          </p>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            
            Frequently Asked
            <span className="text-[#086ED0]"> Questions </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-white/60 sm:text-base">
            Everything you need to know about our services,
            workflow, and project process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-6">
          
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              
              {/* Question */}
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {faq.question}
                </h3>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FF6D00]">
                  {active === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  
                  <p className="px-6 pb-6 text-sm leading-7 text-white/60 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}