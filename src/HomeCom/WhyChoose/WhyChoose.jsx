
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UsersRound,
  Gem,
  Flower2,
  Armchair,
  ArrowRight,
} from "lucide-react";

import "./WhyChoose.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: UsersRound,
    title: "EXPERT BEAUTY PROFESSIONALS",
    description:
      "A skilled and passionate team with years of industry experience.",
  },
  {
    icon: Gem,
    title: "PREMIUM PRODUCTS",
    description:
      "We use high quality, trusted and skin friendly products.",
  },
  {
    icon: Flower2,
    title: "PERSONALISED EXPERIENCE",
    description:
      "Beauty solutions that are tailored to your unique needs.",
  },
  {
    icon: Armchair,
    title: "ELEGANT AMBIENCE",
    description:
      "A calm, luxurious and relaxing space designed for your comfort.",
  },
];

function WhyChoose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-visual", {
        x: -45,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".why-heading > *", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".why-feature-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-features-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".why-booking", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-booking",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-choose-section" ref={sectionRef}>
      <div className="why-choose-decoration" />

      <div className="why-choose-container">

        {/* LEFT SALON IMAGE */}

        <div className="why-visual">
          <div className="why-image-frame">
            <img
              src="/public/images/home/whyhero.png"
              alt="Luxury AURELLE beauty studio interior"
              loading="lazy"
            />

            <div className="why-image-shade" />

            <div className="why-image-brand">
              <Flower2 size={42} strokeWidth={1} />
              <span>AURELLE</span>
              <small>BEAUTY STUDIO</small>
            </div>

            <div className="why-image-caption">
              THE ART OF BEAUTY
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="why-content">

          <div className="why-heading">
            <div className="why-eyebrow">
              <span />
              WHY CHOOSE
              <span />
            </div>

            <h2>
              WHY CHOOSE <em>AURELLE</em>
            </h2>

            <div className="why-heading-curve">
              <span />
            </div>

            <p>
              More than a beauty studio, AURELLE is a trusted
              space where expertise, care and luxury come
              together for a truly elevated experience.
            </p>
          </div>

          <div className="why-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="why-feature-card"
                  key={feature.title}
                >
                  <div className="why-feature-icon">
                    <Icon size={39} strokeWidth={1.3} />
                  </div>

                  <div className="why-feature-divider" />

                  <div className="why-feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="why-booking">
            <Link
              to="/booking"
              className="why-book-button"
            >
              BOOK YOUR EXPERIENCE
              <ArrowRight size={21} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
