
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Scissors,
  UserRound,
  Sparkles,
  Brush,
  ArrowRight,
} from "lucide-react";

import "./SignatureServices.css";

gsap.registerPlugin(ScrollTrigger);

/* =====================================
   AURELLE SIGNATURE SERVICES
===================================== */

const services = [
  {
    id: 1,
    title: "HAIR & STYLING",
    description:
      "Expert haircuts, styling, colouring and professional hair care for every look.",
    image: "/images/service-makeup/service-hair.jpg",
    icon: Scissors,
    category: "hair",
  },
  {
    id: 2,
    title: "MEN'S GROOMING",
    description:
      "Premium men's haircuts, beard styling and personalised grooming experiences.",
    image: "/images/service-makeup/service-grooming.png",
    icon: UserRound,
    category: "grooming",
  },
  {
    id: 3,
    title: "SKIN & FACIALS",
    description:
      "Personalised facials and professional skincare treatments for healthy, radiant skin.",
    image: "/images/service-makeup/service-skin.jpg",
    icon: Sparkles,
    category: "skin",
  },
  {
    id: 4,
    title: "MAKEUP & BRIDAL",
    description:
      "Beautiful party and bridal makeup crafted to complement your individual style.",
    image: "/images/service-makeup/service-makeup.jpg",
    icon: Brush,
    category: "makeup",
  },
];

/* =====================================
   SIGNATURE SERVICES COMPONENT
===================================== */

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

        {/* SECTION HEADING */}

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
            Discover exceptional hair, grooming and beauty
            experiences crafted by our expert professionals.
            Your style deserves nothing less than AURELLE.
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="signature-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                to={`/services?category=${service.category}`}
                className="signature-card"
                key={service.id}
                aria-label={`Explore ${service.title} services`}
              >

                {/* IMAGE */}

                <div className="signature-card-image">

                  <img
                    src={service.image}
                    alt={`${service.title} at AURELLE Luxury Unisex Salon`}
                    loading="lazy"
                  />

                  <div className="signature-card-image-shade" />

                </div>

                {/* CONTENT */}

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
                    <ArrowRight
                      size={27}
                      strokeWidth={1.3}
                    />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

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
