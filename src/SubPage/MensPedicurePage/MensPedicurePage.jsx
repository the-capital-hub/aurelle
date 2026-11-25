import { Link } from "react-router-dom";
import {
  Scissors,
  UserRound,
  Sparkles,
  Hand,
  Flower2,
  Gem,
  Heart,
  ShieldCheck,
  Star,
  CalendarDays,
  ArrowRight,
  Droplets,
} from "lucide-react";
import "./MensPedicurePage.css";

const categories = [
  { name: "Hair & Styling", slug: "hair", icon: Scissors },
  { name: "Men's Grooming", slug: "grooming", icon: UserRound },
  { name: "Skin & Facial Care", slug: "skin", icon: Sparkles },
  { name: "Manicure & Pedicure", slug: "pedicure", icon: Hand },
  { name: "Body Treatments", slug: "body-spa", icon: Flower2 },
  { name: "Groom Makeup", slug: "groom-makeup", icon: Gem },
  { name: "Pre Groom Package", slug: "packages", icon: Heart },
];

const services = [
  [
    "01",
    "Classic Pedicure & Manicure",
    "A complete hand and foot care experience with professional grooming and a refreshing finish.",
    "pedicure-manicure.jpg",
  ],
  [
    "02",
    "Classic Pedicure",
    "Professional foot care designed to cleanse, refresh and groom your feet.",
    "pedicure-footcare.jpg",
  ],
  [
    "03",
    "Classic Manicure",
    "A refreshing hand care treatment with nail grooming and a neat finish.",
    "pedicure-nailcare.jpg",
  ],
  [
    "04",
    "Foot Logic Pedicure & Manicure",
    "A specialised hand and foot care experience for a refreshed and well groomed appearance.",
    "pedicure-spa.jpg",
  ],
  [
    "05",
    "Foot Logic Pedicure",
    "A specialised foot care ritual focused on cleansing and refreshing tired feet.",
    "pedicure-footcare.jpg",
  ],
  [
    "06",
    "Foot Logic Manicure",
    "A specialised hand care treatment focused on nail grooming and a clean finish.",
    "pedicure-nailcare.jpg",
  ],
  [
    "07",
    "Ice Cream Pedicure & Manicure",
    "An indulgent hand and foot care experience for beautifully refreshed skin.",
    "pedicure-spa.jpg",
  ],
  [
    "08",
    "Ice Cream Pedicure",
    "A soothing foot care experience designed to leave your feet feeling refreshed.",
    "pedicure-footcare.jpg",
  ],
  [
    "09",
    "Ice Cream Manicure",
    "A relaxing manicure experience that leaves your hands feeling clean and refreshed.",
    "pedicure-nailcare.jpg",
  ],
  [
    "10",
    "Lotus Glow Pedicure & Manicure",
    "A premium hand and foot care ritual focused on cleansing and a refreshed finish.",
    "pedicure-spa.jpg",
  ],
  [
    "11",
    "Lotus Glow Pedicure",
    "A premium foot care experience designed to refresh and groom your feet.",
    "pedicure-footcare.jpg",
  ],
  [
    "12",
    "Lotus Glow Manicure",
    "A luxurious hand care treatment designed to nourish and refresh your hands.",
    "pedicure-nailcare.jpg",
  ],
  [
    "13",
    "Bubblegum Fresh Pedicure & Manicure",
    "A refreshing hand and foot care experience for a clean and polished finish.",
    "pedicure-spa.jpg",
  ],
  [
    "14",
    "Bubblegum Fresh Pedicure",
    "A refreshing foot care ritual for clean, comfortable and well groomed feet.",
    "pedicure-footcare.jpg",
  ],
  [
    "15",
    "Bubblegum Fresh Manicure",
    "A refreshing manicure ritual that gives your hands a clean and groomed finish.",
    "pedicure-nailcare.jpg",
  ],
].map(([number, title, description, image]) => ({
  number,
  title,
  description,
  image: `/images/services/pedicure/${image}`,
}));

const benefits = [
  {
    icon: Star,
    title: "Expert Care",
    description: "Professional attention to hands, feet and nails.",
  },
  {
    icon: Droplets,
    title: "Quality Products",
    description: "Carefully selected professional care products.",
  },
  {
    icon: Heart,
    title: "Relaxing Experience",
    description: "Enjoy a comfortable and refreshing salon visit.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Practices",
    description: "Clean tools and careful salon hygiene.",
  },
  {
    icon: Sparkles,
    title: "Well Groomed Finish",
    description: "Thoughtful finishing touches for a polished look.",
  },
];

export default function MensPedicurePage() {
  return (
    <main className="mp-page">
      {/* HERO SECTION */}
      <section className="mp-hero">
        <img
          className="mp-hero-image"
          src="/images/services/pedicure1/pedicure-hero.jpg"
          alt="AURELLE men's manicure and pedicure experience"
        />

        <div className="mp-hero-shade" />

        <div className="mp-hero-content">
          <div className="mp-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Men's Manicure & Pedicure</span>
          </div>

          <span className="mp-eyebrow">
            AURELLE MEN'S HAND & FOOT COLLECTION
          </span>

          <h1>
            Men's Manicure <em>&</em> Pedicure
          </h1>

          <p>
            Discover professional hand and foot care, refreshing spa experiences
            and premium grooming treatments at AURELLE.
          </p>

          <div className="mp-actions">
            <Link to="/booking" className="mp-button mp-button-light">
              Book This Service <ArrowRight size={17} />
            </Link>

            <a href="#mp-services" className="mp-button mp-button-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="mp-category-nav" aria-label="Men's service categories">
        {categories.map(({ name, slug, icon: Icon }) => (
          <Link
            key={slug}
            to={`/services/men/${slug}`}
            className={`mp-category ${slug === "pedicure" ? "is-active" : ""}`}
          >
            <Icon size={27} strokeWidth={1.35} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>

      {/* SERVICES SECTION */}
      <section className="mp-services section-shell" id="mp-services">
        <div className="mp-section-heading">
          <div>
            <span className="mp-eyebrow mp-eyebrow-dark">
              MEN'S HAND & FOOT CARE
            </span>

            <h2>
              Relax, Refresh
              <br />
              <em>And Rejuvenate</em>
            </h2>
          </div>

          <p>
            Give your hands and feet the care they deserve. Explore our complete
            collection of professional manicure and pedicure treatments.
          </p>
        </div>

        <div className="mp-service-grid">
          {services.map((service) => (
            <article className="mp-service-card" key={service.number}>
              <div className="mp-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="mp-number">{service.number}</span>
              </div>

              <div className="mp-card-copy">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <Link
                  to="/booking"
                  className="mp-card-arrow"
                  aria-label={`Book ${service.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mp-price-action">
          <Link
            to="/pricing/men/pedicure-manicure"
            className="mp-button mp-button-dark"
          >
            View Men's Price Menu <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="mp-benefits">
        <div className="mp-benefits-inner">
          <div className="mp-benefits-heading">
            <span className="mp-eyebrow mp-eyebrow-dark">
              THE AURELLE DIFFERENCE
            </span>

            <h2>
              Care That
              <br />
              <em>Goes Further</em>
            </h2>
          </div>

          {benefits.map(({ icon: Icon, title, description }) => (
            <div className="mp-benefit" key={title}>
              <Icon size={29} strokeWidth={1.35} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE */}
      <section className="mp-signature">
        <div className="mp-signature-image">
          <img
            src="/images/services/pedicure1/pedicure-signature.jpg"
            alt="AURELLE signature men's hand and foot care ritual"
            loading="lazy"
          />
        </div>

        <div className="mp-signature-content">
          <span className="mp-eyebrow">SIGNATURE SPA EXPERIENCE</span>

          <h2>
            AURELLE
            <br />
            <em>Gentleman's Hand & Foot Ritual</em>
          </h2>

          <p>
            Take a moment for yourself with a relaxing hand and foot care
            experience featuring professional grooming and refreshing
            treatments.
          </p>

          <Link to="/booking" className="mp-button mp-button-light">
            Book Your Experience <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mp-final-cta">
        <div>
          <span className="mp-eyebrow">A MOMENT JUST FOR YOU</span>
          <h2>
            Step Into Complete <em>Relaxation.</em>
          </h2>
        </div>

        <p>
          Give your hands and feet a refreshing experience with professional
          care at AURELLE.
        </p>

        <Link to="/booking" className="mp-button mp-button-light">
          <CalendarDays size={17} />
          Book Appointment
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
