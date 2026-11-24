import React from "react";
import {
  Sparkles,
  Scissors,
  ShieldCheck,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import "../../styles/ServiceDetails.mockup.css";

const highlightIcons = [Scissors, Sparkles, ShieldCheck, Heart];

const ServiceIntro = ({ service }) => {
  if (!service?.intro) return null;

  const { intro } = service;
  const introImage = intro.image || service.hero?.image;

  return (
    <section className="aurelle-service-intro aurelle-intro-redesign">
      <div className="service-intro-container">
        <div className="service-intro-visual">
          {introImage && (
            <img
              src={introImage}
              alt={intro.imageAlt || `${service.title} at AURELLE Beauty Studio`}
              loading="lazy"
            />
          )}
          <div className="service-intro-image-caption">
            <span>THE AURELLE EXPERIENCE</span>
            <span>01 / PERSONALised CARE</span>
          </div>
        </div>

        <div className="service-intro-copy">
          <span className="service-section-eyebrow">
            {intro.eyebrow || "ABOUT THIS SERVICE"}
          </span>
          <h2>{intro.heading}</h2>
          <p className="service-intro-lead">{intro.description}</p>

          <div className="service-intro-highlights">
            {intro.highlights?.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div className="service-highlight-item" key={`${item}-${index}`}>
                  <div className="service-highlight-icon">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <div className="service-highlight-text">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item}</h3>
                  </div>
                  <ArrowUpRight className="service-highlight-arrow" size={17} />
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
