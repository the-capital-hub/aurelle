
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServiceFAQ = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!service?.faqs?.length) return null;

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="aurelle-service-faq">
      <div className="service-faq-container">

        <div className="service-faq-heading">

          <span className="service-section-eyebrow">
            HAVE QUESTIONS?
          </span>

          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>

          <p>
            Everything you need to know about our services
            and your AURELLE experience.
          </p>

        </div>

        <div className="service-faq-list">

          {service.faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`service-faq-item ${
                  isOpen ? "active" : ""
                }`}
                key={`${faq.question}-${index}`}
              >

                <button
                  type="button"
                  className="service-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >

                  <span className="service-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="service-faq-title">
                    {faq.question}
                  </span>

                  <span className="service-faq-icon">
                    <ChevronDown size={19} />
                  </span>

                </button>

                <div
                  className="service-faq-answer"
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;
