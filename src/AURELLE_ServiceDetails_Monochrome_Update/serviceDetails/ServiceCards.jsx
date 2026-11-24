import React from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
  if (!service?.treatments?.length) return null;

  return (
    <section className="aurelle-service-treatments aurelle-treatments-redesign" id="service-treatments">
      <div className="service-treatments-container">
        <div className="service-treatments-heading service-treatments-heading-centered">
          <div>
            <span className="service-section-eyebrow">OUR {service.shortTitle || service.title} SERVICES</span>
            <h2>Treatments <span>We Offer</span></h2>
          </div>
          <p>
            A carefully selected range of services designed around your
            individual style, comfort and care.
          </p>
        </div>

        <div className="service-treatment-grid service-treatment-grid-images">
          {service.treatments.map((treatment, index) => (
            <article className="service-treatment-card service-treatment-image-card" key={treatment.id || `${treatment.title}-${index}`}>
              <div className="treatment-card-image">
                <img
                  src={treatment.image || service.hero?.image}
                  alt={treatment.imageAlt || treatment.title}
                  loading="lazy"
                />
                <span className="treatment-image-number">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="treatment-card-content">
                <span className="treatment-card-category">{treatment.category}</span>
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>

                <div className="treatment-card-bottom">
                  <div className="treatment-card-price">
                    <span>PRICING</span>
                    <strong>
                      {treatment.priceLabel ||
                        (treatment.price != null ? `₹${treatment.price}` : "Contact for pricing")}
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
          <p>Looking for something personalised? Talk to our beauty experts.</p>
          <Link to={`/booking?service=${service.booking.service}`} className="service-all-booking-btn">
            <CalendarDays size={16} />
            Book Your Appointment
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
