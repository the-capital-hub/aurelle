
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  Send,
  ShieldCheck,
  Headset,
  CheckCircle2,
  Navigation,
} from "lucide-react";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@aurellebeauty.com"],
    href: "mailto:hello@aurellebeauty.com",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["Shop 12, Main Market, Civil Lines", "Meerut, Uttar Pradesh 250001"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Monday to Sunday", "10:00 AM to 8:00 PM"],
  },
];

const contactBenefits = [
  {
    icon: ShieldCheck,
    title: "Quick Response",
    description: "We reply within hours",
  },
  {
    icon: CalendarDays,
    title: "Easy Booking",
    description: "Choose your preferred time",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "For all your beauty needs",
  },
];

function Contact() {
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".contact-hero-content > *", {
          opacity: 0,
          y: 25,
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
        })
        .from(
          ".contact-hero-image",
          {
            opacity: 0,
            x: 35,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.55"
        );

      gsap.utils.toArray(".contact-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formStatus) setFormStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      setFormStatus("Please enter a valid phone number.");
      return;
    }

    const subject = encodeURIComponent(
      `AURELLE Appointment Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service || "Not selected"}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:hello@aurellebeauty.com?subject=${subject}&body=${body}`;

    setFormStatus(
      "Your email application is opening with your enquiry."
    );
  };

  return (
    <main className="aurelle-contact-page" ref={pageRef}>

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-background" />

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <div className="contact-eyebrow">
              <span />
              CONTACT US
            </div>

            <h1>
              We'd Love to
              <em>Hear From You</em>
            </h1>

            <p>
              Have a question, need a recommendation or want to
              book an appointment? Our team is here to help.
            </p>

            <div className="contact-hero-actions">
              <Link to="/booking" className="contact-primary-button">
                Book an Appointment
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="contact-outline-button"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-hero-image">
            <img
              src="/images/contact/aurelle-contact-hero.jpg"
              alt="AURELLE luxury beauty studio reception"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}

      <section className="contact-main-section">
        <div className="contact-main-container">

          <div className="contact-information contact-reveal">
            <h2>Get in Touch</h2>

            <p className="contact-information-intro">
              Reach out to us through any of the following channels.
            </p>

            <div className="contact-details-list">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div className="contact-detail" key={detail.title}>
                    <div className="contact-detail-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <div className="contact-detail-text">
                      <h3>{detail.title}</h3>

                      {detail.lines.map((line) => (
                        <p key={line}>
                          {detail.href ? (
                            <a href={detail.href}>{line}</a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-wrapper contact-reveal">
            <h2>Send Us a Message</h2>

            <p className="contact-form-intro">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">

                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">
                    Service Interested In
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="Hair Services">Hair Services</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Nail Care">Nail Care</option>
                    <option value="Bridal Services">Bridal Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="contact-field contact-message-field">
                  <label htmlFor="contact-message">Your Message</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

              </div>

              {formStatus && (
                <p className="contact-form-status" role="status">
                  {formStatus}
                </p>
              )}

              <button type="submit" className="contact-submit-button">
                <Send size={19} />
                Send Message
              </button>
            </form>

            <div className="contact-trust-row">
              {contactBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className="contact-trust-item" key={benefit.title}>
                    <Icon size={29} strokeWidth={1.5} />

                    <div>
                      <strong>{benefit.title}</strong>
                      <span>{benefit.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* FIND OUR STUDIO */}

      <section className="contact-location-section">
        <div className="contact-section-heading contact-reveal">
          <h2>Find Our Studio</h2>
          <p>
            Visit us at our salon for a personalised beauty experience.
          </p>
        </div>

        <div className="contact-location-container">

          <div className="contact-map">
            <iframe
              title="Find AURELLE Beauty Studio"
              src="https://www.google.com/maps?q=Civil%20Lines%2C%20Meerut%2C%20Uttar%20Pradesh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact-location-info">
            <div className="contact-location-icon">
              <MapPin size={29} strokeWidth={1.4} />
            </div>

            <div>
              <h3>Studio Location</h3>
              <p>
                Shop 12, Main Market, Civil Lines
                <br />
                Meerut, Uttar Pradesh 250001
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Civil+Lines+Meerut+Uttar+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="contact-directions-button"
              >
                <Navigation size={17} />
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK CONTACT */}

      <section className="contact-quick-section">
        <div className="contact-section-heading">
          <h2>Quick Contact</h2>
          <p>Get in touch instantly through your preferred option.</p>
        </div>

        <div className="contact-quick-actions">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="quick-contact-button quick-whatsapp"
          >
            <MessageCircle size={21} />
            Chat on WhatsApp
          </a>

          <a
            href="tel:+919876543210"
            className="quick-contact-button"
          >
            <Phone size={20} />
            Call Now
          </a>

          <Link
            to="/booking"
            className="quick-contact-button"
          >
            <CalendarDays size={20} />
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="contact-final-cta">

        <div className="contact-final-image">
          <img
            src="/images/contact/aurelle-contact-cta-model.jpg"
            alt="AURELLE beauty portrait"
            loading="lazy"
          />
        </div>

        <div className="contact-final-content">
          <h2>
            Let's Create Your
            <em>Beauty Moment</em>
          </h2>

          <p>
            Get in touch today and step into a world of expert
            care, relaxation and timeless beauty.
          </p>

          <Link to="/booking" className="contact-final-button">
            Book Your Appointment
            <ArrowRight size={20} />
          </Link>
        </div>

      </section>

    </main>
  );
}

export default Contact;
