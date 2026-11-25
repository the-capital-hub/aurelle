
import React from "react";
import "./PackagesPricing.css";

const packages = [
  {
    id: 1,
    number: "01",
    title: "Pre Bridal Package",
    category: "BRIDAL PREPARATION",
    description:
      "Prepare for your special day with the AURELLE Pre Bridal Package. Connect with our team for details about the package inclusions.",
    features: [
      "Pre Bridal Beauty Package",
      "Professional Salon Care",
      "Personalised Consultation",
      "Package Details on Enquiry",
    ],
    price: "₹18,072",
    offer: "25% OFF INCLUDED",
    image: "/images/pricing/pre-bridal-package.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Pre Groom Package",
    category: "GROOM PREPARATION",
    description:
      "Get ready for your wedding celebrations with the AURELLE Pre Groom Package. Contact our team to discuss the package details.",
    features: [
      "Pre Groom Beauty Package",
      "Professional Salon Care",
      "Personalised Consultation",
      "Package Details on Enquiry",
    ],
    price: "₹16,272",
    offer: "25% OFF INCLUDED",
    image: "/images/pricing/groom-package.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Groom Makeup",
    category: "THE GROOM",
    description:
      "A professional makeup service designed to create a refined and polished look for your special occasion.",
    features: [
      "Professional Groom Makeup",
      "Wedding Ready Look",
      "Personalised Consultation",
      "Professional Finishing",
    ],
    price: "₹8,000",
    offer: "",
    image: "/images/pricing/premium-wedding-package.jpg",
  },
];

const weddingMoments = [
  {
    number: "01",
    title: "The Bridal Preparation",
    description: "Prepare for your special day with dedicated beauty care.",
  },
  {
    number: "02",
    title: "The Groom Preparation",
    description: "A refined preparation experience for the groom.",
  },
  {
    number: "03",
    title: "The Perfect Wedding Look",
    description: "Professional finishing for your special celebration.",
  },
];

const PackagesPricing = () => {
  const whatsappNumber = "";

  const getBookingLink = (packageName) => {
    const message = `Hello AURELLE Beauty Studio, I would like to enquire about ${packageName}.`;

    return whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : "/booking";
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
            preparation, groom care and professional wedding makeup
            experiences at AURELLE Beauty Studio.
          </p>

          <a href="#packages" className="pkg-primary-btn">
            EXPLORE PACKAGES <span>↗</span>
          </a>
        </div>

        <div className="pkg-hero-caption">
          AURELLE BEAUTY STUDIO · WEDDING COLLECTION
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
            Your wedding deserves special attention. Discover
            our bridal preparation, groom preparation and
            professional makeup services designed for your
            memorable celebrations.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="pkg-packages" id="packages">
        <div className="pkg-section-heading">
          <span className="pkg-eyebrow">CURATED FOR YOUR CELEBRATION</span>
          <h2>Wedding Packages</h2>
          <p>
            Explore our wedding collection and choose the
            experience that suits your special occasion.
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
                    {item.offer && (
                      <span className="pkg-price-label">
                        {item.offer}
                      </span>
                    )}
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
          <span className="pkg-eyebrow">THE AURELLE WEDDING EXPERIENCE</span>

          <h2>
            Made for your
            <span> once in a lifetime moments.</span>
          </h2>

          <p>
            From bridal preparation to groom makeup, explore
            professional beauty services for your wedding
            celebrations at AURELLE.
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
            Connect with AURELLE Beauty Studio to discuss
            your wedding beauty and grooming requirements.
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
