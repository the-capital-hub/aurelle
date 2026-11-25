
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
  Crown,
  Camera,
  WandSparkles,
  Clock,
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

const weddingPackages = [
  {
    number: "01",
    title: "The Bridal Signature",
    category: "BRIDAL COLLECTION",
    description:
      "A complete bridal beauty experience designed to make your special day truly unforgettable.",
    image: "/images/services/packages/packages-prewedding.jpg",
    alt: "Luxury Indian bridal makeup and styling",
  },
  {
    number: "02",
    title: "The Pre Bridal Glow",
    category: "BRIDAL PREPARATION",
    description:
      "A thoughtfully curated beauty journey with skin care, hair care and relaxing treatments.",
    image: "/images/services/packages/packages-consultation.jpg",
    alt: "Indian bride enjoying a pre bridal beauty treatment",
  },
  {
    number: "03",
    title: "The Groom Signature",
    category: "GROOM COLLECTION",
    description:
      "A refined grooming experience featuring professional styling and personalised skin care.",
    image: "/images/services/packages/packages-bridal.jpg",
    alt: "Indian groom with premium hairstyle and beard styling",
  },
  {
    number: "04",
    title: "The Wedding Duo",
    category: "COUPLE COLLECTION",
    description:
      "A coordinated beauty and grooming experience for the bride and groom before their big day.",
    image: "/images/services/packages/packages-groom.jpg",
    alt: "Indian bride and groom in elegant wedding attire",
  },
];

const benefits = [
  {
    icon: Crown,
    title: "Personalised Styling",
    description:
      "Beauty and grooming experiences tailored to your wedding look.",
  },
  {
    icon: Star,
    title: "Expert Professionals",
    description:
      "Professional artists and stylists dedicated to every detail.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "Carefully selected products for a refined beauty experience.",
  },
  {
    icon: ShieldCheck,
    title: "Attention to Detail",
    description:
      "Thoughtful preparation for a confident and beautiful appearance.",
  },
  {
    icon: Heart,
    title: "Wedding Day Ready",
    description:
      "A comfortable and memorable salon experience for both of you.",
  },
];

export default function BridalGroomPackagesPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/packages/packages-hero.jpg"
            alt="AURELLE luxury bride and groom wedding experience"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Bridal & Groom Packages</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE WEDDING COLLECTION
          </span>

          <h1>
            Bride <span>&</span> Groom
          </h1>

          <p>
            Celebrate your most beautiful moments with
            thoughtfully curated bridal and groom
            experiences, designed to make every detail
            of your wedding look unforgettable.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book Your Experience <ArrowRight size={17} />
            </Link>

            <a
              href="#wedding-packages"
              className="hair-button hair-button-outline"
            >
              Explore Packages
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
                  category.slug === "packages" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WEDDING PACKAGES */}
      <section
        className="hair-services-section"
        id="wedding-packages"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              YOUR WEDDING, YOUR SIGNATURE LOOK
            </span>

            <h2>
              The Art of
              <br />
              <span>Looking Extraordinary</span>
            </h2>
          </div>

          <p>
            From the bride's complete beauty preparation
            to the groom's signature styling, discover
            curated experiences for your most special
            celebration.
          </p>
        </div>

        <div className="hair-service-grid">
          {weddingPackages.map((service) => (
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
                  <span className="hair-eyebrow">
                    {service.category}
                  </span>

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
            Every Detail
            <br />
            Made Special
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

      {/* SIGNATURE WEDDING EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/03-makeup-and-bridal.jpg"
            alt="AURELLE signature wedding beauty experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            THE SIGNATURE WEDDING EXPERIENCE
          </span>

          <h2>
            Your Day.
            <br />
            <span>Your Forever Look.</span>
          </h2>

          <p>
            Let our professionals help you prepare for
            your special day with personalised beauty
            and grooming experiences crafted around
            your style and preferences.
          </p>

          <Link
            to="/booking"
            className="hair-button hair-button-light"
          >
            Discover Your Package <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR BEAUTIFUL BEGINNING STARTS HERE
            </span>

            <h2>Make Every Wedding Moment Unforgettable.</h2>

            <p>
              Plan your bridal and groom experience
              with AURELLE and get ready to celebrate
              your special day with confidence.
            </p>
          </div>

          <Link
            to="/booking"
            className="hair-button hair-button-light"
          >
            <CalendarDays size={18} />
            Book Your Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
