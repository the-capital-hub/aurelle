
export default function ServiceIntro({ service }) {
  return (
    <section className="service-detail-intro">
      <div className="service-detail-container service-detail-intro-grid">
        <div>
          <span className="service-detail-eyebrow">
            DISCOVER AURELLE
          </span>
          <h2>{service.introTitle}</h2>
        </div>

        <p>{service.intro}</p>
      </div>
    </section>
  );
}
