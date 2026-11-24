
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Scissors,
  Flower2,
  Brush,
  Sparkles,
  Hand,
  Heart,
  ArrowRight,
  CalendarDays,
  UserRound,
  Gem,
} from "lucide-react";

import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    id: 1,
    title: "Hair & Styling",
    description:
      "Professional haircuts, creative styling, hair colouring and personalised hair care for every look.",
    image: "/images/services/01-hair-and-mens-grooming.jpg",
    icon: Scissors,
    category: "hair",
    slug: "hair",
  },
  {
    id: 2,
    title: "Men's Grooming",
    description:
      "Expert men's haircuts, beard styling and premium grooming experiences designed for modern men.",
    image: "/images/services/02-mens-grooming.png",
    icon: UserRound,
    category: "grooming",
    slug: "grooming",
  },
  {
    id: 3,
    title: "Skin & Facials",
    description:
      "Professional facials, cleanups and personalised skincare treatments for healthy looking skin.",
    image: "/images/services/02-skin-care.jpg",
    icon: Flower2,
    category: "skin",
    slug: "skin",
  },
  {
    id: 4,
    title: "Makeup & Bridal",
    description:
      "Beautiful bridal, party and occasion makeup crafted to complement your personality and style.",
    image: "/images/services/03-makeup-and-bridal.jpg",
    icon: Brush,
    category: "makeup",
    slug: "makeup",
  },
  {
    id: 5,
    title: "Nail Studio",
    description:
      "Creative nail art, nail extensions and professional nail care for beautifully finished hands.",
    image: "/images/services/04-nail-studio.jpg",
    icon: Hand,
    category: "nails",
    slug: "nails",
  },
  {
    id: 6,
    title: "Waxing & Threading",
    description:
      "Professional hair removal and precise grooming services for a smooth and polished look.",
    image: "/images/services/05-waxing-and-threading.jpg",
    icon: Sparkles,
    category: "waxing-threading",
    slug: "waxing",
  },
  {
    id: 7,
    title: "Manicure & Pedicure",
    description:
      "Relaxing hand and foot care with premium treatments for complete grooming and comfort.",
    image: "/images/services/06-pedicure-and-manicure.jpg",
    icon: Heart,
    category: "pedicure-manicure",
    slug: "pedicure",
  },
  {
    id: 8,
    title: "Body Treatments",
    description:
      "Rejuvenating body care experiences designed to refresh your skin and help you unwind.",
    image: "/images/services/07-body-treatments.jpg",
    icon: Flower2,
    category: "body-treatments",
    slug: "body-spa",
  },
  {
    id: 9,
    title: "Bridal & Groom Packages",
    description:
      "Exclusive bridal and groom experiences for weddings, celebrations and special occasions.",
    image: "/images/services/08-bridal-and-groom-packages.jpg",
    icon: Gem,
    category: "packages",
    slug: "packages",
  },
];

/* =========================================
   SERVICES PAGE
========================================= */

function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO ANIMATION */

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

      /* SERVICE CARDS ANIMATION */

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

      /* BENEFITS ANIMATION */

      gsap.from(".services-benefit", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-benefits",
          start: "top 80%",
          once: true,
        },
      });

      /* CTA ANIMATION */

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

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className="aurelle-services-page" ref={pageRef}>
      {/* =====================================
          HERO SECTION
      ===================================== */}

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
              Style & Care
              <em>Redefined</em>
            </h1>

            <p>
              Discover exceptional hair styling, men's grooming
              and beauty experiences crafted around your
              personality and individual style.
            </p>

            <Link to="/booking" className="services-hero-button">
              <span>BOOK YOUR EXPERIENCE</span>
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="services-hero-image">
            <img
              src="/images/ctamodel.png"
              alt="Luxury Indian unisex salon experience at AURELLE"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* =====================================
          SERVICES GRID
      ===================================== */}

      <section className="services-list-section">
        <div className="services-section-heading">
          <div className="services-eyebrow">
            <span />
            EXPLORE OUR SERVICES
            <span />
          </div>

          <h2>
            The Art of <em>Personal Care</em>
          </h2>

          <p>
            From everyday grooming to special occasion styling,
            experience professional care for every version of you.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                to={`/services/${service.slug}`}
                className="service-card"
                key={service.id}
                aria-label={`Explore ${service.title}`}
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

      {/* =====================================
          WHY CHOOSE AURELLE
      ===================================== */}

      <section className="services-benefits">
        <div className="services-benefits-image">
          <img
            src="/images/services/benifut.png"
            alt="Professional Indian salon experts at AURELLE"
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

          <p className="services-benefits-intro">
            We believe personal care is more than a service.
            It is an experience built around expertise,
            comfort and attention to every detail.
          </p>

          <div className="services-benefits-grid">
            <div className="services-benefit">
              <Gem size={30} strokeWidth={1.3} />

              <h3>Expert Professionals</h3>

              <p>
                Skilled hair, grooming and beauty professionals
                dedicated to quality.
              </p>
            </div>

            <div className="services-benefit">
              <Heart size={30} strokeWidth={1.3} />

              <h3>Premium Products</h3>

              <p>
                Carefully selected products for a quality
                salon experience.
              </p>
            </div>

            <div className="services-benefit">
              <Flower2 size={30} strokeWidth={1.3} />

              <h3>Luxury Ambience</h3>

              <p>
                A welcoming and comfortable space designed
                for your personal care.
              </p>
            </div>

            <div className="services-benefit">
              <Sparkles size={30} strokeWidth={1.3} />

              <h3>Personalised Care</h3>

              <p>
                Every experience is tailored to your needs
                and individual preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="services-cta">
        <div className="services-cta-background" />

        <div className="services-cta-content">
          <div className="services-eyebrow">
            <span />
            YOUR STYLE. YOUR EXPERIENCE.
            <span />
          </div>

          <h2>
            Discover Your <em>AURELLE Experience</em>
          </h2>

          <p>
            Your next style transformation starts here.
            Visit AURELLE and experience personal care
            beyond the ordinary.
          </p>

          <Link to="/booking" className="services-cta-button">
            <CalendarDays size={21} />
            BOOK AN APPOINTMENT
            <ArrowRight size={21} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
