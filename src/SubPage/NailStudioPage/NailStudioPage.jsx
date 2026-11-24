
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
  Palette,
  Fingerprint,
} from "lucide-react";


import '../HairStylingPage/HairStylingPage.css'
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

const nailServices = [
  {
    number: "01",
    title: "Luxury Nail Art",
    description:
      "Creative nail designs with elegant details and personalised finishes.",
    image: "/images/services/nails/nails-art.jpg",
    alt: "Luxury artistic nail design",
  },
  {
    number: "02",
    title: "Gel Nail Extensions",
    description:
      "Beautifully shaped extensions with a smooth and polished appearance.",
    image: "/images/services/nails/nails-extensions.jpg",
    alt: "Professional gel nail extensions",
  },
  {
    number: "03",
    title: "Classic Nail Care",
    description:
      "Essential nail grooming with careful shaping and finishing.",
    image: "/images/services/nails/nails-care.jpg",
    alt: "Classic nail care treatment",
  },
  {
    number: "04",
    title: "Premium Nail Finish",
    description:
      "A refined manicure experience with elegant colours and glossy finishes.",
    image: "/images/services/nails/nails-finish.jpg",
    alt: "Premium glossy nail finish",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Skilled Nail Artists",
    description: "Creative professionals with attention to detail.",
  },
  {
    icon: Gem,
    title: "Premium Products",
    description: "Carefully selected products for beautiful nail finishes.",
  },
  {
    icon: Palette,
    title: "Creative Designs",
    description: "Personalised colours, patterns and nail art styles.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Care",
    description: "Clean tools and a comfortable nail care experience.",
  },
  {
    icon: Fingerprint,
    title: "Personalised Style",
    description: "Nail looks that reflect your individual preferences.",
  },
];

export default function NailStudioPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/nails/nails-hero.jpg"
            alt="AURELLE luxury nail studio"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Nail Studio</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE NAIL COLLECTION
          </span>

          <h1>
            The <span>Nail</span> Studio
          </h1>

          <p>
            Discover elegant nail artistry, beautiful extensions
            and personalised nail care crafted with precision
            and creativity.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#nail-services"
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
                  category.slug === "nails" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* NAIL SERVICES */}
      <section
        className="hair-services-section"
        id="nail-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE ART OF NAIL BEAUTY
            </span>

            <h2>
              Express Yourself
              <br />
              <span>Through Art</span>
            </h2>
          </div>

          <p>
            From understated elegance to creative nail designs,
            explore professional nail services that combine
            precision, creativity and personalised care.
          </p>
        </div>

        <div className="hair-service-grid">
          {nailServices.map((service) => (
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
            Nail Art
            <br />
            With Precision
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

      {/* SIGNATURE NAIL EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/nails/nails-signature.jpg"
            alt="AURELLE signature nail experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE NAIL EXPERIENCE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Signature Nails</span>
          </h2>

          <p>
            Experience personalised nail artistry with
            carefully selected colours, refined detailing
            and a beautifully polished finish.
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
              DETAILS MAKE THE DIFFERENCE
            </span>

            <h2>Let Your Nails Make a Statement.</h2>

            <p>
              Discover your signature nail look with
              professional nail care at AURELLE.
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
