
import React from "react";
import {
  Sparkles,
  Droplet,
  Gem,
  ShieldCheck,
  Leaf,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  Heart,
  Sun,
} from "lucide-react";

import "./FacialPricing.css";

const facialServices = [
  {
    name: "Refreshing Glow Facial",
    description:
      "A refreshing facial experience for clean, hydrated and radiant looking skin.",
    price: "₹1,200",
    image: "/images/pricing/skin-refreshing.jpg",
    icon: Sparkles,
  },
  {
    name: "O3 Radiance Glow",
    description:
      "A premium facial experience designed to refresh and brighten your skin.",
    price: "₹3,000",
    image: "/images/pricing/skin-o3.jpg",
    icon: Sparkles,
  },
  {
    name: "Skin Lightening & Whitening",
    description:
      "A specialised skincare treatment for a brighter and more even looking complexion.",
    price: "₹4,000",
    image: "/images/pricing/skin-lightening.jpg",
    icon: Leaf,
  },
  {
    name: "Hydra Facial",
    description:
      "Deep cleansing and hydration for smooth, refreshed and glowing skin.",
    price: "₹5,000",
    image: "/images/pricing/skin-hydra.jpg",
    icon: Droplet,
  },
  {
    name: "Hydra Frequency",
    description:
      "A specialised skincare experience for refreshed and revitalised looking skin.",
    price: "₹7,500",
    image: "/images/pricing/skin-frequency.jpg",
    icon: Droplet,
  },
  {
    name: "Korean Glass Facial",
    description:
      "A premium facial experience inspired by the fresh glass skin look.",
    price: "₹6,000",
    image: "/images/pricing/skin-korean.jpg",
    icon: Gem,
  },
  {
    name: "Double Chin RF",
    description:
      "A focused aesthetic treatment for the chin and lower face area.",
    price: "₹1,600",
    image: "/images/pricing/skin-double-chin.jpg",
    icon: Heart,
  },
  {
    name: "Jawline Shape",
    description:
      "A targeted treatment focused on the appearance of the jawline.",
    price: "₹1,700",
    image: "/images/pricing/skin-jawline.jpg",
    icon: ShieldCheck,
  },
  {
    name: "Under Eye Dark Circle",
    description:
      "Focused care for the delicate under eye area.",
    price: "₹2,000",
    image: "/images/pricing/skin-under-eye.jpg",
    icon: Sparkles,
  },
];

const cleanUpServices = [
  {
    name: "Whitening Clean Up",
    description:
      "A refreshing cleansing experience for brighter looking skin.",
    price: "₹999",
    image: "/images/pricing/skin-cleanup.jpg",
    icon: Sparkles,
  },
  {
    name: "Tanning & Whitening Clean Up",
    description:
      "A cleansing experience focused on tanning care and skin brightness.",
    price: "₹1,499",
    image: "/images/pricing/skin-cleanup.jpg",
    icon: Sun,
  },
  {
    name: "Radiance Glow Clean Up",
    description:
      "A refreshing skin cleansing service for a radiant looking finish.",
    price: "₹1,999",
    image: "/images/pricing/skin-refreshing.jpg",
    icon: Leaf,
  },
];

const detanAreas = [
  { area: "Face", classic: "₹500", premium: "₹600" },
  { area: "Face & Neck", classic: "₹700", premium: "₹800" },
  { area: "Face Arms", classic: "₹1,000", premium: "₹1,200" },
  { area: "Feet", classic: "₹500", premium: "₹600" },
  { area: "Full Back & Front", classic: "₹1,500", premium: "₹1,600" },
  { area: "Full Body", classic: "₹3,500", premium: "₹3,700" },
  { area: "Under Arms", classic: "₹500", premium: "₹600" },
];

const skinHighlights = [
  {
    icon: Leaf,
    title: "Advanced Treatments",
    text: "Professional skincare services",
  },
  {
    icon: Gem,
    title: "Premium Products",
    text: "Quality focused skincare",
  },
  {
    icon: ShieldCheck,
    title: "Expert Therapists",
    text: "Personalised consultation",
  },
  {
    icon: Sparkles,
    title: "Skincare Experience",
    text: "Care designed around your needs",
  },
];

function SkinServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="skin-service-card">
      <div className="skin-card-image">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
        />
        <div className="skin-card-image-shade" />
      </div>

      <div className="skin-card-content">
        <div className="skin-card-title">
          <Icon size={20} strokeWidth={1.5} />
          <h3>{service.name}</h3>
        </div>

        <p>{service.description}</p>

        <div className="skin-card-bottom">
          <strong>{service.price}</strong>

          <a href="/booking" className="skin-book-link">
            Book Now
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FacialPricing() {
  return (
    <main className="pk-skin-page">

      {/* HERO */}

      <section className="skin-hero">
        <div className="skin-hero-background" />

        <div className="skin-container skin-hero-inner">
          <a href="/pricing" className="skin-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </a>

          <div className="skin-hero-content">
            <span className="skin-eyebrow">
              <span />
              AURELLE SKIN CARE
            </span>

            <h1>
              Facial &amp;
              <em>Skin Care</em>
            </h1>

            <p>
              Discover facial treatments, refreshing clean ups
              and detan services designed around your skincare needs.
            </p>

            <a
              href="#skin-services"
              className="skin-primary-button"
            >
              Explore Skin Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="skin-highlights">
        <div className="skin-container skin-highlights-grid">
          {skinHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div className="skin-highlight" key={item.title}>
                <Icon size={29} strokeWidth={1.4} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FACIAL SERVICES */}

      <section
        className="skin-services-section"
        id="skin-services"
      >
        <div className="skin-container">

          <div className="skin-section-heading">
            <span className="skin-eyebrow skin-centered">
              <span />
              OUR FACIAL SERVICES
              <span />
            </span>

            <h2>
              Facial Treatments &amp; <em>Skin Care</em>
            </h2>

            <p>
              Explore our professional facial treatments and
              choose the experience that suits your skincare needs.
            </p>
          </div>

          <div className="skin-services-grid">
            {facialServices.map((service) => (
              <SkinServiceCard
                service={service}
                key={service.name}
              />
            ))}
          </div>

          {/* CLEAN UP SERVICES */}

          <div className="skin-section-heading skin-subsection-heading">
            <span className="skin-eyebrow skin-centered">
              <span />
              REFRESHING SKIN CARE
              <span />
            </span>

            <h2>
              Clean Up <em>Services</em>
            </h2>

            <p>
              Professional cleansing options for refreshed
              and radiant looking skin.
            </p>
          </div>

          <div className="skin-services-grid">
            {cleanUpServices.map((service) => (
              <SkinServiceCard
                service={service}
                key={service.name}
              />
            ))}
          </div>

          {/* DETAN PACK */}

          <div className="skin-section-heading skin-subsection-heading">
            <span className="skin-eyebrow skin-centered">
              <span />
              CLASSIC & PREMIUM CARE
              <span />
            </span>

            <h2>
              Detan <em>Pack</em>
            </h2>

            <p>
              Choose the treatment area and the detan option
              that suits your preference.
            </p>
          </div>

          <div className="skin-detan-table-wrap">
            <table className="skin-detan-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Classic</th>
                  <th>Premium</th>
                </tr>
              </thead>

              <tbody>
                {detanAreas.map((item) => (
                  <tr key={item.area}>
                    <td>{item.area}</td>
                    <td>{item.classic}</td>
                    <td>{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* INFORMATION */}

          <div className="skin-pricing-info">
            <div className="skin-info-heading">
              <Info size={27} strokeWidth={1.5} />
              <h3>Pricing Information</h3>
            </div>

            <div className="skin-info-details">
              <p>
                <Check size={16} />
                Prices are displayed according to the salon menu.
              </p>

              <p>
                <Check size={16} />
                Final treatment selection may depend on skin type
                and consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="skin-final-cta">
        <div className="skin-final-background" />

        <div className="skin-container skin-final-inner">
          <div className="skin-final-content">
            <span className="skin-eyebrow">
              <span />
              EXPERIENCE EXPERT SKIN CARE
            </span>

            <h2>
              Book Your Skin Care
              <em>Session Today</em>
            </h2>

            <p>
              Let our skincare experts help you choose
              the right treatment for your needs.
            </p>

            <a
              href="/booking"
              className="skin-primary-button"
            >
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
