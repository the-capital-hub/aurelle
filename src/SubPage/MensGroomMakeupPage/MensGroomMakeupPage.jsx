
import { Link } from "react-router-dom";
import {
  Sparkles,
  UserRound,
  ShieldCheck,
  Star,
  Camera,
  CalendarDays,
  ArrowRight,
  Gem,
  CheckCircle2
} from "lucide-react";
import "./MensGroomMakeupPage.css";

const categories = [
  { name: "Hair & Styling", slug: "hair" },
  { name: "Men's Grooming", slug: "grooming" },
  { name: "Skin & Facial Care", slug: "skin" },
  { name: "Manicure & Pedicure", slug: "pedicure" },
  { name: "Body Treatments", slug: "body-spa" },
  { name: "Groom Makeup", slug: "groom-makeup" },
  { name: "Pre Groom Package", slug: "packages" },
];

const features = [
  {
    icon: UserRound,
    title: "Personalised Look",
    description:
      "A groom makeup look planned around your preferred style and occasion.",
  },
  {
    icon: Sparkles,
    title: "Refined Finish",
    description:
      "A polished appearance with attention to detail and overall presentation.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description:
      "A comfortable salon experience with professional attention.",
  },
  {
    icon: Camera,
    title: "Occasion Ready",
    description:
      "Get ready for your special moments and memorable photographs.",
  },
];

const preparation = [
  "Discuss your preferred makeup look with the team.",
  "Share your occasion details before your appointment.",
  "Arrive at your scheduled appointment time.",
  "Allow time for your complete grooming experience.",
];

export default function MensGroomMakeupPage() {
  return (
    <main className="mgm-page">

      {/* HERO SECTION */}
      <section className="mgm-hero">
        <img
          src="/images/services/groom-makeup/groom-hero.jpg"
          alt="AURELLE groom makeup experience"
          className="mgm-hero-image"
        />

        <div className="mgm-hero-overlay" />

        <div className="mgm-hero-content">
          <div className="mgm-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Groom Makeup</span>
          </div>

          <span className="mgm-eyebrow">
            AURELLE GROOM COLLECTION
          </span>

          <h1>
            The Groom <em>Experience</em>
          </h1>

          <p>
            Look confident and feel your best on your special day with
            AURELLE's professional groom makeup experience.
          </p>

          <div className="mgm-hero-actions">
            <Link to="/booking" className="mgm-button mgm-button-light">
              Book Your Appointment <ArrowRight size={17} />
            </Link>

            <a href="#mgm-experience" className="mgm-button mgm-button-outline">
              Discover Experience
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="mgm-category-nav" aria-label="Men's service categories">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/services/men/${category.slug}`}
            className={`mgm-category ${
              category.slug === "groom-makeup" ? "is-active" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </nav>

      {/* INTRODUCTION */}
      <section className="mgm-intro mgm-container" id="mgm-experience">
        <div>
          <span className="mgm-eyebrow mgm-dark-eyebrow">
            YOUR SPECIAL DAY DESERVES THE BEST
          </span>

          <h2>
            Confidence In
            <br />
            <em>Every Detail.</em>
          </h2>
        </div>

        <p>
          Your special day is made up of moments worth remembering.
          Enjoy a professional groom makeup experience designed to
          complement your style and occasion.
        </p>
      </section>

      {/* GROOM MAKEUP FEATURE */}
      <section className="mgm-feature mgm-container">
        <div className="mgm-feature-image">
          <img
            src="/images/services/groom-makeup/groom-makeup.jpg"
            alt="Professional groom makeup preparation"
            loading="lazy"
          />
          <span className="mgm-image-label">THE GROOM EDITION</span>
        </div>

        <div className="mgm-feature-content">
          <span className="mgm-eyebrow mgm-dark-eyebrow">
            A SIGNATURE AURELLE SERVICE
          </span>

          <h2>
            Groom <em>Makeup</em>
          </h2>

          <p>
            A professional makeup experience for the groom, with
            attention to a refined and occasion ready appearance.
          </p>

          <div className="mgm-price">
            <span>Groom Makeup</span>
            <strong>₹8,000</strong>
          </div>

          <Link to="/booking" className="mgm-button mgm-button-dark">
            Book This Service <ArrowRight size={17} />
          </Link>

          <p className="mgm-price-note">
            Price as listed in the AURELLE men's service catalogue.
          </p>
        </div>
      </section>

      {/* EXPERIENCE FEATURES */}
      <section className="mgm-benefits">
        <div className="mgm-container">
          <div className="mgm-section-heading">
            <span className="mgm-eyebrow mgm-dark-eyebrow">
              THE AURELLE APPROACH
            </span>

            <h2>
              Made For Your
              <br />
              <em>Memorable Moments.</em>
            </h2>
          </div>

          <div className="mgm-benefit-grid">
            {features.map(({ icon: Icon, title, description }) => (
              <article className="mgm-benefit-card" key={title}>
                <Icon size={30} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION SECTION */}
      <section className="mgm-preparation mgm-container">
        <div className="mgm-preparation-content">
          <span className="mgm-eyebrow mgm-dark-eyebrow">
            BEFORE YOUR APPOINTMENT
          </span>

          <h2>
            Prepare For
            <br />
            <em>Your Big Day.</em>
          </h2>

          <p>
            A little preparation helps make your salon appointment
            comfortable and well organised.
          </p>

          <div className="mgm-checklist">
            {preparation.map((item, index) => (
              <div className="mgm-check-item" key={index}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link to="/booking" className="mgm-button mgm-button-dark">
            Schedule Your Visit <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mgm-preparation-image">
          <img
            src="/images/services/groom-makeup/groom-preparation.jpg"
            alt="Groom getting ready for his special occasion"
            loading="lazy"
          />
        </div>
      </section>

      {/* SIGNATURE BANNER */}
      <section className="mgm-signature">
        <div className="mgm-signature-image">
          <img
            src="/images/services/groom-makeup/groom-signature.jpg"
            alt="AURELLE groom styling experience"
            loading="lazy"
          />
        </div>

        <div className="mgm-signature-content">
          <span className="mgm-eyebrow">
            A MOMENT TO REMEMBER
          </span>

          <h2>
            Your Day.
            <br />
            <em>Your Signature Look.</em>
          </h2>

          <p>
            Make your special occasion even more memorable with
            professional groom makeup care at AURELLE.
          </p>

          <Link to="/booking" className="mgm-button mgm-button-light">
            Reserve Your Appointment <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mgm-final-cta">
        <div>
          <span className="mgm-eyebrow">
            AURELLE GROOM COLLECTION
          </span>

          <h2>
            Make Your Moment <em>Unforgettable.</em>
          </h2>
        </div>

        <p>
          Get ready for your special day with the AURELLE groom experience.
        </p>

        <Link to="/booking" className="mgm-button mgm-button-light">
          <CalendarDays size={17} />
          Book Appointment
          <ArrowRight size={17} />
        </Link>
      </section>

    </main>
  );
}
