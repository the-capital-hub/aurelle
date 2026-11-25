
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
   WOMEN'S PRICING CATEGORIES
========================================= */

const womenCategories = [
  {
    id: "women-hair",
    title: "Hair Styling & Treatments",
    description:
      "Haircuts, styling, hair spa, colouring, rebonding and professional hair treatments.",
    image: "/images/pricing/hair-services.jpg",
    icon: Scissors,
    link: "/pricing/women/hair",
  },
  {
    id: "women-skin",
    title: "Skin & Facial Care",
    description:
      "Premium facials, cleanups, detan packs and specialised skincare treatments.",
    image: "/images/pricing/skin-care.jpg",
    icon: Sparkles,
    link: "/pricing/women/skin",
  },
  {
    id: "women-makeup",
    title: "Makeup & Bridal",
    description:
      "Party makeup, bridal makeup, professional hair styling and saree draping.",
    image: "/images/pricing/makeup.jpg",
    icon: Palette,
    link: "/pricing/women/makeup",
  },
  {
    id: "women-nails",
    title: "Nail Studio",
    description:
      "Gel polish, acrylic extensions, gel extensions, overlays and nail finishing.",
    image: "/images/pricing/nail-studio.jpg",
    icon: Gem,
    link: "/pricing/women/nails",
  },
  {
    id: "women-waxing",
    title: "Waxing & Threading",
    description:
      "Rica, roll on and Brazilian waxing along with professional threading services.",
    image: "/images/pricing/waxing.jpg",
    icon: Feather,
    link: "/pricing/women/waxing-threading",
  },
  {
    id: "women-pedicure",
    title: "Manicure & Pedicure",
    description:
      "Classic, Foot Logic, Ice Cream, Lotus Glow and Bubblegum Fresh treatments.",
    image: "/images/pricing/pedicure.jpg",
    icon: Footprints,
    link: "/pricing/women/pedicure-manicure",
  },
  {
    id: "women-body",
    title: "Body & Spa Treatments",
    description:
      "Full body massage, premium massage and relaxing body polishing experiences.",
    image: "/images/pricing/body-treatment.jpg",
    icon: Flower2,
    link: "/pricing/women/body-treatments",
  },
  {
    id: "women-packages",
    title: "Pre Bridal Package",
    description:
      "A curated pre bridal experience with consultation, hair spa, facial and body care.",
    image: "/images/pricing/bridal-groom.jpg",
    icon: Crown,
    link: "/pricing/women/packages",
  },
];

/* =========================================
   MEN'S PRICING CATEGORIES
========================================= */

const menCategories = [
  {
    id: "men-grooming",
    title: "Hair Styling & Grooming",
    description:
      "Haircuts, beard styling, shaving, hair wash, head massage and grooming services.",
    image: "/images/pricing/mens-grooming.png",
    icon: UserRound,
    link: "/pricing/men/grooming",
  },
  {
    id: "men-hair-spa",
    title: "Hair Spa & Treatments",
    description:
      "Professional hair spa, anti dandruff, hair loss and advanced hair treatments.",
    image: "/images/pricing/hair-services.jpg",
    icon: Scissors,
    link: "/pricing/men/hair",
  },
  {
    id: "men-skin",
    title: "Skin & Facial Care",
    description:
      "Facials, cleanups, detan packs and specialised skincare treatments.",
    image: "/images/pricing/skin-care.jpg",
    icon: Sparkles,
    link: "/pricing/men/skin",
  },
  {
    id: "men-pedicure",
    title: "Manicure & Pedicure",
    description:
      "Classic, Foot Logic, Ice Cream, Lotus Glow and Bubblegum Fresh treatments.",
    image: "/images/pricing/pedicure.jpg",
    icon: Footprints,
    link: "/pricing/men/pedicure-manicure",
  },
  {
    id: "men-body",
    title: "Body & Spa Treatments",
    description:
      "Full body massage, premium massage and professional body polishing.",
    image: "/images/pricing/body-treatment.jpg",
    icon: Flower2,
    link: "/pricing/men/body-treatments",
  },
  {
    id: "men-makeup",
    title: "Groom Makeup",
    description:
      "Professional groom makeup for wedding celebrations and special occasions.",
    image: "/images/pricing/makeup.jpg",
    icon: Palette,
    link: "/pricing/men/groom-makeup",
  },
  {
    id: "men-packages",
    title: "Pre Groom Package",
    description:
      "A complete pre groom experience with grooming, skincare, hair spa and body care.",
    image: "/images/pricing/bridal-groom.jpg",
    icon: Crown,
    link: "/pricing/men/packages",
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
   REUSABLE CATEGORY SECTION
========================================= */

function PricingCategorySection({
  eyebrow,
  title,
  description,
  categories,
  id,
}) {
  return (
    <section className="pk-pricing-category-group" id={id}>
      <div className="pk-pricing-section-heading">
        <div className="pk-pricing-eyebrow centered">
          <span />
          {eyebrow}
          <span />
        </div>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="pk-pricing-grid">
        {categories.map((category) => (
          <PricingCategoryCard
            category={category}
            key={category.id}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================
   PRICING PAGE
========================================= */

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
              AURELLE PRICE MENU
            </div>

            <h1>
              The Art of
              <em>Premium Care</em>
            </h1>

            <p>
              Explore the AURELLE price menu for women and men.
              Discover professional beauty, hair care, grooming
              and wellness services.
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

      {/* PRICING CATEGORIES */}

      <section
        className="pk-pricing-categories"
        id="pricing-categories"
      >
        <div className="pk-pricing-container">

          {/* WOMEN'S COLLECTION */}

          <PricingCategorySection
            id="women-pricing"
            eyebrow="WOMEN'S PRICE MENU"
            title={
              <>
                Women's <em>Services</em>
              </>
            }
            description="Explore our complete range of women's beauty, hair, skin, nail and wellness services."
            categories={womenCategories}
          />

          {/* MEN'S COLLECTION */}

          <PricingCategorySection
            id="men-pricing"
            eyebrow="MEN'S PRICE MENU"
            title={
              <>
                Men's <em>Services</em>
              </>
            }
            description="Discover professional men's grooming, hair care, skincare and wellness services."
            categories={menCategories}
          />

          {/* PRICING INFORMATION */}

          <div className="pk-pricing-information">
            <div className="pk-pricing-info-title">
              <Info size={25} strokeWidth={1.5} />
              <h3>Important Information</h3>
            </div>

            <div className="pk-pricing-info-details">
              <p>
                <Check size={16} />
                18% GST is applicable as stated in the salon menu.
              </p>

              <p>
                <Check size={16} />
                Hair treatment prices may vary depending on hair length and density.
              </p>

              <p>
                <Check size={16} />
                Additional nail art, stones, chrome and matte finishing are charged separately.
              </p>

              <p>
                <Check size={16} />
                Please confirm the final service price and package inclusions during consultation.
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
              STYLE BEYOND ORDINARY
            </div>

            <h2>Your AURELLE Experience Awaits</h2>

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
