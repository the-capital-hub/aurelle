
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

import "./BrandStory.css";

gsap.registerPlugin(ScrollTrigger);

const brandValues = [
  {
    icon: Flower2,
    title: "PERSONALISED CARE",
  },
  {
    icon: Gem,
    title: "PREMIUM EXPERTISE",
  },
  {
    icon: Sparkles,
    title: "LASTING CONFIDENCE",
  },
];

export default function BrandStory() {
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
        .from(".story-image-frame", {
          opacity: 0,
          x: -55,
          duration: 1.1,
        })
        .from(
          ".story-eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.65"
        )
        .from(
          ".story-heading span",
          {
            opacity: 0,
            y: 45,
            stagger: 0.15,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(
          ".story-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".story-cta",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".story-value",
          {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.3"
        );

      gsap.fromTo(
        ".story-image",
        {
          scale: 1.12,
        },
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
      className="aurelle-story"
      id="story"
      ref={sectionRef}
    >
      <div className="story-container">

        {/* LEFT IMAGE */}

        <div className="story-visual">
          <div className="story-image-frame">
            <img
              className="story-image"
              src="/public/images/home/story.png"
              alt="AURELLE luxury beauty editorial portrait"
              loading="lazy"
            />

            <div className="story-image-shade" />

            <span className="story-image-label">
              THE BEAUTY OF BEING YOU
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="story-content">

          <div className="story-eyebrow">
            <span>THE AURELLE EXPERIENCE</span>
            <span className="story-eyebrow-line" />
          </div>

          <h2 className="story-heading">
            <span>Beauty is an art.</span>
            <span className="story-heading-italic">
              Make it yours.
            </span>
          </h2>

          <p className="story-description">
            At AURELLE, beauty is more than a service.
            It is an experience built around elegance,
            confidence and individuality.
          </p>

          <Link to="/about" className="story-cta">
            <span>DISCOVER OUR STORY</span>
            <ArrowUpRight size={19} strokeWidth={1.5} />
          </Link>

          {/* BRAND VALUES */}

          <div className="story-values">
            {brandValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="story-value"
                  key={item.title}
                >
                  <Icon
                    className="story-value-icon"
                    size={34}
                    strokeWidth={1.2}
                  />

                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
