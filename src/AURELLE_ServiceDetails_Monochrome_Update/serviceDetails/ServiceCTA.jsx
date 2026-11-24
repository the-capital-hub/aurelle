
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const ServiceCTA = ({ service }) => {
  if (!service?.cta) return null;

  const { cta, booking } = service;

  return (
    <section className="aurelle-service-cta">

      <div className="service-cta-background" />

      <div className="service-cta-container">

        <div className="service-cta-content">

          <span className="service-section-eyebrow">
            <Sparkles size={14} />
            YOUR AURELLE EXPERIENCE AWAITS
          </span>

          <h2>{cta.heading}</h2>

          <p>{cta.description}</p>

          <Link
            to={`/booking?service=${booking.service}`}
            className="service-cta-button"
          >
            <CalendarDays size={17} />

            {cta.buttonText || "Book an Appointment"}

            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="service-cta-decoration">
          <span>A</span>
          <div />
          <span>BEAUTY STUDIO</span>
        </div>

      </div>

    </section>
  );
};

export default ServiceCTA;
