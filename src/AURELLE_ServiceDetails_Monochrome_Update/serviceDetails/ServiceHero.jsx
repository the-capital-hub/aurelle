
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, ChevronRight } from "lucide-react";

const ServiceHero = ({ service }) => {
  if (!service) return null;

  const { hero, title, shortTitle, booking } = service;

  return (
    <section className="aurelle-service-hero aurelle-service-hero-redesign">

      <div className="service-hero-overlay" />

      <div className="service-hero-image">
        <img
          src={hero.image}
          alt={title}
          loading="eager"
        />
      </div>

      <div className="service-hero-container">

        <div className="service-hero-content">

          <div className="service-breadcrumb">
            <Link to="/">Home</Link>

            <ChevronRight size={14} />

            <Link to="/services">Services</Link>

            <ChevronRight size={14} />

            <span>{shortTitle || title}</span>
          </div>

          <span className="service-hero-eyebrow">
            AURELLE BEAUTY STUDIO
          </span>

          <h1>{hero.heading || title}</h1>

          <p className="service-hero-description">
            {hero.description}
          </p>

          <div className="service-hero-actions">

            <Link
              to={`/booking?service=${booking.service}`}
              className="service-hero-primary-btn"
            >
              <CalendarDays size={17} />
              {hero.primaryButton || "Book Appointment"}
              <ArrowRight size={16} />
            </Link>

            <a
              href="#service-treatments"
              className="service-hero-secondary-btn"
            >
              {hero.secondaryButton || "Explore Services"}
            </a>

          </div>

        </div>

        <div className="service-hero-bottom">
          <span>01 / 08</span>
          <span>EXPERIENCE THE AURELLE DIFFERENCE</span>
        </div>

      </div>
    </section>
  );
};

export default ServiceHero;
