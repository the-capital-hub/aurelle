
import { useState } from "react";
import {
  Scissors,
  Waves,
  Droplets,
  Sparkles,
  Flower2,
  ShieldCheck,
  Award,
  CalendarDays,
  Search,
  ArrowRight,
  ChevronDown,
  Check,
  Star,
  Clock3,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./HairServices.css";

const hairServices = [
  {
    title: "Haircuts & Styling",
    image: "/images/hair/haircut-styling.jpg",
    icon: Scissors,
    description: "Beautiful cuts and personalised styling.",
  },
  {
    title: "Hair Spa",
    image: "/images/hair/hair-spa.jpg",
    icon: Waves,
    description: "Deep nourishment and scalp relaxation.",
  },
  {
    title: "Hair Colouring",
    image: "/images/hair/hair-colouring.jpg",
    icon: Droplets,
    description: "Rich colours and beautiful transformations.",
  },
  {
    title: "Keratin Treatment",
    image: "/images/hair/hair-keratin.jpg",
    icon: Sparkles,
    description: "Smooth, manageable and glossy hair.",
  },
  {
    title: "Smoothening",
    image: "/images/hair/hair-smoothening.jpg",
    icon: Flower2,
    description: "A sleek and polished hair finish.",
  },
  {
    title: "Occasion Styling",
    image: "/images/hair/hair-occasion.jpg",
    icon: Sparkles,
    description: "Elegant hairstyles for special moments.",
  },
];

const packages = [
  {
    name: "Essential Hair Care",
    price: "₹1,499",
    description: "Everyday hair care essentials",
    features: [
      "Haircut and Basic Styling",
      "Hair Wash and Conditioning",
      "Scalp Relaxation",
    ],
  },
  {
    name: "Hair Revival Package",
    price: "₹2,999",
    description: "A complete hair care experience",
    popular: true,
    features: [
      "Hair Spa with Deep Nourishment",
      "Scalp and Hair Treatment",
      "Professional Styling",
    ],
  },
  {
    name: "Advanced Hair Treatment",
    price: "₹5,999",
    description: "Premium hair transformation",
    features: [
      "Keratin or Smoothening",
      "Hair Repair and Strengthening",
      "Long Lasting Shine and Care",
    ],
  },
];

const processSteps = [
  {
    icon: CalendarDays,
    title: "Consultation",
    description: "Understand your hair needs and goals.",
  },
  {
    icon: Search,
    title: "Hair Assessment",
    description: "Check your hair type, texture and condition.",
  },
  {
    icon: Scissors,
    title: "Service Treatment",
    description: "Expert care with premium products.",
  },
  {
    icon: Sparkles,
    title: "After Care Guidance",
    description: "Tips to maintain your beautiful hair.",
  },
];

const faqs = [
  {
    question: "How do I choose the right hair treatment?",
    answer:
      "Our hair experts assess your hair type, texture and concerns before recommending a suitable treatment.",
  },
  {
    question: "Is keratin treatment suitable for all hair types?",
    answer:
      "Suitability depends on your hair condition and desired result. Our professionals will guide you after a consultation.",
  },
  {
    question: "How long do the results last?",
    answer:
      "Results vary depending on the treatment, hair type and after care routine.",
  },
  {
    question: "Do you use professional hair care products?",
    answer:
      "We aim to use professional quality products selected according to the treatment and your hair needs.",
  },
  {
    question: "Can I book a specific hair expert?",
    answer:
      "Yes. You can choose your preferred expert while making an appointment, subject to availability.",
  },
];

function HairServices() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="hair-page">

      {/* HERO */}

      <section className="hair-hero">
        <div className="hair-hero-content">
          <div className="hair-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>Hair Services</span>
          </div>

          <span className="hair-eyebrow">
            <i />
            HAIR SERVICES
          </span>

          <h1>
            Expert Hair Care
            <em>for a Healthier You</em>
          </h1>

          <p>
            From trendy haircuts to advanced hair treatments,
            discover personalised hair care services that
            bring out your best look.
          </p>

          <div className="hair-hero-actions">
            <Link to="/booking" className="hair-primary-btn">
              Book Hair Appointment <ArrowRight size={17} />
            </Link>

            <a href="#hair-process" className="hair-outline-btn">
              <span>▷</span> Explore Our Process
            </a>
          </div>

          <div className="hair-hero-trust">
            <div>
              <Award />
              <span>Expert Stylists</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Premium Products</span>
            </div>
            <div>
              <Heart />
              <span>Personalised Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="hair-services-section" id="hair-services">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              <i /> EXPLORE OUR SERVICES
            </span>
            <h2>Our Hair Services</h2>
          </div>

          <p>
            A complete range of hair care and styling services
            designed for every hair type and need.
          </p>
        </div>

        <div className="hair-service-grid">
          {hairServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                to="/booking"
                className="hair-service-card"
                key={service.title}
              >
                <div className="hair-service-image">
                  <img src={service.image} alt={service.title} />
                  <span className="hair-service-icon">
                    <Icon size={20} />
                  </span>
                </div>

                <div className="hair-service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>
                    Explore Service <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="hair-why-section">
        <div className="hair-why-image">
          <img
            src="/images/hair/hair-wash-treatment.jpg"
            alt="Professional hair wash treatment"
          />
        </div>

        <div className="hair-why-content">
          <span className="hair-eyebrow">
            <i /> WHY CHOOSE US
          </span>

          <h2>
            A Premium Hair
            <em>Care Experience</em>
          </h2>

          <p>
            More than a salon, AURELLE is a place to relax,
            rejuvenate and rediscover your confidence.
          </p>

          <div className="hair-why-features">
            {[
              "Certified and experienced experts",
              "High quality professional products",
              "Personalised hair consultations",
              "Hygienic and comfortable environment",
            ].map((item) => (
              <div key={item}>
                <span><Check size={15} /></span>
                {item}
              </div>
            ))}
          </div>

          <Link to="/booking" className="hair-text-link">
            Experience AURELLE <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* PROCESS */}

      <section className="hair-process-section" id="hair-process">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              <i /> OUR APPROACH
            </span>
            <h2>Our Hair Care Process</h2>
          </div>

          <p>
            A personalised and professional approach
            for beautiful results.
          </p>
        </div>

        <div className="hair-process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="hair-process-item" key={step.title}>
                <span className="hair-process-number">
                  0{index + 1}
                </span>

                <div className="hair-process-icon">
                  <Icon />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>

                {index !== processSteps.length - 1 && (
                  <ArrowRight className="hair-process-arrow" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}

      <section className="hair-pricing-section">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              <i /> OUR PACKAGES
            </span>
            <h2>Hair Packages & Pricing</h2>
          </div>

          <p>
            Choose from our carefully curated hair care packages.
          </p>
        </div>

        <div className="hair-package-grid">
          {packages.map((item) => (
            <article
              className={`hair-package-card ${
                item.popular ? "popular" : ""
              }`}
              key={item.name}
            >
              {item.popular && (
                <span className="hair-popular-label">
                  MOST POPULAR
                </span>
              )}

              <span className="hair-package-subtitle">
                AURELLE SIGNATURE
              </span>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <div className="hair-package-price">
                {item.price}
              </div>

              <div className="hair-package-features">
                {item.features.map((feature) => (
                  <div key={feature}>
                    <Check size={15} />
                    {feature}
                  </div>
                ))}
              </div>

              <Link to="/booking" className="hair-package-button">
                Book Now <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        <p className="hair-price-note">
          Prices shown are indicative. Final pricing depends on
          hair length, condition and treatment requirements.
        </p>
      </section>

      {/* BEFORE AND AFTER */}

      <section className="hair-results-section">
        <div className="hair-results-gallery">
          <div className="hair-section-heading">
            <div>
              <span className="hair-eyebrow">
                <i /> OUR RESULTS
              </span>
              <h2>Before & After</h2>
            </div>
          </div>

          <div className="hair-comparison-grid">
            <div className="hair-comparison-image">
              <img
                src="/images/hair/hair-before.jpg"
                alt="Hair before treatment"
              />
              <span>BEFORE</span>
            </div>

            <div className="hair-comparison-image">
              <img
                src="/images/hair/hair-after.jpg"
                alt="Hair after treatment"
              />
              <span>AFTER</span>
            </div>
          </div>
        </div>

        <div className="hair-expert-card">
          <span className="hair-eyebrow">
            <i /> MEET OUR EXPERT
          </span>

          <div className="hair-expert-profile">
            <img
              src="/images/team/expert-riya.jpg"
              alt="Priya Sharma"
            />

            <div>
              <h3>Priya Sharma</h3>
              <p>Senior Hair Specialist</p>

              <span className="hair-experience">
                5+ Years of Experience
              </span>

              <div className="hair-rating">
                <span>★★★★★</span>
                <small>Professional Hair Expert</small>
              </div>
            </div>
          </div>

          <Link to="/team" className="hair-text-link">
            Meet Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}

      <section className="hair-faq-section">
        <div className="hair-section-heading">
          <div>
            <span className="hair-eyebrow">
              <i /> HAVE QUESTIONS?
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="hair-faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`hair-faq-item ${
                activeFaq === index ? "active" : ""
              }`}
              key={faq.question}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? -1 : index)
                }
              >
                {faq.question}
                <ChevronDown size={19} />
              </button>

              {activeFaq === index && (
                <div className="hair-faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="hair-final-cta">
        <div className="hair-final-cta-content">
          <span className="hair-eyebrow">
            <i /> YOUR BEAUTY JOURNEY STARTS HERE
          </span>

          <h2>
            Ready for a Hair
            <em>Transformation?</em>
          </h2>

          <p>
            Book your appointment today and experience
            expert hair care at AURELLE.
          </p>

          <Link to="/booking" className="hair-primary-btn">
            Book Hair Appointment <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default HairServices;
