
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Scissors,
  Brush,
  Sparkles,
  Hand,
  Heart,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Skin Care",
    description:
      "Facials, cleanups and advanced skin treatments for healthy, radiant skin.",
    image: "/images/service-makeup/service-skin.jpg",
    icon: Flower2,
    category: "skin",
  },
  {
    id: 2,
    title: "Hair Care",
    description:
      "Haircuts, styling and colouring for beautiful, healthy hair.",
    image: "/images/service-makeup/service-hair.jpg",
    icon: Scissors,
    category: "hair",
  },
  {
    id: 3,
    title: "Makeup",
    description:
      "Bridal, party and occasion makeup for every special moment.",
    image: "/images/service-makeup/service-makeup.jpg",
    icon: Brush,
    category: "makeup",
  },
  {
    id: 4,
    title: "Nail Care",
    description:
      "Manicure, pedicure and nail art to add a touch of elegance.",
    image: "/images/service-makeup/service-nails.jpg",
    icon: Hand,
    category: "nails",
  },
  {
    id: 5,
    title: "Special Treatments",
    description:
      "Premium beauty experiences for radiant skin and rejuvenation.",
    image: "/images/services/service-treatments.png",
    icon: Sparkles,
    category: "treatments",
  },
  {
    id: 6,
    title: "Wellness",
    description:
      "Relax, rejuvenate and enjoy a refreshing beauty experience.",
    image: "/images/services/service-wellness.png",
    icon: Heart,
    category: "wellness",
  },
];

function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".services-hero-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        })
        .from(
          ".services-hero-image",
          {
            opacity: 0,
            x: 45,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      gsap.from(".service-card", {
        opacity: 0,
        y: 35,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".services-cta-content > *", {
        opacity: 0,
        y: 25,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 80%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="aurelle-services-page" ref={pageRef}>

      {/* HERO SECTION */}

      <section className="services-hero">
        <div className="services-hero-background" />

        <div className="services-hero-container">

          <div className="services-hero-content">
            <div className="services-eyebrow">
              <span />
              OUR SERVICES
              <span />
            </div>

            <h1>
              Beauty Care
              <em>Redefined</em>
            </h1>

            <p>
              Premium services designed to enhance your
              natural beauty and well being.
            </p>
          </div>

          <div className="services-hero-image">
            <img
              src="/images/services/hero.png"
              alt="AURELLE luxury beauty editorial portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="services-list-section">

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                to={`/booking?service=${service.category}`}
                className="service-card"
                key={service.id}
              >
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={`${service.title} at AURELLE`}
                    loading="lazy"
                  />

                  <div className="service-card-overlay" />

                  <div className="service-card-icon">
                    <Icon size={31} strokeWidth={1.3} />
                  </div>

                  <div className="service-card-title">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>

                  <div className="service-card-arrow">
                    <ArrowRight size={25} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </section>

      {/* WHY CHOOSE AURELLE */}

      <section className="services-benefits">
        <div className="services-benefits-image">
          <img
            src="/images/services/benifut.png"
            alt="Elegant beauty studio experience"
            loading="lazy"
          />
        </div>

        <div className="services-benefits-content">

          <div className="services-eyebrow">
            <span />
            THE AURELLE EXPERIENCE
            <span />
          </div>

          <h2>
            Why Choose <em>AURELLE</em>
          </h2>

          <div className="services-benefits-grid">

            <div className="services-benefit">
              <GemIcon />
              <h3>Expert Team</h3>
              <p>Skilled beauty professionals with experience.</p>
            </div>

            <div className="services-benefit">
              <Heart size={30} strokeWidth={1.3} />
              <h3>Premium Products</h3>
              <p>Carefully selected products from trusted brands.</p>
            </div>

            <div className="services-benefit">
              <Flower2 size={30} strokeWidth={1.3} />
              <h3>Relaxing Ambience</h3>
              <p>A calm and luxurious space designed for you.</p>
            </div>

            <div className="services-benefit">
              <Sparkles size={30} strokeWidth={1.3} />
              <h3>Personalised Care</h3>
              <p>Every service tailored to your unique needs.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="services-cta">
        <div className="services-cta-background" />

        <div className="services-cta-content">

          <div className="services-eyebrow">
            <span />
            YOUR BEAUTY JOURNEY
            <span />
          </div>

          <h2>
            Book Your Beauty <em>Experience</em>
          </h2>

          <p>
            Step into a world of luxury, care and confidence.
          </p>

          <Link
            to="/booking"
            className="services-cta-button"
          >
            <CalendarDays size={21} />
            BOOK AN APPOINTMENT
            <ArrowRight size={21} />
          </Link>

        </div>
      </section>

    </main>
  );
}

function GemIcon() {
  return <Sparkles size={30} strokeWidth={1.3} />;
}

export default Services;
