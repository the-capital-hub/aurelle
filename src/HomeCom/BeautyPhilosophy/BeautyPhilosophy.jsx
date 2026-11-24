
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import physiohero from "../../assets/image/philohero.png";
import "./BeautyPhilosophy.css";

gsap.registerPlugin(ScrollTrigger);

const philosophyItems = [
  {
    icon: Flower2,
    title: "CELEBRATE YOUR STYLE",
    description:
      "From contemporary haircuts to personal grooming, express your individuality with confidence.",
  },
  {
    icon: Heart,
    title: "CARE BEYOND BEAUTY",
    description:
      "Enjoy thoughtful treatments and a welcoming space designed around your comfort.",
  },
  {
    icon: Sparkles,
    title: "CONFIDENCE IN EVERY DETAIL",
    description:
      "Our expert professionals help you look your best and feel confident every day.",
  },
];

function BeautyPhilosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philosophy-model", {
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

      gsap.from(".philosophy-content > *", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".philosophy-item", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.17,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".philosophy-values",
          start: "top 85%",
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
      <div className="philosophy-background" />

      <div className="philosophy-container">
        {/* SALON MODEL IMAGE */}

        <div className="philosophy-model">
          <div className="philosophy-model-frame">
            <img
              src={physiohero}
              alt="AURELLE luxury salon style and beauty"
              loading="lazy"
            />

            <div className="philosophy-model-shade" />

            <div className="philosophy-model-caption">
              <span>AURELLE</span>
              <small>STYLE BEYOND ORDINARY</small>
            </div>
          </div>
        </div>

        {/* PHILOSOPHY CONTENT */}

        <div className="philosophy-content">
          <div className="philosophy-eyebrow">
            <span />
            THE AURELLE EXPERIENCE
            <span />
          </div>

          <h2>
            OUR <em>PHILOSOPHY</em>
          </h2>

          <div className="philosophy-heading-line">
            <span />
          </div>

          <p className="philosophy-intro">
            At AURELLE, personal style is an expression of
            individuality. We bring together expert hair
            styling, men's grooming and beauty care to create
            an experience that makes everyone feel confident.
          </p>

          <div className="philosophy-values">
            {philosophyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="philosophy-item"
                  key={item.title}
                >
                  <div className="philosophy-icon">
                    <Icon
                      size={43}
                      strokeWidth={1.25}
                    />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="philosophy-bottom">
            <span />

            <Link
              to="/about"
              className="philosophy-button"
            >
              DISCOVER AURELLE
              <ArrowRight size={21} />
            </Link>

            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeautyPhilosophy;
