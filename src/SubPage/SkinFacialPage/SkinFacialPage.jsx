
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
  Heart,
  ShieldCheck,
  Star,
  CalendarDays,
  ArrowRight,
  Droplets,
  Sun,
  Leaf,
} from "lucide-react";

import "../HairStylingPage/HairStylingPage.css";

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Men's Grooming", slug: "grooming", icon: UserRound },
  { name: "Skin & Facial Care", slug: "skin", icon: Sparkles },
  { name: "Makeup & Bridal", slug: "makeup", icon: Brush },
  { name: "Nail Studio", slug: "nails", icon: Gem },
  { name: "Waxing & Threading", slug: "waxing", icon: Layers },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body & Spa", slug: "body-spa", icon: Flower2 },
  { name: "Bridal & Groom Packages", slug: "packages", icon: Heart },
];

const skinServices = [
  {
    number: "01",
    title: "Facial",
    description:
      "Professional facial services and specialised skincare experiences for different skin care needs.",
    image: "/images/services/skin/skin-facial.jpg",
    alt: "Professional facial treatment",
    icon: Sparkles,
    services: [
      "Refreshing Glow Facial",
      "O3 Radiance Glow",
      "Skin Lightening & Whitening",
      "Hydra Facial",
      "Hydra Frequency",
      "Korean Glass Facial",
      "Double Chin RF",
      "Jawline Shape",
      "Under Eye Dark Circle",
    ],
  },
  {
    number: "02",
    title: "Clean Up",
    description:
      "Refreshing cleansing experiences designed to cleanse the skin and enhance its natural appearance.",
    image: "/images/services/skin/skin-cleansing.jpg",
    alt: "Professional skin clean up treatment",
    icon: Droplets,
    services: [
      "Whitening Clean Up",
      "Tanning & Whitening Clean Up",
      "Radiance Glow Clean Up",
    ],
  },
  {
    number: "03",
    title: "Detan Pack",
    description:
      "Classic and premium detan options for different areas of the body.",
    image: "/images/services/skin/skin-glow.jpg",
    alt: "Professional detan skincare treatment",
    icon: Sun,
    services: [
      "Face",
      "Face & Neck",
      "Face Arms",
      "Feet",
      "Full Back & Front",
      "Full Body",
      "Under Arms",
    ],
  },
];

const benefits = [
  {
    icon: Star,
    title: "Skilled Experts",
    description: "Professional care with attention to your skin needs.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Carefully selected professional skincare products.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description: "Treatments selected around your preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Care",
    description: "A clean and comfortable skincare environment.",
  },
  {
    icon: Sparkles,
    title: "Radiant Finish",
    description: "A refreshing experience with a polished finish.",
  },
];

export default function SkinFacialPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/skin/skin-hero.jpg"
            alt="AURELLE luxury skin and facial care"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Skin & Facial Care</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE SKIN COLLECTION
          </span>

          <h1>
            Skin <span>&</span> Facial Care
          </h1>

          <p>
            Discover facial treatments, refreshing clean ups and
            detan services designed around your skincare needs.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#skin-services"
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
                to={`/services/${category.slug}`}
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

      {/* SKIN SERVICES */}
      <section
        className="hair-services-section"
        id="skin-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE ART OF SKINCARE
            </span>

            <h2>
              Discover Your
              <br />
              <span>Natural Radiance</span>
            </h2>
          </div>

          <p>
            Explore our facial, clean up and detan services.
            Choose from the treatments available in our
            professional skincare menu.
          </p>
        </div>

        <div className="hair-service-grid">
          {skinServices.map((service) => {
            const Icon = service.icon;

            return (
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

                    <ul className="hair-service-list">
                      {service.services.map((item) => (
                        <li key={item}>
                          <Icon size={14} strokeWidth={1.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/pricing/skin"
                    className="hair-card-arrow"
                    aria-label={`View ${service.title} pricing`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE AURELLE */}
      <section className="hair-benefits-section">
        <div className="hair-benefits-title">
          <span className="hair-eyebrow">
            THE AURELLE DIFFERENCE
          </span>

          <h2>
            Skincare
            <br />
            With Care
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

      {/* SKINCARE EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/skin/skin-signature.jpg"
            alt="AURELLE professional skincare experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            PERSONAL SKINCARE
          </span>

          <h2>
            Care That
            <br />
            <span>Feels Like You</span>
          </h2>

          <p>
            Explore our skincare menu and choose a facial,
            clean up or detan service that suits your
            preferences. Our team can help you understand
            the available treatments.
          </p>

          <Link
            to="/pricing/skin"
            className="hair-button hair-button-light"
          >
            Explore Skin Pricing <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR SKIN DESERVES THE BEST
            </span>

            <h2>Make Time for Your Glow.</h2>

            <p>
              Book your skincare experience at AURELLE
              and enjoy professional care.
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
