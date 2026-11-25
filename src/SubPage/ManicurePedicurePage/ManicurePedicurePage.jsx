
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

const manicureServices = [
  {
    number: "01",
    title: "Classic Pedicure & Manicure",
    description:
      "A complete hand and foot care experience with cleansing, exfoliation, nail grooming and relaxation.",
    image: "/images/services/pedicure/pedicure-manicure.jpg",
    alt: "Classic pedicure and manicure treatment",
  },
  {
    number: "02",
    title: "Foot Logic Pedicure & Manicure",
    description:
      "A specialised hand and foot care ritual designed to refresh, smooth and rejuvenate.",
    image: "/images/services/pedicure/pedicure-spa.jpg",
    alt: "Foot Logic pedicure and manicure treatment",
  },
  {
    number: "03",
    title: "Foot Logic Manicure",
    description:
      "A specialised hand care treatment focused on nail grooming, cleansing and a refreshed finish.",
    image: "/images/services/pedicure/pedicure-nailcare.jpg",
    alt: "Foot Logic manicure treatment",
  },
  {
    number: "04",
    title: "Ice Cream Pedicure & Manicure",
    description:
      "An indulgent hand and foot care experience for beautifully refreshed and pampered skin.",
    image: "/images/services/pedicure/pedicure-spa.jpg",
    alt: "Ice Cream pedicure and manicure treatment",
  },
  {
    number: "05",
    title: "Ice Cream Manicure",
    description:
      "A soothing manicure experience that leaves your hands feeling soft, clean and refreshed.",
    image: "/images/services/pedicure/pedicure-nailcare.jpg",
    alt: "Ice Cream manicure treatment",
  },
  {
    number: "06",
    title: "Lotus Glow Pedicure & Manicure",
    description:
      "A premium hand and foot care ritual focused on deep cleansing, exfoliation and a radiant finish.",
    image: "/images/services/pedicure/pedicure-footcare.jpg",
    alt: "Lotus Glow pedicure and manicure treatment",
  },
  {
    number: "07",
    title: "Lotus Glow Manicure",
    description:
      "A luxurious hand care treatment designed to nourish, refresh and enhance the natural beauty of your hands.",
    image: "/images/services/pedicure/pedicure-nailcare.jpg",
    alt: "Lotus Glow manicure treatment",
  },
  {
    number: "08",
    title: "Bubblegum Fresh Pedicure & Manicure",
    description:
      "A refreshing hand and foot care experience for soft, clean and beautifully cared for skin.",
    image: "/images/services/pedicure/pedicure-spa.jpg",
    alt: "Bubblegum Fresh pedicure and manicure treatment",
  },
  {
    number: "09",
    title: "Bubblegum Fresh Manicure",
    description:
      "A refreshing manicure ritual that gives your hands a clean, soft and beautifully groomed finish.",
    image: "/images/services/pedicure/pedicure-footcare.jpg",
    alt: "Bubblegum Fresh manicure treatment",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Expert Care",
    description: "Professional attention to hands, feet and nails.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Carefully selected professional care products.",
  },
  {
    icon: Heart,
    title: "Relaxing Experience",
    description: "Enjoy a comfortable and refreshing salon visit.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Practices",
    description: "Clean tools and careful salon hygiene.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Finish",
    description: "Thoughtful finishing touches for a polished look.",
  },
];

export default function ManicurePedicurePage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/pedicure/pedicure-hero.jpg"
            alt="AURELLE luxury manicure and pedicure"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Manicure & Pedicure</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE HAND & FOOT COLLECTION
          </span>

          <h1>
            Manicure <span>&</span> Pedicure
          </h1>

          <p>
            Discover professional hand and foot care,
            relaxing spa experiences and beautifully
            polished finishing touches.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#pedicure-services"
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
                  category.slug === "pedicure" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MANICURE & PEDICURE SERVICES */}
      <section
        className="hair-services-section"
        id="pedicure-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              HAND & FOOT CARE
            </span>

            <h2>
              Relax, Refresh
              <br />
              <span>And Rejuvenate</span>
            </h2>
          </div>

          <p>
            Give your hands and feet the care they deserve.
            Explore our signature manicure and pedicure
            treatments in a relaxing environment.
          </p>
        </div>

        <div className="hair-service-grid">
          {manicureServices.map((service) => (
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
      </section>

      {/* WHY CHOOSE AURELLE */}
      <section className="hair-benefits-section">
        <div className="hair-benefits-title">
          <span className="hair-eyebrow">
            THE AURELLE DIFFERENCE
          </span>

          <h2>
            Care That
            <br />
            Goes Further
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

      {/* SIGNATURE EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/pedicure/pedicure-signature.jpg"
            alt="AURELLE signature hand and foot spa experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE SPA EXPERIENCE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Hand & Foot Ritual</span>
          </h2>

          <p>
            Take a moment for yourself with a relaxing
            hand and foot care experience featuring
            professional grooming and soothing treatments.
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
              A MOMENT JUST FOR YOU
            </span>

            <h2>Step Into Complete Relaxation.</h2>

            <p>
              Give your hands and feet a refreshing experience
              with professional care at AURELLE.
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
