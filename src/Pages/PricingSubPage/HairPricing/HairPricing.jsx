
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
  { id: "rebonding", title: "Hair Rebonding", icon: Waves },
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
      "Refresh your look with professional cuts, beard grooming and styling services.",
    image: "/images/pricing/haircut.jpg",
    icon: Scissors,
    services: [
      { name: "Hair Cut", price: "₹399" },
      { name: "Kids Hair Cut", price: "₹299" },
      { name: "Beard Trim", price: "₹200" },
      { name: "Beard Design", price: "₹200" },
      { name: "Shaving", price: "₹200" },
      { name: "Hair Cut & Beard", price: "₹500" },
      { name: "Hair Wash & Setting", price: "₹200" },
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
      { name: "Spa Essence", price: "Confirm Price" },
      { name: "Tribond Hair Spa", price: "Confirm Price" },
      { name: "Luxe Rejuvenation", price: "Confirm Price" },
      { name: "Reborn Hair Spa", price: "Confirm Price" },
      { name: "Royal Bliss", price: "Confirm Price" },
      { name: "Moroccan Oil Spa", price: "Confirm Price" },
      { name: "Korean Hair Spa", price: "₹3,499" },
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
      { name: "Global Colour", price: "Confirm Price" },
      { name: "Global Colour Without Ammonia", price: "₹1,600" },
      { name: "Highlights", price: "Confirm Price" },
      { name: "Beard Colouring", price: "₹499" },
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
      { name: "Straightening", price: "Confirm Price" },
      { name: "Permanent Blowdry", price: "Confirm Price" },
      { name: "Keratin", price: "Confirm Price" },
      { name: "Nanoplastia", price: "Confirm Price" },
      { name: "Botox", price: "Confirm Price" },
    ],
  },
  {
    id: "treatments",
    number: "05",
    title: "Hair Treatments",
    subtitle: "Targeted care for healthier looking hair.",
    description:
      "Specialised scalp and hair treatments designed to address dandruff and hair fall concerns.",
    image: "/images/pricing/hair-spa.jpg",
    icon: Leaf,
    services: [
      { name: "Anti Dandruff & Hairfall Treatment", price: "₹2,500" },
      { name: "Anti Dandruff Treatment", price: "₹1,699" },
      { name: "Anti Hairloss Treatment", price: "₹1,699" },
      { name: "Laser Anti Dandruff & Hairloss Treatment", price: "₹3,000" },
      { name: "Laser Anti Dandruff Treatment", price: "₹1,999" },
      { name: "Laser Anti Hairloss Treatment", price: "₹1,999" },
    ],
  },
  {
    id: "massage",
    number: "06",
    title: "Head Massage",
    subtitle: "Relax, refresh and unwind.",
    description:
      "Enjoy relaxing head massage experiences with nourishing oils and professional care.",
    image: "/images/pricing/hair-spa.jpg",
    icon: Hand,
    services: [
      { name: "Classic Head Massage", price: "₹399" },
      { name: "Relaxing Head Massage", price: "₹799" },
      { name: "Premium Hot Oil Massage", price: "₹999" },
      { name: "Moroccan Oil Massage", price: "₹1,499" },
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
            <span className="hp-service-kicker">AURELLE HAIR STUDIO</span>
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

        <a href="/booking" className="hp-book-button">
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
              AURELLE HAIR STUDIO
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

          {/* INFORMATION */}

          <div className="hp-information">
            <div className="hp-info-heading">
              <Info size={25} />
              <h3>Pricing Information</h3>
            </div>

            <div className="hp-info-content">
              <p>
                <Check size={16} />
                Prices marked Confirm Price require confirmation
                from the salon before publishing.
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

            <a href="/booking" className="hp-primary-button">
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
