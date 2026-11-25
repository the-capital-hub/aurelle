
import { Link } from "react-router-dom";
import {
  Scissors,
  UserRound,
  Sparkles,
  Hand,
  Flower2,
  Gem,
  Star,
  ShieldCheck,
  CalendarDays,
  ArrowRight,
  Droplets,
  Clock,
} from "lucide-react";

import "../HairServices/HairServices.css";

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Men's Grooming", slug: "grooming", icon: UserRound },
  { name: "Skin & Facial", slug: "skin", icon: Sparkles },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body Treatments", slug: "body-spa", icon: Flower2 },
  { name: "Groom Makeup", slug: "groom-makeup", icon: Gem },
  { name: "Pre Groom Package", slug: "packages", icon: Star },
];

const hairServices = [
  {
    number: "01",
    title: "Kids Hair Cut",
    description:
      "A neat and comfortable haircut experience designed for younger gentlemen.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    alt: "Kids haircut service at AURELLE",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Hair Cut",
    description:
      "Professional haircut styling tailored to your preferred look and personal style.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    alt: "Professional men's haircut",
    icon: Scissors,
  },
  {
    number: "03",
    title: "Beard Trim",
    description:
      "A clean and precise beard trim to maintain a neat, well groomed appearance.",
    image: "/images/services/grooming/grooming-beard.jpg",
    alt: "Professional beard trimming",
    icon: UserRound,
  },
  {
    number: "04",
    title: "Beard Design",
    description:
      "Detailed beard shaping to complement your facial features and personal style.",
    image: "/images/services/grooming/grooming-beard.jpg",
    alt: "Professional beard design and shaping",
    icon: UserRound,
  },
  {
    number: "05",
    title: "Shaving",
    description:
      "A professional shaving experience for a clean and refreshed finish.",
    image: "/images/services/grooming/grooming-complete.jpg",
    alt: "Professional men's shaving service",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Hair Cut & Beard",
    description:
      "A coordinated haircut and beard grooming experience for a complete look.",
    image: "/images/services/grooming/grooming-complete.jpg",
    alt: "Men's haircut and beard grooming",
    icon: Scissors,
  },
  {
    number: "07",
    title: "Hair Wash & Setting",
    description:
      "Refresh your hair with a professional wash and styling finish.",
    image: "/images/services/grooming/grooming-hairspa.jpg",
    alt: "Professional hair wash and setting",
    icon: Droplets,
  },
];

const comboService = {
  title: "AURELLE Grooming Combo",
  description:
    "Hair Cut, Beard Trim or Shaving, Hair Wash & Setting, Classic Head Massage and Eyebrow Threading.",
  image: "/images/services/grooming/grooming-complete.jpg",
  alt: "Complete men's grooming combo experience",
};

const benefits = [
  {
    icon: Star,
    title: "Skilled Professionals",
    description:
      "Experienced professionals focused on precision and personal style.",
  },
  {
    icon: Scissors,
    title: "Precision Haircuts",
    description:
      "Professional haircut and beard styling with attention to detail.",
  },
  {
    icon: Droplets,
    title: "Complete Hair Care",
    description:
      "Hair washing and styling for a clean and polished finish.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Experience",
    description:
      "A clean, comfortable and professional salon environment.",
  },
  {
    icon: UserRound,
    title: "Personalised Styling",
    description:
      "Grooming services suited to your individual preferences.",
  },
];

export default function MensHairPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}

      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/grooming/grooming-hero.jpg"
            alt="AURELLE men's hair styling collection"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Men's Hair & Styling</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE MEN'S HAIR COLLECTION
          </span>

          <h1>
            Men's Hair <span>&</span> Styling
          </h1>

          <p>
            Discover professional haircuts, beard styling,
            shaving and complete grooming experiences
            designed for your personal style.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#mens-hair-services"
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

      <section
        className="hair-services-section"
        id="mens-hair-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE AURELLE MEN'S COLLECTION
            </span>

            <h2>
              Sharp Style
              <br />
              <span>Starts Here</span>
            </h2>
          </div>

          <p>
            From classic haircuts to detailed beard grooming,
            explore professional styling services designed
            to complete your look.
          </p>
        </div>

        <div className="hair-service-grid">
          {hairServices.map((service) => {
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
            );
          })}
        </div>
      </section>

      {/* SIGNATURE COMBO */}

      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src={comboService.image}
            alt={comboService.alt}
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            AURELLE SIGNATURE COMBO
          </span>

          <h2>
            Complete
            <br />
            <span>Gentleman's Grooming</span>
          </h2>

          <p>{comboService.description}</p>

          <Link
            to="/pricing/men/hair"
            className="hair-button hair-button-light"
          >
            View Combo Pricing <ArrowRight size={17} />
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
            Grooming
            <br />
            With Confidence
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

      {/* FINAL CTA */}

      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR STYLE. YOUR SIGNATURE.
            </span>

            <h2>Look Sharp. Feel Confident.</h2>

            <p>
              Discover professional men's hair styling
              and grooming at AURELLE.
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
