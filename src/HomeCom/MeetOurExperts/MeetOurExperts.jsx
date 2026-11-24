
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  UserRound,
  Gem,
  Scissors,
  Waves,
  Crown,
  ArrowUpRight,
  Brush,
} from "lucide-react";

import "./MeetOurExperts.css";

gsap.registerPlugin(ScrollTrigger);

const experts = [
  {
    name: "GROOMING EXPERT",
    role: "MEN'S GROOMING SPECIALIST",
    image: "/images/expert/expert-grooming.jpg",
    services: [
      { icon: Scissors, title: "Men's Haircuts & Styling" },
      { icon: UserRound, title: "Beard Styling & Grooming" },
      { icon: Sparkles, title: "Personal Grooming" },
    ],
  },
  {
    name: "HAIR STYLIST",
    role: "SENIOR HAIR STYLING EXPERT",
    image: "/images/expert/expert-hairstylist.jpg",
    services: [
      { icon: Scissors, title: "Haircuts & Styling" },
      { icon: Waves, title: "Hair Care Treatments" },
      { icon: Gem, title: "Hair Colour & Highlights" },
    ],
  },
  {
    name: "MAKEUP ARTIST",
    role: "MAKEUP & BEAUTY SPECIALIST",
    image: "/images/expert/expert-makeup.jpg",
    services: [
      { icon: Brush, title: "Bridal & Event Makeup" },
      { icon: Sparkles, title: "HD & Airbrush Makeup" },
      { icon: Crown, title: "Premium Glam Looks" },
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

        {/* SECTION HEADING */}

        <div className="experts-heading">
          <div className="experts-brand">
            <span />
            AURELLE
            <span />
          </div>

          <p className="experts-eyebrow">
            THE PEOPLE BEHIND YOUR STYLE
          </p>

          <h2>
            MEET OUR <em>EXPERTS</em>
          </h2>

          <p className="experts-intro">
            Meet the professionals behind AURELLE.
            From men's grooming and expert hairstyling
            to makeup and beauty care, discover services
            crafted to bring out your personal style.
          </p>
        </div>

        {/* EXPERT CARDS */}

        <div className="experts-grid">
          {experts.map((expert) => (
            <article className="expert-card" key={expert.name}>

              <div className="expert-photo">
                <img
                  src={expert.image}
                  alt={`${expert.name}, AURELLE salon professional`}
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
              </div>

            </article>
          ))}
        </div>

        {/* BOOKING CTA */}

        <div className="experts-booking">
          <span className="booking-line" />

          <Link
            to="/booking"
            className="experts-book-button"
          >
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
