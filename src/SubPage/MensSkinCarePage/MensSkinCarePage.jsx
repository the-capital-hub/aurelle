
import { Link } from "react-router-dom";
import {
  Scissors,
  UserRound,
  Sparkles,
  Brush,
  Gem,
  Layers,
  Hand,
  Flower2,
  Star,
  CalendarDays,
  ArrowRight,
  Droplets,
  ShieldCheck,
} from "lucide-react";

import "../HairServices/HairServices.css";

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Men's Grooming", slug: "grooming", icon: UserRound },
  { name: "Skin & Facial", slug: "skin", icon: Sparkles },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body Treatments", slug: "body-spa", icon: Flower2 },
  { name: "Groom Makeup", slug: "groom-makeup", icon: Brush },
  { name: "Pre Groom Package", slug: "packages", icon: Gem },
];

const mensSkinServices = [
  {
    number: "01",
    title: "Refreshing Glow Facial",
    description:
      "A refreshing facial experience designed to enhance the appearance of your skin and leave it looking radiant.",
    image: "/images/services/mens-skin/mens-deep-cleansing.jpg",
    alt: "Professional refreshing glow facial treatment",
  },
  {
    number: "02",
    title: "O3 Radiance Glow",
    description:
      "A premium facial experience designed to refresh the skin and enhance its natural looking radiance.",
    image: "/images/services/mens-skin/mens-charcoal-facial.jpg",
    alt: "Professional O3 radiance facial treatment",
  },
  {
    number: "03",
    title: "Skin Lightening Whitening",
    description:
      "A specialised facial experience focused on improving the appearance of uneven skin tone.",
    image: "/images/services/mens-skin/mens-tan-removal.jpg",
    alt: "Professional skin lightening facial treatment",
  },
  {
    number: "04",
    title: "Hydra Facial",
    description:
      "A hydrating skincare experience designed to leave your skin feeling refreshed and nourished.",
    image: "/images/services/mens-skin/mens-hydrating-facial.jpg",
    alt: "Professional Hydra facial treatment",
  },
  {
    number: "05",
    title: "Hydra Frequency",
    description:
      "A specialised facial experience designed to support a refreshed and revitalised skin appearance.",
    image: "/images/services/mens-skin/mens-deep-cleansing.jpg",
    alt: "Professional Hydra Frequency facial treatment",
  },
  {
    number: "06",
    title: "Korean Glass Facial",
    description:
      "A premium skincare experience inspired by the smooth, luminous look of glass skin.",
    image: "/images/services/mens-skin/mens-charcoal-facial.jpg",
    alt: "Korean glass facial treatment",
  },
  {
    number: "07",
    title: "Double Chin Treatment (RF)",
    description:
      "A targeted treatment focused on the appearance of the double chin area.",
    image: "/images/services/mens-skin/mens-tan-removal.jpg",
    alt: "Professional double chin treatment",
  },
  {
    number: "08",
    title: "Jawline Shape Treatment",
    description:
      "A specialised treatment focused on enhancing the appearance of the jawline.",
    image: "/images/services/mens-skin/mens-hydrating-facial.jpg",
    alt: "Professional jawline treatment",
  },
  {
    number: "09",
    title: "Under Eye (Dark Circle) Treatment",
    description:
      "A targeted skincare experience designed for the delicate under eye area.",
    image: "/images/services/mens-skin/mens-deep-cleansing.jpg",
    alt: "Professional under eye treatment",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Skilled Skin Experts",
    description:
      "Professional skincare services with attention to individual skin care needs.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description:
      "Carefully selected skincare products for a premium experience.",
  },
  {
    icon: Sparkles,
    title: "Personalised Treatments",
    description:
      "Treatments selected according to your skin type and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Experience",
    description:
      "A clean, comfortable and professional salon environment.",
  },
  {
    icon: UserRound,
    title: "Men's Skin Care",
    description:
      "Dedicated facial and skincare experiences for men.",
  },
];

export default function MensSkinCarePage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/mens-skin/mens-skin-hero.jpg"
            alt="AURELLE luxury men's skincare experience"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Men's Skin & Facial Care</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE MEN'S SKIN COLLECTION
          </span>

          <h1>
            Men's Skin <span>&</span> Facial Care
          </h1>

          <p>
            Refresh your appearance with professional
            facials and personalised skincare experiences
            designed for modern men.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#mens-skin-services"
              className="hair-button hair-button-outline"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="hair-category-section">
        <div className="hair-category-list">
          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                to={`/services/men/${category.slug}`}
                className={`hair-category-item ${
                  category.slug === "skin" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MEN'S SKIN SERVICES */}
      <section
        className="hair-services-section"
        id="mens-skin-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE ART OF MEN'S SKINCARE
            </span>

            <h2>
              Confident Skin
              <br />
              <span>Starts With Care</span>
            </h2>
          </div>

          <p>
            From refreshing glow facials to specialised
            skincare experiences, discover professional
            treatments designed around your skincare needs.
          </p>
        </div>

        <div className="hair-service-grid">
          {mensSkinServices.map((service) => (
            <article
              className="hair-service-card"
              key={service.number}
            >
              <div className="hair-service-image">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                />

                <span className="hair-service-number">
                  {service.number}
                </span>
              </div>

              <div className="hair-service-info">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <Link
                  to="/booking"
                  className="hair-card-arrow"
                  aria-label={`Book ${service.title}`}
                >
                  <ArrowRight size={19} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="hair-hero-actions">
          <Link
            to="/pricing/men/skin"
            className="hair-button hair-button-light"
          >
            View Facial Pricing <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE AURELLE */}
      <section className="hair-benefits-section">
        <div className="hair-benefits-title">
          <span className="hair-eyebrow">
            THE AURELLE DIFFERENCE
          </span>

          <h2>
            Men's Skincare
            <br />
            With Expertise
          </h2>
        </div>

        <div className="hair-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className="hair-benefit-item"
                key={benefit.title}
              >
                <Icon size={29} strokeWidth={1.3} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIGNATURE SKIN EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/mens-skin/mens-skin-signature.jpg"
            alt="AURELLE signature men's facial experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE MEN'S SKIN EXPERIENCE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Gentleman's Radiance</span>
          </h2>

          <p>
            Experience a personalised skincare ritual
            combining professional facial care and
            attention to detail.
          </p>

          <Link
            to="/booking"
            className="hair-button hair-button-light"
          >
            Explore Experience <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              MAKE SELF CARE YOUR SIGNATURE
            </span>

            <h2>Look Fresh. Feel Confident.</h2>

            <p>
              Give your skin the attention it deserves
              with professional men's facial care at AURELLE.
            </p>
          </div>

          <Link
            to="/booking"
            className="hair-button hair-button-light"
          >
            <CalendarDays size={18} />
            Book Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
