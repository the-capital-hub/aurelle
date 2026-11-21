
import React from "react";
import {
  Scissors,
  Sparkles,
  Palette,
  Gem,
  Feather,
  Footprints,
  Flower2,
  Crown,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
} from "lucide-react";

import "./Pricing.css";

const categories = [
  {
    id: "hair",
    title: "Hair Services",
    description:
      "Hair cut, spa, colouring, rebonding, treatments and head massage.",
    image: "/images/pricing/hair-services.jpg",
    icon: Scissors,
    link: "/pricing/hair",
  },
  {
    id: "skin",
    title: "Facial & Skin Care",
    description:
      "Facials, clean up, detan, hydra facial and advanced skin treatments.",
    image: "/images/pricing/skin-care.jpg",
    icon: Sparkles,
    link: "/pricing/skin",
  },
  {
    id: "makeup",
    title: "Makeup",
    description:
      "Party makeup, bridal makeup, hair do, saree drape and special occasions.",
    image: "/images/pricing/makeup.jpg",
    icon: Palette,
    link: "/pricing/makeup",
  },
  {
    id: "nails",
    title: "Nail Studio",
    description:
      "Gel polish, acrylic extension, gel extension, gel overlay and nail art.",
    image: "/images/pricing/nail-studio.jpg",
    icon: Gem,
    link: "/pricing/nails",
  },
  {
    id: "waxing",
    title: "Waxing & Threading",
    description:
      "Full body waxing, face waxing and precise threading services.",
    image: "/images/pricing/waxing.jpg",
    icon: Feather,
    link: "/pricing/waxing-threading",
  },
  {
    id: "pedicure",
    title: "Pedicure & Manicure",
    description:
      "Classic and premium pedicure and manicure treatments for beautiful hands and feet.",
    image: "/images/pricing/pedicure.jpg",
    icon: Footprints,
    link: "/pricing/pedicure-manicure",
  },
  {
    id: "body",
    title: "Body Treatments",
    description:
      "Full body massage, body polishing and rejuvenating spa treatments.",
    image: "/images/pricing/body-treatment.jpg",
    icon: Flower2,
    link: "/pricing/body-treatments",
  },
  {
    id: "packages",
    title: "Bridal & Groom Packages",
    description:
      "Complete bridal and groom makeup packages for your special day.",
    image: "/images/pricing/bridal-groom.jpg",
    icon: Crown,
    link: "/pricing/packages",
  },
];

function PricingCategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <article className="pk-pricing-card">
      <a
        href={category.link}
        className="pk-pricing-card-link"
        aria-label={`Explore ${category.title} pricing`}
      >
        <div className="pk-pricing-card-image">
          <img
            src={category.image}
            alt={category.title}
            loading="lazy"
          />
          <div className="pk-pricing-card-image-overlay" />
        </div>

        <div className="pk-pricing-card-content">
          <div className="pk-pricing-card-icon">
            <Icon size={30} strokeWidth={1.5} />
          </div>

          <h3>{category.title}</h3>

          <p>{category.description}</p>

          <span className="pk-pricing-explore">
            View Pricing
            <ArrowRight size={17} />
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Pricing() {
  return (
    <main className="pk-pricing-page">

      {/* HERO SECTION */}

      <section className="pk-pricing-hero">
        <div className="pk-pricing-hero-bg" />

        <div className="pk-pricing-container pk-pricing-hero-inner">
          <div className="pk-pricing-hero-content">

            <div className="pk-pricing-eyebrow">
              <span />
              PRICING
            </div>

            <h1>
              Our Salon
              <em>Price Menu</em>
            </h1>

            <p>
              Explore our complete range of premium salon
              services and transparent pricing, designed for
              your beauty, grooming and wellness needs.
            </p>

            <a
              href="#pricing-categories"
              className="pk-pricing-primary-btn"
            >
              Browse Services
              <ArrowRight size={19} />
            </a>

          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}

      <section
        className="pk-pricing-categories"
        id="pricing-categories"
      >
        <div className="pk-pricing-container">

          <div className="pk-pricing-section-heading">

            <div className="pk-pricing-eyebrow centered">
              <span />
              OUR SERVICE CATEGORIES
              <span />
            </div>

            <h2>
              Choose a Service & <em>View Pricing</em>
            </h2>

            <p>
              Select a category below to explore detailed
              services and prices.
            </p>

          </div>

          <div className="pk-pricing-grid">
            {categories.map((category) => (
              <PricingCategoryCard
                category={category}
                key={category.id}
              />
            ))}
          </div>

          {/* INFORMATION */}

          <div className="pk-pricing-information">

            <div className="pk-pricing-info-title">
              <Info size={25} strokeWidth={1.5} />
              <h3>Important Information</h3>
            </div>

            <div className="pk-pricing-info-details">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST as per salon menu.
              </p>

              <p>
                <Check size={16} />
                Final pricing may vary based on hair length, density and consultation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* APPOINTMENT CTA */}

      <section className="pk-pricing-cta">
        <div className="pk-pricing-cta-bg" />

        <div className="pk-pricing-container pk-pricing-cta-inner">

          <div className="pk-pricing-cta-content">

            <div className="pk-pricing-eyebrow">
              <span />
              EXPERIENCE PREMIUM CARE
            </div>

            <h2>
              Book Your Appointment Today
            </h2>

            <p>
              Get expert care, personalised services and a
              relaxing salon experience at PK Unisex Salon.
            </p>

            <a
              href="/contact"
              className="pk-pricing-primary-btn"
            >
              <CalendarDays size={18} />
              Book Appointment
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
