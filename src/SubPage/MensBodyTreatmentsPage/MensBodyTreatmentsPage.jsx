
import { Link } from "react-router-dom";
import {
  Sparkles,
  Droplets,
  Flower2,
  ShieldCheck,
  Star,
  ArrowRight,
  CalendarDays,
  Waves,
  Heart
} from "lucide-react";
import "./MensBodyTreatmentsPage.css";

const categories = [
  { name: "Hair & Styling", slug: "hair" },
  { name: "Men's Grooming", slug: "grooming" },
  { name: "Skin & Facial Care", slug: "skin" },
  { name: "Manicure & Pedicure", slug: "pedicure" },
  { name: "Body Treatments", slug: "body-spa" },
  { name: "Groom Makeup", slug: "groom-makeup" },
  { name: "Pre Groom Package", slug: "packages" },
];

const bodyServices = [
  {
    number: "01",
    title: "Full Body Massage",
    description:
      "A relaxing full body massage experience designed to help you unwind and feel refreshed.",
    image: "/images/services/body-treatments/full-body-massage.jpg",
  },
  {
    number: "02",
    title: "Full Body Polishing Classic",
    description:
      "A complete body polishing treatment to exfoliate and refresh the skin.",
    image: "/images/services/body-treatments/classic-body-polishing.jpg",
  },
  {
    number: "03",
    title: "Full Premium Body Polishing",
    description:
      "An elevated body polishing experience with premium care for smoother, refreshed looking skin.",
    image: "/images/services/body-treatments/premium-body-polishing.jpg",
  },
  {
    number: "04",
    title: "Premium Full Body Massage",
    description:
      "A premium massage experience for relaxation and a moment of personal care.",
    image: "/images/services/body-treatments/premium-body-massage.jpg",
  },
];

const detanServices = [
  {
    name: "Face",
    classic: "₹500",
    premium: "₹600",
  },
  {
    name: "Face & Neck",
    classic: "₹700",
    premium: "₹800",
  },
  {
    name: "Face Arms",
    classic: "₹1,000",
    premium: "₹1,200",
  },
  {
    name: "Feet",
    classic: "₹500",
    premium: "₹600",
  },
  {
    name: "Full Back & Front",
    classic: "₹1,500",
    premium: "₹1,600",
  },
  {
    name: "Full Body",
    classic: "₹3,500",
    premium: "₹3,700",
  },
  {
    name: "Under Arms",
    classic: "₹500",
    premium: "₹600",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Skin Refresh",
    description: "Treatments designed to refresh and care for your skin.",
  },
  {
    icon: Droplets,
    title: "Professional Care",
    description: "A thoughtful approach to body care and grooming.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Experience",
    description: "Clean tools and careful salon hygiene practices.",
  },
  {
    icon: Heart,
    title: "Relaxing Rituals",
    description: "Take time out for a comfortable salon experience.",
  },
];

export default function MensBodyTreatmentsPage() {
  return (
    <main className="mbt-page">

      {/* HERO */}
      <section className="mbt-hero">
        <img
          src="/images/services/body-treatments/body-hero.jpg"
          alt="AURELLE men's body treatment experience"
          className="mbt-hero-image"
        />

        <div className="mbt-hero-overlay" />

        <div className="mbt-hero-content">
          <div className="mbt-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Men's Body Treatments</span>
          </div>

          <span className="mbt-eyebrow">
            AURELLE MEN'S BODY CARE COLLECTION
          </span>

          <h1>
            Body Care <em>& Wellness</em>
          </h1>

          <p>
            Discover relaxing body massages, premium body polishing and
            refreshing detan treatments created for your personal care.
          </p>

          <div className="mbt-hero-actions">
            <Link to="/booking" className="mbt-button mbt-button-light">
              Book Appointment <ArrowRight size={17} />
            </Link>

            <a href="#mbt-services" className="mbt-button mbt-button-outline">
              Explore Treatments
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="mbt-category-nav" aria-label="Men's service categories">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/services/men/${category.slug}`}
            className={`mbt-category ${
              category.slug === "body-spa" ? "is-active" : ""
            }`}
          >
            <span>{category.name}</span>
          </Link>
        ))}
      </nav>

      {/* INTRO */}
      <section className="mbt-intro mbt-container">
        <div>
          <span className="mbt-eyebrow mbt-dark-eyebrow">
            THE ART OF BODY CARE
          </span>
          <h2>
            Restore Your Balance.
            <br />
            <em>Refresh Your Senses.</em>
          </h2>
        </div>

        <p>
          From relaxing massage experiences to professional body polishing
          and detan care, explore treatments that make time for you.
        </p>
      </section>

      {/* BODY MASSAGE AND POLISHING */}
      <section className="mbt-services mbt-container" id="mbt-services">
        <div className="mbt-section-heading">
          <div>
            <span className="mbt-eyebrow mbt-dark-eyebrow">
              SIGNATURE BODY COLLECTION
            </span>
            <h2>
              Body Massage <em>& Polishing</em>
            </h2>
          </div>

          <p>
            Enjoy a considered selection of body care treatments, from
            classic polishing to premium massage experiences.
          </p>
        </div>

        <div className="mbt-service-grid">
          {bodyServices.map((service) => (
            <article className="mbt-service-card" key={service.number}>
              <div className="mbt-service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <span>{service.number}</span>
              </div>

              <div className="mbt-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/booking" className="mbt-service-link">
                  Book Treatment <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mbt-pricing-link">
          <Link
            to="/pricing/men/body-treatments"
            className="mbt-button mbt-button-dark"
          >
            View Body Treatment Prices <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* DETAN SECTION */}
      <section className="mbt-detan">
        <div className="mbt-detan-inner mbt-container">
          <div className="mbt-detan-visual">
            <img
              src="/images/services/body-treatments/detan-treatment.jpg"
              alt="Professional detan body care treatment"
              loading="lazy"
            />

            <div className="mbt-image-caption">
              <span className="mbt-eyebrow">AURELLE SKIN CARE</span>
              <h3>Refresh Your Skin</h3>
            </div>
          </div>

          <div className="mbt-detan-content">
            <span className="mbt-eyebrow mbt-dark-eyebrow">
              CLASSIC & PREMIUM CARE
            </span>

            <h2>
              Detan <em>Pack</em>
            </h2>

            <p>
              Choose from classic and premium detan options for selected
              areas or a complete body care experience.
            </p>

            <div className="mbt-detan-table-wrap">
              <table className="mbt-detan-table">
                <thead>
                  <tr>
                    <th>Treatment</th>
                    <th>Classic</th>
                    <th>Premium</th>
                  </tr>
                </thead>

                <tbody>
                  {detanServices.map((service) => (
                    <tr key={service.name}>
                      <td>{service.name}</td>
                      <td>{service.classic}</td>
                      <td>{service.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mbt-tax-note">
              18% GST applicable as mentioned in the service catalogue.
            </p>

            <Link
              to="/pricing/men/body-treatments"
              className="mbt-button mbt-button-dark"
            >
              Explore Price Menu <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mbt-highlights">
        <div className="mbt-container">
          <div className="mbt-highlights-heading">
            <span className="mbt-eyebrow mbt-dark-eyebrow">
              THE AURELLE EXPERIENCE
            </span>
            <h2>
              Thoughtful Care.
              <br />
              <em>Exceptional Comfort.</em>
            </h2>
          </div>

          <div className="mbt-highlights-grid">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article className="mbt-highlight" key={title}>
                <Icon size={30} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE BANNER */}
      <section className="mbt-signature">
        <div className="mbt-signature-image">
          <img
            src="/images/services/body-treatments/body-signature.jpg"
            alt="AURELLE signature body wellness experience"
            loading="lazy"
          />
        </div>

        <div className="mbt-signature-content">
          <span className="mbt-eyebrow">
            YOUR PERSONAL WELLNESS MOMENT
          </span>

          <h2>
            Make Time
            <br />
            <em>For Yourself.</em>
          </h2>

          <p>
            Step away from the everyday and enjoy a body care experience
            designed around relaxation and personal attention.
          </p>

          <Link to="/booking" className="mbt-button mbt-button-light">
            Reserve Your Visit <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mbt-final-cta">
        <div>
          <span className="mbt-eyebrow">AURELLE MEN'S COLLECTION</span>
          <h2>
            Your Time. Your <em>Wellness.</em>
          </h2>
        </div>

        <p>
          Discover a more refreshing approach to body care at AURELLE.
        </p>

        <Link to="/booking" className="mbt-button mbt-button-light">
          <CalendarDays size={17} />
          Book Appointment
          <ArrowRight size={17} />
        </Link>
      </section>

    </main>
  );
}
