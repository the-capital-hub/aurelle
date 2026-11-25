
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
   SERVICES: MEN'S & WOMEN'S
========================================= */

const serviceGroups = [
  {
    title: "MEN'S SERVICES",
    links: [
      { name: "Men's Grooming", path: "/services/grooming" },
      { name: "Hair & Styling", path: "/services/hair" },
      { name: "Skin & Facial Care", path: "/services/skin" },
    ],
  },
  {
    title: "WOMEN'S SERVICES",
    links: [
      { name: "Hair & Styling", path: "/services/hair" },
      { name: "Skin & Facial Care", path: "/services/skin" },
      { name: "Makeup & Bridal", path: "/services/makeup" },
      { name: "Nail Studio", path: "/services/nails" },
      { name: "Waxing & Threading", path: "/services/waxing" },
      { name: "Manicure & Pedicure", path: "/services/pedicure" },
      { name: "Body & Spa", path: "/services/body-spa" },
      { name: "Bridal & Groom Packages", path: "/services/packages" },
    ],
  },
];

/* =========================================
   PRICING: MEN'S & WOMEN'S
========================================= */

const pricingGroups = [
  {
    title: "MEN'S PRICING",
    links: [
      { name: "Men's Grooming", path: "/pricing/grooming" },
    ],
  },
  {
    title: "WOMEN'S PRICING",
    links: [
      { name: "Hair Services", path: "/pricing/hair" },
      { name: "Skin Care", path: "/pricing/skin" },
      { name: "Makeup", path: "/pricing/makeup" },
      { name: "Nail Studio", path: "/pricing/nails" },
      { name: "Waxing & Threading", path: "/pricing/waxing-threading" },
      { name: "Pedicure & Manicure", path: "/pricing/pedicure-manicure" },
      { name: "Body Treatments", path: "/pricing/body-treatments" },
      { name: "Bridal & Groom Packages", path: "/pricing/packages" },
    ],
  },
];

/* =========================================
   REUSABLE DESKTOP DROPDOWN
========================================= */

const DesktopMegaMenu = ({ groups }) => {
  return (
    <div className="aurelle-dropdown-menu aurelle-mega-menu">
      {groups.map((group) => (
        <div
          className="aurelle-dropdown-column"
          key={group.title}
        >
          <h4 className="aurelle-dropdown-heading">
            {group.title}
          </h4>

          {group.links.map((subItem) => (
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
      ))}
    </div>
  );
};

/* =========================================
   REUSABLE MOBILE GROUPS
========================================= */

const MobileMegaMenu = ({
  groups,
  isOpen,
  menuOpen,
}) => {
  return (
    <div
      className={`mobile-pricing-submenu ${
        isOpen ? "submenu-open" : ""
      }`}
      aria-hidden={!isOpen}
    >
      {groups.map((group) => (
        <div
          className="mobile-category-group"
          key={group.title}
        >
          <h4>{group.title}</h4>

          {group.links.map((subItem) => (
            <NavLink
              key={subItem.path}
              to={subItem.path}
              tabIndex={menuOpen && isOpen ? 0 : -1}
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
      ))}
    </div>
  );
};

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

  /* ESCAPE KEY */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
        setPricingOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const servicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  const pricingActive =
    location.pathname === "/pricing" ||
    location.pathname.startsWith("/pricing/");

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

              if (item.name === "Services") {
                return (
                  <div
                    className="aurelle-nav-dropdown aurelle-animate"
                    key={item.name}
                  >
                    <NavLink
                      to="/services"
                      end
                      className={() =>
                        `aurelle-nav-link ${
                          servicesActive ? "active" : ""
                        }`
                      }
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className="services-chevron"
                      />
                    </NavLink>

                    <DesktopMegaMenu groups={serviceGroups} />
                  </div>
                );
              }

              if (item.name === "Pricing") {
                return (
                  <div
                    className="aurelle-nav-dropdown aurelle-animate"
                    key={item.name}
                  >
                    <NavLink
                      to="/pricing"
                      end
                      className={() =>
                        `aurelle-nav-link ${
                          pricingActive ? "active" : ""
                        }`
                      }
                    >
                      Pricing
                      <ChevronDown
                        size={14}
                        className="pricing-chevron"
                      />
                    </NavLink>

                    <DesktopMegaMenu groups={pricingGroups} />
                  </div>
                );
              }

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
              type="button"
              className="aurelle-menu-toggle"
              onClick={() => setMenuOpen((prev) => !prev)}
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

              /* MOBILE SERVICES */

              if (item.name === "Services") {
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
                          setServicesOpen((prev) => !prev)
                        }
                        aria-label="Toggle service categories"
                        aria-expanded={servicesOpen}
                        tabIndex={menuOpen ? 0 : -1}
                      >
                        <ChevronDown size={20} />
                      </button>
                    </div>

                    <MobileMegaMenu
                      groups={serviceGroups}
                      isOpen={servicesOpen}
                      menuOpen={menuOpen}
                    />
                  </div>
                );
              }

              /* MOBILE PRICING */

              if (item.name === "Pricing") {
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
                          setPricingOpen((prev) => !prev)
                        }
                        aria-label="Toggle pricing categories"
                        aria-expanded={pricingOpen}
                        tabIndex={menuOpen ? 0 : -1}
                      >
                        <ChevronDown size={20} />
                      </button>
                    </div>

                    <MobileMegaMenu
                      groups={pricingGroups}
                      isOpen={pricingOpen}
                      menuOpen={menuOpen}
                    />
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
                    `mobile-nav-link mobile-standard-link ${
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
