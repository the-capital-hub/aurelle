
import React from "react";
import "./PedicureManicurePricing.css";

const services = [
  {
    id: 1,
    name: "Classic Pedicure & Manicure",
    description:
      "A complete hand and foot care experience with cleansing, exfoliation, nail grooming and relaxation.",
    price: "₹1,500",
    image: "/images/pricing/classic-pedicure.jpg",
    tag: "Essential Care",
  },
  {
    id: 2,
    name: "Foot Logic Pedicure & Manicure",
    description:
      "A specialised hand and foot care ritual designed to refresh, smooth and rejuvenate.",
    price: "₹1,700",
    image: "/images/pricing/foot-logic.jpg",
    tag: "Specialised Care",
  },
  {
    id: 3,
    name: "Foot Logic Manicure",
    description:
      "A specialised hand care treatment focused on nail grooming, cleansing and a refreshed finish.",
    price: "₹850",
    image: "/images/pricing/classic-manicure.jpg",
    tag: "Specialised Care",
  },
  {
    id: 4,
    name: "Ice Cream Pedicure & Manicure",
    description:
      "An indulgent hand and foot care experience for beautifully refreshed and pampered skin.",
    price: "₹2,300",
    image: "/images/pricing/ice-cream-pedicure.jpg",
    tag: "Luxury Ritual",
  },
  {
    id: 5,
    name: "Ice Cream Manicure",
    description:
      "A soothing manicure experience that leaves your hands feeling soft, clean and refreshed.",
    price: "₹1,150",
    image: "/images/pricing/ice-cream-pedicure.jpg",
    tag: "Luxury Ritual",
  },
  {
    id: 6,
    name: "Lotus Glow Pedicure & Manicure",
    description:
      "A premium hand and foot care ritual focused on deep cleansing, exfoliation and a radiant finish.",
    price: "₹2,800",
    image: "/images/pricing/lotus-glow.jpg",
    tag: "Premium Ritual",
  },
  {
    id: 7,
    name: "Lotus Glow Manicure",
    description:
      "A luxurious hand care treatment designed to nourish, refresh and enhance the natural beauty of your hands.",
    price: "₹1,399",
    image: "/images/pricing/lotus-glow.jpg",
    tag: "Premium Ritual",
  },
  {
    id: 8,
    name: "Bubblegum Fresh Pedicure & Manicure",
    description:
      "A refreshing hand and foot care experience for soft, clean and beautifully cared for skin.",
    price: "₹3,200",
    image: "/images/pricing/bubblegum-fresh.jpg",
    tag: "Refreshing Care",
  },
  {
    id: 9,
    name: "Bubblegum Fresh Manicure",
    description:
      "A refreshing manicure ritual that gives your hands a clean, soft and beautifully groomed finish.",
    price: "₹1,599",
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
          <span className="pm-eyebrow">AURELLE BEAUTY STUDIO</span>

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

        <div className="pm-hero-number">01 / 09</div>
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
                  {String(index + 1).padStart(2, "0")}
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
                  href="/booking"
                  className="pm-service-link"
                >
                  BOOK NOW <span>↗</span>
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
          <span className="pm-eyebrow">THE AURELLE EXPERIENCE</span>

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
            href="/booking"
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
