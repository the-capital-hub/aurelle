
import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Hand,
  Footprints,
  Smile,
  Heart,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  Droplet,
  Scissors,
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
    id: "full-body-waxing",
    number: "01",
    title: "Full Body Waxing",
    label: "COMPLETE BODY CARE",
    description:
      "A complete waxing experience for smooth and well groomed skin.",
    image: "/images/pricing/full-body-waxing.jpg",
    icon: Sparkles,
    price: "Ask for Price",
  },
  {
    id: "hand-leg-waxing",
    number: "02",
    title: "Hand & Leg Waxing",
    label: "SMOOTH SKIN CARE",
    description:
      "Professional waxing services for hands and legs with a neat finish.",
    image: "/images/pricing/hand-leg-waxing.jpg",
    icon: Hand,
    price: "Ask for Price",
  },
  {
    id: "underarms-waxing",
    number: "03",
    title: "Underarms Waxing",
    label: "GENTLE GROOMING",
    description:
      "Focused grooming care for a clean and comfortable finish.",
    image: "/images/pricing/underarms-waxing.jpg",
    icon: Droplet,
    price: "Ask for Price",
  },
  {
    id: "face-waxing",
    number: "04",
    title: "Face Waxing",
    label: "FACIAL GROOMING",
    description:
      "Detailed facial waxing for a neat and well groomed appearance.",
    image: "/images/pricing/face-waxing.jpg",
    icon: Smile,
    price: "Ask for Price",
  },
];

const threadingServices = [
  {
    id: "eyebrow-threading",
    number: "05",
    title: "Eyebrow Threading",
    label: "BROW DEFINITION",
    description:
      "Shape and define your brows with precise professional threading.",
    image: "/images/pricing/eyebrow-threading.jpg",
    icon: Scissors,
    price: "Ask for Price",
  },
  {
    id: "upper-lip-chin",
    number: "06",
    title: "Upper Lip & Chin",
    label: "DETAILED FACIAL CARE",
    description:
      "Precise threading for a neat and well groomed facial finish.",
    image: "/images/pricing/upper-lip-chin.jpg",
    icon: Smile,
    price: "Ask for Price",
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

        <div className="wax-card-bottom">
          <strong>{service.price}</strong>

          <a href="/contact" className="wax-book-link">
            Enquire Now
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
              PK BEAUTY STUDIO
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
              <span>THE PK BEAUTY EXPERIENCE</span>
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
                All confirmed service prices will be subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Please contact the salon for service availability
                and individual pricing.
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
              professionals at PK Unisex Salon.
            </p>

            <a href="/contact" className="wax-primary-button">
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
