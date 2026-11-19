
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./SignatureServices.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Makeup",
    subtitle: "Artistry",
    description: "Flawless looks for every occasion.",
    image: "/images/service-makeup/service-makeup.jpg",
    link: "/services/makeup",
  },
  {
    id: "02",
    title: "Hair",
    subtitle: "Care",
    description: "Professional care for healthy, beautiful hair.",
    image: "/images/service-makeup/service-hair.jpg",
    link: "/services/hair",
  },
  {
    id: "03",
    title: "Skin",
    subtitle: "Care",
    description: "Advanced treatments for radiant skin.",
    image: "/images/service-makeup/service-skin.jpg",
    link: "/services/skin",
  },
  {
    id: "04",
    title: "Nail",
    subtitle: "Studio",
    description: "Stylish and long lasting nail care.",
    image: "/images/service-makeup/service-nails.jpg",
    link: "/services/nails",
  },
];

export default function SignatureServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".services-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
        })
        .from(
          ".services-heading",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
          },
          "-=0.35"
        )
        .from(
          ".services-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".service-card",
          {
            opacity: 0,
            y: 55,
            stagger: 0.16,
            duration: 0.9,
          },
          "-=0.25"
        )
        .from(
          ".services-bottom-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.35"
        );

      gsap.fromTo(
        ".service-image",
        {
          scale: 1.12,
        },
        {
          scale: 1,
          duration: 1.6,
          stagger: 0.12,
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
      className="aurelle-services"
      id="services"
      ref={sectionRef}
    >
      <div className="services-background" />

      <div className="services-container">

        {/* SECTION HEADER */}

        <div className="services-header">
          <div className="services-eyebrow">
            <span className="services-line" />
            <span>OUR SIGNATURE SERVICES</span>
            <span className="services-line" />
          </div>

          <h2 className="services-heading">
            Curated Beauty Services
          </h2>

          <p className="services-subtitle">
            A refined range of beauty and grooming
            experiences designed to enhance your natural elegance.
          </p>
        </div>

        {/* SERVICE CARDS */}

        <div className="services-grid">
          {services.map((service) => (
            <Link
              to={service.link}
              className="service-card"
              key={service.id}
            >
              <img
                className="service-image"
                src={service.image}
                alt={`${service.title} ${service.subtitle} at AURELLE`}
                loading="lazy"
              />

              <div className="service-card-shade" />

              <div className="service-card-content">
                <div className="service-card-number">
                  {service.id}
                </div>

                <div className="service-card-info">
                  <h3>
                    {service.title}
                    <br />
                    {service.subtitle}
                  </h3>

                  <span className="service-card-line" />

                  <p>{service.description}</p>
                </div>

                <span className="service-arrow">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className="services-bottom-cta">
          <Link
            to="/services"
            className="services-explore-button"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}
