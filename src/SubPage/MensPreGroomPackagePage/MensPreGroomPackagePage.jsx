
import { Link } from "react-router-dom";
import {
  Sparkles,
  Scissors,
  Hand,
  Footprints,
  Droplets,
  Flower2,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  Crown,
  UserRound,
  Heart
} from "lucide-react";
import "./MensPreGroomPackagePage.css";

const categories = [
  { name: "Hair & Styling", slug: "hair" },
  { name: "Men's Grooming", slug: "grooming" },
  { name: "Skin & Facial Care", slug: "skin" },
  { name: "Manicure & Pedicure", slug: "pedicure" },
  { name: "Body Treatments", slug: "body-spa" },
  { name: "Groom Makeup", slug: "groom-makeup" },
  { name: "Pre Groom Package", slug: "packages" },
];

const inclusions = [
  {
    icon: UserRound,
    title: "Free Consultation",
    description: "A consultation to discuss your grooming preferences.",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    description: "Professional foot care for a refreshed and groomed finish.",
  },
  {
    icon: Hand,
    title: "Manicure",
    description: "Hand and nail grooming for a neat appearance.",
  },
  {
    icon: Sparkles,
    title: "Cleanup",
    description: "A refreshing cleanup treatment for your skin.",
  },
  {
    icon: Droplets,
    title: "Detan Neck",
    description: "Detan care for the neck area.",
  },
  {
    icon: Sparkles,
    title: "Face & Neck Detan",
    description: "Detan treatment for the face and neck.",
  },
  {
    icon: Crown,
    title: "Premium Facial",
    description: "A premium facial treatment as part of your package.",
  },
  {
    icon: Flower2,
    title: "Korean Hair Spa",
    description: "A Korean hair spa experience for your grooming routine.",
  },
  {
    icon: Heart,
    title: "Full Premium Body Polishing",
    description: "A full body premium polishing treatment.",
  },
  {
    icon: Scissors,
    title: "Hair Cut",
    description: "Professional haircut and styling.",
  },
  {
    icon: UserRound,
    title: "Beard Trim / Shaving",
    description: "Beard grooming or shaving as preferred.",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Complete Grooming",
    description: "A collection of grooming services in one package.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description: "Enjoy professional attention throughout your visit.",
  },
  {
    icon: Heart,
    title: "Relaxing Experience",
    description: "Make time for yourself before your special occasion.",
  },
];

export default function MensPreGroomPackagePage() {
  return (
    <main className="mpg-page">

      {/* HERO SECTION */}
      <section className="mpg-hero">
        <img
          src="/images/services/pre-groom-package/pre-groom-hero.jpg"
          alt="AURELLE men's pre groom package"
          className="mpg-hero-image"
        />

        <div className="mpg-hero-overlay" />

        <div className="mpg-hero-content">
          <div className="mpg-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Pre Groom Package</span>
          </div>

          <span className="mpg-eyebrow">
            AURELLE MEN'S SIGNATURE COLLECTION
          </span>

          <h1>
            The Complete <em>Grooming Ritual</em>
          </h1>

          <p>
            A thoughtfully curated grooming package designed to help
            you look and feel your best before your special occasion.
          </p>

          <div className="mpg-hero-actions">
            <Link to="/booking" className="mpg-button mpg-button-light">
              Book Your Package <ArrowRight size={17} />
            </Link>

            <a href="#mpg-inclusions" className="mpg-button mpg-button-outline">
              Explore Inclusions
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="mpg-category-nav" aria-label="Men's service categories">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/services/men/${category.slug}`}
            className={`mpg-category ${
              category.slug === "packages" ? "is-active" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </nav>

      {/* INTRO */}
      <section className="mpg-intro mpg-container">
        <div>
          <span className="mpg-eyebrow mpg-dark-eyebrow">
            THE AURELLE PRE GROOM EXPERIENCE
          </span>

          <h2>
            Everything You Need.
            <br />
            <em>One Complete Experience.</em>
          </h2>
        </div>

        <p>
          From skin and hair care to hand, foot and body treatments,
          this package brings together a complete selection of grooming
          services for your special occasion.
        </p>
      </section>

      {/* PACKAGE PRICE CARD */}
      <section className="mpg-package-section mpg-container">
        <div className="mpg-package-image">
          <img
            src="/images/services/pre-groom-package/pre-groom-experience.jpg"
            alt="AURELLE pre groom salon experience"
            loading="lazy"
          />

          <div className="mpg-image-caption">
            <span className="mpg-eyebrow">THE GENTLEMAN'S EDITION</span>
            <h3>Prepare For Your Moment</h3>
          </div>
        </div>

        <div className="mpg-package-card">
          <span className="mpg-eyebrow mpg-dark-eyebrow">
            EXCLUSIVE GROOM PACKAGE
          </span>

          <h2>
            Pre Groom <em>Package</em>
          </h2>

          <p className="mpg-package-description">
            A complete grooming experience with carefully selected
            treatments for your special day.
          </p>

          <div className="mpg-price-details">
            <div className="mpg-original-price">
              <span>Original Package Value</span>
              <del>₹21,696</del>
            </div>

            <div className="mpg-discount">
              <span>Package Discount</span>
              <strong>25% OFF</strong>
            </div>
          </div>

          <div className="mpg-final-price">
            <span>Your Package Price</span>
            <strong>₹16,272</strong>
          </div>

          <p className="mpg-gst-note">
            18% GST applicable as mentioned in the catalogue.
          </p>

          <Link to="/booking" className="mpg-button mpg-button-dark">
            Book This Package <ArrowRight size={17} />
          </Link>

          <p className="mpg-package-note">
            Package inclusions are based on the AURELLE men's service catalogue.
          </p>
        </div>
      </section>

      {/* PACKAGE INCLUSIONS */}
      <section className="mpg-inclusions" id="mpg-inclusions">
        <div className="mpg-container">
          <div className="mpg-section-heading">
            <span className="mpg-eyebrow mpg-dark-eyebrow">
              YOUR PACKAGE INCLUDES
            </span>

            <h2>
              Eleven Steps To
              <br />
              <em>Your Best Look.</em>
            </h2>

            <p>
              Explore the complete collection of services included
              in the AURELLE Pre Groom Package.
            </p>
          </div>

          <div className="mpg-inclusion-grid">
            {inclusions.map(({ icon: Icon, title, description }, index) => (
              <article className="mpg-inclusion-card" key={title}>
                <div className="mpg-inclusion-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={26} strokeWidth={1.4} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="mpg-highlights">
        <div className="mpg-container">
          <div className="mpg-highlights-heading">
            <span className="mpg-eyebrow mpg-dark-eyebrow">
              THE AURELLE DIFFERENCE
            </span>

            <h2>
              A Complete Experience.
              <br />
              <em>Thoughtfully Curated.</em>
            </h2>
          </div>

          <div className="mpg-highlight-grid">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article className="mpg-highlight-card" key={title}>
                <Icon size={30} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE SECTION */}
      <section className="mpg-signature">
        <div className="mpg-signature-image">
          <img
            src="/images/services/pre-groom-package/pre-groom-signature.jpg"
            alt="AURELLE men's premium grooming experience"
            loading="lazy"
          />
        </div>

        <div className="mpg-signature-content">
          <span className="mpg-eyebrow">
            YOUR SPECIAL DAY STARTS HERE
          </span>

          <h2>
            Look Refined.
            <br />
            <em>Feel Confident.</em>
          </h2>

          <p>
            Give yourself the time and attention you deserve with
            AURELLE's complete pre groom experience.
          </p>

          <Link to="/booking" className="mpg-button mpg-button-light">
            Reserve Your Experience <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mpg-final-cta">
        <div>
          <span className="mpg-eyebrow">
            AURELLE MEN'S PRE GROOM COLLECTION
          </span>

          <h2>
            Your Occasion. Your <em>Signature.</em>
          </h2>
        </div>

        <p>
          Begin your special occasion with a complete grooming experience.
        </p>

        <Link to="/booking" className="mpg-button mpg-button-light">
          <CalendarDays size={17} />
          Book Your Package
          <ArrowRight size={17} />
        </Link>
      </section>

    </main>
  );
}
