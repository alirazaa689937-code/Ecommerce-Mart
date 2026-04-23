import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment gateway.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. We also offer expedited shipping options (2-day and overnight) for an additional fee. International shipping times vary by destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be unused, in their original packaging, and accompanied by a receipt. Some exclusions apply (e.g., personalized items). Visit our Returns Center to initiate a return.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can track your package directly through our website or the carrier's tracking system.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. Additional customs fees or import taxes may apply depending on your country's regulations.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "Our customer service team is available 24/7 via email at support@shopease.com or by phone at (800) 555-1234. You can also use our live chat feature during business hours (9am-9pm EST).",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't find what you're looking for?{" "}
            <Link
              to="/contact"
              className="text-purple-600 hover:text-purple-800"
            >
              Contact our support team
            </Link>
            .
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow overflow-hidden rounded-lg"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                className={`px-6 pb-5 transition-all duration-300 ease-in-out ${activeIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is ready to assist you with any questions
            you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="tel:+18005551234"
              className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-md font-medium border border-purple-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
