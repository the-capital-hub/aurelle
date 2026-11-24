
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import "./ClientTestimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aarav Sharma",
    category: "MEN'S GROOMING CLIENT",
    image: "/images/testi/client-aarav.jpg",
    review:
      "The grooming experience at AURELLE is exceptional. The team understands exactly what suits my style, and the attention to detail is impressive.",
  },
  {
    name: "Priya Singh",
    category: "REGULAR CLIENT",
    image: "/images/testi/client-priya.jpg",
    review:
      "I had a wonderful experience at AURELLE. The hairstyling, hospitality and attention to detail made me feel truly special.",
  },
  {
    name: "Rahul Verma",
    category: "HAIR STYLING CLIENT",
    image: "/images/testi/client-rahul.jpg",
    review:
      "From the consultation to the final haircut, everything was professional. I loved the result and would definitely recommend AURELLE.",
  },
  {
    name: "Neha Verma",
    category: "BRIDAL CLIENT",
    image: "/images/testi/client-neha.jpg",
    review:
      "My bridal makeover was exactly how I imagined it. The team understood my preferences and made my special day even more memorable.",
  },
  {
    name: "Karan Singh",
    category: "LOYAL GROOMING CLIENT",
    image: "/images/testi/client-karan.jpg",
    review:
      "Great atmosphere, skilled professionals and excellent service. AURELLE has become my first choice for haircuts and grooming.",
  },
  {
    name: "Meera Kapoor",
    category: "BEAUTY CARE CLIENT",
    image: "/images/testi/client-meera.jpg",
    review:
      "Every visit feels relaxing and special. The staff is welcoming, the services are excellent and I always leave feeling confident.",
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
      setVisibleCount(
        window.innerWidth <= 700
          ? 1
          : window.innerWidth <= 1000
            ? 2
            : 3
      );
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
            Discover what our clients love about AURELLE.
            From expert hairstyling and men's grooming to
            personalised beauty care, every experience is
            crafted around you.
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
                    alt={`${item.name}, AURELLE client`}
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
