
import React from "react";
import { Link } from "react-router-dom";

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
  UserRound,
} from "lucide-react";

import "./Pricing.css";

/* =========================================
   PRICING CATEGORIES
========================================= */

const categories = [
  {
    id: "hair",
    title: "Hair Styling",
    description:
      "Professional haircuts, hair spa, colouring, rebonding and personalised hair treatments for everyone.",
    image: "/images/pricing/hair-services.jpg",
    icon: Scissors,
    link: "/pricing/hair",
  },
  {
    id: "grooming",
    title: "Men's Grooming",
    description:
      "Men's haircuts, beard styling, shaving, hair treatments and complete grooming services.",
    image: "/images/pricing/mens-grooming.png",
    icon: UserRound,
    link: "/pricing/grooming",
  },
  {
    id: "skin",
    title: "Skin & Facial Care",
    description:
      "Professional facials, cleanups, detan, hydra facial and personalised skincare treatments.",
    image: "/images/pricing/skin-care.jpg",
    icon: Sparkles,
    link: "/pricing/skin",
  },
  {
    id: "makeup",
    title: "Makeup & Bridal",
    description:
      "Professional party makeup, bridal makeup, hairstyling and occasion ready looks.",
    image: "/images/pricing/makeup.jpg",
    icon: Palette,
    link: "/pricing/makeup",
  },
  {
    id: "nails",
    title: "Nail Studio",
    description:
      "Gel polish, acrylic extensions, gel extensions, overlays and creative nail art.",
    image: "/images/pricing/nail-studio.jpg",
    icon: Gem,
    link: "/pricing/nails",
  },
  {
    id: "waxing",
    title: "Waxing & Threading",
    description:
      "Professional waxing, face waxing and precise threading services.",
    image: "/images/pricing/waxing.jpg",
    icon: Feather,
    link: "/pricing/waxing-threading",
  },
  {
    id: "pedicure",
    title: "Manicure & Pedicure",
    description:
      "Classic and premium hand and foot care treatments for a refreshed experience.",
    image: "/images/pricing/pedicure.jpg",
    icon: Footprints,
    link: "/pricing/pedicure-manicure",
  },
  {
    id: "body",
    title: "Body & Spa Treatments",
    description:
      "Relaxing body massages, body polishing and rejuvenating spa experiences.",
    image: "/images/pricing/body-treatment.jpg",
    icon: Flower2,
    link: "/pricing/body-treatments",
  },
  {
    id: "packages",
    title: "Bridal & Groom Packages",
    description:
      "Specially curated bridal and groom packages for weddings and memorable occasions.",
    image: "/images/pricing/bridal-groom.jpg",
    icon: Crown,
    link: "/pricing/packages",
  },
];

/* =========================================
   PRICING CATEGORY CARD
========================================= */

function PricingCategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <article className="pk-pricing-card">

      <Link
        to={category.link}
        className="pk-pricing-card-link"
        aria-label={`Explore ${category.title} pricing`}
      >

        <div className="pk-pricing-card-image">

          <img
            src={category.image}
            alt={`${category.title} at AURELLE`}
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

      </Link>

    </article>
  );
}

/* =========================================
   PRICING PAGE
========================================= */

export default function Pricing() {
  return (
    <main className="pk-pricing-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="pk-pricing-hero">

        <div className="pk-pricing-hero-bg" />

        <div className="pk-pricing-container pk-pricing-hero-inner">

          <div className="pk-pricing-hero-content">

            <div className="pk-pricing-eyebrow">
              <span />
              AURELLE PRICE MENU
            </div>

            <h1>
              The Art of
              <em>Premium Care</em>
            </h1>

            <p>
              Discover our range of premium salon services
              with transparent pricing. From expert hair
              styling and men's grooming to skincare,
              makeup and complete beauty experiences.
            </p>

            <a
              href="#pricing-categories"
              className="pk-pricing-primary-btn"
            >
              Explore Our Services
              <ArrowRight size={19} />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================
          CATEGORY SECTION
      ===================================== */}

      <section
        className="pk-pricing-categories"
        id="pricing-categories"
      >

        <div className="pk-pricing-container">

          <div className="pk-pricing-section-heading">

            <div className="pk-pricing-eyebrow centered">
              <span />
              EXPLORE OUR SERVICES
              <span />
            </div>

            <h2>
              Find Your Perfect <em>Experience</em>
            </h2>

            <p>
              Explore our service categories and discover
              the treatments designed around your personal
              style and grooming needs.
            </p>

          </div>

          {/* SERVICE CATEGORY GRID */}

          <div className="pk-pricing-grid">

            {categories.map((category) => (
              <PricingCategoryCard
                category={category}
                key={category.id}
              />
            ))}

          </div>

          {/* =====================================
              PRICING INFORMATION
          ===================================== */}

          <div className="pk-pricing-information">

            <div className="pk-pricing-info-title">

              <Info size={25} strokeWidth={1.5} />

              <h3>Important Information</h3>

            </div>

            <div className="pk-pricing-info-details">

              <p>
                <Check size={16} />
                Prices are subject to applicable taxes as per the salon menu.
              </p>

              <p>
                <Check size={16} />
                Final service pricing may vary depending on hair length, density and treatment requirements.
              </p>

              <p>
                <Check size={16} />
                Our professionals can help you select the right service during consultation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          APPOINTMENT CTA
      ===================================== */}

      <section className="pk-pricing-cta">

        <div className="pk-pricing-cta-bg" />

        <div className="pk-pricing-container pk-pricing-cta-inner">

          <div className="pk-pricing-cta-content">

            <div className="pk-pricing-eyebrow">
              <span />
              STYLE BEYOND ORDINARY
            </div>

            <h2>
              Your AURELLE Experience Awaits
            </h2>

            <p>
              Enjoy expert styling, personalised grooming
              and exceptional care. Book your appointment
              and experience the AURELLE difference.
            </p>

            <Link
              to="/booking"
              className="pk-pricing-primary-btn"
            >
              <CalendarDays size={18} />
              Book Your Appointment
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
