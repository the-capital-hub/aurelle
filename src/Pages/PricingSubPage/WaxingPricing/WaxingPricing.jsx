
import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Hand,
  Smile,
  Heart,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  Droplet,
  Scissors,
  Sun,
  Flower2,
} from "lucide-react";

import "./WaxingPricing.css";

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: "Hygiene Focused",
    text: "Careful and clean service experience",
  },
  {
    icon: Sparkles,
    title: "Smooth Finish",
    text: "Professional beauty care",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    text: "Services suited to your needs",
  },
  {
    icon: Droplet,
    title: "Skin Comfort",
    text: "Gentle and attentive approach",
  },
];

const waxingServices = [
  {
    id: "face-waxing",
    number: "01",
    title: "Face Waxing",
    label: "FACIAL GROOMING",
    description:
      "Professional facial waxing services for a neat and well groomed appearance.",
    image: "/images/pricing/face-waxing.jpg",
    icon: Smile,
    services: [
      { name: "Upper Lip", price: "Confirm Price" },
      { name: "Side Wax", price: "Confirm Price" },
      { name: "Round Neck", price: "Confirm Price" },
      { name: "Full Face", price: "Confirm Price" },
    ],
  },
  {
    id: "arms-waxing",
    number: "02",
    title: "Arms & Underarms Waxing",
    label: "SMOOTH SKIN CARE",
    description:
      "Professional waxing services for arms and underarms with a neat finish.",
    image: "/images/pricing/hand-leg-waxing.jpg",
    icon: Hand,
    services: [
      { name: "Underarms", price: "Confirm Price" },
      { name: "Half Arms", price: "Confirm Price" },
      { name: "Full Arms", price: "Confirm Price" },
    ],
  },
  {
    id: "legs-waxing",
    number: "03",
    title: "Leg Waxing",
    label: "SMOOTH FINISH",
    description:
      "Personal grooming services for smooth and well cared for legs.",
    image: "/images/pricing/hand-leg-waxing.jpg",
    icon: Sparkles,
    services: [
      { name: "Half Legs", price: "Confirm Price" },
      { name: "Full Legs", price: "Confirm Price" },
    ],
  },
  {
    id: "body-waxing",
    number: "04",
    title: "Body & Bikini Waxing",
    label: "COMPLETE BODY CARE",
    description:
      "Professional body waxing options for personalised grooming needs.",
    image: "/images/pricing/full-body-waxing.jpg",
    icon: Flower2,
    services: [
      { name: "Full Back", price: "Confirm Price" },
      { name: "Full Front", price: "Confirm Price" },
      { name: "Bikini Line", price: "Confirm Price" },
      { name: "Bikini Wax", price: "Confirm Price" },
      { name: "Full Body Wax", price: "Confirm Price" },
    ],
  },
  {
    id: "waxing-types",
    number: "05",
    title: "Specialised Waxing",
    label: "PROFESSIONAL WAX OPTIONS",
    description:
      "Choose from different professional waxing options according to your preference.",
    image: "/images/pricing/full-body-waxing.jpg",
    icon: Droplet,
    services: [
      { name: "Rica Wax", price: "Confirm Price" },
      { name: "Roll-on Wax", price: "Confirm Price" },
      { name: "Brazilian Wax", price: "Confirm Price" },
    ],
  },
];

const threadingServices = [
  {
    id: "threading-services",
    number: "06",
    title: "Threading Services",
    label: "PRECISE FACIAL GROOMING",
    description:
      "Professional threading services for precise shaping and a neat facial finish.",
    image: "/images/pricing/eyebrow-threading.jpg",
    icon: Scissors,
    services: [
      { name: "Eyebrow", price: "Confirm Price" },
      { name: "Forehead", price: "Confirm Price" },
      { name: "Upper Lip", price: "Confirm Price" },
      { name: "Lower Lip", price: "Confirm Price" },
      { name: "Chin", price: "Confirm Price" },
      { name: "Side Face", price: "Confirm Price" },
      { name: "Full Face", price: "Confirm Price" },
    ],
  },
];

function BeautyServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="wax-service-card" id={service.id}>
      <div className="wax-card-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <div className="wax-card-image-shade" />

        <span className="wax-card-number">
          {service.number}
        </span>
      </div>

      <div className="wax-card-content">
        <span className="wax-card-label">
          {service.label}
        </span>

        <div className="wax-card-title">
          <Icon size={23} strokeWidth={1.4} />
          <h3>{service.title}</h3>
        </div>

        <p>{service.description}</p>

        <div className="wax-service-prices">
          {service.services.map((item) => (
            <div className="wax-service-price-row" key={item.name}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>

        <div className="wax-card-bottom">
          <a href="/booking" className="wax-book-link">
            Book Now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function WaxingPricing() {
  return (
    <main className="pk-waxing-page">

      {/* HERO */}

      <section className="wax-hero">
        <div className="wax-hero-background" />

        <div className="wax-container wax-hero-inner">
          <a href="/pricing" className="wax-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="wax-hero-content">
            <span className="wax-eyebrow">
              <span />
              AURELLE BEAUTY STUDIO
            </span>

            <h1>
              Waxing
              <em>& Threading</em>
            </h1>

            <p>
              Discover professional grooming and beauty care
              with personalised waxing and threading services.
            </p>

            <a href="#wax-services" className="wax-primary-button">
              Explore Our Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="wax-highlights">
        <div className="wax-container wax-highlights-grid">
          {serviceHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="wax-highlight" key={item.title}>
                <Icon size={29} strokeWidth={1.4} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}

      <section
        className="wax-services-section"
        id="wax-services"
      >
        <div className="wax-container">

          <div className="wax-section-heading">
            <span className="wax-eyebrow wax-centered">
              <span />
              OUR BEAUTY SERVICES
              <span />
            </span>

            <h2>
              Smooth Care, <em>Beautiful Confidence</em>
            </h2>

            <p>
              Explore our professional waxing and threading
              services for your personal grooming routine.
            </p>
          </div>

          {/* WAXING */}

          <div className="wax-category-heading">
            <div>
              <span>01 / BODY GROOMING</span>
              <h3>Waxing Services</h3>
            </div>
            <Droplet size={28} strokeWidth={1.3} />
          </div>

          <div className="wax-services-grid">
            {waxingServices.map((service) => (
              <BeautyServiceCard
                service={service}
                key={service.id}
              />
            ))}
          </div>

          {/* THREADING */}

          <div className="wax-category-heading wax-threading-heading">
            <div>
              <span>02 / FACIAL GROOMING</span>
              <h3>Threading Services</h3>
            </div>
            <Scissors size={28} strokeWidth={1.3} />
          </div>

          <div className="wax-services-grid wax-threading-grid">
            {threadingServices.map((service) => (
              <BeautyServiceCard
                service={service}
                key={service.id}
              />
            ))}
          </div>

          {/* EXPERIENCE */}

          <div className="wax-experience">
            <div className="wax-experience-icon">
              <ShieldCheck size={30} strokeWidth={1.4} />
            </div>

            <div>
              <span>THE AURELLE BEAUTY EXPERIENCE</span>
              <h3>Care In Every Detail</h3>
              <p>
                Enjoy attentive service, personalised care
                and a comfortable salon experience.
              </p>
            </div>
          </div>

          {/* PRICING INFORMATION */}

          <div className="wax-pricing-info">
            <div className="wax-info-heading">
              <Info size={27} strokeWidth={1.5} />
              <h3>Pricing Information</h3>
            </div>

            <div className="wax-info-details">
              <p>
                <Check size={16} />
                Prices marked Confirm Price require salon confirmation.
              </p>

              <p>
                <Check size={16} />
                Waxing options and service availability may vary.
                Please confirm the preferred option before booking.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="wax-final-cta">
        <div className="wax-final-background" />

        <div className="wax-container wax-final-inner">
          <div className="wax-final-content">
            <span className="wax-eyebrow">
              <span />
              YOUR BEAUTY, OUR CARE
            </span>

            <h2>
              Feel Fresh.
              <em>Feel Confident.</em>
            </h2>

            <p>
              Book your grooming session with the beauty
              professionals at AURELLE.
            </p>

            <a href="/booking" className="wax-primary-button">
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
