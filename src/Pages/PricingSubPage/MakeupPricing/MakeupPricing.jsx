
import React from "react";
import {
  Sparkles,
  Crown,
  Scissors,
  Shirt,
  Gem,
  Leaf,
  Users,
  WandSparkles,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
} from "lucide-react";

import "./MakeupPricing.css";

const makeupHighlights = [
  {
    icon: Gem,
    title: "Professional Artistry",
    text: "Experienced makeup artists",
  },
  {
    icon: Leaf,
    title: "Premium Products",
    text: "Quality focused products",
  },
  {
    icon: Users,
    title: "Occasion Ready Look",
    text: "For every special moment",
  },
  {
    icon: WandSparkles,
    title: "Personalised Styling",
    text: "Looks designed just for you",
  },
];

const makeupServices = [
  {
    id: "party-makeup",
    number: "01",
    title: "Party Makeup",
    description:
      "A glamorous and long lasting makeup look, perfect for parties and special events.",
    price: "₹6,000",
    image: "/images/pricing/party-makeup.jpg",
    icon: Sparkles,
    label: "PARTY AND OCCASION",
  },
  {
    id: "bridal-makeup",
    number: "02",
    title: "Bridal Makeup",
    description:
      "A complete bridal makeup experience crafted for your unforgettable big day.",
    price: "₹25,000",
    image: "/images/pricing/bridal-makeup.jpg",
    icon: Crown,
    label: "YOUR SPECIAL DAY",
  },
  {
    id: "hair-do",
    number: "03",
    title: "Hair Do",
    description:
      "Stylish and occasion ready hair styling to complement your overall look.",
    price: "₹1,500",
    image: "/images/pricing/makeup-hairdo.jpg",
    icon: Scissors,
    label: "PROFESSIONAL STYLING",
  },
  {
    id: "saree-drape",
    number: "04",
    title: "Saree Drape",
    description:
      "Professional saree draping for an elegant, graceful and flawless look.",
    price: "₹800",
    image: "/images/pricing/saree-drape.jpg",
    icon: Shirt,
    label: "TRADITIONAL STYLING",
  },
];

function MakeupServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="makeup-service-card" id={service.id}>
      <div className="makeup-card-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />
        <div className="makeup-card-image-shade" />
        <span className="makeup-card-number">{service.number}</span>
      </div>

      <div className="makeup-card-content">
        <span className="makeup-card-label">{service.label}</span>

        <div className="makeup-card-title">
          <Icon size={24} strokeWidth={1.4} />
          <h3>{service.title}</h3>
        </div>

        <p>{service.description}</p>

        <div className="makeup-card-bottom">
          <strong>{service.price}</strong>

          <a href="/contact" className="makeup-book-link">
            Book Now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MakeupPricing() {
  return (
    <main className="pk-makeup-page">

      {/* HERO */}

      <section className="makeup-hero">
        <div className="makeup-hero-background" />

        <div className="makeup-container makeup-hero-inner">

          <a href="/pricing" className="makeup-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="makeup-hero-content">
            <span className="makeup-eyebrow">
              <span />
              MAKEUP EXPERTS
            </span>

            <h1>
              Makeup
              <em>Services</em>
            </h1>

            <p>
              Professional makeup and grooming services for
              every occasion, from parties to your big day.
            </p>

            <a href="/contact" className="makeup-primary-button">
              Book a Makeup Session
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="makeup-highlights">
        <div className="makeup-container makeup-highlights-grid">
          {makeupHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="makeup-highlight" key={item.title}>
                <Icon size={30} strokeWidth={1.4} />

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

      <section className="makeup-services-section">
        <div className="makeup-container">

          <div className="makeup-section-heading">
            <span className="makeup-eyebrow makeup-centered">
              <span />
              OUR MAKEUP SERVICES
              <span />
            </span>

            <h2>
              Explore Our <em>Makeup Services</em>
            </h2>

            <p>
              Choose from our professional makeup and styling
              services for your next special occasion.
            </p>
          </div>

          <div className="makeup-services-grid">
            {makeupServices.map((service) => (
              <MakeupServiceCard
                service={service}
                key={service.id}
              />
            ))}
          </div>

          {/* PRICING INFORMATION */}

          <div className="makeup-pricing-info">
            <div className="makeup-info-heading">
              <Info size={27} strokeWidth={1.5} />
              <h3>Pricing Information</h3>
            </div>

            <div className="makeup-info-details">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Pricing may vary based on look, hair length,
                products and customisation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="makeup-final-cta">
        <div className="makeup-final-background" />

        <div className="makeup-container makeup-final-inner">
          <div className="makeup-final-content">

            <span className="makeup-eyebrow">
              <span />
              GET READY FOR YOUR SPECIAL DAY
            </span>

            <h2>
              Book Your
              <em>Makeup Session Today</em>
            </h2>

            <p>
              Let our makeup experts create the perfect look
              for your next special occasion.
            </p>

            <a href="/contact" className="makeup-primary-button">
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
