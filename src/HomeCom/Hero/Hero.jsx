
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 25,
        duration: 0.8,
      })
        .from(
          ".hero-heading span",
          {
            opacity: 0,
            y: 65,
            stagger: 0.18,
            duration: 1,
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-actions a",
          {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-bottom",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        );

      gsap.fromTo(
        ".hero-video",
        {
          scale: 1.12,
        },
        {
          scale: 1,
          duration: 3,
          ease: "power2.out",
        }
      );

      gsap.to(".hero-scroll-icon", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="aurelle-hero" ref={heroRef}>

      {/* BACKGROUND VIDEO */}

      <div className="hero-video-layer">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/video/video4.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* OVERLAY */}

      <div className="hero-overlay" />
      <div className="hero-bottom-shade" />

      {/* HERO CONTENT */}

      <div className="hero-inner">
        <div className="hero-copy">

          

          <span className="hero-small-line" />

          <h1 className="hero-heading">
            <span>STYLE.</span>
            <span>GROOMING.</span>
            <span className="hero-italic">
              CONFIDENCE.
            </span>
          </h1>

          <p className="hero-description">
            Discover the art of personal style,
            <br className="desktop-break" />
            expert grooming and exceptional care at AURELLE.
          </p>

          {/* ACTION BUTTONS */}

          <div className="hero-actions">

            <Link
              to="/booking"
              className="hero-cta hero-cta-primary"
            >
              BOOK AN APPOINTMENT
              <span className="hero-arrow">↗</span>
            </Link>

            <Link
              to="/services"
              className="hero-cta hero-cta-secondary"
            >
              EXPLORE SERVICES
            </Link>

          </div>

        </div>
      </div>

      {/* BOTTOM INFORMATION */}

      

    </section>
  );
}
