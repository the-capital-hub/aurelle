import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Award,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const benefitIcons = [ShieldCheck, Sparkles, Award, HeartHandshake];

const WhyChooseUs = ({ service }) => {
  if (!service?.benefits?.length) return null;

  const visualImage =
    service.benefitsImage ||
    service.intro?.image ||
    "/images/services/benifut.png";

  return (
    <section className="aurelle-why-choose aurelle-why-redesign">
      <div className="why-choose-container">
        <div className="why-choose-visual">
          <img src={visualImage} alt="AURELLE Beauty Studio interior" loading="lazy" />
        </div>

        <div className="why-choose-content">
          <div className="why-choose-header">
            <div>
              <span className="service-section-eyebrow">WHY CHOOSE AURELLE</span>
              <h2>The AURELLE <span>Difference</span></h2>
            </div>
            <p>
              Every detail matters. Experience professional expertise,
              premium care and a service shaped around you.
            </p>
          </div>

          <div className="why-choose-grid">
            {service.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <article className="why-choose-card" key={`${benefit}-${index}`}>
                  <div className="why-choose-card-top">
                    <Icon size={23} strokeWidth={1.4} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="why-choose-card-bottom">
                    <h3>{benefit}</h3>
                    <ArrowUpRight size={17} className="why-choose-arrow" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
