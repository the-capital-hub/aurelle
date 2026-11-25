
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
  Feather,
  Droplets,
  Smile,
  Sun,
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

const waxingServices = [
  {
    number: "01",
    title: "Face Waxing",
    description:
      "Professional facial waxing services for a neat and well groomed appearance.",
    image: "/images/services/waxing/waxing-facial.jpg",
    alt: "Professional facial waxing service",
    icon: Smile,
    services: [
      "Upper Lip",
      "Side Wax",
      "Round Neck",
      "Full Face",
    ],
  },
  {
    number: "02",
    title: "Arms & Underarms Waxing",
    description:
      "Professional waxing services for arms and underarms with a smooth finish.",
    image: "/images/services/waxing/waxing-armslegs.jpg",
    alt: "Professional arms and underarms waxing",
    icon: Hand,
    services: [
      "Underarms",
      "Half Arms",
      "Full Arms",
    ],
  },
  {
    number: "03",
    title: "Leg Waxing",
    description:
      "Carefully performed waxing services for smooth and well groomed legs.",
    image: "/images/services/waxing/waxing-armslegs.jpg",
    alt: "Professional leg waxing service",
    icon: Feather,
    services: [
      "Half Legs",
      "Full Legs",
    ],
  },
  {
    number: "04",
    title: "Body & Bikini Waxing",
    description:
      "Professional body waxing options for personalised grooming preferences.",
    image: "/images/services/waxing/waxing-fullbody.jpg",
    alt: "Professional body waxing service",
    icon: Sparkles,
    services: [
      "Full Back",
      "Full Front",
      "Bikini Line",
      "Bikini Wax",
      "Full Body Wax",
    ],
  },
  {
    number: "05",
    title: "Specialised Waxing",
    description:
      "Choose from professional waxing options according to your preference.",
    image: "/images/services/waxing/waxing-fullbody.jpg",
    alt: "Professional salon waxing products",
    icon: Droplets,
    services: [
      "Rica Wax",
      "Roll-on Wax",
      "Brazilian Wax",
    ],
  },
  {
    number: "06",
    title: "Threading Services",
    description:
      "Precise threading services for eyebrow shaping and detailed facial grooming.",
    image: "/images/services/waxing/waxing-threading.jpg",
    alt: "Professional eyebrow and facial threading",
    icon: Scissors,
    services: [
      "Eyebrow",
      "Forehead",
      "Upper Lip",
      "Lower Lip",
      "Chin",
      "Side Face",
      "Full Face",
    ],
  },
];

const benefits = [
  {
    icon: Star,
    title: "Trained Professionals",
    description: "Careful service from experienced beauty professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Practices",
    description: "Attention to cleanliness throughout your appointment.",
  },
  {
    icon: Feather,
    title: "Gentle Approach",
    description: "A considerate approach suited to your comfort.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Professional products selected for salon services.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description: "Services adapted to your preferences and needs.",
  },
];

export default function WaxingThreadingPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO SECTION */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/waxing/waxing-hero.jpg"
            alt="AURELLE professional waxing and threading"
          />
        </div>

        <div className="hair-hero-overlay" />

        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Waxing & Threading</span>
          </div>

          <span className="hair-eyebrow">
            AURELLE BEAUTY COLLECTION
          </span>

          <h1>
            Waxing <span>&</span> Threading
          </h1>

          <p>
            Professional hair removal and precise grooming
            services delivered with care, comfort and attention
            to every detail.
          </p>

          <div className="hair-hero-actions">
            <Link
              to="/booking"
              className="hair-button hair-button-light"
            >
              Book This Service <ArrowRight size={17} />
            </Link>

            <a
              href="#waxing-services"
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
                  category.slug === "waxing" ? "active" : ""
                }`}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WAXING AND THREADING SERVICES */}
      <section
        className="hair-services-section"
        id="waxing-services"
      >
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              OUR WAXING & THREADING SERVICES
            </span>

            <h2>
              Smooth Care
              <br />
              <span>With Precision</span>
            </h2>
          </div>

          <p>
            Discover professional waxing and threading
            experiences designed around your grooming
            preferences, comfort and personal care routine.
          </p>
        </div>

        <div className="hair-service-grid">
          {waxingServices.map((service) => {
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
                    to="/pricing/waxing-threading"
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
            THE AURELLE DIFFERENCE
          </span>

          <h2>
            Care In
            <br />
            Every Detail
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

      {/* SIGNATURE EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/waxing/waxing-signature.jpg"
            alt="AURELLE professional beauty care experience"
            loading="lazy"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-eyebrow">
            PROFESSIONAL BEAUTY CARE
          </span>

          <h2>
            AURELLE
            <br />
            <span>Personal Care Experience</span>
          </h2>

          <p>
            Enjoy a thoughtful salon experience with
            professional hair removal, careful attention
            and personalised aftercare guidance.
          </p>

          <Link
            to="/pricing/waxing-threading"
            className="hair-button hair-button-light"
          >
            Explore Pricing <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-cta-content">
          <div>
            <span className="hair-eyebrow">
              YOUR COMFORT COMES FIRST
            </span>

            <h2>Feel Fresh. Feel Confident.</h2>

            <p>
              Book your professional waxing and threading
              appointment at AURELLE.
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
