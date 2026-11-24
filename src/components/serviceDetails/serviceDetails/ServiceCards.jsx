
import React from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
  if (!service?.treatments) return null;

  return (
    <section
      className="aurelle-service-treatments"
      id="service-treatments"
    >
      <div className="service-treatments-container">

        <div className="service-treatments-heading">
          <div>
            <span className="service-section-eyebrow">
              EXPLORE OUR TREATMENTS
            </span>

            <h2>
              {service.shortTitle || service.title}
              <br />
              <span>Our Expertise</span>
            </h2>
          </div>

          <p>
            Discover our carefully selected treatments,
            designed around your individual style and needs.
          </p>
        </div>

        <div className="service-treatment-grid">

          {service.treatments.map((treatment, index) => (
            <article
              className="service-treatment-card"
              key={treatment.id}
            >

              <div className="treatment-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="treatment-card-content">

                <span className="treatment-card-category">
                  {treatment.category}
                </span>

                <h3>{treatment.title}</h3>

                <p>{treatment.description}</p>

                <div className="treatment-card-bottom">

                  <div className="treatment-card-price">
                    <span>PRICE</span>
                    <strong>
                      {treatment.priceLabel ||
                        (treatment.price != null
                          ? `₹${treatment.price}`
                          : "Contact for pricing")}
                    </strong>
                  </div>

                  <Link
                    to={`/booking?service=${service.booking.service}`}
                    className="treatment-book-btn"
                    aria-label={`Book ${treatment.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="service-treatments-footer">
          <p>
            Looking for something personalised?
            Talk to our beauty experts.
          </p>

          <Link
            to={`/booking?service=${service.booking.service}`}
            className="service-all-booking-btn"
          >
            <CalendarDays size={16} />
            Book Your Appointment
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;
