
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scissors,
  Flower2,
  Brush,
  Hand,
  ArrowRight,
  CalendarDays,
  Gift,
  Clock3,
  Crown,
  Gem,
  UserRound,
  Sparkles,
  Check,
  Percent,
} from "lucide-react";

import "./Offers.css";

gsap.registerPlugin(ScrollTrigger);

const exclusiveOffers = [
  {
    title: "Hair Care Offer",
    subtitle: "Hair Cut + Hair Spa",
    discount: "Save 20%",
    category: "hair",
    image: "/images/pricing/service-hair.jpg",
    icon: Scissors,
  },
  {
    title: "Skin Care Offer",
    subtitle: "Facial + D Tan",
    discount: "Save 25%",
    category: "skin",
    image: "/images/pricing/service-skin.jpg",
    icon: Flower2,
  },
  {
    title: "Makeup Offer",
    subtitle: "Party Makeup",
    discount: "Save 15%",
    category: "makeup",
    image: "/images/pricing/service-makeup.jpg",
    icon: Brush,
  },
  {
    title: "Nail Care Offer",
    subtitle: "Manicure + Pedicure",
    discount: "Save 20%",
    category: "nails",
    image: "/images/pricing/service-nails.jpg",
    icon: Hand,
  },
];

const seasonalPackages = [
  {
    title: "Glow Package",
    subtitle: "Facial + Clean Up + D Tan",
    price: "₹2,499",
    oldPrice: "₹3,199",
    saving: "Save 22%",
    icon: Sparkles,
  },
  {
    title: "Bridal Prep Package",
    subtitle: "Facial + Hair Spa + Skin Polish",
    price: "₹4,999",
    oldPrice: "₹6,499",
    saving: "Save 23%",
    icon: Crown,
    featured: true,
  },
  {
    title: "Complete Care Package",
    subtitle: "Hair Spa + Facial + Manicure + Pedicure",
    price: "₹5,999",
    oldPrice: "₹7,999",
    saving: "Save 25%",
    icon: Gem,
  },
];

const membershipBenefits = [
  {
    icon: Gem,
    title: "Up to 20%",
    subtitle: "Extra Discount",
  },
  {
    icon: CalendarDays,
    title: "Priority",
    subtitle: "Bookings",
  },
  {
    icon: Gift,
    title: "Birthday",
    subtitle: "Surprise",
  },
  {
    icon: UserRound,
    title: "Members",
    subtitle: "Only Offers",
  },
];

function Offers() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".offers-hero-content > *", {
          opacity: 0,
          y: 25,
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
        })
        .from(
          ".offers-hero-image",
          {
            opacity: 0,
            x: 35,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.55"
        );

      gsap.utils.toArray(".offers-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.from(".exclusive-offer-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offers-exclusive-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".seasonal-package", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".offers-packages-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="aurelle-offers-page" ref={pageRef}>

      {/* HERO */}

      <section className="offers-hero">
        <div className="offers-hero-background" />

        <div className="offers-hero-container">

          <div className="offers-hero-content">
            <div className="offers-eyebrow">
              <span />
              SPECIAL OFFERS
            </div>

            <h1>
              Beauty Moments
              <em>Special Prices</em>
            </h1>

            <p>
              Exclusive salon offers, seasonal packages
              and membership benefits designed just for you.
            </p>

            <div className="offers-hero-actions">
              <a
                href="#exclusive-offers"
                className="offers-primary-button"
              >
                Explore Offers
              </a>

              <Link
                to="/booking"
                className="offers-outline-button"
              >
                Book Your Service
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="offers-hero-image">
            <img
              src="/images/about/hero.png"
              alt="Luxury beauty editorial portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* EXCLUSIVE OFFERS */}

      <section
        className="offers-exclusive-section"
        id="exclusive-offers"
      >
        <div className="offers-section-heading offers-reveal">
          <div className="offers-eyebrow offers-centered-eyebrow">
            <span />
            EXCLUSIVE OFFERS
            <span />
          </div>

          <h2>
            Our Best <em>Beauty Deals</em>
          </h2>
        </div>

        <div className="offers-exclusive-grid">
          {exclusiveOffers.map((offer) => {
            const Icon = offer.icon;

            return (
              <article
                className="exclusive-offer-card"
                key={offer.category}
              >
                <Link
                  to={`/booking?service=${offer.category}`}
                  className="exclusive-offer-image"
                  aria-label={`Book ${offer.title}`}
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                  />
                </Link>

                <div className="exclusive-offer-content">
                  <div className="exclusive-offer-title">
                    <Icon size={25} strokeWidth={1.4} />

                    <div>
                      <h3>{offer.title}</h3>
                      <p>{offer.subtitle}</p>
                    </div>
                  </div>

                  <div className="exclusive-offer-bottom">
                    <strong>{offer.discount}</strong>

                    <Link
                      to={`/booking?service=${offer.category}`}
                      aria-label={`Claim ${offer.title}`}
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SEASONAL PACKAGES */}

      <section className="offers-packages-section">
        <div className="offers-packages-background" />

        <div className="offers-section-heading offers-reveal">
          <div className="offers-eyebrow offers-centered-eyebrow">
            <span />
            SEASONAL PACKAGES
            <span />
          </div>

          <h2>
            Special Beauty <em>Packages</em>
          </h2>
        </div>

        <div className="offers-packages-grid">
          {seasonalPackages.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                className={`seasonal-package ${
                  plan.featured ? "featured" : ""
                }`}
                key={plan.title}
              >
                <div className="seasonal-package-heading">
                  <Icon size={34} strokeWidth={1.35} />

                  <div>
                    <h3>{plan.title}</h3>
                    <p>{plan.subtitle}</p>
                  </div>
                </div>

                <div className="seasonal-package-price">
                  <strong>{plan.price}</strong>
                  <del>{plan.oldPrice}</del>
                  <span>{plan.saving}</span>
                </div>

                <Link
                  to={`/booking?package=${encodeURIComponent(plan.title)}`}
                  className="seasonal-package-link"
                >
                  Claim Package
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* LIMITED TIME DEALS */}

      <section className="offers-limited-section">

        <div className="offers-section-heading offers-reveal">
          <div className="offers-eyebrow offers-centered-eyebrow">
            <span />
            LIMITED TIME DEALS
            <span />
          </div>

          <h2>
            Grab Before <em>It's Gone</em>
          </h2>
        </div>

        <div className="offers-limited-bar">

          <div className="limited-deal">
            <Percent size={35} strokeWidth={1.3} />
            <div>
              <h3>Flat 30% Off</h3>
              <p>On Selected Services</p>
            </div>
          </div>

          <div className="limited-deal">
            <Gift size={35} strokeWidth={1.3} />
            <div>
              <h3>Festival Beauty Offer</h3>
              <p>Up to 25% Off on Combos</p>
            </div>
          </div>

          <div className="limited-deal">
            <Clock3 size={35} strokeWidth={1.3} />
            <div>
              <h3>Limited Period Only</h3>
              <p>Book Your Slot Today</p>
            </div>
          </div>

        </div>

        <div className="offers-limited-action">
          <Link to="/booking">
            Claim Your Offer
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MEMBERSHIP OFFERS */}

      <section className="offers-membership-section">

        <div className="offers-membership-image">
          <img
            src="/images/offer/card.png"
            alt="AURELLE Silver Gold and Platinum membership cards"
            loading="lazy"
          />
        </div>

        <div className="offers-membership-content">
          <div className="offers-eyebrow">
            <span />
            MEMBERSHIP OFFERS
          </div>

          <h2>
            More Benefits,
            <em>More Savings</em>
          </h2>

          <p>
            Join our exclusive membership plans and enjoy
            special discounts, priority bookings and
            birthday benefits.
          </p>

          <div className="offers-membership-benefits">
            {membershipBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  className="offers-membership-benefit"
                  key={benefit.title}
                >
                  <Icon size={25} strokeWidth={1.4} />
                  <span>{benefit.title}</span>
                  <small>{benefit.subtitle}</small>
                </div>
              );
            })}
          </div>

          <Link
            to="/pricing"
            className="offers-membership-button"
          >
            View Membership Plans
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="offers-final-cta">
        <div className="offers-cta-image">
          <img
            src="/images/offer/aurelle-offers-cta-bg.png"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="offers-cta-content">
          <h2>Ready to Avail Your Offer?</h2>

          <p>
            Book now and experience premium beauty care
            at special prices.
          </p>

          <Link
            to="/booking"
            className="offers-cta-button"
          >
            <CalendarDays size={20} />
            Book Your Appointment
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Offers;
