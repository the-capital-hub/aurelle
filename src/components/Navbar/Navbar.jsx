
import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import gsap from "gsap";
import "./Navbar.css";

/* =========================================
   MAIN NAVIGATION
========================================= */

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

/* =========================================
   SERVICE LINKS
========================================= */


const serviceLinks = [
  { name: "Hair & Styling", path: "/services/hair" },
  { name: "Men's Grooming", path: "/services/grooming" },
  { name: "Skin & Facial Care", path: "/services/skin" },
  { name: "Makeup & Bridal", path: "/services/makeup" },
  { name: "Nail Studio", path: "/services/nails" },
  { name: "Waxing & Threading", path: "/services/waxing" },
  { name: "Manicure & Pedicure", path: "/services/pedicure" },
  { name: "Body & Spa", path: "/services/body-spa" },
  { name: "Bridal & Groom Packages", path: "/services/packages" },
];


/* =========================================
   PRICING LINKS
========================================= */

const pricingLinks = [
  { name: "Hair Services", path: "/pricing/hair" },
  { name: "Skin Care", path: "/pricing/skin" },
  { name: "Makeup", path: "/pricing/makeup" },
  { name: "Nail Studio", path: "/pricing/nails" },
  { name: "Waxing & Threading", path: "/pricing/waxing-threading" },
  { name: "Pedicure & Manicure", path: "/pricing/pedicure-manicure" },
  { name: "Body Treatments", path: "/pricing/body-treatments" },
  { name: "Bridal & Groom Packages", path: "/pricing/packages" },
];

/* =========================================
   NAVBAR COMPONENT
========================================= */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [pricingOpen, setPricingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

  /* SCROLL DETECTION */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* GSAP ANIMATION */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aurelle-animate",
        {
          opacity: 0,
          y: -18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  /* CLOSE MENUS ON ROUTE CHANGE */

  useEffect(() => {
    setMenuOpen(false);
    setPricingOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  /* BODY SCROLL LOCK */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================
     RENDER
  ========================================= */

  return (
    <>
      <header
        ref={navbarRef}
        className={`aurelle-navbar ${
          scrolled || menuOpen ? "is-scrolled" : ""
        }`}
      >
        <div className="aurelle-nav-container">

          {/* BRAND LOGO */}

          <Link
            to="/"
            className="aurelle-brand aurelle-animate"
            aria-label="AURELLE Luxury Unisex Salon Home"
          >
            <span className="brand-name">AURELLE</span>

            <span className="brand-subtitle">
              LUXURY UNISEX SALON
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="aurelle-navigation">

            {navigation.map((item) => {

              /* SERVICES DROPDOWN */

              if (item.name === "Services") {
                return (
                  <div
                    className="aurelle-nav-dropdown aurelle-animate"
                    key={item.name}
                  >
                    <NavLink
                      to="/services"
                      end
                      className={({ isActive }) =>
                        `aurelle-nav-link ${
                          isActive ||
                          location.pathname.startsWith("/services/")
                            ? "active"
                            : ""
                        }`
                      }
                    >
                      Services

                      <ChevronDown
                        size={14}
                        className="services-chevron"
                      />
                    </NavLink>

                    <div className="aurelle-dropdown-menu">

                      {serviceLinks.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `aurelle-dropdown-link ${
                              isActive ? "active" : ""
                            }`
                          }
                        >
                          <span>{subItem.name}</span>

                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.5}
                          />
                        </NavLink>
                      ))}

                    </div>
                  </div>
                );
              }

              /* PRICING DROPDOWN */

              if (item.name === "Pricing") {
                return (
                  <div
                    className="aurelle-nav-dropdown aurelle-animate"
                    key={item.name}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `aurelle-nav-link ${
                          isActive ? "active" : ""
                        }`
                      }
                    >
                      Pricing

                      <ChevronDown
                        size={14}
                        className="pricing-chevron"
                      />
                    </NavLink>

                    <div className="aurelle-dropdown-menu">

                      {pricingLinks.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `aurelle-dropdown-link ${
                              isActive ? "active" : ""
                            }`
                          }
                        >
                          <span>{subItem.name}</span>

                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.5}
                          />
                        </NavLink>
                      ))}

                    </div>
                  </div>
                );
              }

              /* NORMAL NAVIGATION LINKS */

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `aurelle-nav-link aurelle-animate ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}

          </nav>

          {/* RIGHT ACTIONS */}

          <div className="aurelle-actions aurelle-animate">

            <Link
              to="/booking"
              className="aurelle-book-btn"
            >
              <span>BOOK NOW</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
              />
            </Link>

            <button
              className="aurelle-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={28} strokeWidth={1.4} />
              ) : (
                <Menu size={28} strokeWidth={1.4} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* =====================================
          MOBILE NAVIGATION
      ===================================== */}

      <div
        className={`aurelle-mobile-menu ${
          menuOpen ? "menu-visible" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">

          <div className="mobile-menu-heading">
            <span>EXPLORE AURELLE</span>
            <span className="mobile-menu-line" />
          </div>

          <nav className="mobile-navigation">

            {navigation.map((item, index) => {

              /* MOBILE SERVICES DROPDOWN */

              if (item.name === "Services") {
                const servicesActive =
                  location.pathname === "/services" ||
                  location.pathname.startsWith("/services/");

                return (
                  <div
                    className="mobile-pricing-group"
                    key={item.name}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 70}ms`
                        : "0ms",
                    }}
                  >

                    <div className="mobile-pricing-row">

                      <NavLink
                        to="/services"
                        end
                        tabIndex={menuOpen ? 0 : -1}
                        className={() =>
                          `mobile-nav-link ${
                            servicesActive ? "active" : ""
                          }`
                        }
                      >
                        <span className="mobile-nav-number">
                          03
                        </span>

                        <span className="mobile-nav-name">
                          Services
                        </span>
                      </NavLink>

                      <button
                        type="button"
                        className={`mobile-pricing-toggle ${
                          servicesOpen ? "open" : ""
                        }`}
                        onClick={() =>
                          setServicesOpen(!servicesOpen)
                        }
                        aria-label="Toggle service categories"
                        aria-expanded={servicesOpen}
                        tabIndex={menuOpen ? 0 : -1}
                      >
                        <ChevronDown size={20} />
                      </button>

                    </div>

                    <div
                      className={`mobile-pricing-submenu ${
                        servicesOpen ? "submenu-open" : ""
                      }`}
                    >
                      {serviceLinks.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          tabIndex={
                            menuOpen && servicesOpen ? 0 : -1
                          }
                          className={({ isActive }) =>
                            `mobile-pricing-link ${
                              isActive ? "active" : ""
                            }`
                          }
                        >
                          <span>{subItem.name}</span>

                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.4}
                          />
                        </NavLink>
                      ))}
                    </div>

                  </div>
                );
              }

              /* MOBILE PRICING DROPDOWN */

              if (item.name === "Pricing") {
                const pricingActive =
                  location.pathname === "/pricing" ||
                  location.pathname.startsWith("/pricing/");

                return (
                  <div
                    className="mobile-pricing-group"
                    key={item.name}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 70}ms`
                        : "0ms",
                    }}
                  >

                    <div className="mobile-pricing-row">

                      <NavLink
                        to="/pricing"
                        end
                        tabIndex={menuOpen ? 0 : -1}
                        className={() =>
                          `mobile-nav-link ${
                            pricingActive ? "active" : ""
                          }`
                        }
                      >
                        <span className="mobile-nav-number">
                          06
                        </span>

                        <span className="mobile-nav-name">
                          Pricing
                        </span>
                      </NavLink>

                      <button
                        type="button"
                        className={`mobile-pricing-toggle ${
                          pricingOpen ? "open" : ""
                        }`}
                        onClick={() =>
                          setPricingOpen(!pricingOpen)
                        }
                        aria-label="Toggle pricing categories"
                        aria-expanded={pricingOpen}
                        tabIndex={menuOpen ? 0 : -1}
                      >
                        <ChevronDown size={20} />
                      </button>

                    </div>

                    <div
                      className={`mobile-pricing-submenu ${
                        pricingOpen ? "submenu-open" : ""
                      }`}
                    >
                      {pricingLinks.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          tabIndex={
                            menuOpen && pricingOpen ? 0 : -1
                          }
                          className={({ isActive }) =>
                            `mobile-pricing-link ${
                              isActive ? "active" : ""
                            }`
                          }
                        >
                          <span>{subItem.name}</span>

                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.4}
                          />
                        </NavLink>
                      ))}
                    </div>

                  </div>
                );
              }

              /* OTHER MOBILE LINKS */

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  tabIndex={menuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `mobile-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 70}ms`
                      : "0ms",
                  }}
                >
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mobile-nav-name">
                    {item.name}
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    className="mobile-nav-arrow"
                  />
                </NavLink>
              );
            })}

          </nav>

          {/* MOBILE BOOKING */}

          <div className="mobile-menu-bottom">

            <span>YOUR STYLE. YOUR EXPERIENCE.</span>

            <Link
              to="/booking"
              className="mobile-book-btn"
              tabIndex={menuOpen ? 0 : -1}
            >
              BOOK YOUR EXPERIENCE

              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
