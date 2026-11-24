
import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Award,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const benefitIcons = [
  ShieldCheck,
  Sparkles,
  Award,
  HeartHandshake,
];

const WhyChooseUs = ({ service }) => {
  if (!service?.benefits?.length) return null;

  return (
    <section className="aurelle-why-choose">
      <div className="why-choose-container">

        <div className="why-choose-header">

          <div>
            <span className="service-section-eyebrow">
              THE AURELLE STANDARD
            </span>

            <h2>
              Why Choose
              <br />
              <span>AURELLE</span>
            </h2>
          </div>

          <p>
            Every detail matters. We bring together
            professional expertise, premium care and
            a personalised experience designed around you.
          </p>

        </div>

        <div className="why-choose-grid">

          {service.benefits.map((benefit, index) => {
            const Icon =
              benefitIcons[index % benefitIcons.length];

            return (
              <article
                className="why-choose-card"
                key={`${benefit}-${index}`}
              >

                <div className="why-choose-card-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <div className="why-choose-card-bottom">
                  <h3>{benefit}</h3>

                  <ArrowUpRight
                    size={19}
                    className="why-choose-arrow"
                  />
                </div>

              </article>
            );
          })}

        </div>

        <div className="why-choose-footer">
          <span>BEAUTY. CARE. CONFIDENCE.</span>
          <span>EXPERIENCE AURELLE</span>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
