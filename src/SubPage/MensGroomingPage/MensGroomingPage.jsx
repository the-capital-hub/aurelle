
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

import "../HairServices/HairServices.css";

const serviceCategories = [
  
 
];

const groomingServices = [
  {
    number: "01",
    title: "Precision Haircut",
    description:
      "Contemporary cuts and personalised styles for a sharp, confident look.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    alt: "Indian man receiving a precision haircut",
  },
  {
    number: "02",
    title: "Beard Styling",
    description:
      "Expert beard shaping, trimming and detailing for a refined finish.",
    image: "/images/services/grooming/grooming-beard.jpg",
    alt: "Professional beard styling",
  },
  {
    number: "03",
    title: "Hair & Scalp Care",
    description:
      "Refreshing treatments focused on scalp care and healthy looking hair.",
    image: "/images/services/grooming/grooming-hairspa.jpg",
    alt: "Men's hair and scalp treatment",
  },
  {
    number: "04",
    title: "Complete Grooming",
    description:
      "A coordinated grooming experience for your everyday and special occasions.",
    image: "/images/services/grooming/grooming-complete.jpg",
    alt: "Premium men's grooming experience",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Skilled Barbers",
    description: "Professional grooming with attention to every detail.",
  },
  {
    icon: Scissors,
    title: "Precision Styling",
    description: "Haircuts shaped around your features and preferences.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Professional products for hair, beard and scalp care.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Experience",
    description: "A comfortable salon environment and careful hygiene.",
  },
  {
    icon: UserRound,
    title: "Personalised Care",
    description: "Grooming services tailored to your individual style.",
  },
];

export default function MensGroomingPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/grooming/grooming-hero.jpg"
            alt="AURELLE men's luxury grooming"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Men's Grooming</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE MEN'S COLLECTION
          </span>

          <h1>
            Men's <span>Grooming</span>
          </h1>

          <p>
            Precision haircuts, refined beard styling and
            personalised grooming for a confident, polished look.
          </p>

          <div className="hair-hero-actions">
            <Link to="/booking" className="hair-button hair-button-light">
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#grooming-services"
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
                  category.slug === "grooming" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* GROOMING SERVICES */}
      <section
        className="hair-services-section"
        id="grooming-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE ART OF MEN'S GROOMING
            </span>

            <h2>
              Refined Grooming
              <br />
              <span>Made Personal</span>
            </h2>
          </div>

          <p>
            From precision haircuts to detailed beard styling,
            discover professional grooming services designed
            around your features, lifestyle and personal style.
          </p>
        </div>

        <div className="hair-service-grid">
          {groomingServices.map((service) => (
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
            Grooming
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

      {/* SIGNATURE GROOMING */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/grooming/grooming-signature.jpg"
            alt="AURELLE signature men's grooming"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            SIGNATURE GROOMING
          </span>

          <h2>
            AURELLE
            <br />
            <span>Gentleman's Ritual</span>
          </h2>

          <p>
            A considered grooming experience combining
            precision styling, beard detailing and refreshing
            care to help you look and feel your best.
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
              YOUR STYLE. YOUR SIGNATURE.
            </span>

            <h2>Make Every Detail Count.</h2>

            <p>
              Experience professional men's grooming
              at AURELLE. Your next look starts here.
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
