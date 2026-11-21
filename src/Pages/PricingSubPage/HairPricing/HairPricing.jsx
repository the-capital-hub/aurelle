
import React from "react";
import {
  Scissors,
  Droplet,
  Palette,
  Waves,
  Leaf,
  Hand,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
} from "lucide-react";

import "./HairPricing.css";

const hairCategories = [
  { id: "haircut", title: "Hair Cut & Styling", icon: Scissors },
  { id: "hairspa", title: "Hair Spa", icon: Droplet },
  { id: "colouring", title: "Hair Colouring", icon: Palette },
  { id: "rebonding", title: "Rebonding", icon: Waves },
  { id: "treatments", title: "Hair Treatments", icon: Leaf },
  { id: "massage", title: "Head Massage", icon: Hand },
];

const hairServices = [
  {
    id: "haircut",
    number: "01",
    title: "Hair Cut & Styling",
    subtitle: "A style that defines your personality.",
    description:
      "Refresh your look with professional cuts and styling designed around your personality.",
    image: "/images/pricing/haircut.jpg",
    icon: Scissors,
    services: [
      { name: "Hair Cut", price: "₹399" },
      { name: "Kids Hair Cut", price: "₹299" },
      { name: "Beard Trim", price: "₹200" },
    ],
  },
  {
    id: "hairspa",
    number: "02",
    title: "Hair Spa",
    subtitle: "Nourishment, relaxation and rejuvenation.",
    description:
      "Give your hair the care it deserves with nourishing spa experiences and premium treatments.",
    image: "/images/pricing/hair-spa.jpg",
    icon: Droplet,
    services: [
      { name: "Spa Essence", price: "₹1,200" },
      { name: "Tribond Hair Spa", price: "₹2,499" },
      { name: "Luxe Rejuvenation", price: "₹3,499" },
      { name: "Reborn Hair Spa", price: "₹3,999" },
      { name: "Royal Bliss", price: "₹4,499" },
      { name: "Moroccan Oil Hair Spa", price: "₹5,559" },
    ],
  },
  {
    id: "colouring",
    number: "03",
    title: "Hair Colouring",
    subtitle: "Beautiful shades. Beautiful transformations.",
    description:
      "Explore personalised colour services that bring depth, dimension and character to your look.",
    image: "/images/pricing/hair-colour.jpg",
    icon: Palette,
    services: [
      { name: "Per Streak", price: "₹500" },
      { name: "Root Touchup", price: "₹1,500" },
      { name: "Root Touchup Without Ammonia", price: "₹2,000" },
      { name: "Global Hair Colour", price: "₹5,499" },
      { name: "Highlights", price: "₹5,999" },
      { name: "Ombre Balayage", price: "₹6,999" },
    ],
  },
  {
    id: "rebonding",
    number: "04",
    title: "Hair Rebonding & Smoothening",
    subtitle: "Sleek, smooth and manageable hair.",
    description:
      "Professional hair smoothing and straightening services for a polished, manageable finish.",
    image: "/images/pricing/hair-rebonding.jpg",
    icon: Waves,
    services: [
      { name: "Straightening & Smoothening", price: "₹4,999" },
      { name: "Permanent Blowdry", price: "₹4,999" },
      { name: "Keratin Treatment", price: "₹4,999" },
      { name: "Nanoplastia", price: "₹7,999" },
      { name: "Botox Treatment", price: "₹6,999" },
    ],
  },
];

function HairServiceCard({ service, reverse }) {
  const Icon = service.icon;

  return (
    <article
      className={`hp-service-card ${reverse ? "hp-reverse" : ""}`}
      id={service.id}
    >
      <div className="hp-service-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />
        <div className="hp-image-shade" />
        <span className="hp-service-number">{service.number}</span>
      </div>

      <div className="hp-service-details">
        <div className="hp-service-heading">
          <div className="hp-service-icon">
            <Icon size={30} strokeWidth={1.4} />
          </div>

          <div>
            <span className="hp-service-kicker">PK HAIR STUDIO</span>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>
        </div>

        <p className="hp-service-description">
          {service.description}
        </p>

        <div className="hp-price-list">
          {service.services.map((item) => (
            <div className="hp-price-row" key={item.name}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>

        <a href="/contact" className="hp-book-button">
          Book This Service
          <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default function HairPricing() {
  return (
    <main className="pk-hair-pricing">

      {/* HERO */}

      <section className="hp-hero">
        <div className="hp-hero-bg" />

        <div className="hp-container hp-hero-inner">
          <a href="/pricing" className="hp-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="hp-hero-copy">
            <span className="hp-eyebrow">
              <span />
              PK HAIR STUDIO
            </span>

            <h1>
              Hair Care
              <em>And Styling</em>
            </h1>

            <p>
              Discover professional hair services, personalised
              treatments and beautiful styles crafted by our experts.
            </p>

            <a href="#hair-service-list" className="hp-primary-button">
              Explore Hair Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}

      <nav className="hp-category-nav">
        <div className="hp-container hp-category-inner">
          {hairCategories.map((category) => {
            const Icon = category.icon;

            return (
              <a href={`#${category.id}`} key={category.id}>
                <Icon size={22} strokeWidth={1.5} />
                <span>{category.title}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* SERVICE LIST */}

      <section
        className="hp-services-section"
        id="hair-service-list"
      >
        <div className="hp-container">

          <div className="hp-section-heading">
            <span className="hp-eyebrow hp-centered">
              <span />
              OUR HAIR SERVICES
              <span />
            </span>

            <h2>
              Your Hair, <em>Our Expertise</em>
            </h2>

            <p>
              Explore our professional hair services and discover
              the perfect treatment for your hair.
            </p>
          </div>

          <div className="hp-service-list">
            {hairServices.map((service, index) => (
              <HairServiceCard
                key={service.id}
                service={service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>

          {/* ADDITIONAL SERVICES */}

          <div className="hp-extra-grid">

            <article
              className="hp-extra-card hp-treatment"
              id="treatments"
            >
              <div className="hp-extra-shade" />

              <div className="hp-extra-content">
                <Leaf size={29} strokeWidth={1.4} />
                <span>PERSONALISED CARE</span>
                <h3>Hair Treatments</h3>
                <p>
                  Specialised care designed around your hair needs.
                </p>
                <a href="/contact">
                  Consultation Required
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>

            <article
              className="hp-extra-card hp-massage"
              id="massage"
            >
              <div className="hp-extra-shade" />

              <div className="hp-extra-content">
                <Hand size={29} strokeWidth={1.4} />
                <span>RELAX AND REFRESH</span>
                <h3>Head Massage</h3>
                <p>
                  Relaxing and nourishing head massage experiences.
                </p>
                <a href="/contact">
                  From ₹399
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>

          </div>

          {/* INFORMATION */}

          <div className="hp-information">
            <div className="hp-info-heading">
              <Info size={25} />
              <h3>Pricing Information</h3>
            </div>

            <div className="hp-info-content">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Certain services may vary according to hair length,
                density and consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="hp-final-cta">
        <div className="hp-final-bg" />

        <div className="hp-container hp-final-inner">
          <div className="hp-final-content">
            <span className="hp-eyebrow">
              <span />
              EXPERIENCE PREMIUM CARE
            </span>

            <h2>
              Ready for a
              <em>Fresh New Look?</em>
            </h2>

            <p>
              Let our professionals help you discover a style
              that feels uniquely yours.
            </p>

            <a href="/contact" className="hp-primary-button">
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
