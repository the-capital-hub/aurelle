
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Gem,
  Heart,
  Target,
  Eye,
  UsersRound,
  Leaf,
  Star,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Flower2,
    title: "EXPERT CARE",
  },
  {
    icon: Gem,
    title: "PREMIUM EXPERIENCE",
  },
  {
    icon: Heart,
    title: "CLIENT FIRST",
  },
];

const values = [
  {
    icon: UsersRound,
    title: "Trust",
    description:
      "Building lasting relationships through honesty and care.",
  },
  {
    icon: Leaf,
    title: "Care",
    description:
      "A personalised and thoughtful approach for every client.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "A commitment to quality in every service we offer.",
  },
  {
    icon: Flower2,
    title: "Wellness",
    description:
      "Beauty and self care that support your overall well being.",
  },
];

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-hero-image", {
        opacity: 0,
        x: 45,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 35,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.from(".about-value-card", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.13,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="aurelle-about" ref={pageRef}>

      {/* ABOUT HERO */}

      <section className="about-hero">
        <div className="about-hero-bg" />

        <div className="about-hero-container">

          <div className="about-hero-content">

            <div className="about-eyebrow">
              <span />
              ABOUT US
              <span />
            </div>

            <h1>
              The AURELLE
              <em>Story</em>
            </h1>

            <p>
              A luxury beauty studio dedicated to enhancing
              your natural beauty, nurturing self care and
              inspiring confidence every day.
            </p>

          </div>

          <div className="about-hero-image">
            <img
              src="/images/about/hero.png"
              alt="AURELLE beauty editorial portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* WHO WE ARE */}

      <section className="about-who">
        <div className="about-who-container">

          <div className="about-studio-image about-reveal">
            <img
              src="/images/about/studio.png"
              alt="AURELLE luxury beauty studio interior"
              loading="lazy"
            />

            <div className="about-studio-overlay">
              <Flower2 size={43} strokeWidth={1} />
              <span>AURELLE</span>
              <small>BEAUTY STUDIO</small>
            </div>
          </div>

          <div className="about-who-content about-reveal">

            <div className="about-eyebrow about-dark-eyebrow">
              <span />
              WHO WE ARE
              <span />
            </div>

            <h2>
              More Than a
              <em>Beauty Studio</em>
            </h2>

            <p>
              AURELLE is a modern beauty studio where
              expertise, care and luxury come together.
              We offer personalised beauty and wellness
              experiences in a relaxing and elegant ambience.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="about-highlight"
                    key={item.title}
                  >
                    <div className="about-highlight-icon">
                      <Icon size={36} strokeWidth={1.3} />
                    </div>

                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}

      <section className="about-mission">
        <div className="about-mission-bg" />

        <div className="about-section-heading about-reveal">
          <div className="about-eyebrow">
            <span />
            WHAT GUIDES US
            <span />
          </div>

          <h2>
            Our Mission <em>& Vision</em>
          </h2>
        </div>

        <div className="about-mission-grid">

          <article className="about-mission-card about-reveal">
            <div className="about-mission-icon">
              <Target size={43} strokeWidth={1.25} />
            </div>

            <div>
              <h3>Our Mission</h3>
              <p>
                To provide high quality, personalised beauty
                solutions that help every individual look and
                feel their best.
              </p>
            </div>
          </article>

          <article className="about-mission-card about-reveal">
            <div className="about-mission-icon">
              <Eye size={43} strokeWidth={1.25} />
            </div>

            <div>
              <h3>Our Vision</h3>
              <p>
                To be a trusted and preferred beauty destination
                known for excellence, care and a truly
                elevating experience.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* CORE VALUES */}

      <section className="about-values">
        <div className="about-values-decoration" />

        <div className="about-section-heading about-values-heading about-reveal">
          <div className="about-eyebrow about-dark-eyebrow">
            <span />
            WHAT WE BELIEVE
            <span />
          </div>

          <h2>
            Our Core <em>Values</em>
          </h2>

          <div className="about-heading-curve">
            <span />
          </div>
        </div>

        <div className="about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className="about-value-card"
                key={value.title}
              >
                <div className="about-value-icon">
                  <Icon size={36} strokeWidth={1.3} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="about-final-cta">
        <div className="about-cta-decoration" />

        <div className="about-cta-content about-reveal">

          <div className="about-eyebrow">
            <span />
            YOUR BEAUTY JOURNEY
            <span />
          </div>

          <h2>
            Experience <em>AURELLE</em>
          </h2>

          <p>
            Visit us and discover a space where beauty,
            care and wellness come together.
          </p>

          <Link
            to="/booking"
            className="about-cta-button"
          >
            <CalendarDays size={20} />
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;
