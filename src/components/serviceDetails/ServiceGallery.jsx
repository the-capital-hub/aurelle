
export default function ServiceGallery({ service }) {
  return (
    <section className="service-detail-gallery">
      <div className="service-detail-container">
        <div className="service-detail-section-heading">
          <span className="service-detail-eyebrow">
            STYLE INSPIRATION
          </span>
          <h2>A Glimpse of <em>Our Work</em></h2>
        </div>

        <div className="service-detail-gallery-grid">
          {service.gallery.map((image, index) => (
            <div className="service-detail-gallery-image" key={image}>
              <img
                src={image}
                alt={`${service.title} inspiration ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
