
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
import whyhero from "../../assets/image/whyhero.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: UsersRound,
    title: "EXPERT STYLISTS",
    description:
      "Experienced Indian beauty professionals dedicated to exceptional hair styling, grooming and beauty care.",
  },
  {
    icon: Gem,
    title: "PREMIUM PRODUCTS",
    description:
      "We use carefully selected professional products to deliver quality results and exceptional care.",
  },
  {
    icon: Flower2,
    title: "PERSONALISED CARE",
    description:
      "Every service is tailored to your individual style, preferences and beauty requirements.",
  },
  {
    icon: Armchair,
    title: "LUXURY AMBIENCE",
    description:
      "Enjoy a welcoming and relaxing salon experience in a thoughtfully designed modern space.",
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
              src={whyhero}
              alt="AURELLE luxury unisex salon interior"
              loading="lazy"
            />

            <div className="why-image-shade" />

            <div className="why-image-brand">
              
            </div>

            <div className="why-image-caption">
              STYLE BEYOND ORDINARY
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="why-content">
          <div className="why-heading">
            <div className="why-eyebrow">
              <span />
              THE AURELLE DIFFERENCE
              <span />
            </div>

            <h2>
              WHY CHOOSE <em>AURELLE</em>
            </h2>

            <div className="why-heading-curve">
              <span />
            </div>

            <p>
              More than just a salon, AURELLE is where personal
              style meets expert care. From contemporary hair
              styling and men's grooming to beauty treatments,
              every experience is designed around you.
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
