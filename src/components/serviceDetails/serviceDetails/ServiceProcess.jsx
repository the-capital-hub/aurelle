
import React from "react";
import {
  CalendarDays,
  MessageCircle,
  Sparkles,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const processIcons = [
  CalendarDays,
  MessageCircle,
  Sparkles,
  Heart,
];

const ServiceProcess = ({ service }) => {
  if (!service?.process?.length) return null;

  return (
    <section className="aurelle-service-process">
      <div className="service-process-container">

        <div className="service-process-heading">
          <span className="service-section-eyebrow">
            THE AURELLE EXPERIENCE
          </span>

          <h2>
            Your Journey to
            <br />
            <span>Looking Your Best</span>
          </h2>

          <p>
            A seamless and personalised experience,
            thoughtfully designed around you.
          </p>
        </div>

        <div className="service-process-grid">

          {service.process.map((step, index) => {
            const Icon =
              processIcons[index % processIcons.length];

            return (
              <article
                className="service-process-card"
                key={step.id}
              >

                <div className="process-card-top">
                  <span className="process-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="process-card-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="process-card-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index !== service.process.length - 1 && (
                  <ArrowUpRight
                    className="process-card-arrow"
                    size={18}
                  />
                )}

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;
