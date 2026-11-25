
import React from "react";
import { Link } from "react-router-dom";

import {
  Scissors,
  UserRound,
  Palette,
  Droplet,
  Gift,
  ArrowRight,
  CalendarDays,
  Check,
  Info,
  ChevronLeft,
  ShieldCheck,
  Leaf,
  Star,
  Sparkles,
  Footprints,
  Heart,
  Flower2,
} from "lucide-react";

import "./MensGroomingPricing.css";

/* =========================================
   MEN'S PRICE CATEGORIES
========================================= */

const groomingCategories = [
  { id: "haircut", title: "Hair Cut & Style", icon: Scissors },
  { id: "head-massage", title: "Head Massage", icon: UserRound },
  { id: "hair-spa", title: "Hair Spa", icon: Droplet },
  { id: "rebonding", title: "Hair Rebonding", icon: Sparkles },
  { id: "colour", title: "Hair Colouring", icon: Palette },
  { id: "facial", title: "Facial", icon: Heart },
  { id: "cleanup", title: "Clean Up", icon: Sparkles },
  { id: "detan", title: "Detan Pack", icon: Droplet },
  { id: "body", title: "Body Polishing & Massage", icon: Flower2 },
  { id: "pedicure", title: "Pedicure & Manicure", icon: Footprints },
  { id: "makeup", title: "Groom Makeup", icon: UserRound },
  { id: "packages", title: "Pre Groom Package", icon: Gift },
];

/* =========================================
   MEN'S SERVICES AND PRICES
========================================= */

const groomingServices = [
  {
    id: "haircut",
    number: "01",
    title: "Hair Cut & Style",
    subtitle: "Professional haircuts and grooming.",
    description: "Choose from professional haircut, beard styling, shaving and hair setting services.",
    image: "/images/pricing/mens-haircut.jpg",
    icon: Scissors,
    services: [
      { name: "Combo: Hair Cut + Beard Trim or Shaving + Hair Wash & Setting + Classic Head Massage + Eyebrow Threading", price: "₹899" },
      { name: "Kids Hair Cut", price: "₹299" },
      { name: "Hair Cut", price: "₹399" },
      { name: "Beard Trim", price: "₹200" },
      { name: "Beard Design", price: "₹200" },
      { name: "Shaving", price: "₹200" },
      { name: "Hair Cut & Beard", price: "₹500" },
      { name: "Hair Wash & Setting", price: "₹200" },
    ],
  },
  {
    id: "head-massage",
    number: "02",
    title: "Head Massage",
    subtitle: "Relaxing head and hair care.",
    description: "Relax with classic, premium and oil based head massage experiences.",
    image: "/images/pricing/mens-hair-spa.jpg",
    icon: UserRound,
    services: [
      { name: "Classic Head Massage", price: "₹399" },
      { name: "Relaxing Head Massage", price: "₹799" },
      { name: "Premium Hot Oil Massage", price: "₹999" },
      { name: "Moroccan Oil Massage", price: "₹1,499" },
    ],
  },
  {
    id: "hair-spa",
    number: "03",
    title: "Hair Spa & Treatments",
    subtitle: "Professional hair and scalp care.",
    description: "Explore nourishing hair spa and specialised scalp treatment options.",
    image: "/images/pricing/mens-hair-spa.jpg",
    icon: Droplet,
    services: [
      { name: "Spa Essence", price: "₹799" },
      { name: "Tribond Hair Spa", price: "₹1,200" },
      { name: "Luxe Rejuvenation", price: "₹1,499" },
      { name: "Reborn Hair Spa", price: "₹1,899" },
      { name: "Royal Bliss Hair Spa", price: "₹2,399" },
      { name: "Moroccan Oil Hair Spa", price: "₹2,699" },
      { name: "Anti Dandruff & Hairfall Treatment", price: "₹2,500" },
      { name: "Anti Dandruff Treatment", price: "₹1,699" },
      { name: "Anti Hair Loss Treatment", price: "₹1,699" },
      { name: "Laser Anti Dandruff & Hairloss Treatment", price: "₹3,000" },
      { name: "Laser Anti Dandruff Treatment", price: "₹1,999" },
      { name: "Laser Anti Hair Treatment", price: "₹1,999" },
      { name: "Korean Hair Spa", price: "₹3,499" },
    ],
  },
  {
    id: "rebonding",
    number: "04",
    title: "Hair Rebonding & Treatments",
    subtitle: "Advanced hair transformation.",
    description: "Professional smoothening and hair treatment services.",
    image: "/images/pricing/mens-haircut.jpg",
    icon: Sparkles,
    services: [
      { name: "Straightening & Smoothening", price: "₹1,999" },
      { name: "Permanent Blowdry", price: "₹1,999" },
      { name: "Keratin Treatment", price: "₹2,599" },
      { name: "Nanoplastia", price: "₹3,000" },
      { name: "Botox Treatment", price: "₹3,499" },
    ],
  },
  {
    id: "colour",
    number: "05",
    title: "Hair Colouring",
    subtitle: "Professional colour and highlights.",
    description: "Refresh your look with professional hair and beard colouring.",
    image: "/images/pricing/mens-hair-colour.jpg",
    icon: Palette,
    services: [
      { name: "Per Streak", price: "₹250" },
      { name: "Global Colour", price: "₹1,300" },
      { name: "Global Colour Without Ammonia", price: "₹1,600" },
      { name: "Highlights", price: "₹2,399" },
      { name: "Beard Colouring", price: "₹499" },
    ],
  },
  {
    id: "facial",
    number: "06",
    title: "Facial",
    subtitle: "Premium skincare experiences.",
    description: "Discover professional facial and specialised skincare treatments.",
    image: "/images/services/mens-skin/mens-deep-cleansing.jpg",
    icon: Heart,
    services: [
      { name: "Refreshing Glow Facial", price: "₹1,200" },
      { name: "O3 Radiance Glow", price: "₹3,000" },
      { name: "Skin Lightening Whitening", price: "₹4,000" },
      { name: "Hydra Facial", price: "₹5,000" },
      { name: "Hydra Frequency", price: "₹7,500" },
      { name: "Korean Glass Facial", price: "₹6,000" },
      { name: "Double Chin Treatment (RF)", price: "₹1,600" },
      { name: "Jawline Shape Treatment", price: "₹1,700" },
      { name: "Under Eye (Dark Circle) Treatment", price: "₹2,000" },
    ],
  },
  {
    id: "cleanup",
    number: "07",
    title: "Clean Up",
    subtitle: "Refreshing skin cleansing.",
    description: "Choose a cleansing experience designed to refresh your skin.",
    image: "/images/services/mens-skin/mens-charcoal-facial.jpg",
    icon: Sparkles,
    services: [
      { name: "Whitening Clean Up", price: "₹999" },
      { name: "Tanning & Whitening Clean Up", price: "₹1,499" },
      { name: "Radiance Glow Clean Up", price: "₹1,999" },
    ],
  },
  {
    id: "detan",
    number: "08",
    title: "Detan Pack",
    subtitle: "Classic and premium detan care.",
    description: "Choose the treatment area and preferred detan option.",
    image: "/images/services/mens-skin/mens-tan-removal.jpg",
    icon: Droplet,
    services: [
      { name: "Face", price: "Classic ₹500 | Premium ₹600" },
      { name: "Face & Neck", price: "Classic ₹700 | Premium ₹800" },
      { name: "Face Arms", price: "Classic ₹1,000 | Premium ₹1,200" },
      { name: "Feet", price: "Classic ₹500 | Premium ₹600" },
      { name: "Full Back & Front", price: "Classic ₹1,500 | Premium ₹1,600" },
      { name: "Full Body", price: "Classic ₹3,500 | Premium ₹3,700" },
      { name: "Under Arms", price: "Classic ₹500 | Premium ₹600" },
    ],
  },
  {
    id: "body",
    number: "09",
    title: "Body Polishing & Massage",
    subtitle: "Relaxation and body care.",
    description: "Enjoy professional massage and body polishing experiences.",
    image: "/images/pricing/mens-hair-spa.jpg",
    icon: Flower2,
    services: [
      { name: "Full Body Massage", price: "₹1,999" },
      { name: "Full Body Polishing Classic", price: "₹2,500" },
      { name: "Full Premium Body Polishing", price: "₹5,999" },
      { name: "Premium Full Body Massage", price: "₹3,500" },
    ],
  },
  {
    id: "pedicure",
    number: "10",
    title: "Pedicure & Manicure",
    subtitle: "Complete hand and foot care.",
    description: "Choose from five professional hand and foot care collections.",
    image: "/images/services/mens-skin/mens-hydrating-facial.jpg",
    icon: Footprints,
    services: [
      { name: "Classic Pedicure & Manicure", price: "₹1,500" },
      { name: "Classic Pedicure", price: "₹899" },
      { name: "Classic Manicure", price: "₹750" },
      { name: "Foot Logic Pedicure & Manicure", price: "₹1,700" },
      { name: "Foot Logic Pedicure", price: "₹999" },
      { name: "Foot Logic Manicure", price: "₹850" },
      { name: "Ice Cream Pedicure & Manicure", price: "₹2,300" },
      { name: "Ice Cream Pedicure", price: "₹1,350" },
      { name: "Ice Cream Manicure", price: "₹1,150" },
      { name: "Lotus Glow Pedicure & Manicure", price: "₹2,800" },
      { name: "Lotus Glow Pedicure", price: "₹1,550" },
      { name: "Lotus Glow Manicure", price: "₹1,399" },
      { name: "Bubblegum Fresh Pedicure & Manicure", price: "₹3,200" },
      { name: "Bubblegum Fresh Pedicure", price: "₹1,799" },
      { name: "Bubblegum Fresh Manicure", price: "₹1,599" },
    ],
  },
  {
    id: "makeup",
    number: "11",
    title: "Groom Makeup",
    subtitle: "Professional occasion makeup.",
    description: "A professional makeup experience for groom celebrations.",
    image: "/images/services/mens-skin/mens-charcoal-facial.jpg",
    icon: UserRound,
    services: [
      { name: "Groom Makeup", price: "₹8,000" },
    ],
  },
  {
    id: "packages",
    number: "12",
    title: "Pre Groom Package",
    subtitle: "A curated grooming experience.",
    description: "A complete pre groom package with consultation, grooming, skincare and body care.",
    image: "/images/pricing/mens-grooming-package.jpg",
    icon: Gift,
    services: [
      {
        name: "Pre Groom Package",
        detail: "Free Consultation, Pedicure, Manicure, Cleanup, Detan Neck, Face & Neck, Premium Facial, Korean Hair Spa, Full Premium Body Polishing, Hair Cut and Beard Trim or Shaving.",
        price: "₹16,272",
      },
    ],
  },
];

/* =========================================
   SERVICE CARD
========================================= */

function GroomingServiceCard({ service, reverse }) {
  const Icon = service.icon;

  return (
    <article
      className={`mgp-service-card ${reverse ? "mgp-reverse" : ""}`}
      id={service.id}
    >
      <div className="mgp-service-image">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
        />

        <div className="mgp-image-shade" />

        <span className="mgp-service-number">
          {service.number}
        </span>
      </div>

      <div className="mgp-service-details">
        <div className="mgp-service-heading">
          <div className="mgp-service-icon">
            <Icon size={29} strokeWidth={1.4} />
          </div>

          <div>
            <span className="mgp-service-kicker">
              AURELLE MEN'S COLLECTION
            </span>

            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>
        </div>

        <p className="mgp-service-description">
          {service.description}
        </p>

        <div className="mgp-price-list">
          {service.services.map((item) => (
            <div className="mgp-price-row" key={item.name}>
              <div className="mgp-price-name">
                <span>{item.name}</span>

                {item.detail && (
                  <small>{item.detail}</small>
                )}
              </div>

              <strong>{item.price}</strong>
            </div>
          ))}
        </div>

        <Link
          to={`/booking?gender=men&service=mens-grooming&item=${service.id}`}
          className="mgp-book-button"
        >
          Book This Service
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

/* =========================================
   MEN'S PRICING PAGE
========================================= */

export default function MensGroomingPricing() {
  return (
    <main className="aurelle-mens-pricing">

      {/* HERO */}

      <section className="mgp-hero">
        <div className="mgp-hero-bg" />

        <div className="mgp-container mgp-hero-inner">
          <Link to="/pricing" className="mgp-back-link">
            <ChevronLeft size={16} />
            All Pricing Categories
          </Link>

          <div className="mgp-hero-copy">
            <span className="mgp-eyebrow">
              <span />
              AURELLE MEN'S COLLECTION
              <span />
            </span>

            <h1>
              Men's
              <em>Price Menu</em>
            </h1>

            <p>
              Explore professional men's grooming, hair care,
              skincare, massage and wellness services at AURELLE.
            </p>

            <Link
              to="/booking?gender=men&service=mens-grooming"
              className="mgp-primary-button"
            >
              Book Your Grooming
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}

      <nav className="mgp-category-nav">
        <div className="mgp-container mgp-category-inner">
          {groomingCategories.map((category) => {
            const Icon = category.icon;

            return (
              <a href={`#${category.id}`} key={category.id}>
                <Icon size={23} strokeWidth={1.5} />
                <span>{category.title}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* SERVICE LIST */}

      <section
        className="mgp-services-section"
        id="grooming-service-list"
      >
        <div className="mgp-container">

          <div className="mgp-section-heading">
            <span className="mgp-eyebrow mgp-centered">
              <span />
              AURELLE
              <span />
            </span>

            <h2>
              Men's Grooming <em>Services & Pricing</em>
            </h2>

            <p>
              Explore our complete men's service catalogue
              and choose your preferred experience.
            </p>
          </div>

          <div className="mgp-service-list">
            {groomingServices.map((service, index) => (
              <GroomingServiceCard
                key={service.id}
                service={service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>

          {/* BENEFITS */}

          <div className="mgp-benefits">
            <div className="mgp-benefit-item">
              <ShieldCheck size={30} strokeWidth={1.4} />
              <span>Hygienic & Safe<br />Tools</span>
            </div>

            <div className="mgp-benefit-item">
              <Leaf size={30} strokeWidth={1.4} />
              <span>Professional<br />Products</span>
            </div>

            <div className="mgp-benefit-item">
              <UserRound size={30} strokeWidth={1.4} />
              <span>Expert<br />Professionals</span>
            </div>

            <div className="mgp-benefit-item">
              <Star size={30} strokeWidth={1.4} />
              <span>Personalised<br />Care</span>
            </div>
          </div>

          {/* INFORMATION */}

          <div className="mgp-information">
            <div className="mgp-info-heading">
              <Info size={25} />
              <h3>Pricing Information</h3>
            </div>

            <div className="mgp-info-content">
              <p>
                <Check size={16} />
                18% GST is applicable as stated in the salon catalogue.
              </p>

              <p>
                <Check size={16} />
                Hair rebonding prices may vary according to hair length and density.
              </p>

              <p>
                <Check size={16} />
                Please confirm treatment details and final pricing during consultation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="mgp-final-cta">
        <div className="mgp-final-bg" />

        <div className="mgp-container mgp-final-inner">
          <div className="mgp-final-content">
            <span className="mgp-eyebrow">
              <span />
              EXPERIENCE AURELLE
            </span>

            <h2>
              Ready for a Fresh,
              <em>Confident Look?</em>
            </h2>

            <p>
              Discover professional men's grooming
              and personalised care at AURELLE.
            </p>

            <Link
              to="/booking?gender=men&service=mens-grooming"
              className="mgp-primary-button"
            >
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
