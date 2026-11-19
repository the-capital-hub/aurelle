
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CalendarDays,
  X,
} from "lucide-react";

import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Bridal",
  "Makeup",
  "Hair",
  "Skin",
  "Nails",
];

const galleryItems = [
  {
    id: 1,
    category: "Bridal",
    title: "The Bridal Elegance",
    image: "/images/gallery/gallery-bridal.jpg",
    size: "large",
  },
  {
    id: 2,
    category: "Makeup",
    title: "Soft Glam",
    image: "/images/gallery/gallery-makeup.jpg",
    size: "normal",
  },
  {
    id: 3,
    category: "Hair",
    title: "Signature Hairstyle",
    image: "/images/gallery/gallery-hair.jpg",
    size: "normal",
  },
  {
    id: 4,
    category: "Skin",
    title: "Radiant Skin",
    image: "/images/gallery/gallery-facial.jpg",
    size: "normal",
  },
  {
    id: 5,
    category: "Nails",
    title: "Elegant Nail Art",
    image: "/images/gallery/gallery-nails.jpg",
    size: "small",
  },
  {
    id: 6,
    category: "Makeup",
    title: "Eye Makeup",
    image: "/images/gallery/gallery-eye.jpg",
    size: "small",
  },
  {
    id: 7,
    category: "Hair",
    title: "Hair Care Ritual",
    image: "/images/gallery/gallery-hairwash.jpg",
    size: "wide",
  },
  {
    id: 8,
    category: "Bridal",
    title: "Bridal Hairstyle",
    image: "/images/gallery/gallery-bride.jpg",
    size: "normal",
  },
];

function Gallery() {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = gsap.timeline();

      hero
        .from(".gallery-hero-content > *", {
          opacity: 0,
          y: 25,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
        })
        .from(
          ".gallery-hero-image",
          {
            opacity: 0,
            x: 40,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.from(".gallery-feature-content > *", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-feature",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".gallery-cta-content > *", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-cta",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".gallery-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
        overwrite: true,
      }
    );
  }, [activeCategory]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <main className="aurelle-gallery-page" ref={pageRef}>

      {/* HERO */}

      <section className="gallery-hero">
        <div className="gallery-hero-background" />

        <div className="gallery-hero-container">

          <div className="gallery-hero-content">
            <div className="gallery-eyebrow">
              <span />
              GALLERY
            </div>

            <h1>
              The Art of
              <em>Beauty</em>
            </h1>

            <p>
              A glimpse into our work, where skill,
              creativity and care come together to create
              stunning transformations.
            </p>

            <a
              href="#beauty-gallery"
              className="gallery-hero-button"
            >
              Explore Our Gallery
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="gallery-hero-image">
            <img
              src="/images/services/hero.png"
              alt="AURELLE beauty editorial portrait"
              fetchPriority="high"
            />
          </div>

        </div>
      </section>

      {/* GALLERY */}

      <section
        className="gallery-main-section"
        id="beauty-gallery"
      >

        <div className="gallery-section-heading">
          <div className="gallery-eyebrow gallery-centered-eyebrow">
            <span />
            OUR GALLERY
            <span />
          </div>

          <h2>
            Beauty <em>Transformations</em>
          </h2>

          <p>
            Explore our work across bridal, makeup,
            hair, skin and nails.
          </p>
        </div>

        {/* FILTER BUTTONS */}

        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`gallery-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <button
              type="button"
              className={`gallery-card ${item.size}`}
              key={item.id}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-card-overlay">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <div className="gallery-card-view">
                  <ArrowRight size={19} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="gallery-empty">
            No images available in this category.
          </p>
        )}

      </section>

      {/* FEATURED BEAUTY MOMENTS */}

      <section className="gallery-feature">

        <div className="gallery-feature-image">
          <img
            src="/images/gallery/features.png"
            alt="AURELLE bridal beauty transformation"
            loading="lazy"
          />
        </div>

        <div className="gallery-feature-content">

          <div className="gallery-eyebrow">
            <span />
            BEAUTY MOMENTS
          </div>

          <h2>
            Creating
            <em>Timeless Looks</em>
          </h2>

          <p>
            From bridal elegance to everyday glam,
            each look reflects our passion for beauty
            and attention to detail.
          </p>

          <button
            type="button"
            className="gallery-feature-button"
            onClick={() => {
              setActiveCategory("All");
              document
                .getElementById("beauty-gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Full Gallery
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

      {/* CTA */}

      <section className="gallery-cta">
        <div className="gallery-cta-background" />

        <div className="gallery-cta-content">

          <div className="gallery-eyebrow gallery-centered-eyebrow">
            <span />
            CREATE YOUR BEAUTY MOMENT
            <span />
          </div>

          <h2>
            Ready for Your Own Transformation?
          </h2>

          <Link
            to="/booking"
            className="gallery-cta-button"
          >
            <CalendarDays size={20} />
            Book an Appointment
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

      {/* IMAGE LIGHTBOX */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

export default Gallery;
