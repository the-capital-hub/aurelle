
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Brush,
  Hand,
  Flower2,
  Heart,
  Gem,
  Crown,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Hair & Grooming",
    slug: "hair",
    icon: Scissors,
  },
  {
    title: "Skin Care",
    slug: "skin",
    icon: Sparkles,
  },
  {
    title: "Makeup & Bridal",
    slug: "makeup",
    icon: Brush,
  },
  {
    title: "Nail Studio",
    slug: "nails",
    icon: Hand,
  },
  {
    title: "Waxing & Threading",
    slug: "waxing-threading",
    icon: Flower2,
  },
  {
    title: "Pedicure & Manicure",
    slug: "pedicure-manicure",
    icon: Heart,
  },
  {
    title: "Body Treatments",
    slug: "body-treatments",
    icon: Gem,
  },
  {
    title: "Bridal & Groom",
    slug: "packages",
    icon: Crown,
  },
];

const ServiceCategories = ({ activeService }) => {
  return (
    <section className="aurelle-service-categories">
      <div className="service-categories-container">

        <div className="service-categories-heading">
          <span>EXPLORE OUR SERVICES</span>
          <h2>Discover Your Perfect Experience</h2>
        </div>

        <div className="service-categories-list">

          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <NavLink
                key={category.slug}
                to={`/services/${category.slug}`}
                className={() =>
                  `service-category-pill ${
                    activeService === category.slug ? "active" : ""
                  }`
                }
              >
                <Icon size={16} strokeWidth={1.6} />

                <span>{category.title}</span>
              </NavLink>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServiceCategories;
