import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does StoreEdge help my business?",
      answer: "It simplifies inventory, billing, and management.",
    },
    {
      question: "Is StoreEdge secure?",
      answer: "Yes, we use top-tier security measures.",
    },
    {
      question: "How do I get started?",
      answer: "Click on 'Start' and follow the steps!",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
