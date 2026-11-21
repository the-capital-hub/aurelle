
import React from "react";
import "./PedicureManicurePricing.css";

const services = [
  {
    id: 1,
    name: "Classic Pedicure",
    description:
      "A refreshing foot care experience with cleansing, exfoliation, nail care and relaxation.",
    price: "₹899",
    image: "/images/pricing/classic-pedicure.jpg",
    tag: "Essential Care",
  },
  {
    id: 2,
    name: "Classic Manicure",
    description:
      "Complete hand and nail grooming with cleansing, shaping, cuticle care and a polished finish.",
    price: "₹750",
    image: "/images/pricing/classic-manicure.jpg",
    tag: "Essential Care",
  },
  {
    id: 3,
    name: "Foot Logic Pedicure",
    description:
      "A specialised foot care ritual designed to leave your feet feeling smooth, refreshed and renewed.",
    price: "Ask for Price",
    image: "/images/pricing/foot-logic.jpg",
    tag: "Specialised Care",
  },
  {
    id: 4,
    name: "Ice Cream Pedicure",
    description:
      "An indulgent pedicure experience with a soothing treatment for soft and refreshed feet.",
    price: "Ask for Price",
    image: "/images/pricing/ice-cream-pedicure.jpg",
    tag: "Luxury Ritual",
  },
  {
    id: 5,
    name: "Lotus Glow Pedicure",
    description:
      "A luxurious foot care ritual focused on cleansing, exfoliation and a radiant finish.",
    price: "Ask for Price",
    image: "/images/pricing/lotus-glow.jpg",
    tag: "Premium Ritual",
  },
  {
    id: 6,
    name: "Bubblegum Fresh Pedicure",
    description:
      "A playful and refreshing foot care experience for soft, clean and beautifully cared for feet.",
    price: "Ask for Price",
    image: "/images/pricing/bubblegum-fresh.jpg",
    tag: "Refreshing Care",
  },
];

const PedicureManicurePricing = () => {
  return (
    <main className="aurelle-pricing-page pm-pricing-page">

      {/* HERO SECTION */}
      <section className="pm-hero">
        <div className="pm-hero-image">
          <img
            src="/images/pricing/pedicure-hero.jpg"
            alt="Luxury manicure and pedicure salon"
          />
        </div>

        <div className="pm-hero-overlay"></div>

        <div className="pm-hero-content">
          <span className="pm-eyebrow">PK UNISEX SALON</span>

          <h1>
            The Art of
            <span> Hand & Foot Care</span>
          </h1>

          <p>
            Discover refined nail care and indulgent foot rituals,
            thoughtfully designed to make every detail feel luxurious.
          </p>

          <a href="#pm-services" className="pm-primary-btn">
            EXPLORE SERVICES <span>↗</span>
          </a>
        </div>

        <div className="pm-hero-number">01 / 06</div>
      </section>

      {/* INTRO SECTION */}
      <section className="pm-intro">
        <div className="pm-intro-label">
          <span></span>
          BEAUTY IN EVERY DETAIL
        </div>

        <div className="pm-intro-content">
          <h2>
            Care that begins
            <span> at your fingertips.</span>
          </h2>

          <p>
            From beautifully groomed hands to deeply refreshed feet,
            experience professional care in a calm and luxurious setting.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="pm-services" id="pm-services">
        <div className="pm-section-heading">
          <div>
            <span className="pm-eyebrow">OUR MENU</span>
            <h2>Signature Treatments</h2>
          </div>

          <p>
            Thoughtful treatments. Exceptional care.
            A beautiful experience every time.
          </p>
        </div>

        <div className="pm-service-grid">
          {services.map((service, index) => (
            <article className="pm-service-card" key={service.id}>
              <div className="pm-service-image">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                />

                <span className="pm-service-number">
                  0{index + 1}
                </span>

                <span className="pm-service-tag">
                  {service.tag}
                </span>
              </div>

              <div className="pm-service-info">
                <div className="pm-service-title">
                  <h3>{service.name}</h3>
                  <span className="pm-service-price">
                    {service.price}
                  </span>
                </div>

                <p>{service.description}</p>

                <a
                  href="https://wa.me/"
                  className="pm-service-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  ENQUIRE NOW <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="pm-experience">
        <div className="pm-experience-image">
          <img
            src="/images/pricing/pedicure-experience.jpg"
            alt="Professional salon foot care experience"
            loading="lazy"
          />
        </div>

        <div className="pm-experience-content">
          <span className="pm-eyebrow">THE PK EXPERIENCE</span>

          <h2>
            A little luxury.
            <span> A lot of care.</span>
          </h2>

          <p>
            Take a moment for yourself. Our hand and foot care
            treatments bring together professional attention,
            relaxing rituals and a beautifully finished look.
          </p>

          <div className="pm-experience-points">
            <div>
              <span>01</span>
              <p>Professional Nail Care</p>
            </div>

            <div>
              <span>02</span>
              <p>Relaxing Salon Rituals</p>
            </div>

            <div>
              <span>03</span>
              <p>Attention to Every Detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pm-cta">
        <div className="pm-cta-image">
          <img
            src="/images/pricing/pedicure-cta.jpg"
            alt="Luxury salon nail care"
            loading="lazy"
          />
        </div>

        <div className="pm-cta-overlay"></div>

        <div className="pm-cta-content">
          <span className="pm-eyebrow">YOUR MOMENT OF LUXURY</span>

          <h2>
            Make time for
            <span> yourself.</span>
          </h2>

          <p>
            Beautiful hands and refreshed feet are just one appointment away.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="pm-primary-btn"
          >
            BOOK YOUR APPOINTMENT <span>↗</span>
          </a>
        </div>
      </section>

    </main>
  );
};

export default PedicureManicurePricing;
