
import { Link } from "react-router-dom";

export default function ServiceCTA({ service }) {
  return (
    <section className="service-detail-cta">
      <div className="service-detail-cta-decoration" />

      <div className="service-detail-container service-detail-cta-content">
        <span className="service-detail-eyebrow">
          YOUR AURELLE EXPERIENCE AWAITS
        </span>

        <h2>
          Ready for Your
          <em> {service.title} Experience?</em>
        </h2>

        <p>
          Connect with our team and plan your next salon visit.
        </p>

        <Link to="/booking" className="service-detail-button">
          BOOK AN APPOINTMENT <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
