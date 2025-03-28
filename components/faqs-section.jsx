"use client";

import { useState } from "react";
import FadeInSection from "./fade-in-section";
import { useTranslation } from "next-i18next";

export default function FAQsSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useTranslation("common");

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: t("faqDurableQuestion"),
      answer: t("faqDurableAnswer"),
    },
    {
      question: t("faqUpdateQuestion"),
      answer: t("faqUpdateAnswer"),
    },
    {
      question: t("faqSubscriptionQuestion"),
      answer: t("faqSubscriptionAnswer"),
    },
    {
      question: t("faqAttachQuestion"),
      answer: t("faqAttachAnswer"),
    },
    {
      question: t("faqContributeQuestion"),
      answer: t("faqContributeAnswer"),
    },
  ];

  return (
    <FadeInSection delay={4}>
      <section id="faqs" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
              {t("frequentlyAskedQuestions")}
            </div>

            <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
              {t("commonQuestionsHeading")}
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              {t("findAnswersDescription")}
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
            <div className="divide-y divide-slate-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between text-left"
                  >
                    <span className="text-base sm:text-lg font-medium text-slate-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <i
                        className={`fa-solid fa-chevron-down text-primary/90 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      ></i>
                    </span>
                  </button>
                  <div
                    className={`mt-3 pr-12 grid overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
