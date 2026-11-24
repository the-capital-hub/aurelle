import React from "react";
import {
  CalendarDays,
  MessageCircle,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";

const processIcons = [CalendarDays, MessageCircle, Sparkles, Heart];

const ServiceProcess = ({ service }) => {
  if (!service?.process?.length) return null;

  return (
    <section className="aurelle-service-process aurelle-process-redesign">
      <div className="service-process-container">
        <div className="service-process-heading">
          <span className="service-section-eyebrow">OUR SERVICE JOURNEY</span>
          <h2>Your {service.shortTitle || service.title} Journey</h2>
          <p>A simple and personalised process for the best results.</p>
        </div>

        <div className="service-process-grid">
          {service.process.map((step, index) => {
            const Icon = processIcons[index % processIcons.length];
            return (
              <React.Fragment key={step.id || `${step.title}-${index}`}>
                <article className="service-process-card">
                  <div className="process-card-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>
                  <div className="process-card-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
                {index !== service.process.length - 1 && (
                  <ArrowRight className="process-journey-arrow" size={19} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
