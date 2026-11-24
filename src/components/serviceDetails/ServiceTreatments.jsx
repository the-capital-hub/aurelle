
export default function ServiceTreatments({ service }) {
  return (
    <section className="service-detail-treatments">
      <div className="service-detail-container">
        <div className="service-detail-section-heading">
          <span className="service-detail-eyebrow">
            OUR SERVICES
          </span>
          <h2>Explore Our <em>Treatments</em></h2>
          <p>
            Discover the services available in our {service.title.toLowerCase()} collection.
          </p>
        </div>

        <div className="service-detail-treatment-grid">
          {service.treatments.map((item, index) => (
            <article className="service-detail-treatment-card" key={item.name}>
              <span className="service-detail-treatment-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="service-detail-card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
