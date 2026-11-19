
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Scissors,
  Brush,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import "./SignatureServices.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "SKIN CARE",
    description:
      "Personalised facials and advanced skin treatments for healthy, radiant skin.",
    image: "/images/service-makeup/service-skin.jpg",
    icon: Flower2,
    category: "skin",
  },
  {
    id: 2,
    title: "HAIR CARE",
    description:
      "Expert hair styling, colouring and care treatments for every look.",
    image: "/images/service-makeup/service-hair.jpg",
    icon: Scissors,
    category: "hair",
  },
  {
    id: 3,
    title: "MAKEUP",
    description:
      "From everyday glam to bridal perfection, makeup that feels like you.",
    image: "/images/service-makeup/service-makeup.jpg",
    icon: Brush,
    category: "makeup",
  },
  {
    id: 4,
    title: "NAIL CARE",
    description:
      "Professional nail care and artistic designs for a polished look.",
    image: "/images/service-makeup/service-nails.jpg",
    icon: Sparkles,
    category: "nails",
  },
];

function SignatureServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".signature-heading > *", {
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

      gsap.from(".signature-card", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".signature-grid",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".signature-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".signature-bottom",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="signature-services"
      ref={sectionRef}
    >
      <div className="signature-bg-decoration" />

      <div className="signature-container">

        <div className="signature-heading">
          <div className="signature-eyebrow">
            <span />
            OUR SIGNATURE
            <span />
          </div>

          <h2>
            SIGNATURE <em>SERVICES</em>
          </h2>

          <div className="signature-heading-line">
            <span />
          </div>

          <p>
            A curated range of premium beauty services designed
            to rejuvenate, enhance and celebrate your natural beauty.
          </p>
        </div>

        <div className="signature-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                to={`/services?category=${service.category}`}
                className="signature-card"
                key={service.id}
              >
                <div className="signature-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="signature-card-image-shade" />
                </div>

                <div className="signature-card-content">

                  <div className="signature-card-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.3}
                    />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="signature-card-arrow">
                    <ArrowRight size={27} strokeWidth={1.3} />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        <div className="signature-bottom">
          <span />

          <Link
            to="/services"
            className="signature-explore-button"
          >
            EXPLORE ALL SERVICES
            <ArrowRight size={21} />
          </Link>

          <span />
        </div>

      </div>
    </section>
  );
}

export default SignatureServices;
