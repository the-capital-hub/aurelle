
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import "./ClientTestimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Priya Singh",
    category: "REGULAR CLIENT",
    image: "/images/testi/client-priya.jpg",
    review:
      "An exceptional experience! The team at AURELLE truly understands beauty and personal care.",
  },
  {
    name: "Neha Verma",
    category: "BRIDAL CLIENT",
    image: "/images/testi/client-neha.jpg",
    review:
      "I loved my makeover! The attention to detail, professionalism and warm hospitality make AURELLE my favourite place.",
  },
  {
    name: "Ritika Sharma",
    category: "LOYAL CLIENT",
    image: "/images/testi/client-ritika.jpg",
    review:
      "From skincare to hair styling, every service is wonderful. I always leave feeling more confident and refreshed.",
  },
  {
    name: "Meera Kapoor",
    category: "REGULAR CLIENT",
    image: "/images/testi/client-meera.jpg",
    review:
      "The atmosphere is beautiful and relaxing. Every visit feels special and the team takes wonderful care of me.",
  },
  {
    name: "Ananya Roy",
    category: "BRIDAL CLIENT",
    image: "/images/testi/client-ananya.jpg",
    review:
      "My bridal look was exactly what I dreamed of. The team understood my style and made my special day memorable.",
  },
  {
    name: "Simran Kaur",
    category: "LOYAL CLIENT",
    image: "/images/testi/client-simran.jpg",
    review:
      "Professional service, lovely people and beautiful results. AURELLE has become my favourite beauty destination.",
  },
];

function ClientTestimonials() {
  const sectionRef = useRef(null);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== "undefined" && window.innerWidth <= 700 ? 1 : 3
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 700 ? 1 : window.innerWidth <= 1000 ? 2 : 3);
      setPage(0);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCount);
  const startIndex = page * visibleCount;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  const nextPage = () => {
    setPage((current) => (current + 1) % totalPages);
  };

  const previousPage = () => {
    setPage((current) => (current - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-heading > *", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".testimonial-card", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".testimonial-booking", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-booking",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="client-testimonials" ref={sectionRef}>
      <div className="testimonials-container">

        <div className="testimonial-heading">
          <div className="testimonial-brand">
            <span />
            AURELLE
            <span />
          </div>

          <p className="testimonial-eyebrow">
            CLIENT EXPERIENCES
          </p>

          <h2>
            WHAT OUR <em>CLIENTS SAY</em>
          </h2>

          <p className="testimonial-intro">
            Real stories from our valued clients who trust AURELLE
            for their beauty and self care journey.
          </p>
        </div>

        <div className="testimonial-slider">

          <button
            type="button"
            className="testimonial-arrow testimonial-prev"
            onClick={previousPage}
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="testimonial-grid" key={page}>
            {visibleTestimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>

                <div className="testimonial-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="testimonial-image-shade" />
                </div>

                <div className="testimonial-card-content">

                  <div
                    className="testimonial-stars"
                    aria-label="5 out of 5 stars"
                  >
                    {"★★★★★"}
                  </div>

                  <div className="testimonial-review">
                    <Quote
                      className="testimonial-quote-icon"
                      size={29}
                      strokeWidth={1.3}
                    />
                    <p>{item.review}</p>
                  </div>

                  <div className="testimonial-client">
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.category}</span>
                    </div>

                    <div className="testimonial-quote-mark">
                      <Quote size={21} />
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="testimonial-arrow testimonial-next"
            onClick={nextPage}
            aria-label="Next testimonials"
          >
            <ArrowRight size={20} />
          </button>

        </div>

        <div className="testimonial-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`testimonial-dot ${page === index ? "active" : ""}`}
              onClick={() => setPage(index)}
              aria-label={`Show testimonial page ${index + 1}`}
              aria-current={page === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="testimonial-booking">
          <span />

          <Link to="/booking" className="testimonial-book-button">
            BOOK YOUR APPOINTMENT
            <ArrowUpRight size={19} />
          </Link>

          <span />
        </div>

      </div>
    </section>
  );
}

export default ClientTestimonials;
