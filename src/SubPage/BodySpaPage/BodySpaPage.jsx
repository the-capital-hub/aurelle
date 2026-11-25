
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
  Waves,
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

const spaServices = [
  {
    number: "01",
    title: "Full Body Massage",
    description:
      "A relaxing full body massage experience designed to ease tension and provide comfort.",
    image: "/images/services/body-spa/body-massage.jpg",
    alt: "Full body massage treatment",
  },
  {
    number: "02",
    title: "Premium Full Body Massage",
    description:
      "An elevated full body massage experience with attentive care and a relaxing atmosphere.",
    image: "/images/services/body-spa/body-aromatherapy.jpg",
    alt: "Premium full body massage experience",
  },
  {
    number: "03",
    title: "Classic Body Polishing",
    description:
      "A professional body polishing treatment focused on exfoliation and smoother looking skin.",
    image: "/images/services/body-spa/body-polishing.jpg",
    alt: "Classic body polishing treatment",
  },
  {
    number: "04",
    title: "Premium Full Body Polishing",
    description:
      "A premium body polishing experience designed to leave your skin feeling smooth and refreshed.",
    image: "/images/services/body-spa/body-ritual.jpg",
    alt: "Premium full body polishing treatment",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Professional Care",
    description: "Attentive care throughout your body treatment.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Carefully selected products for body treatments.",
  },
  {
    icon: Heart,
    title: "Relaxing Experience",
    description: "Enjoy a comfortable and refreshing salon visit.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Environment",
    description: "A comfortable and hygienic salon setting.",
  },
  {
    icon: Waves,
    title: "Personal Care",
    description: "A calm environment for your personal care time.",
  },
];

export default function BodySpaPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/body-spa/body-hero.jpg"
            alt="AURELLE luxury body and spa experience"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Body & Spa</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE BODY CARE COLLECTION
          </span>

          <h1>
            Body <span>&</span> Spa
          </h1>

          <p>
            Discover professional body massage and polishing
            treatments designed to bring relaxation, comfort
            and a refreshed feeling.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#body-spa-services"
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
                  category.slug === "body-spa" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SPA SERVICES */}
      <section
        className="hair-services-section"
        id="body-spa-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE ART OF BODY CARE
            </span>

            <h2>
              Restore Your
              <br />
              <span>Sense of Calm</span>
            </h2>
          </div>

          <p>
            Explore our body care collection, featuring
            professional massage and body polishing
            treatments in a peaceful salon atmosphere.
          </p>
        </div>

        <div className="hair-service-grid">
          {spaServices.map((service) => (
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
            Relaxation
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

      {/* SIGNATURE SPA EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/body-spa/body-signature.jpg"
            alt="AURELLE signature body care experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE BODY CARE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Serenity Experience</span>
          </h2>

          <p>
            Take time for yourself with professional body
            massage and polishing treatments, delivered
            with attentive care in a relaxing setting.
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
              TAKE A MOMENT FOR YOURSELF
            </span>

            <h2>Relax. Recharge. Reconnect.</h2>

            <p>
              Discover a refreshing body care experience
              with professional treatments at AURELLE.
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
