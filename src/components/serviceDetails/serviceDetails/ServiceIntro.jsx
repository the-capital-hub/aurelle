
import React from "react";
import {
  Sparkles,
  Scissors,
  ShieldCheck,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const highlightIcons = [
  Scissors,
  Sparkles,
  ShieldCheck,
  Heart,
];

const ServiceIntro = ({ service }) => {
  if (!service?.intro) return null;

  const { intro } = service;

  return (
    <section className="aurelle-service-intro">

      <div className="service-intro-container">

        {/* Section Heading */}

        <div className="service-intro-heading">

          <span className="service-section-eyebrow">
            {intro.eyebrow}
          </span>

          <h2>{intro.heading}</h2>

          <div className="service-intro-divider" />

        </div>

        {/* Description */}

        <div className="service-intro-content">

          <div className="service-intro-description">
            <span className="service-intro-number">01</span>

            <p>{intro.description}</p>
          </div>

          {/* Highlights */}

          <div className="service-intro-highlights">

            {intro.highlights?.map((item, index) => {
              const Icon =
                highlightIcons[index % highlightIcons.length];

              return (
                <div
                  className="service-highlight-item"
                  key={`${item}-${index}`}
                >
                  <div className="service-highlight-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="service-highlight-text">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item}</h3>
                  </div>

                  <ArrowUpRight
                    className="service-highlight-arrow"
                    size={18}
                  />
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceIntro;
