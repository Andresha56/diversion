import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is FinSync?",
    answer:
      "FinSync is a modern app designed to make managing enterprises seamless.",
  },
  {
    question: "How do I use the Scan & Pay feature to send money?",
    answer:
      "You can use the Scan & Pay feature by scanning a QR code and confirming the payment.",
  },
  {
    question: "What is UPI? How does it enable bank-to-bank transfer?",
    answer:
      "UPI (Unified Payments Interface) is a real-time payment system allowing instant bank transfers.",
  },
  {
    question: "How do I know I can trust StoreEdge with my payments?",
    answer:
      "StoreEdge follows industry-leading security standards to keep your transactions safe.",
  },
  {
    question:
      "Do I have to pay anything to create a StoreEdge account and use StoreEdge?",
    answer: "No, creating a StoreEdge account is completely free.",
  },
  {
    question: "How can I contact StoreEdge for UPI Support?",
    answer:
      "You can reach out to StoreEdge support via email or customer service chat.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#EBF0FF] to-white flex flex-col items-center py-16 px-4">
      {/* FAQ Title with Border Effect */}
      <div className="relative mb-10 text-center">
        <h2 className="text-4xl font-bold text-[#5044FC] relative z-10">FAQ</h2>
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-[#5044FC] rotate-45"></div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-8 text-left font-medium text-gray-900 transition-all hover:bg-gray-100"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-[#5044FC]" />
              ) : (
                <FaChevronDown className="text-[#5044FC]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-3 text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
