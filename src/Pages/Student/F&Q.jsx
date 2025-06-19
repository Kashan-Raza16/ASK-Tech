import React, { useState, useEffect } from 'react';

const FandQ = () => {
  const [openStates, setOpenStates] = useState([]);

  const faqs = [
    {
      question: 'How is ASK Tech different from other subscription services?',
      answer:
        'When you work with Jamm, you work with top-notch individuals not just a single person. We put in the right expert to manage your account and to deliver the task/project at hand (branding, website, product, etc). Quality control, skill and process is our secret sauce.',
    },
    {
      question: 'How much work is delivered on every update?',
      answer:
        'The amount of work delivered per update depends on the complexity of the task and the specific service. We aim to provide consistent progress and keep you informed every step of the way.',
    },
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        'Hiring a full-time designer involves significant overhead costs, including salary, benefits, and office space. With Jamm, you get access to a team of experts on demand, without the long-term commitment and expenses.',
    },
    {
      question: 'Is there a limit to how many requests I can have?',
      answer:
        'Our subscription models vary, but most plans offer unlimited requests. We work on your requests one at a time, ensuring quality and focus on each task.',
    },
    {
      question: 'Can I get more than 1 active request at a time?',
      answer:
        'This depends on your specific plan. Some premium plans allow for multiple active requests simultaneously to accelerate your project timelines.',
    },
    {
      question: 'How quickly will I receive project ?',
      answer:
        'Delivery times vary based on the complexity of the design and the current workload. However, we strive to deliver initial concepts and revisions promptly, typically within a few business days for most standard requests.',
    },
  ];

  useEffect(() => {
    setOpenStates(new Array(faqs.length).fill(false));
  }, [faqs.length]);

  const toggleOpen = (index) => {
    setOpenStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF7EE] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-4xl">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#343434] mb-12 text-left tracking-tight">
          FAQs
        </h1>
        <div className="space-y-6 mb-35">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none px-6 py-6"
                onClick={() => toggleOpen(index)}
                aria-expanded={openStates[index]}
              >
                <span className="text-2xl sm:text-3xl font-semibold text-[#222]">
                  {faq.question}
                </span>
                <svg
                  className={`w-7 h-7 transition-transform duration-300 text-[#E76C6C] ${
                    openStates[index] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openStates[index]
                    ? 'max-h-96 opacity-100 py-4'
                    : 'max-h-0 opacity-0 py-0'
                }`}
                style={{ willChange: 'max-height, opacity, padding' }}
              >
                <div className="text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FandQ;
