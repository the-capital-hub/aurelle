
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scissors,
  Flower2,
  Gem,
  Armchair,
  ArrowUpRight,
} from "lucide-react";

import "./WhyChoose.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Scissors,
    title: "Expert Beauty",
    subtitle: "Professionals",
    description:
      "Skilled artists with years of experience and a passion for beauty.",
  },
  {
    icon: Flower2,
    title: "Premium",
    subtitle: "Products",
    description:
      "Carefully selected, high quality products for safe and effective care.",
  },
  {
    icon: Gem,
    title: "Personalised",
    subtitle: "Experience",
    description:
      "Tailored services to suit your unique style, skin and hair needs.",
  },
  {
    icon: Armchair,
    title: "Elegant",
    subtitle: "Ambience",
    description:
      "A luxurious and relaxing space designed for your comfort.",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".why-visual", {
          opacity: 0,
          x: -50,
          duration: 1.1,
        })
        .from(
          ".why-eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.6"
        )
        .from(
          ".why-heading",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          ".why-intro",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".why-feature",
          {
            opacity: 0,
            y: 28,
            stagger: 0.13,
            duration: 0.75,
          },
          "-=0.3"
        )
        .from(
          ".why-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3"
        );

      gsap.fromTo(
        ".why-image",
        { scale: 1.12 },
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="aurelle-why"
      id="why-aurelle"
      ref={sectionRef}
    >
      <div className="why-background" />

      <div className="why-container">

        {/* LEFT SALON IMAGE */}

        <div className="why-visual">
          <img
            src="/images/home/aurelle-why-choose.png"
            alt="Luxury AURELLE beauty studio interior"
            className="why-image"
            loading="lazy"
          />

          <div className="why-image-overlay" />

          

          <div className="why-image-caption">
            A SPACE CREATED FOR BEAUTY
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="why-content">

          <div className="why-eyebrow">
            <span className="why-line" />
            <span>WHY CHOOSE AURELLE</span>
            <span className="why-line" />
          </div>

          <h2 className="why-heading">
            The AURELLE Difference
          </h2>

          <p className="why-intro">
            A premium beauty studio that blends
            expertise, luxury and personalised care
            for an exceptional experience.
          </p>

          <span className="why-heading-divider" />

          {/* FEATURE GRID */}

          <div className="why-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className="why-feature"
                  key={feature.title}
                >
                  <div className="why-feature-icon">
                    <Icon
                      size={31}
                      strokeWidth={1.35}
                    />
                  </div>

                  <div className="why-feature-divider" />

                  <div className="why-feature-copy">
                    <h3>
                      {feature.title}
                      <br />
                      {feature.subtitle}
                    </h3>

                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOOKING CTA */}

          <Link
            to="/booking"
            className="why-cta"
          >
            <span>BOOK YOUR APPOINTMENT</span>
            <ArrowUpRight size={21} strokeWidth={1.5} />
          </Link>

        </div>
      </div>
    </section>
  );
}
