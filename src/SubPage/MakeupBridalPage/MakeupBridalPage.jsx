
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
  Camera,
  Crown,
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

const makeupServices = [
  {
    number: "01",
    title: "Party Makeup",
    description:
      "Elegant makeup looks for celebrations, parties and special occasions.",
    image: "/images/services/makeup/makeup-party.jpg",
    alt: "Professional party makeup look",
  },
  {
    number: "02",
    title: "Bridal Makeup",
    description:
      "A personalised bridal look created around your style and special day.",
    image: "/images/services/makeup/makeup-bridal.jpg",
    alt: "Indian bride with elegant professional makeup",
  },
  {
    number: "03",
    title: "Bridal Hairstyling",
    description:
      "Beautiful hairstyles designed to complement your bridal appearance.",
    image: "/images/services/makeup/makeup-hairstyle.jpg",
    alt: "Indian bridal hairstyle",
  },
  {
    number: "04",
    title: "Makeup Trials",
    description:
      "Explore and refine your preferred look before your special occasion.",
    image: "/images/services/makeup/makeup-trial.jpg",
    alt: "Professional makeup application",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Expert Artists",
    description: "Professional makeup artists with an eye for detail.",
  },
  {
    icon: Gem,
    title: "Premium Products",
    description: "Carefully selected professional makeup products.",
  },
  {
    icon: Heart,
    title: "Personalised Looks",
    description: "Makeup designed around your features and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Care",
    description: "Clean tools and a comfortable makeup experience.",
  },
  {
    icon: Crown,
    title: "Complete Bridal Care",
    description: "Makeup and hairstyling planned for your occasion.",
  },
];

export default function MakeupBridalPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/makeup/makeup-hero.jpg"
            alt="AURELLE makeup and bridal experience"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Makeup & Bridal</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE BRIDAL COLLECTION
          </span>

          <h1>
            Makeup <span>&</span> Bridal
          </h1>

          <p>
            Professional makeup, elegant hairstyling and
            personalised looks for your most special moments.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#makeup-services"
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
                  category.slug === "makeup" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MAKEUP SERVICES */}
      <section
        className="hair-services-section"
        id="makeup-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              OUR MAKEUP SERVICES
            </span>

            <h2>
              Makeup & Bridal
              <br />
              <span>Services</span>
            </h2>
          </div>

          <p>
            From elegant party looks to timeless wedding makeup,
            discover personalised styles that complement your
            natural features and suit every occasion.
          </p>
        </div>

        <div className="hair-service-grid">
          {makeupServices.map((service) => (
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
            Why Choose
            <br />
            AURELLE?
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

      {/* SIGNATURE BRIDAL EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/makeup/makeup-signature.jpg"
            alt="AURELLE signature bridal experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE EXPERIENCE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Bridal Experience</span>
          </h2>

          <p>
            A personalised bridal experience combining
            professional makeup, hairstyling and thoughtful
            preparation for your most memorable day.
          </p>

          <Link
            to="/services/packages"
            className="hair-button hair-button-light"
          >
            Explore Bridal Packages <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR PERFECT LOOK AWAITS
            </span>

            <h2>Make Every Moment Beautiful.</h2>

            <p>
              Book your makeup and bridal session at AURELLE.
              Let our experts create a look that feels truly yours.
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
