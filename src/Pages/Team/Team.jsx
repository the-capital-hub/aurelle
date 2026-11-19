
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
  
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import "./Team.css";

gsap.registerPlugin(ScrollTrigger);

const experts = [
  {
    name: "Riya Sharma",
    role: "Makeup Artist",
    image: "/images/team/expert-riya.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Megha Verma",
    role: "Hair Stylist",
    image: "/images/team/expert-megha.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Dr. Neha Singh",
    role: "Skin Expert",
    image: "/images/team/expert-neha.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Kritika Jain",
    role: "Nail Artist",
    image: "/images/team/expert-kritika.jpg",
    instagram: "#",
    linkedin: "#",
  },
];

const specialisations = [
  {
    icon: Brush,
    title: "Makeup Artistry",
    description: "From everyday looks to bridal elegance.",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Trendy cuts, styling and hair care.",
  },
  {
    icon: Flower2,
    title: "Skin Treatments",
    description: "Advanced skin care for healthy, glowing skin.",
  },
  {
    icon: Sparkles,
    title: "Nail Art",
    description: "Elegant, creative and long lasting nail designs.",
  },
];

function Team() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      {/* HERO */}

      <section className="team-hero">
        <div className="team-hero-background" />

        <div className="team-hero-container">

          <div className="team-hero-content">
            <div className="team-eyebrow">
              <span />
              OUR EXPERTS
            </div>

            <h1>
              Meet the Artists
              <br />
              Behind Your
              <em>Beauty</em>
            </h1>

            <p>
              A team of passionate and skilled beauty
              professionals dedicated to enhancing your
              natural elegance.
            </p>

            <a
              href="#our-experts"
              className="team-hero-button"
            >
              Meet Our Team
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="team-hero-image">
            <img
              src="/images/services/hero.png"
              alt="AURELLE beauty professional portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* EXPERT PROFILES */}

      <section
        className="team-experts-section"
        id="our-experts"
      >
        <div className="team-section-heading team-reveal">
          <div className="team-eyebrow team-centered-eyebrow">
            <span />
            OUR EXPERTS
            <span />
          </div>

          <h2>
            The <em>AURELLE</em> Team
          </h2>

          <p>
            Get to know the talented professionals who bring
            creativity, care and expertise to every service.
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
                  alt={`${expert.name}, ${expert.role}`}
                  loading="lazy"
                />

                <div className="expert-image-shade" />

                <div className="expert-details">
                  <h3>{expert.name}</h3>
                  <p>{expert.role}</p>

                  <div className="expert-socials">
                    <a
                      href={expert.instagram}
                      aria-label={`${expert.name} Instagram`}
                    >
                      <FaInstagram size={17} />
                    </a>

                    <a
                      href={expert.linkedin}
                      aria-label={`${expert.name} LinkedIn`}
                    >
                      <FaLinkedin size={17} />
                    </a>

                    <a
                      href="https://wa.me/91XXXXXXXXXX"
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

      {/* SPECIALISATIONS */}

      <section className="team-specialisations">
        <div className="team-eyebrow team-centered-eyebrow team-reveal">
          <span />
          OUR SPECIALISATIONS
          <span />
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

      {/* TEAM PHILOSOPHY */}

      <section className="team-philosophy">
        <div className="team-philosophy-image">
          <img
            src="/images/team/ctateam.png"
            alt="Relaxing luxury beauty studio experience"
            loading="lazy"
          />
        </div>

        <div className="team-philosophy-content team-reveal">
          <div className="team-eyebrow">
            <span />
            OUR PHILOSOPHY
          </div>

          <h2>
            Beauty Through
            <em>Expert Care</em>
          </h2>

          <p>
            We believe in a personalised approach, where
            expertise, creativity and genuine care come
            together to make you look and feel your best.
          </p>

          <div className="team-philosophy-note">
            <Heart size={20} strokeWidth={1.4} />
            <span>Beauty begins with confidence.</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="team-final-cta">
        <div className="team-cta-background" />

        <div className="team-cta-content team-reveal">

          <div className="team-eyebrow team-centered-eyebrow">
            <span />
            MEET YOUR BEAUTY EXPERT
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
            Book an Appointment
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Team;
