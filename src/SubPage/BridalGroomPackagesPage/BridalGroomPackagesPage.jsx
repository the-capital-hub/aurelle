
import React from "react";
import { Link } from "react-router-dom";
import '../HairStylingPage/HairStylingPage.css'
import "./BridalGroomPackagesPage.css";

const serviceCategories = [
  { name: "Hair & Styling", slug: "hair" },
  { name: "Men's Grooming", slug: "grooming" },
  { name: "Skin & Facial", slug: "skin" },
  { name: "Makeup & Bridal", slug: "makeup" },
  { name: "Nail Studio", slug: "nails" },
  { name: "Waxing & Threading", slug: "waxing" },
  { name: "Manicure & Pedicure", slug: "pedicure" },
  { name: "Body & Spa", slug: "body-spa" },
  { name: "Bridal & Groom Packages", slug: "packages" },
];

const packages = [
  {
    number: "01",
    title: "Bridal Beauty",
    description:
      "A complete bridal beauty experience with professional makeup, hairstyling and elegant finishing touches for your special day.",
    image: "/images/services/packages/packages-bridal.jpg",
    tag: "For The Bride",
  },
  {
    number: "02",
    title: "Groom Styling",
    description:
      "Look your best on your wedding day with expert grooming, hairstyle detailing and a polished personal look.",
    image: "/images/services/packages/packages-groom.jpg",
    tag: "For The Groom",
  },
  {
    number: "03",
    title: "Pre Wedding Glow",
    description:
      "Prepare for every celebration with carefully planned skin, hair and beauty sessions before the big day.",
    image: "/images/services/packages/packages-prewedding.jpg",
    tag: "Before The Wedding",
  },
  {
    number: "04",
    title: "Personal Beauty Consultation",
    description:
      "A personalised consultation to understand your preferences and create a beauty plan that complements your occasion.",
    image: "/images/services/packages/packages-consultation.jpg",
    tag: "Made For You",
  },
];

const benefits = [
  {
    number: "01",
    title: "Personalised Planning",
    text: "Every look is planned around your preferences, outfit and special occasion.",
  },
  {
    number: "02",
    title: "Professional Artists",
    text: "Experienced beauty professionals focused on detail, comfort and finish.",
  },
  {
    number: "03",
    title: "Complete Experience",
    text: "Hair, makeup, grooming and beauty services brought together in one place.",
  },
  {
    number: "04",
    title: "Attention To Detail",
    text: "Thoughtful finishing touches to help you feel confident on your special day.",
  },
];

export default function BridalGroomPackagesPage() {
  return (
    <main className="aurelle-hair-page">

      {/* HERO */}
      <section className="hair-hero">
        <div className="hair-hero-image">
          <img
            src="/images/services/packages/packages-hero.jpg"
            alt="Luxury bridal and groom styling at AURELLE"
          />
        </div>

        <div className="hair-hero-overlay"></div>

        <div className="hair-hero-content">
          <span className="hair-eyebrow">
            AURELLE LUXURY UNISEX SALON
          </span>

          <p className="hair-breadcrumb">
            <Link to="/">Home</Link> /{" "}
            <Link to="/services">Services</Link> / Packages
          </p>

          <h1>
            Your Day.
            <br />
            <span>Your Signature Look.</span>
          </h1>

          <p>
            Celebrate your special moments with thoughtfully curated
            bridal and groom beauty experiences, personalised just for you.
          </p>

          <Link to="/contact" className="hair-primary-btn">
            Plan Your Experience <span>↗</span>
          </Link>
        </div>

        <div className="hair-hero-side-text">
          BEAUTY FOR YOUR BIG MOMENTS
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="hair-category-section">
        <div className="hair-category-inner">
          <span className="hair-category-label">EXPLORE SERVICES</span>

          <div className="hair-category-nav">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/services/${category.slug}`}
                className={
                  category.slug === "packages"
                    ? "hair-category-link active"
                    : "hair-category-link"
                }
              >
                {category.name}
                <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="hair-intro-section">
        <div className="hair-section-label">YOUR SPECIAL OCCASION</div>

        <div className="hair-intro-grid">
          <h2>
            Moments That Deserve
            <br />
            <span>Something Extraordinary.</span>
          </h2>

          <p>
            From wedding celebrations to pre wedding preparations,
            AURELLE brings together professional beauty services and
            personalised attention to help you feel your absolute best.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="hair-services-section">
        <div className="hair-section-heading">
          <div>
            <span className="hair-section-label">THE AURELLE EXPERIENCE</span>
            <h2>Curated For Your Big Day</h2>
          </div>

          <p>
            Thoughtful beauty experiences designed around your
            celebration and personal style.
          </p>
        </div>

        <div className="hair-services-grid">
          {packages.map((item) => (
            <article className="hair-service-card" key={item.number}>
              <div className="hair-service-image">
                <img src={item.image} alt={item.title} />
                <span className="hair-service-number">{item.number}</span>
              </div>

              <div className="hair-service-content">
                <span className="hair-service-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <Link to="/contact" className="hair-text-link">
                  Enquire Now <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="hair-why-section">
        <div className="hair-why-header">
          <span className="hair-section-label">WHY AURELLE</span>
          <h2>
            Every Detail.
            <br />
            <span>Thoughtfully Perfected.</span>
          </h2>
          <p>
            Your special day deserves more than a service.
            It deserves an experience that feels personal from start to finish.
          </p>
        </div>

        <div className="hair-benefits-grid">
          {benefits.map((benefit) => (
            <div className="hair-benefit-card" key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE */}
      <section className="hair-signature-section">
        <div className="hair-signature-image">
          <img
            src="/images/services/packages/packages-signature.jpg"
            alt="AURELLE signature bridal beauty experience"
          />
        </div>

        <div className="hair-signature-content">
          <span className="hair-section-label">THE SIGNATURE EXPERIENCE</span>

          <h2>
            The Beginning Of
            <br />
            <span>Your Beautiful Story.</span>
          </h2>

          <p>
            Your wedding journey is uniquely yours. Our team works with
            you to understand your vision, preferences and celebration
            requirements before planning your beauty experience.
          </p>

          <p>
            From the first consultation to the final finishing touch,
            every detail is approached with care and creativity.
          </p>

          <Link to="/contact" className="hair-primary-btn">
            Book A Consultation <span>↗</span>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hair-final-cta">
        <div className="hair-final-cta-bg">
          <img
            src="/images/packages/packages-bridal.jpg"
            alt=""
          />
        </div>

        <div className="hair-final-cta-overlay"></div>

        <div className="hair-final-cta-content">
          <span className="hair-section-label">YOUR MOMENT STARTS HERE</span>

          <h2>
            Let's Create
            <br />
            <span>Your Perfect Look.</span>
          </h2>

          <p>
            Tell us about your special occasion and let AURELLE
            help you plan your beauty experience.
          </p>

          <Link to="/contact" className="hair-primary-btn">
            Get In Touch <span>↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
