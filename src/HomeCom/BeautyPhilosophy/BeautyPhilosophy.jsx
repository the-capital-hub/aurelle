
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Gem,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./BeautyPhilosophy.css";

gsap.registerPlugin(ScrollTrigger);

const philosophyItems = [
  {
    icon: Flower2,
    title: "Individuality",
    description:
      "Celebrating your unique features, style and personality.",
  },
  {
    icon: Gem,
    title: "Elegance",
    description:
      "Timeless beauty with modern refinement and care.",
  },
  {
    icon: Sparkles,
    title: "Confidence",
    description:
      "Helping you look and feel your absolute best.",
  },
];

function BeautyPhilosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philosophy-portrait", {
        opacity: 0,
        x: -45,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".philosophy-heading > *", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".philosophy-item", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-items",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".philosophy-action", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-action",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="beauty-philosophy"
      ref={sectionRef}
    >
      <div className="philosophy-topline">
        <span className="philosophy-brand">AURELLE</span>
        <span className="philosophy-studio">
          LUXURY BEAUTY STUDIO
        </span>
      </div>

      <div className="philosophy-layout">

        <div className="philosophy-portrait">
          <img
            src="/images/aurelle-philosophy.jpg"
            alt="AURELLE beauty editorial portrait"
          />

          <div className="portrait-shade" />

          <div className="portrait-caption">
            <span>THE AURELLE EXPERIENCE</span>
            <p>Elegance in every detail.</p>
          </div>
        </div>

        <div className="philosophy-information">

          <div className="philosophy-heading">
            <div className="philosophy-eyebrow">
              <span />
              OUR BEAUTY PHILOSOPHY
              <span />
            </div>

            <h2>
              THE ART OF
              <em> BEAUTY</em>
            </h2>

            <p className="philosophy-description">
              Beauty is not about changing who you are.
              <br />
              It is about revealing your finest self.
            </p>

            <div className="philosophy-separator">
              <span />
              <Sparkles size={17} strokeWidth={1.2} />
              <span />
            </div>
          </div>

          <div className="philosophy-items">
            {philosophyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="philosophy-item"
                  key={item.title}
                >
                  <div className="philosophy-item-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.2}
                    />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="philosophy-action">
            <Link
              to="/booking"
              className="philosophy-book-button"
            >
              <span>BOOK YOUR APPOINTMENT</span>
              <ArrowUpRight size={19} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BeautyPhilosophy;
