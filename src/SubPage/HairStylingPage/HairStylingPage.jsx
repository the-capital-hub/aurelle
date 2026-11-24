
import { Link } from "react-router-dom";
import {
  Scissors,
  UserRound,
  Sparkles,
  Brush,
  Droplets,
  Flower2,
  Hand,
  Layers,
  Heart,
  ShieldCheck,
  Star,
  CalendarDays,
  ArrowRight,
  Gem,
} from "lucide-react";

import "./HairStylingPage.css";

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

const hairServices = [
  {
    number: "01",
    title: "Haircut & Styling",
    description:
      "Personalised cuts and modern styling for men and women.",
    image: "/images/services/hair/aurelle-gallery-hair.jpg",
    alt: "Professional haircut and styling",
  },
  {
    number: "02",
    title: "Hair Colouring",
    description:
      "Rich, long lasting colour with a natural looking finish.",
    image: "/images/services/hair/aurelle-gallery-haircolour.jpg",
    alt: "Professional hair colouring",
  },
  {
    number: "03",
    title: "Hair Treatments",
    description:
      "Nourishing care to repair, strengthen and add shine.",
    image: "/images/services/hair/aurelle-gallery-hairstyle.jpg",
    alt: "Luxury hair treatment",
  },
  {
    number: "04",
    title: "Occasion Styling",
    description:
      "Professional styling for parties, events and celebrations.",
    image: "/images/services/hair/aurelle-service-hair.jpg",
    alt: "Elegant occasion hairstyle",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Expert Stylists",
    description: "Skilled professionals who understand your style.",
  },
  {
    icon: Gem,
    title: "Premium Products",
    description: "Carefully selected professional hair products.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description: "Services tailored to your hair and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description: "A clean and comfortable salon experience.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Results",
    description: "Finishing touches that complete your look.",
  },
];

export default function HairStylingPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/service-makeup/service-hair.jpg"
            alt="AURELLE luxury hair styling"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Hair & Styling</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE SIGNATURE SERVICES
          </span>

          <h1>
            Hair <span>&</span> Styling
          </h1>

          <p>
            Modern cuts, expert styling and advanced hair care
            for a look that feels uniquely you.
          </p>

          <div className="hair-hero-actions">
            <Link to="/booking" className="hair-button hair-button-light">
              Book This Service <ArrowRight size={17} />
            </Link>

            <a href="#hair-services" className="hair-button hair-button-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORY NAVIGATION */}
      <section className="hair-category-section">
        <div className="hair-category-list">
          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                to={`/services/${category.slug}`}
                className={`hair-category-item ${
                  category.slug === "hair" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* HAIR SERVICES */}
      <section className="hair-services-section" id="hair-services">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">OUR HAIR SERVICES</span>
            <h2>
              Complete Hair Care
              <br />
              <span>& Styling Solutions</span>
            </h2>
          </div>

          <p>
            From precision haircuts to transformative colour
            and nourishing treatments, our hair experts create
            styles that complement your personality and lifestyle.
          </p>
        </div>

        <div className="hair-service-grid">
          {hairServices.map((service) => (
            <article className="hair-service-card" key={service.number}>
              <div className="hair-service-image">
                <img src={service.image} alt={service.alt} loading="lazy" />
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
          <span className="hair-eyebrow">THE AURELLE EXPERIENCE</span>
          <h2>
            Why Choose AURELLE
            <br />
            for Hair Care?
          </h2>
        </div>

        <div className="hair-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div className="hair-benefit-item" key={benefit.title}>
                <Icon size={29} strokeWidth={1.3} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIGNATURE TREATMENT */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/hair/aurelle-service-hair.jpg"
            alt="AURELLE signature hair care treatment"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">SIGNATURE TREATMENT</span>

          <h2>
            AURELLE
            <br />
            <span>Hair Revival</span>
          </h2>

          <p>
            A nourishing hair care experience designed to improve
            softness, shine and manageability while giving your
            hair the attention it deserves.
          </p>

          <Link to="/booking" className="hair-button hair-button-light">
            Explore Treatment <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">YOUR NEXT LOOK STARTS HERE</span>
            <h2>Ready for a New Look?</h2>
            <p>
              Book your Hair & Styling session at AURELLE and
              let our experts create a style that truly suits you.
            </p>
          </div>

          <Link to="/booking" className="hair-button hair-button-light">
            <CalendarDays size={18} />
            Book Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
