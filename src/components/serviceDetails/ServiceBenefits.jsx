
export default function ServiceBenefits({ service }) {
  return (
    <section className="service-detail-benefits">
      <div className="service-detail-container">
        <div className="service-detail-section-heading">
          <span className="service-detail-eyebrow">
            THE AURELLE EXPERIENCE
          </span>
          <h2>Why Choose <em>AURELLE?</em></h2>
        </div>

        <div className="service-detail-benefit-grid">
          {service.benefits.map((benefit, index) => (
            <div className="service-detail-benefit" key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
