
import React from "react";
import { Link } from "react-router-dom";

import {
  Scissors,
  VenetianMask,
  Palette,
  Droplet,
  Gift,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  ShieldCheck,
  Leaf,
  UserRound,
  Star,
} from "lucide-react";

import "./MensGroomingPricing.css";

const groomingCategories = [
  { id: "haircut", title: "Haircut & Styling", icon: Scissors },
  { id: "beard", title: "Beard Styling", icon: VenetianMask },
  { id: "shaving", title: "Shaving", icon: Leaf },
  { id: "colour", title: "Hair Colour", icon: Palette },
  { id: "spa", title: "Hair Spa & Treatments", icon: Droplet },
  { id: "packages", title: "Grooming Packages", icon: Gift },
];

const groomingServices = [
  {
    id: "haircut",
    number: "01",
    title: "Haircut & Styling",
    subtitle: "Classic, modern and personalised looks.",
    description:
      "Discover precision haircuts and professional styling designed to complement your personality.",
    image: "/images/pricing/mens-haircut.jpg",
    icon: Scissors,
    services: [
      { name: "Men's Hair Cut", price: "₹499" },
      { name: "Style Cut & Finish", price: "₹699" },
      { name: "Kids Hair Cut (Boys)", price: "₹399" },
    ],
  },
  {
    id: "beard",
    number: "02",
    title: "Beard Styling",
    subtitle: "Sharp, clean and well-defined looks.",
    description:
      "Keep your beard looking its best with expert trimming, shaping and personalised grooming.",
    image: "/images/pricing/mens-beard.jpg",
    icon: VenetianMask,
    services: [
      { name: "Beard Trim", price: "₹299" },
      { name: "Beard Shaping", price: "₹399" },
      { name: "Beard Styling with Spa", price: "₹699" },
    ],
  },
  {
    id: "shaving",
    number: "03",
    title: "Shaving",
    subtitle: "A close, comfortable and refreshing shave.",
    description:
      "Enjoy a refined shaving experience with professional techniques and soothing aftercare.",
    image: "/images/pricing/mens-shaving.jpg",
    icon: Leaf,
    services: [
      { name: "Classic Shave", price: "₹299" },
      { name: "Premium Shave with Steam", price: "₹499" },
      { name: "Royal Shave with Mask", price: "₹699" },
    ],
  },
  {
    id: "colour",
    number: "04",
    title: "Hair Colour",
    subtitle: "Subtle to bold shades for a refreshed look.",
    description:
      "Refresh your appearance with professional colour services and carefully selected shades.",
    image: "/images/pricing/mens-hair-colour.jpg",
    icon: Palette,
    services: [
      { name: "Hair Colour (Per Application)", price: "₹1,799" },
      { name: "Grey Coverage", price: "₹1,299" },
      { name: "Highlights (Partial)", price: "₹2,499" },
      { name: "Highlights (Global)", price: "₹3,999" },
    ],
  },
  {
    id: "spa",
    number: "05",
    title: "Hair Spa & Treatments",
    subtitle: "Nourishment, strength and hair health.",
    description:
      "Give your hair and scalp specialised care with nourishing spa rituals and restorative treatments.",
    image: "/images/pricing/mens-hair-spa.jpg",
    icon: Droplet,
    services: [
      { name: "Hair Spa", price: "₹1,299" },
      { name: "Anti Hair Fall Treatment", price: "₹2,499" },
      { name: "Repair & Nourish Treatment", price: "₹2,999" },
      { name: "Scalp Detox Treatment", price: "₹3,499" },
    ],
  },
  {
    id: "packages",
    number: "06",
    title: "Grooming Packages",
    subtitle: "Complete care, curated for men.",
    description:
      "Enjoy a complete grooming experience with thoughtfully combined salon services.",
    image: "/images/pricing/mens-grooming-package.jpg",
    icon: Gift,
    services: [
      {
        name: "Essential Grooming Package",
        detail: "Hair Cut + Beard Trim + Classic Shave",
        price: "₹1,499",
      },
      {
        name: "Premium Grooming Package",
        detail: "Hair Cut + Beard Spa + Hair Spa",
        price: "₹2,499",
      },
      {
        name: "Royal Grooming Package",
        detail: "Hair Cut + Beard Styling + Facial + Hair Spa",
        price: "₹3,999",
      },
    ],
  },
];

function GroomingServiceCard({ service, reverse }) {
  const Icon = service.icon;

  return (
    <article
      className={`mgp-service-card ${reverse ? "mgp-reverse" : ""}`}
      id={service.id}
    >
      <div className="mgp-service-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <div className="mgp-image-shade" />
        <span className="mgp-service-number">
          {service.number}
        </span>
      </div>

      <div className="mgp-service-details">
        <div className="mgp-service-heading">
          <div className="mgp-service-icon">
            <Icon size={29} strokeWidth={1.4} />
          </div>

          <div>
            <span className="mgp-service-kicker">
              AURELLE GROOMING
            </span>

            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>
        </div>

        <p className="mgp-service-description">
          {service.description}
        </p>

        <div className="mgp-price-list">
          {service.services.map((item) => (
            <div className="mgp-price-row" key={item.name}>
              <div className="mgp-price-name">
                <span>{item.name}</span>

                {item.detail && (
                  <small>{item.detail}</small>
                )}
              </div>

              <strong>{item.price}</strong>
            </div>
          ))}
        </div>

        {/* CONNECTED BOOKING BUTTON */}

        <Link
          to={`/booking?gender=men&service=mens-grooming&item=${service.id}`}
          className="mgp-book-button"
        >
          Book This Service
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function MensGroomingPricing() {
  return (
    <main className="aurelle-mens-pricing">

      {/* HERO */}

      <section className="mgp-hero">
        <div className="mgp-hero-bg" />

        <div className="mgp-container mgp-hero-inner">
          <Link to="/pricing" className="mgp-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </Link>

          <div className="mgp-hero-copy">
            <span className="mgp-eyebrow">
              <span />
              AURELLE
              <span />
            </span>

            <h1>
              Men’s
              <em>Grooming</em>
            </h1>

            <p>
              Expert grooming services for the modern man,
              from stylish haircuts to complete grooming rituals.
            </p>

            <Link
              to="/booking?gender=men&service=mens-grooming"
              className="mgp-primary-button"
            >
              Book Your Grooming
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}

      <nav className="mgp-category-nav">
        <div className="mgp-container mgp-category-inner">
          {groomingCategories.map((category) => {
            const Icon = category.icon;

            return (
              <a href={`#${category.id}`} key={category.id}>
                <Icon size={23} strokeWidth={1.5} />
                <span>{category.title}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* SERVICE LIST */}

      <section
        className="mgp-services-section"
        id="grooming-service-list"
      >
        <div className="mgp-container">

          <div className="mgp-section-heading">
            <span className="mgp-eyebrow mgp-centered">
              <span />
              AURELLE
              <span />
            </span>

            <h2>
              Men’s Grooming <em>Services & Pricing</em>
            </h2>

            <p>
              Premium grooming experiences tailored for
              the modern gentleman.
            </p>
          </div>

          <div className="mgp-service-list">
            {groomingServices.map((service, index) => (
              <GroomingServiceCard
                key={service.id}
                service={service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>

          {/* BENEFITS */}

          <div className="mgp-benefits">
            <div className="mgp-benefit-item">
              <ShieldCheck size={30} strokeWidth={1.4} />
              <span>
                Hygienic & Safe
                <br />
                Tools
              </span>
            </div>

            <div className="mgp-benefit-item">
              <Leaf size={30} strokeWidth={1.4} />
              <span>
                Premium
                <br />
                Products
              </span>
            </div>

            <div className="mgp-benefit-item">
              <UserRound size={30} strokeWidth={1.4} />
              <span>
                Expert
                <br />
                Professionals
              </span>
            </div>

            <div className="mgp-benefit-item">
              <Star size={30} strokeWidth={1.4} />
              <span>
                Personalised
                <br />
                Grooming
              </span>
            </div>
          </div>

          {/* INFORMATION */}

          <div className="mgp-information">
            <div className="mgp-info-heading">
              <Info size={25} />
              <h3>Pricing Information</h3>
            </div>

            <div className="mgp-info-content">
              <p>
                <Check size={16} />
                All listed prices are subject to 18% GST.
              </p>

              <p>
                <Check size={16} />
                Final pricing may vary according to hair length,
                service requirements and consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="mgp-final-cta">
        <div className="mgp-final-bg" />

        <div className="mgp-container mgp-final-inner">
          <div className="mgp-final-content">
            <span className="mgp-eyebrow">
              <span />
              EXPERIENCE AURELLE
            </span>

            <h2>
              Ready for a Fresh,
              <em>Confident Look?</em>
            </h2>

            <p>
              Book your men’s grooming service today and
              experience the AURELLE difference.
            </p>

            <Link
              to="/booking?gender=men&service=mens-grooming"
              className="mgp-primary-button"
            >
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
