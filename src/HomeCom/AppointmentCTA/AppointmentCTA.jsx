
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarDays,
  Phone,
  UsersRound,
  Gem,
  Scissors,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import physiohero from "../../assets/image/philohero.png";
import "./AppointmentCTA.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: UsersRound,
    title: "Expert Professionals",
  },
  {
    icon: Gem,
    title: "Premium Products",
  },
  {
    icon: Scissors,
    title: "Expert Hair & Grooming",
  },
  {
    icon: Sparkles,
    title: "Personalised Care",
  },
];

function AppointmentCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".appointment-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".appointment-visual", {
        opacity: 0,
        x: 45,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".appointment-feature", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".appointment-features",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="appointment-cta"
      ref={sectionRef}
    >
      <div className="appointment-background" />

      <div className="appointment-layout">

        <div className="appointment-content">

          <div className="appointment-brand">
            <span />
            AURELLE
            <span />
          </div>

          <p className="appointment-eyebrow">
            YOUR STYLE. YOUR EXPERIENCE.
          </p>

          <h2>
            YOUR STYLE
            <br />
            YOUR CONFIDENCE
            <br />
            <em>STARTS HERE</em>
          </h2>

          <p className="appointment-description">
            Discover expert hairstyling, premium men's grooming
            and personalised beauty care at AURELLE.
            Let our professionals bring out your best look.
          </p>

          <div className="appointment-buttons">
            <Link
              to="/booking"
              className="appointment-primary"
            >
              <CalendarDays size={19} />
              <span>BOOK YOUR APPOINTMENT</span>
              <ArrowUpRight size={19} />
            </Link>

            <a
              href="tel:+910000000000"
              className="appointment-secondary"
            >
              <Phone size={18} />
              <span>CONTACT US</span>
            </a>
          </div>

        </div>

        <div className="appointment-visual">
          <img
            src="/images/ctamodel.png"
            alt="AURELLE luxury unisex salon experience"
          />

          <div className="appointment-visual-shade" />

          <div className="appointment-visual-brand">
            
          </div>
        </div>

      </div>

      <div className="appointment-features">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              className="appointment-feature"
              key={feature.title}
            >
              <Icon size={29} strokeWidth={1.25} />
              <span>{feature.title}</span>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default AppointmentCTA;
