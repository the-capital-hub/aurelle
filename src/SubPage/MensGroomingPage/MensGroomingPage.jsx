
import { Link } from "react-router-dom";
import {
  Scissors,
  UserRound,
  Sparkles,
  Droplets,
  ShieldCheck,
  Star,
  CalendarDays,
  ArrowRight,
  Palette,
  Wind,
  Hand,
  Flower2,
  Gem,
} from "lucide-react";

import "../HairServices/HairServices.css";

/* MEN'S CATEGORY NAVIGATION */

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Men's Grooming", slug: "grooming", icon: UserRound },
  { name: "Skin & Facial", slug: "skin", icon: Sparkles },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body Treatments", slug: "body-spa", icon: Flower2 },
  { name: "Groom Makeup", slug: "groom-makeup", icon: Gem },
  { name: "Pre Groom Package", slug: "packages", icon: Star },
];

/* MEN'S SERVICE COLLECTION */

const groomingServices = [
  {
    number: "01",
    title: "Hair Cut & Style",
    description:
      "Kids Hair Cut, Hair Cut, Beard Trim, Beard Design, Shaving, Hair Cut & Beard, and Hair Wash & Setting.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    alt: "Professional men's haircut at AURELLE",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Head Massage",
    description:
      "Classic Head Massage, Relaxing Head Massage, Premium Hot Oil Massage and Moroccan Oil Massage.",
    image: "/images/services/grooming/grooming-beard.jpg",
    alt: "Relaxing professional head massage experience",
    icon: UserRound,
  },
  {
    number: "03",
    title: "Hair Spa",
    description:
      "Spa Essence, Tribond, Luxe Rejuvenation, Reborn, Royal Bliss, Moroccan Oil and Korean Hair Spa, along with scalp care treatments.",
    image: "/images/services/grooming/grooming-hairspa.jpg",
    alt: "Premium men's hair spa treatment",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Hair Rebonding",
    description:
      "Straightening & Smoothening, Permanent Blowdry, Keratin Treatment, Nanoplastia and Botox Treatment.",
    image: "/images/services/grooming/grooming-complete.jpg",
    alt: "Professional men's hair rebonding treatment",
    icon: Wind,
  },
  {
    number: "05",
    title: "Hair Colouring",
    description:
      "Per Streak, Global Colour, Global Colour Without Ammonia, Highlights and Beard Colouring.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    alt: "Professional men's hair colouring",
    icon: Palette,
  },
];

/* BENEFITS */

const benefits = [
  {
    icon: Star,
    title: "Skilled Professionals",
    description:
      "Professional hair and grooming care with attention to detail.",
  },
  {
    icon: Scissors,
    title: "Precision Styling",
    description:
      "Haircuts and styling designed around your preferences.",
  },
  {
    icon: Droplets,
    title: "Professional Care",
    description:
      "Hair spa and scalp treatments for your hair care needs.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Environment",
    description:
      "A comfortable salon experience with careful hygiene.",
  },
  {
    icon: UserRound,
    title: "Personalised Service",
    description:
      "Choose services according to your individual requirements.",
  },
];

/* MEN'S GROOMING PAGE */

export default function MensGroomingPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}

      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/grooming/grooming-hero.jpg"
            alt="AURELLE men's grooming collection"
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
            Discover professional haircuts, premium hair spa,
            scalp care, hair colouring and personalised
            grooming experiences at AURELLE.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service
              <ArrowRight size={17} />
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
                to={`/services/men/${category.slug}`}
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

      {/* SERVICE COLLECTION */}

      <section
        className="hair-services-section"
        id="grooming-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              THE AURELLE MEN'S COLLECTION
            </span>

            <h2>
              Professional Care
              <br />
              <span>Made Personal</span>
            </h2>
          </div>

          <p>
            From everyday haircuts to advanced hair treatments,
            explore our complete range of men's hair and
            grooming services.
          </p>
        </div>

        <div className="hair-service-grid">
          {groomingServices.map((service) => {
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

                  <span className="hair-card-arrow">
                    <Icon size={19} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="hair-pricing-link">
          <Link
            to="/pricing/men/grooming"
            className="hair-button hair-button-light"
          >
            View Men's Price Menu
            <ArrowRight size={17} />
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
            alt="AURELLE signature men's grooming experience"
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
            Experience professional hair care and grooming
            in a refined salon environment. Discover services
            selected around your personal style and needs.
          </p>

          <Link
            to="/booking"
            className="hair-button hair-button-light"
          >
            Book Your Experience
            <ArrowRight size={17} />
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
              Discover professional men's grooming
              at AURELLE. Your next experience starts here.
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
