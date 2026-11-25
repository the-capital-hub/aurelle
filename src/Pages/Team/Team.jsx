
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Scissors,
  Flower2,
  Sparkles,
  Brush,
  Heart,
  CalendarDays,
  ArrowRight,
  UserRound,
  Gem,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import "./Team.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   AURELLE TEAM MEMBERS
========================================= */

const experts = [
  {
    name: "Men's Grooming Expert",
    role: "Professional Barber & Grooming Specialist",
    image: "/images/team/expert-grooming.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Hair Styling Expert",
    role: "Senior Hair Stylist",
    image: "/images/team/expert-hairstylist.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Makeup Artist",
    role: "Professional Makeup & Bridal Artist",
    image: "/images/team/expert-makeup.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Skin Care Expert",
    role: "Professional Skin & Facial Specialist",
    image: "/images/team/expert-skincare.jpg",
    instagram: "#",
    linkedin: "#",
  },
];

/* =========================================
   TEAM SPECIALISATIONS
========================================= */

const specialisations = [
  {
    icon: UserRound,
    title: "Men's Grooming",
    description:
      "Professional haircuts, beard styling and personalised grooming experiences.",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Modern haircuts, creative styling, colouring and professional hair care.",
  },
  {
    icon: Brush,
    title: "Makeup Artistry",
    description:
      "Bridal, party and occasion makeup crafted around your personal style.",
  },
  {
    icon: Flower2,
    title: "Skin Treatments",
    description:
      "Professional facials and skincare treatments for men and women.",
  },
  {
    icon: Sparkles,
    title: "Nail Art & Care",
    description:
      "Creative nail designs, extensions and professional nail care.",
  },
  {
    icon: Gem,
    title: "Personalised Care",
    description:
      "Thoughtful salon experiences designed around individual preferences.",
  },
];

/* =========================================
   TEAM PAGE
========================================= */

function Team() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO ANIMATION */

      const hero = gsap.timeline();

      hero
        .from(".team-hero-content > *", {
          opacity: 0,
          y: 25,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
        })
        .from(
          ".team-hero-image",
          {
            opacity: 0,
            x: 40,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.65"
        );

      /* EXPERT CARDS ANIMATION */

      gsap.from(".expert-card", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-experts-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* SPECIALISATIONS ANIMATION */

      gsap.from(".team-specialisation", {
        opacity: 0,
        y: 25,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-specialisations-grid",
          start: "top 85%",
          once: true,
        },
      });

      /* SCROLL REVEAL */

      gsap.utils.toArray(".team-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 0.85,
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
    <main className="aurelle-team-page" ref={pageRef}>

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="team-hero">
        <div className="team-hero-background" />

        <div className="team-hero-container">

          <div className="team-hero-content">

            <div className="team-eyebrow">
              <span />
              MEET OUR EXPERTS
              <span />
            </div>

            <h1>
              The People
              <br />
              Behind Your
              <em>Style</em>
            </h1>

            <p>
              Meet the passionate professionals behind
              AURELLE. From expert hair styling and men's
              grooming to makeup and skincare, our team
              brings creativity and care to every experience.
            </p>

            <a
              href="#our-experts"
              className="team-hero-button"
            >
              MEET OUR TEAM
              <ArrowRight size={20} />
            </a>

          </div>

          <div className="team-hero-image">
            <img
              src="/images/ctamodel.png"
              alt="Indian male and female professionals at AURELLE"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* =====================================
          EXPERT PROFILES
      ===================================== */}

      <section
        className="team-experts-section"
        id="our-experts"
      >

        <div className="team-section-heading team-reveal">

          <div className="team-eyebrow team-centered-eyebrow">
            <span />
            THE PEOPLE BEHIND AURELLE
            <span />
          </div>

          <h2>
            Meet Our <em>Experts</em>
          </h2>

          <p>
            Every great salon experience begins with great
            people. Discover the professionals who bring
            expertise, creativity and attention to detail.
          </p>

        </div>

        <div className="team-experts-grid">

          {experts.map((expert) => (
            <article
              className="expert-card"
              key={expert.name}
            >

              <div className="expert-image">

                <img
                  src={expert.image}
                  alt={expert.role}
                  loading="lazy"
                />

                <div className="expert-image-shade" />

                <div className="expert-details">

                  <h3>{expert.name}</h3>

                  <p>{expert.role}</p>

                  <div className="expert-socials">

                    <a
                      href={expert.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${expert.name} Instagram`}
                    >
                      <FaInstagram size={17} />
                    </a>

                    <a
                      href={expert.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${expert.name} LinkedIn`}
                    >
                      <FaLinkedin size={17} />
                    </a>

                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contact ${expert.name} on WhatsApp`}
                    >
                      <FaWhatsapp size={17} />
                    </a>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================
          SPECIALISATIONS
      ===================================== */}

      <section className="team-specialisations">

        <div className="team-section-heading team-reveal">

          <div className="team-eyebrow team-centered-eyebrow">
            <span />
            OUR SPECIALISATIONS
            <span />
          </div>

          <h2>
            Expertise for <em>Everyone</em>
          </h2>

          <p>
            From everyday grooming to special occasion
            styling, our professionals offer personalised
            care for both men and women.
          </p>

        </div>

        <div className="team-specialisations-grid">

          {specialisations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="team-specialisation"
                key={item.title}
              >

                <div className="specialisation-icon">
                  <Icon size={38} strokeWidth={1.25} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </article>
            );
          })}

        </div>

      </section>

      {/* =====================================
          TEAM PHILOSOPHY
      ===================================== */}

      <section className="team-philosophy">

        <div className="team-philosophy-image">
          <img
            src="/images/team/ctateam.png"
            alt="Indian salon professionals at AURELLE"
            loading="lazy"
          />
        </div>

        <div className="team-philosophy-content team-reveal">

          <div className="team-eyebrow">
            <span />
            OUR PHILOSOPHY
            <span />
          </div>

          <h2>
            Expertise Meets
            <em>Personal Care</em>
          </h2>

          <p>
            We believe personal style is unique to every
            individual. Our approach combines professional
            expertise, creativity and genuine attention to
            your needs, making every visit special.
          </p>

          <div className="team-philosophy-note">
            <Heart size={20} strokeWidth={1.4} />
            <span>Style begins with confidence.</span>
          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="team-final-cta">

        <div className="team-cta-background" />

        <div className="team-cta-content team-reveal">

          <div className="team-eyebrow team-centered-eyebrow">
            <span />
            YOUR STYLE. YOUR EXPERIENCE.
            <span />
          </div>

          <h2>
            Ready for Your Next Transformation?
          </h2>

          <Link
            to="/booking"
            className="team-cta-button"
          >
            <CalendarDays size={20} />
            BOOK AN APPOINTMENT
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Team;
