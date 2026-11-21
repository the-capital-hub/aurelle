
import React from "react";
import {
  Sparkles,
  Droplet,
  Gem,
  ShieldCheck,
  Leaf,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  Heart,
} from "lucide-react";

import "./FacialPricing.css";

const skinServices = [
  {
    name: "Refreshing Glow Facial",
    description: "A refreshing facial experience for clean, hydrated and radiant looking skin.",
    price: "₹1,200",
    image: "/images/pricing/skin-refreshing.jpg",
    icon: Sparkles,
  },
  {
    name: "O3 Radiance Glow",
    description: "A premium facial experience designed to refresh and brighten your skin.",
    price: "₹2,500",
    image: "/images/pricing/skin-o3.jpg",
    icon: Sparkles,
  },
  {
    name: "Skin Lightening & Whitening",
    description: "A specialised skin care treatment for a brighter and more even looking complexion.",
    price: "₹4,000",
    image: "/images/pricing/skin-lightening.jpg",
    icon: Leaf,
  },
  {
    name: "Hydra Facial",
    description: "Deep cleansing and hydration for smooth, refreshed and glowing skin.",
    price: "₹3,999",
    image: "/images/pricing/skin-hydra.jpg",
    icon: Droplet,
  },
  {
    name: "Hydra Frequency",
    description: "A specialised skin care experience for refreshed and revitalised looking skin.",
    price: "₹7,500",
    image: "/images/pricing/skin-frequency.jpg",
    icon: Droplet,
  },
  {
    name: "Korean Glass Facial",
    description: "A premium facial experience inspired by the fresh glass skin look.",
    price: "₹6,000",
    image: "/images/pricing/skin-korean.jpg",
    icon: Gem,
  },
  {
    name: "Double Chin Treatment",
    description: "A focused aesthetic treatment for the chin and lower face area.",
    price: "₹1,600",
    image: "/images/pricing/skin-double-chin.jpg",
    icon: Heart,
  },
  {
    name: "Jawline Shape Treatment",
    description: "A targeted treatment focused on the appearance of the jawline.",
    price: "₹1,700",
    image: "/images/pricing/skin-jawline.jpg",
    icon: ShieldCheck,
  },
  {
    name: "Under Eye Treatment",
    description: "Focused care for the delicate under eye area.",
    price: "₹2,000",
    image: "/images/pricing/skin-under-eye.jpg",
    icon: Sparkles,
  },
  {
    name: "Clean Up & Detan",
    description: "Explore cleansing and detan options for refreshed looking skin.",
    price: "See Menu",
    image: "/images/pricing/skin-cleanup.jpg",
    icon: Leaf,
  },
];

const skinHighlights = [
  {
    icon: Leaf,
    title: "Advanced Treatments",
    text: "Professional skin care services",
  },
  {
    icon: Gem,
    title: "Premium Products",
    text: "Quality focused skin care",
  },
  {
    icon: ShieldCheck,
    title: "Expert Therapists",
    text: "Personalised consultation",
  },
  {
    icon: Sparkles,
    title: "Skin Care Experience",
    text: "Care designed around your needs",
  },
];

function SkinServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="skin-service-card">
      <div className="skin-card-image">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
        />
        <div className="skin-card-image-shade" />
      </div>

      <div className="skin-card-content">
        <div className="skin-card-title">
          <Icon size={20} strokeWidth={1.5} />
          <h3>{service.name}</h3>
        </div>

        <p>{service.description}</p>

        <div className="skin-card-bottom">
          <strong>{service.price}</strong>

          <a href="/contact" className="skin-book-link">
            Book Now
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FacialPricing() {
  return (
    <main className="pk-skin-page">

      {/* HERO */}

      <section className="skin-hero">
        <div className="skin-hero-background" />

        <div className="skin-container skin-hero-inner">

          <a href="/pricing" className="skin-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="skin-hero-content">
            <span className="skin-eyebrow">
              <span />
              SKIN CARE EXPERTS
            </span>

            <h1>
              Facial &amp;
              <em>Skin Care</em>
            </h1>

            <p>
              Discover advanced facial treatments and personalised
              skin care experiences designed to refresh your natural glow.
            </p>

            <a href="/contact" className="skin-primary-button">
              Book a Skin Consultation
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="skin-highlights">
        <div className="skin-container skin-highlights-grid">
          {skinHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="skin-highlight" key={item.title}>
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

      <section className="skin-services-section">
        <div className="skin-container">

          <div className="skin-section-heading">
            <span className="skin-eyebrow skin-centered">
              <span />
              OUR SKIN CARE SERVICES
              <span />
            </span>

            <h2>
              Explore Facial &amp; <em>Skin Treatments</em>
            </h2>

            <p>
              Explore our facial therapies and skin care services
              to find the right experience for your needs.
            </p>
          </div>

          <div className="skin-services-grid">
            {skinServices.map((service) => (
              <SkinServiceCard
                service={service}
                key={service.name}
              />
            ))}
          </div>

          {/* INFORMATION */}

          <div className="skin-pricing-info">
            <div className="skin-info-heading">
              <Info size={27} strokeWidth={1.5} />
              <h3>Pricing Information</h3>
            </div>

            <div className="skin-info-details">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Final treatment selection and pricing may depend
                on skin type and consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="skin-final-cta">
        <div className="skin-final-background" />

        <div className="skin-container skin-final-inner">
          <div className="skin-final-content">
            <span className="skin-eyebrow">
              <span />
              EXPERIENCE EXPERT SKIN CARE
            </span>

            <h2>
              Book Your Skin Care
              <em>Session Today</em>
            </h2>

            <p>
              Let our skin care experts help you choose
              the right treatment for your needs.
            </p>

            <a href="/contact" className="skin-primary-button">
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
