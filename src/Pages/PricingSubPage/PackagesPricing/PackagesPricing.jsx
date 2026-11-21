
import React from "react";
import "./PackagesPricing.css";

const packages = [
  {
    id: 1,
    number: "01",
    title: "Bridal Makeup",
    category: "THE BRIDE",
    description:
      "A complete bridal beauty experience designed to make your wedding look unforgettable.",
    features: [
      "Professional Bridal Makeup",
      "Bridal Hairstyling",
      "Saree or Dupatta Draping",
      "Finishing and Touch Up",
    ],
    price: "Ask for Price",
    image: "/images/pricing/bridal-makeup-package.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Pre Bridal Package",
    category: "BRIDAL PREPARATION",
    description:
      "A thoughtful beauty preparation experience for a radiant and confident bridal look.",
    features: [
      "Skin Care Treatments",
      "Hair Care Session",
      "Hand and Foot Care",
      "Beauty Consultation",
    ],
    price: "Ask for Price",
    image: "/images/pricing/pre-bridal-package.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Groom Grooming",
    category: "THE GROOM",
    description:
      "Refined grooming and styling to help the groom look his best on every wedding occasion.",
    features: [
      "Professional Groom Makeup",
      "Hair Styling",
      "Skin Preparation",
      "Final Grooming Touch Up",
    ],
    price: "Ask for Price",
    image: "/images/pricing/groom-package.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Couple Package",
    category: "TOGETHER",
    description:
      "A coordinated beauty and grooming experience for the bride and groom.",
    features: [
      "Bridal Beauty Session",
      "Groom Grooming Session",
      "Hair Styling",
      "Personalised Consultation",
    ],
    price: "Ask for Price",
    image: "/images/pricing/couple-package.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Premium Wedding Package",
    category: "THE SIGNATURE EXPERIENCE",
    description:
      "An elevated wedding beauty experience with personalised care for your special celebrations.",
    features: [
      "Premium Bridal Makeup",
      "Premium Groom Grooming",
      "Hair Styling and Draping",
      "Personalised Beauty Planning",
    ],
    price: "Ask for Price",
    image: "/images/pricing/premium-wedding-package.jpg",
  },
];

const weddingMoments = [
  {
    number: "01",
    title: "The Bridal Look",
    description: "Beauty that celebrates your special moment.",
  },
  {
    number: "02",
    title: "The Groom Edit",
    description: "Refined styling with attention to every detail.",
  },
  {
    number: "03",
    title: "The Perfect Pair",
    description: "A coordinated experience for two.",
  },
];

const PackagesPricing = () => {
  const whatsappNumber = ""; // Add salon WhatsApp number with country code

  const getBookingLink = (packageName) => {
    const message = `Hello PK UNISEX SALON, I would like to enquire about the ${packageName}.`;

    return whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : "#packages";
  };

  return (
    <main className="aurelle-pricing-page packages-pricing-page">

      {/* HERO */}
      <section className="pkg-hero">
        <div className="pkg-hero-image">
          <img
            src="/images/pricing/wedding-hero.jpg"
            alt="Luxury bridal wedding beauty"
          />
        </div>

        <div className="pkg-hero-overlay"></div>

        <div className="pkg-hero-content">
          <div className="pkg-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/pricing">Pricing</a>
            <span>/</span>
            <span>Wedding Packages</span>
          </div>

          <span className="pkg-eyebrow">THE WEDDING COLLECTION</span>

          <h1>
            Your Day.
            <span>Your Beautiful Story.</span>
          </h1>

          <p>
            Celebrate your special moments with personalised bridal
            beauty, groom grooming and premium wedding experiences
            at PK UNISEX SALON.
          </p>

          <a href="#packages" className="pkg-primary-btn">
            EXPLORE PACKAGES <span>↗</span>
          </a>
        </div>

        <div className="pkg-hero-caption">
          PK UNISEX SALON · WEDDING COLLECTION
        </div>
      </section>

      {/* INTRO */}
      <section className="pkg-intro">
        <div className="pkg-intro-left">
          <span className="pkg-eyebrow">A CELEBRATION OF YOU</span>
          <h2>
            Every detail.
            <span> Every beautiful moment.</span>
          </h2>
        </div>

        <div className="pkg-intro-right">
          <p>
            Your wedding deserves more than an ordinary beauty
            appointment. Discover thoughtfully designed experiences
            that bring together professional styling, personal care
            and timeless elegance.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="pkg-packages" id="packages">
        <div className="pkg-section-heading">
          <span className="pkg-eyebrow">CURATED FOR YOUR CELEBRATION</span>
          <h2>Wedding Packages</h2>
          <p>
            Find the experience that makes your special day feel
            even more memorable.
          </p>
        </div>

        <div className="pkg-grid">
          {packages.map((item) => (
            <article className="pkg-card" key={item.id}>
              <div className="pkg-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="pkg-card-number">{item.number}</span>
                <span className="pkg-card-category">{item.category}</span>
              </div>

              <div className="pkg-card-content">
                <h3>{item.title}</h3>
                <p className="pkg-card-description">
                  {item.description}
                </p>

                <div className="pkg-feature-list">
                  {item.features.map((feature, index) => (
                    <div className="pkg-feature" key={index}>
                      <span>✧</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pkg-card-bottom">
                  <div>
                    <span className="pkg-price-label">PACKAGE PRICE</span>
                    <strong>{item.price}</strong>
                  </div>

                  <a
                    href={getBookingLink(item.title)}
                    className="pkg-book-btn"
                    target={whatsappNumber ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    ENQUIRE <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WEDDING EXPERIENCE */}
      <section className="pkg-experience">
        <div className="pkg-experience-image">
          <img
            src="/images/pricing/wedding-experience.jpg"
            alt="Elegant bridal beauty and wedding preparation"
            loading="lazy"
          />
        </div>

        <div className="pkg-experience-content">
          <span className="pkg-eyebrow">THE PK WEDDING EXPERIENCE</span>

          <h2>
            Made for your
            <span> once in a lifetime moments.</span>
          </h2>

          <p>
            From the first beauty consultation to the final finishing
            touches, our wedding collection is designed around your
            personal style and celebration.
          </p>

          <div className="pkg-moments">
            {weddingMoments.map((item) => (
              <div className="pkg-moment" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pkg-cta">
        <div className="pkg-cta-image">
          <img
            src="/images/pricing/wedding-cta.jpg"
            alt="Elegant wedding beauty preparation"
            loading="lazy"
          />
        </div>

        <div className="pkg-cta-overlay"></div>

        <div className="pkg-cta-content">
          <span className="pkg-eyebrow">YOUR CELEBRATION STARTS HERE</span>

          <h2>
            Let's create
            <span> your perfect look.</span>
          </h2>

          <p>
            Connect with PK UNISEX SALON to discuss your wedding
            beauty and grooming requirements.
          </p>

          <a
            href={getBookingLink("Wedding Package")}
            className="pkg-primary-btn"
            target={whatsappNumber ? "_blank" : undefined}
            rel="noreferrer"
          >
            PLAN YOUR WEDDING LOOK <span>↗</span>
          </a>
        </div>
      </section>

    </main>
  );
};

export default PackagesPricing;
