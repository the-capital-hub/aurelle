
import { Link } from "react-router-dom";
import {
  Scissors,
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
  Wind,
} from "lucide-react";

import "./HairStylingPage.css";

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Skin & Facial Care", slug: "skin", icon: Sparkles },
  { name: "Makeup & Bridal", slug: "makeup", icon: Brush },
  { name: "Nail Studio", slug: "nails", icon: Gem },
  { name: "Waxing & Threading", slug: "waxing", icon: Layers },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body & Spa", slug: "body-spa", icon: Flower2 },
  { name: "Bridal Packages", slug: "packages", icon: Heart },
];

const hairServices = [
  {
    number: "01",
    title: "Hair Cut & Style",
    description:
      "Discover professional haircuts and styling experiences designed to complement your personality and create a beautiful finish.",
    services: [
      "Kids Hair Cut",
      "Creative Cut",
      "Classic Cut",
      "Normal Hair Wash & Dry",
      "Hair Wash & Straight Setting",
      "Blowdry Curls Setting",
      "Ironing",
      "Tong Curls Setting",
      "Bollywood Curls Setting",
    ],
    image: "/images/services/hair/aurelle-gallery-hair.jpg",
    alt: "Professional women's haircut and styling",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Hair Spa",
    description:
      "Nourishing hair spa experiences and specialised treatments created to care for your hair and scalp.",
    services: [
      "Spa Essence",
      "Tribond Hair Spa",
      "Luxe Rejuvenation",
      "Reborn Hair Spa",
      "Royal Bliss Hair Spa",
      "Moroccan Oil Hair Spa",
      "Anti Dandruff & Hair Loss",
      "Anti Dandruff Treatment",
      "Anti Hair Loss Treatment",
      "Laser Anti Dandruff & Hair Loss",
      "Laser Anti Dandruff Treatment",
      "Laser Anti Hair Loss",
      "Korean Hair Spa",
    ],
    image: "/images/services/hair/aurelle-gallery-hairstyle.jpg",
    alt: "Luxury women's hair spa treatment",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Head Massage",
    description:
      "Relax and refresh with soothing head massage experiences and nourishing oil treatments.",
    services: [
      "Classic Head Massage",
      "Relaxing Head Massage",
      "Premium Hot Oil Massage + Hair Wash & Blowdry Setting",
    ],
    image: "/images/services/hair/aurelle-service-hair.jpg",
    alt: "Relaxing head massage experience",
    icon: Flower2,
  },
  {
    number: "04",
    title: "Hair Rebonding & Treatments",
    description:
      "Professional hair transformation treatments for a smooth, sleek and manageable hair finish.",
    services: [
      "Straightening & Smoothening",
      "Permanent Blowdry",
      "Keratin Treatment",
      "Nanoplastia",
      "Botox Treatment",
    ],
    image: "/images/services/hair/aurelle-service-hair.jpg",
    alt: "Professional hair smoothening treatment",
    icon: Wind,
  },
  {
    number: "05",
    title: "Hair Colouring",
    description:
      "Explore professional colouring techniques to refresh your look with beautiful shades and colour effects.",
    services: [
      "Per Streaks",
      "Root Touchup",
      "Root Touchup Without Ammonia",
      "Global Hair Colour",
      "Highlights",
      "Ombre Balayage",
    ],
    image: "/images/services/hair/aurelle-gallery-haircolour.jpg",
    alt: "Professional women's hair colouring",
    icon: Brush,
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
            alt="AURELLE women's luxury hair styling"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Women's Hair & Styling</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE SIGNATURE SERVICES
          </span>

          <h1>
            Hair <span>&</span> Styling
          </h1>

          <p>
            Discover premium haircuts, styling, colouring,
            rejuvenating spa experiences and professional
            hair treatments created for your individual style.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#hair-services"
              className="hair-button hair-button-outline"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* WOMEN'S CATEGORY NAVIGATION */}
      <section className="hair-category-section">
        <div className="hair-category-list">
          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                to={`/services/women/${category.slug}`}
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

      {/* WOMEN'S HAIR SERVICES */}
      <section className="hair-services-section" id="hair-services">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              WOMEN'S HAIR SERVICES
            </span>

            <h2>
              Complete Hair Care
              <br />
              <span>& Styling Solutions</span>
            </h2>
          </div>

          <p>
            Explore our women's hair collection, from beautiful
            everyday styling and professional colouring to
            specialised hair treatments and relaxing spa experiences.
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

                    <ul className="hair-service-list">
                      {service.services.map((item) => (
                        <li key={item}>
                          <Icon size={14} strokeWidth={1.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/pricing/women/hair"
                    className="hair-card-arrow"
                    aria-label={`View ${service.title} pricing`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE AURELLE */}
      <section className="hair-benefits-section">
        <div className="hair-benefits-title">
          <span className="hair-eyebrow">
            THE AURELLE EXPERIENCE
          </span>

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

      {/* HAIR CARE EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/hair/aurelle-service-hair.jpg"
            alt="AURELLE professional women's hair care experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            PERSONAL HAIR CARE
          </span>

          <h2>
            Your Hair
            <br />
            <span>Deserves Expert Care</span>
          </h2>

          <p>
            Explore our professional women's hair services
            and discover the right treatment for your individual
            hair needs. Our team is here to help you choose
            your experience.
          </p>

          <Link
            to="/pricing/women/hair"
            className="hair-button hair-button-light"
          >
            Explore Hair Pricing <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR NEXT LOOK STARTS HERE
            </span>

            <h2>Ready for a New Look?</h2>

            <p>
              Book your women's hair styling session at AURELLE
              and let our experts create a look that complements you.
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
