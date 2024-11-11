import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What services does your software company offer?',
    answer: 'We offer a wide range of software development services including web development, mobile app development, cloud solutions, and custom software development tailored to client needs.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We follow industry-standard security protocols and comply with GDPR to protect client data. Our systems are regularly audited for vulnerabilities.',
  },
  {
    question: 'What is your development process?',
    answer: 'Our process includes requirement analysis, planning, designing, development, testing, deployment, and maintenance. We follow agile methodologies to ensure quality and flexibility.',
  },
  {
    question: 'How long does it take to develop a custom solution?',
    answer: 'Development time depends on the project scope and complexity. Typically, projects can range from a few weeks to several months.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we provide ongoing maintenance and support services to ensure the continued success of your software solution.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq">
      <h2>📚 FAQs - Unveil the Mysteries</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
