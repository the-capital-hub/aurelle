
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scissors,
  Gem,
  Heart,
  Target,
  Eye,
  UsersRound,
  Sparkles,
  Star,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Scissors,
    title: "EXPERT STYLING",
  },
  {
    icon: Gem,
    title: "PREMIUM EXPERIENCE",
  },
  {
    icon: Heart,
    title: "PERSONALISED CARE",
  },
];

const values = [
  {
    icon: UsersRound,
    title: "Trust",
    description:
      "Building lasting relationships through honesty, professionalism and genuine care.",
  },
  {
    icon: Heart,
    title: "Personalisation",
    description:
      "Understanding every client's individual style, preferences and grooming needs.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Maintaining high standards through skilled professionals and attention to every detail.",
  },
  {
    icon: Sparkles,
    title: "Confidence",
    description:
      "Creating experiences that help every individual look their best and feel confident.",
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
              ABOUT AURELLE
              <span />
            </div>

            <h1>
              The AURELLE
              <em>Story</em>
            </h1>

            <p>
              A luxury unisex salon where personal style,
              expert craftsmanship and exceptional care
              come together. We create elevated hair,
              grooming and beauty experiences designed
              around you.
            </p>

            <Link to="/booking" className="about-hero-button">
              DISCOVER YOUR STYLE
              <ArrowRight size={19} />
            </Link>

          </div>

          <div className="about-hero-image">
            <img
              src="/images/ctamodel.png"
              alt="Indian male and female models representing AURELLE Luxury Unisex Salon"
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
              alt="Premium modern AURELLE unisex salon interior"
              loading="lazy"
            />

            <div className="about-studio-overlay">
              <Scissors size={43} strokeWidth={1} />
              <span>AURELLE</span>
              <small>LUXURY UNISEX SALON</small>
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
              <em>Salon Experience</em>
            </h2>

            <p>
              AURELLE is a modern luxury unisex salon
              dedicated to personal style and exceptional
              grooming. From precision haircuts and
              professional hairstyling to men's grooming,
              bridal makeup and personalised beauty care,
              every experience is thoughtfully crafted
              by our professionals.
            </p>

            <p>
              We believe great style goes beyond appearance.
              It is about feeling comfortable, expressing
              yourself and leaving with renewed confidence.
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

          <p>
            The principles behind every style, service
            and experience at AURELLE.
          </p>
        </div>

        <div className="about-mission-grid">

          <article className="about-mission-card about-reveal">
            <div className="about-mission-icon">
              <Target size={43} strokeWidth={1.25} />
            </div>

            <div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional hair, grooming and
                beauty services through professional expertise,
                personalised attention and a premium salon
                experience for every client.
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
                To become a trusted destination for personal
                style and grooming, recognised for creativity,
                quality, innovation and exceptional client care.
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
            STYLE BEYOND ORDINARY
            <span />
          </div>

          <h2>
            Experience <em>AURELLE</em>
          </h2>

          <p>
            Your style deserves expert attention.
            Discover a personalised salon experience
            crafted to bring out your best.
          </p>

          <Link
            to="/booking"
            className="about-cta-button"
          >
            <CalendarDays size={20} />
            <span>BOOK YOUR APPOINTMENT</span>
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;
