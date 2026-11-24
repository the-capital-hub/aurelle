
import { Link, useParams } from "react-router-dom";

import { servicesData } from "../../data/servicesData";

import ServiceHero from "../../components/serviceDetails/ServiceHero";
import ServiceIntro from "../../components/serviceDetails/ServiceIntro";
import ServiceTreatments from "../../components/serviceDetails/ServiceTreatments";
import ServiceBenefits from "../../components/serviceDetails/ServiceBenefits";
import ServiceGallery from "../../components/serviceDetails/ServiceGallery";
import ServiceCTA from "../../components/serviceDetails/ServiceCTA";

import "./ServiceDetailsPage.css";

export default function ServiceDetailsPage() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="aurelle-service-details">
        <section className="service-detail-not-found">
          <span className="service-detail-eyebrow">
            AURELLE LUXURY UNISEX SALON
          </span>

          <h2>Service Not Found</h2>

          <p>
            The service you are looking for is currently unavailable.
          </p>

          <Link
            to="/services"
            className="service-detail-booking-btn"
          >
            BACK TO SERVICES <span>↗</span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="aurelle-service-details">
      <ServiceHero service={service} />

      <ServiceIntro service={service} />

      <ServiceTreatments service={service} />

      <ServiceBenefits service={service} />

      <ServiceGallery service={service} />

      <ServiceCTA service={service} />
    </main>
  );
}
