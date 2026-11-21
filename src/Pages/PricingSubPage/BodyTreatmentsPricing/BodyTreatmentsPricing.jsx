
import React from "react";
import "./BodyTreatmentsPricing.css";

const treatments = [
  {
    id: 1,
    title: "Full Body Massage",
    category: "Relaxation",
    description:
      "A deeply relaxing massage that helps relieve muscle tension, improve circulation and rejuvenate your body.",
    price: "₹1,999",
    image: "/images/pricing/full-body-massage.jpg",
  },
  {
    id: 2,
    title: "Full Body Polishing",
    category: "Skin Care",
    description:
      "A revitalising skin treatment that exfoliates dead skin cells, smoothens texture and brings a healthy glow.",
    price: "₹2,500",
    image: "/images/pricing/full-body-polishing.jpg",
  },
  {
    id: 3,
    title: "Premium Full Body Polishing",
    category: "Premium Care",
    description:
      "An advanced polishing ritual with nourishing care for brighter, smoother and radiant looking skin.",
    price: "₹5,999",
    image: "/images/pricing/premium-body-polishing.jpg",
  },
];

const benefits = [
  {
    icon: "♧",
    title: "Deep Relaxation",
    description: "Relieves stress and fatigue",
  },
  {
    icon: "✧",
    title: "Skin Renewal",
    description: "Improves texture and glow",
  },
  {
    icon: "♢",
    title: "Body Detox",
    description: "Cleanses and refreshes skin",
  },
  {
    icon: "◇",
    title: "Expert Care",
    description: "Professional and hygienic service",
  },
];

const BodyTreatmentsPricing = () => {
  const whatsappNumber = ""; // Add salon WhatsApp number with country code

  const bookingLink = (service) => {
    const message = `Hello PK UNISEX SALON, I would like to enquire about ${service}.`;
    return whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : "#";
  };

  return (
    <main className="aurelle-pricing-page body-treatment-page">

      {/* HERO SECTION */}
      <section className="bt-hero">
        <div className="bt-hero-image">
          <img
            src="/images/pricing/body-treatment-hero.jpg"
            alt="Luxury body massage at PK Unisex Salon"
          />
        </div>

        <div className="bt-hero-overlay"></div>

        <div className="bt-hero-content">
          <div className="bt-breadcrumb">
            <a href="/">Home</a>
            <span> / </span>
            <a href="/pricing">Pricing</a>
            <span> / </span>
            <span>Body Treatments</span>
          </div>

          <span className="bt-eyebrow">BODY TREATMENTS</span>

          <h1>
            Relax. Renew.
            <span>Rejuvenate.</span>
          </h1>

          <p>
            Indulge in luxurious body care treatments designed to
            relax your body, refresh your skin and restore your natural glow.
          </p>

          <a href="#bt-services" className="bt-primary-btn">
            Explore Treatments <span>↗</span>
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bt-benefits">
        {benefits.map((item, index) => (
          <div className="bt-benefit-item" key={index}>
            <span className="bt-benefit-icon">{item.icon}</span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="bt-services" id="bt-services">
        <div className="bt-section-heading">
          <span className="bt-eyebrow">OUR BODY TREATMENTS</span>

          <h2>Signature Body Care</h2>

          <p>
            Thoughtfully curated treatments for total relaxation,
            skin nourishment and an all over refreshing experience.
          </p>
        </div>

        <div className="bt-service-grid">
          {treatments.map((item, index) => (
            <article className="bt-service-card" key={item.id}>
              <div className="bt-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="bt-card-category">
                  ✧ {item.category}
                </span>
              </div>

              <div className="bt-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="bt-card-bottom">
                  <span className="bt-price">{item.price}</span>

                  <a
                    href={bookingLink(item.title)}
                    className="bt-book-link"
                    target={whatsappNumber ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    Book Now <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bt-experience">
        <div className="bt-experience-image">
          <img
            src="/images/pricing/body-treatment-experience.jpg"
            alt="Luxury spa towels and body treatment essentials"
            loading="lazy"
          />
        </div>

        <div className="bt-experience-content">
          <span className="bt-eyebrow">THE PK EXPERIENCE</span>

          <h2>
            More Than
            <span> a Treatment.</span>
          </h2>

          <p>
            A complete body care experience that relaxes your senses,
            nourishes your skin and leaves you feeling refreshed from within.
          </p>

          <div className="bt-experience-points">
            <div>
              <span>♧</span>
              <p>Relax</p>
            </div>

            <div>
              <span>✧</span>
              <p>Nourish</p>
            </div>

            <div>
              <span>♢</span>
              <p>Refresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bt-cta">
        <div className="bt-cta-image">
          <img
            src="/images/pricing/body-treatment-cta.jpg"
            alt="Peaceful luxury spa atmosphere"
            loading="lazy"
          />
        </div>

        <div className="bt-cta-overlay"></div>

        <div className="bt-cta-content">
          <span className="bt-eyebrow">BOOK YOUR BODY TREATMENT</span>

          <h2>
            Rejuvenation
            <span> Awaits.</span>
          </h2>

          <p>
            Experience personalised body care at PK Unisex Salon
            and feel the difference in every session.
          </p>

          <a
            href={bookingLink("a body treatment")}
            className="bt-primary-btn"
            target={whatsappNumber ? "_blank" : undefined}
            rel="noreferrer"
          >
            Book an Appointment <span>↗</span>
          </a>
        </div>
      </section>

    </main>
  );
};

export default BodyTreatmentsPricing;
