
import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import "./Navbar.css";

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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

  // Scroll detection
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

  // GSAP entrance animation
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            aria-label="AURELLE Home"
          >
            <span className="brand-name">AURELLE</span>
            <span className="brand-subtitle">
              BEAUTY STUDIO
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="aurelle-navigation">
            {navigation.map((item) => (
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
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="aurelle-actions aurelle-animate">

            <Link
              to="/booking"
              className="aurelle-book-btn"
            >
              <span>BOOK NOW</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
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

      {/* MOBILE NAVIGATION */}
      <div
        className={`aurelle-mobile-menu ${
          menuOpen ? "menu-visible" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">

          <div className="mobile-menu-heading">
            <span>EXPLORE AURELLE</span>
            <span className="mobile-menu-line"></span>
          </div>

          <nav className="mobile-navigation">
            {navigation.map((item, index) => (
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
                  0{index + 1}
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
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <span>WHERE BEAUTY MEETS ELEGANCE.</span>
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
