
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import "./BeautyGallery.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All Work",
  "Hair Styling",
  "Men's Grooming",
  "Makeup & Bridal",
  "Skin & Facials",
];

const galleryItems = [
  {
    id: 1,
    category: "Makeup & Bridal",
    image: "/images/beauty/gallery-bridal.jpg",
    alt: "Indian bride with elegant professional bridal makeup",
    size: "tall",
  },
  {
    id: 2,
    category: "Skin & Facials",
    image: "/images/beauty/gallery-facial.jpg",
    alt: "Professional facial skincare treatment",
    size: "small",
  },
  {
    id: 3,
    category: "Hair Styling",
    image: "/images/beauty/gallery-hair.jpg",
    alt: "Professional hairstyling and hair transformation",
    size: "small",
  },
  {
    id: 4,
    category: "Men's Grooming",
    image: "/images/beauty/gallery-bride.jpg",
    alt: "Indian man with premium haircut and beard styling",
    size: "tall",
  },
  {
    id: 5,
    category: "Makeup & Bridal",
    image: "/images/beauty/gallery-makeup.jpg",
    alt: "Professional makeup look created by salon experts",
    size: "small",
  },
  {
    id: 6,
    category: "Hair Styling",
    image: "/images/beauty/gallery-hairwash.jpg",
    alt: "Relaxing professional hair wash and hair care service",
    size: "small",
  },
];

function BeautyGallery() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredItems =
    activeCategory === "All Work"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-heading > *", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".gallery-filter", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-filters",
          start: "top 90%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray(
      ".gallery-card",
      section
    );

    gsap.fromTo(
      cards,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.09,
        ease: "power2.out",
        overwrite: true,
      }
    );
  }, [activeCategory]);

  return (
    <section
      className="beauty-gallery"
      ref={sectionRef}
    >
      <div className="gallery-container">

        <div className="gallery-heading">
          <div className="gallery-brand">
            <span />
            AURELLE
            <span />
          </div>

          

          <h2>
            A GLIMPSE OF <em>OUR WORK</em>
          </h2>

          <p className="gallery-intro">
            Explore our signature hairstyles, men's grooming,
            bridal transformations and personalised beauty
            experiences, all crafted with passion and expertise.
          </p>
        </div>

        <div
          className="gallery-filters"
          role="group"
          aria-label="Filter gallery by service"
        >
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

        <div className="gallery-grid" key={activeCategory}>
          {filteredItems.map((item) => (
            <article
              className={`gallery-card gallery-${item.size}`}
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-image-overlay">
                <span>{item.category}</span>
                <ArrowUpRight size={22} />
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-bottom">
          <span />

          <Link
            to="/gallery"
            className="gallery-view-button"
          >
            VIEW FULL GALLERY
            <ArrowUpRight size={19} />
          </Link>

          <span />
        </div>

      </div>
    </section>
  );
}

export default BeautyGallery;
