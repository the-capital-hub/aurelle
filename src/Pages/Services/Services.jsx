
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
  Layers,
} from "lucide-react";

import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   WOMEN'S SERVICES
========================================= */

const womenServices = [
  {
    id: 1,
    title: "Hair & Styling",
    description:
      "Discover professional haircuts, styling, colouring, hair spa and specialised hair treatments.",
    image: "/images/services/01-hair-and-mens-grooming.jpg",
    icon: Scissors,
    slug: "hair",
  },
  {
    id: 2,
    title: "Skin & Facial Care",
    description:
      "Explore facial treatments, clean up and detan services for refreshed and healthy looking skin.",
    image: "/images/services/02-skin-care.jpg",
    icon: Flower2,
    slug: "skin",
  },
  {
    id: 3,
    title: "Makeup & Bridal",
    description:
      "Professional party makeup, bridal makeup, hairstyling and occasion beauty services.",
    image: "/images/services/03-makeup-and-bridal.jpg",
    icon: Brush,
    slug: "makeup",
  },
  {
    id: 4,
    title: "Nail Studio",
    description:
      "Explore gel polish, acrylic extensions, gel extensions and professional nail care.",
    image: "/images/services/04-nail-studio.jpg",
    icon: Gem,
    slug: "nails",
  },
  {
    id: 5,
    title: "Waxing & Threading",
    description:
      "Professional Rica, Roll on and Brazilian waxing with detailed threading services.",
    image: "/images/services/05-waxing-and-threading.jpg",
    icon: Layers,
    slug: "waxing",
  },
  {
    id: 6,
    title: "Manicure & Pedicure",
    description:
      "Discover Classic, Foot Logic, Ice Cream, Lotus Glow and Bubblegum Fresh treatments.",
    image: "/images/services/06-pedicure-and-manicure.jpg",
    icon: Hand,
    slug: "pedicure",
  },
  {
    id: 7,
    title: "Body Treatments",
    description:
      "Professional full body massage and body polishing experiences.",
    image: "/images/services/07-body-treatments.jpg",
    icon: Sparkles,
    slug: "body-spa",
  },
  {
    id: 8,
    title: "Pre Bridal Package",
    description:
      "A complete pre wedding beauty preparation experience with dedicated salon care.",
    image: "/images/services/08-bridal-and-groom-packages.jpg",
    icon: Heart,
    slug: "packages",
  },
];

/* =========================================
   MEN'S SERVICES
========================================= */

const menServices = [
  {
    id: 1,
    title: "Hair & Styling",
    description:
      "Professional haircuts, creative styling, hair colouring and personalised hair care.",
    image: "/images/services/grooming/grooming-haircut.jpg",
    icon: Scissors,
    slug: "hair",
  },
  {
    id: 2,
    title: "Men's Grooming",
    description:
      "Haircuts, beard trims, beard design, shaving and complete grooming services.",
    image: "/images/services/02-mens-grooming.png",
    icon: UserRound,
    slug: "grooming",
  },
  {
    id: 3,
    title: "Skin & Facial Care",
    description:
      "Professional facial treatments, clean up and detan services for men's skincare.",
    image: "/images/services/mens-skin/mens-deep-cleansing.jpg",
    icon: Flower2,
    slug: "skin",
  },
  {
    id: 4,
    title: "Manicure & Pedicure",
    description:
      "Classic, Foot Logic, Ice Cream, Lotus Glow and Bubblegum Fresh hand and foot care.",
    image: "/images/services/pedicure1/pedicure-signature.jpg",
    icon: Hand,
    slug: "pedicure",
  },
  {
    id: 5,
    title: "Body Treatments",
    description:
      "Full body massage and professional body polishing treatments.",
    image: "/images/services/body-treatments/premium-body-massage.jpg",
    icon: Sparkles,
    slug: "body-spa",
  },
  {
    id: 6,
    title: "Groom Makeup",
    description:
      "Professional groom makeup for a refined and polished wedding look.",
    image: "/images/services/groom-makeup/groom-makeup.jpg",
    icon: Brush,
    slug: "groom-makeup",
  },
  {
    id: 7,
    title: "Pre Groom Package",
    description:
      "A complete pre wedding grooming and personal care preparation experience.",
    image: "/images/services/pre-groom-package/pre-groom-experience.jpg",
    icon: Gem,
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
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-collections",
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

  /* REUSABLE SERVICE COLLECTION */

  const renderServices = (items, audience) => (
    <section className="services-list-section">
      <div
        className="services-section-heading"
        style={{ margin: "20px" }}
      >
        <div className="services-eyebrow">
          <span />
          {audience === "women"
            ? "WOMEN'S COLLECTION"
            : "MEN'S COLLECTION"}
          <span />
        </div>

        <h2>
          {audience === "women" ? (
            <>
              Beauty & <em>Personal Care</em>
            </>
          ) : (
            <>
              Grooming & <em>Personal Care</em>
            </>
          )}
        </h2>

        <p>
          {audience === "women"
            ? "Discover our complete collection of women's beauty, hair, skin and personal care services."
            : "Explore professional men's grooming, hair, skincare and personal care services."}
        </p>
      </div>

      <div className="services-grid">
        {items.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              to={`/services/${audience}/${service.slug}`}
              className="service-card"
              key={`${audience}-${service.id}`}
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
  );

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
              Style & Care
              <em>Redefined</em>
            </h1>

            <p>
              Discover exceptional women's beauty services
              and men's grooming experiences crafted around
              your personality and individual style.
            </p>

            <Link
              to="/booking"
              className="services-hero-button"
            >
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

      {/* WOMEN'S AND MEN'S COLLECTIONS */}

      <div className="services-collections">
        {renderServices(womenServices, "women")}
        {renderServices(menServices, "men")}
      </div>

      {/* WHY CHOOSE AURELLE */}

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

      {/* FINAL CTA */}

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

export default Services;
