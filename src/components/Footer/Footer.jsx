
import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import "./Footer.css";

/* =========================================
   QUICK LINKS
========================================= */

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

/* =========================================
   UNISEX SALON SERVICES
========================================= */

const serviceLinks = [
  "Hair Styling & Haircuts",
  "Men's Grooming",
  "Skin Care & Facials",
  "Makeup & Bridal",
  "Nail Care",
  "Waxing & Threading",
  "Pedicure & Manicure",
  "Body Treatments",
];

/* =========================================
   SOCIAL LINKS
========================================= */

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", url: "#" },
  { icon: FaFacebookF, label: "Facebook", url: "#" },
  { icon: FaYoutube, label: "YouTube", url: "#" },
  { icon: FaPinterestP, label: "Pinterest", url: "#" },
];

/* =========================================
   FOOTER COMPONENT
========================================= */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="aurelle-footer">

      {/* BACKGROUND IMAGE */}

      <div className="aurelle-footer-bg" />

      <div className="aurelle-footer-container">

        {/* MAIN FOOTER */}

        <div className="aurelle-footer-main">

          {/* BRAND SECTION */}

          <div className="aurelle-footer-brand">

            <Link to="/" className="aurelle-footer-logo">
              AURELLE

              <span>LUXURY UNISEX SALON</span>
            </Link>

            <div className="aurelle-footer-brand-line" />

            <h3>
              Style Beyond Ordinary.
            </h3>

            <p className="aurelle-footer-description">
              Experience the art of exceptional hair styling,
              beauty and grooming at AURELLE. Discover a refined
              salon experience designed for everyone, where
              expert care meets timeless elegance.
            </p>

            {/* SOCIAL LINKS */}

            <div className="aurelle-footer-socials">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="aurelle-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="aurelle-footer-column">

            <div className="aurelle-footer-heading">
              <h4>EXPLORE</h4>
              <span />
            </div>

            <ul className="aurelle-footer-list">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    {item.name}
                    <ArrowUpRight />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div className="aurelle-footer-column">

            <div className="aurelle-footer-heading">
              <h4>OUR SERVICES</h4>
              <span />
            </div>

            <ul className="aurelle-footer-list">

              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    {service}
                    <ArrowUpRight />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div className="aurelle-footer-column aurelle-footer-contact">

            <div className="aurelle-footer-heading">
              <h4>GET IN TOUCH</h4>
              <span />
            </div>

            <div className="aurelle-contact-list">

              {/* ADDRESS */}

              <div className="aurelle-contact-item">
                <MapPin />

                <div>
                  <p>VISIT OUR SALON</p>
                  <span>Salon address coming soon</span>
                </div>
              </div>

              {/* PHONE */}

              <div className="aurelle-contact-item">
                <Phone />

                <div>
                  <p>CALL US</p>
                  <span>Contact number coming soon</span>
                </div>
              </div>

              {/* EMAIL */}

              <div className="aurelle-contact-item">
                <Mail />

                <div>
                  <p>EMAIL US</p>
                  <span>Email address coming soon</span>
                </div>
              </div>

              {/* OPENING HOURS */}

              <div className="aurelle-contact-item">
                <Clock />

                <div>
                  <p>OPENING HOURS</p>
                  <span>Monday to Sunday</span>
                  <span>10 AM to 8 PM</span>
                </div>
              </div>

            </div>

            {/* BOOKING BUTTON */}

            <Link
              to="/booking"
              className="aurelle-footer-book"
            >
              <span>BOOK YOUR EXPERIENCE</span>
              <ArrowUpRight />
            </Link>

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="aurelle-footer-bottom">

          <p>
            © {year} AURELLE LUXURY UNISEX SALON.
            ALL RIGHTS RESERVED.
          </p>

          <div className="aurelle-footer-legal">

            <Link to="/privacy-policy">
              PRIVACY POLICY
            </Link>

            <Link to="/terms">
              TERMS OF USE
            </Link>

            <Link to="/booking-policy">
              BOOKING POLICY
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
