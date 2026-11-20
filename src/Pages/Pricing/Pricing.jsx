
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scissors,
  Flower2,
  Brush,
  Hand,
  Gem,
  Crown,
  CalendarDays,
  ArrowRight,
  Check,
  Sparkles,
  Gift,
  Percent,
  Heart,
} from "lucide-react";

import "./Pricing.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "Hair Services", icon: Scissors, key: "hair" },
  { name: "Skin Care", icon: Flower2, key: "skin" },
  { name: "Makeup Services", icon: Brush, key: "makeup" },
  { name: "Nail Care", icon: Hand, key: "nails" },
  { name: "Bridal Packages", icon: Gem, key: "bridal" },
];

const priceLists = {
  hair: {
    title: "Hair Services",
    image: "/images/pricing/service-hair.jpg",
    services: [
      { name: "Hair Cut & Styling", price: "₹699" },
      { name: "Hair Spa", price: "₹1,499" },
      { name: "Hair Color (Global)", price: "₹3,999" },
      { name: "Hair Smoothening", price: "₹6,999" },
      { name: "Hair Treatment", price: "₹2,499" },
    ],
  },
  skin: {
    title: "Skin Care",
    image: "/images/pricing/service-skin.jpg",
    services: [
      { name: "Classic Facial", price: "₹1,499" },
      { name: "Advanced Hydra Facial", price: "₹2,999" },
      { name: "Anti Ageing Facial", price: "₹3,499" },
      { name: "D Tan Treatment", price: "₹1,299" },
      { name: "Deep Cleansing", price: "₹999" },
    ],
  },
  makeup: {
    title: "Makeup Services",
    image: "/images/pricing/service-makeup.jpg",
    services: [
      { name: "Party Makeup", price: "₹2,999" },
      { name: "Engagement Makeup", price: "₹4,999" },
      { name: "Bridal Makeup", price: "₹9,999" },
      { name: "Airbrush Makeup", price: "₹12,999" },
      { name: "HD Makeup", price: "₹7,999" },
    ],
  },
  nails: {
    title: "Nail Care",
    image: "/images/pricing/service-nails.jpg",
    services: [
      { name: "Classic Manicure", price: "₹599" },
      { name: "Classic Pedicure", price: "₹799" },
      { name: "Gel Nail Polish", price: "₹999" },
      { name: "Nail Extensions", price: "₹1,999" },
      { name: "Premium Nail Art", price: "₹1,499" },
    ],
  },
};

const bridalPackages = [
  {
    name: "Essential Bridal",
    price: "₹14,999",
    description: "Elegant beauty essentials for your special day.",
    features: [
      "Bridal Makeup",
      "Basic Hair Styling",
      "Basic Draping",
      "Pre Bridal Consultation",
    ],
  },
  {
    name: "Signature Bridal",
    price: "₹24,999",
    description: "Our signature experience for timeless bridal beauty.",
    popular: true,
    features: [
      "Premium Bridal Makeup",
      "Advanced Hair Styling",
      "Professional Draping",
      "Pre Bridal Skin Session",
      "Personalised Consultation",
    ],
  },
  {
    name: "Royal Bridal",
    price: "₹34,999",
    description: "A complete luxury experience for your wedding day.",
    features: [
      "Luxury Bridal Makeup",
      "Premium Hair Styling",
      "Complete Draping",
      "Pre Bridal Skin Care",
      "Personalised Beauty Planning",
    ],
  },
];

const memberships = [
  {
    name: "Silver",
    price: "₹7,999",
    icon: Flower2,
    features: [
      "Up to 10% off on all services",
      "1 complimentary facial",
      "Priority appointment booking",
    ],
  },
  {
    name: "Gold",
    price: "₹14,999",
    icon: Crown,
    popular: true,
    features: [
      "Up to 15% off on all services",
      "2 complimentary services",
      "Exclusive seasonal offers",
    ],
  },
  {
    name: "Platinum",
    price: "₹24,999",
    icon: Gem,
    features: [
      "Up to 20% off on all services",
      "4 complimentary services",
      "Priority with flexible scheduling",
    ],
  },
];

function Pricing() {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("hair");

  const selectedList = priceLists[activeCategory];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = gsap.timeline();

      hero
        .from(".pricing-hero-content > *", {
          opacity: 0,
          y: 25,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
        })
        .from(
          ".pricing-hero-image",
          {
            opacity: 0,
            x: 40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.utils
        .toArray(".pricing-reveal")
        .forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          });
        });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="aurelle-pricing-page" ref={pageRef}>

      {/* HERO */}

      <section className="pricing-hero">
        <div className="pricing-hero-background" />

        <div className="pricing-hero-container">

          <div className="pricing-hero-content">
            <div className="pricing-eyebrow">
              <span />
              PRICE LIST
            </div>

            <h1>
              Beauty That
              <em>Fits Your Style</em>
            </h1>

            <p>
              Explore our curated range of beauty services
              with transparent pricing and premium care.
            </p>

            <Link
              to="/booking"
              className="pricing-hero-button"
            >
              Book Your Service
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="pricing-hero-image">
            <img
              src="/images/about/hero.png"
              alt="AURELLE beauty editorial portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* SERVICE CATEGORIES */}

      <section className="pricing-categories">

        <div className="pricing-eyebrow pricing-centered-eyebrow">
          <span />
          OUR SERVICE CATEGORIES
          <span />
        </div>

        <div className="pricing-category-list">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.key}
                className={`pricing-category ${
                  activeCategory === category.key ? "active" : ""
                }`}
                onClick={() => {
                  if (category.key === "bridal") {
                    document
                      .getElementById("bridal-packages")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActiveCategory(category.key);
                    document
                      .getElementById("price-list")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                aria-pressed={activeCategory === category.key}
              >
                <Icon size={27} strokeWidth={1.3} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

      </section>

      {/* PRICE LIST */}

      <section className="pricing-list-section" id="price-list">

        <div className="pricing-section-heading pricing-reveal">
          <h2>Our <em>Price List</em></h2>
          <p>
            Premium beauty services designed for your unique style.
          </p>
        </div>

        <div className="pricing-service-grid">
          <article className="pricing-service-card">
            <div className="pricing-service-image">
              <img
                src={selectedList.image}
                alt={selectedList.title}
                loading="lazy"
              />
            </div>

            <div className="pricing-service-content">
              <h3>{selectedList.title}</h3>

              <div className="pricing-service-rows">
                {selectedList.services.map((service) => (
                  <div
                    className="pricing-service-row"
                    key={service.name}
                  >
                    <span>{service.name}</span>
                    <strong>{service.price}</strong>
                  </div>
                ))}
              </div>

              <Link
                to={`/booking?service=${activeCategory}`}
                className="pricing-service-link"
              >
                Book This Service
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>

          <article className="pricing-info-card">
            <div className="pricing-info-image">
              <img
                src="/images/pricing/service-skin.jpg"
                alt="Premium skin care"
                loading="lazy"
              />
            </div>

            <div className="pricing-info-content">
              <Sparkles size={27} strokeWidth={1.3} />
              <h3>Personalised Beauty Care</h3>
              <p>
                Every beauty journey is unique. Our experts
                help you select the right service according
                to your needs.
              </p>
              <Link to="/booking">
                Consult Our Experts
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        </div>

      </section>

      {/* BRIDAL PACKAGES */}

      <section
        className="pricing-bridal-section"
        id="bridal-packages"
      >

        <div className="pricing-bridal-image">
          <img
            src="/images/pricing/aurelle-pricing-bride.jpg"
            alt="AURELLE bridal beauty look"
            loading="lazy"
          />
        </div>

        <div className="pricing-bridal-content">

          <div className="pricing-eyebrow">
            <span />
            BRIDAL PACKAGES
          </div>

          <h2>
            Special Bridal <em>Packages</em>
          </h2>

          <p>
            Complete bridal beauty solutions for your big day.
          </p>

          <div className="pricing-bridal-grid">
            {bridalPackages.map((plan) => (
              <article
                className={`pricing-bridal-card ${
                  plan.popular ? "featured" : ""
                }`}
                key={plan.name}
              >
                {plan.popular && (
                  <span className="pricing-popular-label">
                    MOST POPULAR
                  </span>
                )}

                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?package=${encodeURIComponent(plan.name)}`}
                >
                  Choose Package
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* MEMBERSHIP PLANS */}

      <section className="pricing-membership-section">

        <div className="pricing-section-heading pricing-reveal">
          <div className="pricing-eyebrow pricing-centered-eyebrow">
            <span />
            MEMBERSHIP PLANS
            <span />
          </div>

          <h2>
            Exclusive Beauty <em>Memberships</em>
          </h2>

          <p>
            Enjoy special benefits, priority bookings and great savings.
          </p>
        </div>

        <div className="pricing-membership-grid">
          {memberships.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                className={`pricing-membership-card ${
                  plan.popular ? "featured" : ""
                }`}
                key={plan.name}
              >
                {plan.popular && (
                  <span className="pricing-popular-label">
                    MOST POPULAR
                  </span>
                )}

                <Icon
                  className="membership-plan-icon"
                  size={34}
                  strokeWidth={1.3}
                />

                <h3>{plan.name}</h3>
                <span className="membership-subtitle">
                  Membership
                </span>

                <div className="membership-price">
                  {plan.price}
                  <span> / Year</span>
                </div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?membership=${plan.name.toLowerCase()}`}
                >
                  Choose {plan.name}
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

      </section>

      {/* MEMBERSHIP BENEFITS */}

      <section className="pricing-benefits">
        <div className="pricing-benefit">
          <Heart size={29} strokeWidth={1.3} />
          <span>Premium Care<br />by Experts</span>
        </div>

        <div className="pricing-benefit">
          <CalendarDays size={29} strokeWidth={1.3} />
          <span>Priority<br />Booking</span>
        </div>

        <div className="pricing-benefit">
          <Percent size={29} strokeWidth={1.3} />
          <span>Exclusive<br />Member Offers</span>
        </div>

        <div className="pricing-benefit">
          <Gift size={29} strokeWidth={1.3} />
          <span>Special<br />Birthday Benefits</span>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="pricing-final-cta">
        <div className="pricing-cta-background" />

        <div className="pricing-cta-content">

          <div className="pricing-eyebrow pricing-centered-eyebrow">
            <span />
            READY TO EXPERIENCE AURELLE?
            <span />
          </div>

          <h2>
            Book Your Beauty
            <em>Experience Today</em>
          </h2>

          <Link
            to="/booking"
            className="pricing-cta-button"
          >
            <CalendarDays size={20} />
            Book an Appointment
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Pricing;
