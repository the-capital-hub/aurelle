
import React from "react";
import {
  Gem,
  Sparkles,
  Hand,
  Palette,
  ShieldCheck,
  Heart,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  Fingerprint,
} from "lucide-react";

import "./NailPricing.css";

const nailHighlights = [
  {
    icon: Gem,
    title: "Premium Nail Art",
    text: "Elegant and creative designs",
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    text: "Professional nail products",
  },
  {
    icon: Palette,
    title: "Custom Styling",
    text: "Styles to match your look",
  },
  {
    icon: Sparkles,
    title: "Expert Nail Care",
    text: "Detail focused nail services",
  },
];

const nailServices = [
  {
    id: "gel-polish",
    number: "01",
    title: "Gel Polish",
    label: "GLOSSY NAIL FINISH",
    description:
      "Give your nails a smooth, glossy finish with a beautiful gel polish application.",
    price: "₹800",
    image: "/images/pricing/gel-polish.jpg",
    icon: Sparkles,
  },
  {
    id: "acrylic-extension",
    number: "02",
    title: "Acrylic Extension",
    label: "LENGTH AND ELEGANCE",
    description:
      "Enhance your nail length and shape with professionally crafted acrylic extensions.",
    price: "₹2,800",
    image: "/images/pricing/acrylic-extension.jpg",
    icon: Gem,
  },
  {
    id: "gel-extension",
    number: "03",
    title: "Gel Extension",
    label: "BEAUTIFUL NAIL LENGTH",
    description:
      "Achieve an elegant nail look with beautifully shaped gel extensions.",
    price: "₹1,900",
    image: "/images/pricing/gel-extension.jpg",
    icon: Fingerprint,
  },
  {
    id: "gel-overlay",
    number: "04",
    title: "Gel Overlay",
    label: "NATURAL NAIL ENHANCEMENT",
    description:
      "Add a polished finish and an enhanced appearance to your natural nails.",
    price: "₹1,500",
    image: "/images/pricing/gel-overlay.jpg",
    icon: Hand,
  },
];

function NailServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="nail-service-card" id={service.id}>
      <div className="nail-card-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <div className="nail-card-image-shade" />

        <span className="nail-card-number">
          {service.number}
        </span>
      </div>

      <div className="nail-card-content">
        <span className="nail-card-label">
          {service.label}
        </span>

        <div className="nail-card-title">
          <Icon size={24} strokeWidth={1.4} />
          <h3>{service.title}</h3>
        </div>

        <p>{service.description}</p>

        <div className="nail-card-bottom">
          <strong>{service.price}</strong>

          <a href="/contact" className="nail-book-link">
            Book Now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NailPricing() {
  return (
    <main className="pk-nail-page">

      {/* HERO */}

      <section className="nail-hero">
        <div className="nail-hero-background" />

        <div className="nail-container nail-hero-inner">

          <a href="/pricing" className="nail-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="nail-hero-content">
            <span className="nail-eyebrow">
              <span />
              PK NAIL STUDIO
            </span>

            <h1>
              Nail Art
              <em>& Extensions</em>
            </h1>

            <p>
              Discover beautiful nail styling, premium extensions
              and elegant finishes crafted to complement your style.
            </p>

            <a href="#nail-services" className="nail-primary-button">
              Explore Nail Services
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="nail-highlights">
        <div className="nail-container nail-highlights-grid">
          {nailHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="nail-highlight" key={item.title}>
                <Icon size={29} strokeWidth={1.4} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}

      <section
        className="nail-services-section"
        id="nail-services"
      >
        <div className="nail-container">

          <div className="nail-section-heading">
            <span className="nail-eyebrow nail-centered">
              <span />
              OUR NAIL SERVICES
              <span />
            </span>

            <h2>
              Beautiful Nails, <em>Beautiful You</em>
            </h2>

            <p>
              Explore our nail studio services and find the
              perfect finish for your personal style.
            </p>
          </div>

          <div className="nail-services-grid">
            {nailServices.map((service) => (
              <NailServiceCard
                service={service}
                key={service.id}
              />
            ))}
          </div>

          {/* EXTRA INFORMATION */}

          <div className="nail-experience">
            <div className="nail-experience-icon">
              <Heart size={30} strokeWidth={1.4} />
            </div>

            <div>
              <span>THE PK NAIL EXPERIENCE</span>
              <h3>Every Detail Deserves Attention</h3>
              <p>
                From nail shape to the final finish, enjoy
                personalised styling and professional nail care.
              </p>
            </div>
          </div>

          {/* PRICING INFORMATION */}

          <div className="nail-pricing-info">
            <div className="nail-info-heading">
              <Info size={27} strokeWidth={1.5} />
              <h3>Pricing Information</h3>
            </div>

            <div className="nail-info-details">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Final nail design and customisation can be
                discussed during your appointment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="nail-final-cta">
        <div className="nail-final-background" />

        <div className="nail-container nail-final-inner">
          <div className="nail-final-content">

            <span className="nail-eyebrow">
              <span />
              YOUR NAILS, YOUR STYLE
            </span>

            <h2>
              Give Your Nails
              <em>A Luxury Experience</em>
            </h2>

            <p>
              Book your nail appointment and discover
              beautiful styling at PK Unisex Salon.
            </p>

            <a href="/contact" className="nail-primary-button">
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={18} />
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
