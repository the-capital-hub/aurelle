
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Sparkles,
  UserRound,
  Gem,
  Scissors,
  Waves,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import "./MeetOurExperts.css";

gsap.registerPlugin(ScrollTrigger);

const experts = [
  {
    name: "Dr. Ananya Sharma",
    role: "BEAUTY & SKIN EXPERT",
    image: "/images/expert/expert-ananya.jpg",
    instagram: "#",
    services: [
      { icon: Flower2, title: "Skin Rejuvenation" },
      { icon: Sparkles, title: "Anti Aging Treatments" },
      { icon: UserRound, title: "Personalized Skin Care" },
    ],
  },
  {
    name: "Ritika Verma",
    role: "MAKEUP ARTIST",
    image: "/images/expert/expert-ritika.jpg",
    instagram: "#",
    services: [
      { icon: Gem, title: "Bridal & Event Makeup" },
      { icon: Scissors, title: "HD & Airbrush Makeup" },
      { icon: Sparkles, title: "Editorial & Glam Looks" },
    ],
  },
  {
    name: "Kavya Mehra",
    role: "HAIR & STYLE EXPERT",
    image: "/images/expert/expert-kavya.jpg",
    instagram: "#",
    services: [
      { icon: Scissors, title: "Hair Styling & Cuts" },
      { icon: Waves, title: "Hair Care Treatments" },
      { icon: Crown, title: "Color, Highlights & Styling" },
    ],
  },
];

function MeetOurExperts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experts-heading > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".expert-card", {
        y: 55,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experts-grid",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".experts-booking", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experts-booking",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="meet-experts" ref={sectionRef}>
      <div className="experts-container">

        <div className="experts-heading">
          <div className="experts-brand">
            <span />
            AURELLE
            <span />
          </div>

          <p className="experts-eyebrow">
            OUR EXPERT TEAM
          </p>

          <h2>
            MEET OUR <em>EXPERTS</em>
          </h2>

          <p className="experts-intro">
            A team of passionate beauty professionals dedicated
            to creating personalized, high end beauty experiences
            for you.
          </p>
        </div>

        <div className="experts-grid">
          {experts.map((expert) => (
            <article className="expert-card" key={expert.name}>

              <div className="expert-photo">
                <img
                  src={expert.image}
                  alt={expert.name}
                  loading="lazy"
                />

                <div className="expert-photo-overlay" />

                <div className="expert-profile">
                  <h3>{expert.name}</h3>
                  <span>{expert.role}</span>
                </div>
              </div>

              <div className="expert-details">
                <div className="expert-services">
                  {expert.services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        className="expert-service"
                        key={service.title}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.4}
                        />
                        <span>{service.title}</span>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={expert.instagram}
                  className="expert-instagram"
                  aria-label={`Instagram profile of ${expert.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="experts-booking">
          <span className="booking-line" />

          <Link to="/booking" className="experts-book-button">
            BOOK YOUR APPOINTMENT
            <ArrowUpRight size={19} />
          </Link>

          <span className="booking-line" />
        </div>

      </div>
    </section>
  );
}

export default MeetOurExperts;
