
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Scissors,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";

import "./BrandStory.css";

gsap.registerPlugin(ScrollTrigger);

const brandValues = [
  {
    icon: Scissors,
    title: "Expert Stylists",
  },
  {
    icon: Sparkles,
    title: "Modern Techniques",
  },
  {
    icon: Heart,
    title: "Personalised Care",
  },
];

function BrandStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".brand-story-visual", {
        x: -55,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".brand-story-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".brand-story-value", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".brand-story-values",
          start: "top 90%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="brand-story-section"
      ref={sectionRef}
    >

      <div className="brand-story-container">

        {/* LEFT VISUAL */}

        <div className="brand-story-visual">

          <div className="brand-story-image-frame">

            <img
              src="/images/stroy/hero.png"
              alt="AURELLE luxury Indian unisex salon"
              loading="lazy"
            />

            <div className="brand-story-image-shade" />

            

            <div className="brand-story-image-caption">
              <span>STYLE BEYOND ORDINARY</span>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="brand-story-content">

          <div className="brand-story-eyebrow">
            <span />
            OUR STORY
            <span />
          </div>

          <h2>
            THE AURELLE
            <em>STORY</em>
          </h2>

          <div className="brand-story-underline">
            <span />
          </div>

          <p className="brand-story-description">
            AURELLE is an Indian luxury unisex salon built
            around the belief that personal style is an
            expression of confidence and individuality.

            <br />
            <br />

            From expert hair styling and men's grooming
            to personalised beauty care, we bring together
            skilled professionals, modern techniques and
            a refined salon experience designed for everyone.
          </p>

          {/* BRAND VALUES */}

          <div className="brand-story-values">

            {brandValues.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  className="brand-story-value"
                  key={value.title}
                >

                  <Icon
                    size={35}
                    strokeWidth={1.2}
                  />

                  <span>{value.title}</span>

                </div>
              );
            })}

          </div>

          {/* ABOUT CTA */}

          <Link
            to="/about"
            className="brand-story-button"
          >

            <span>DISCOVER OUR JOURNEY</span>

            <ArrowRight size={21} />

          </Link>

        </div>

      </div>

    </section>
  );
}

export default BrandStory;
