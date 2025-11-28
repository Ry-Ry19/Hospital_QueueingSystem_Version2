import ServicesGrid from './ServicesGrid';

const ServicesPreview = ({ onViewAll }) => {
  return (
    <div className="services-preview">
      <div className="services-preview-header">
        <h2>Our Services</h2>
        <p>Explore a selection of our priority-based medical services.</p>
      </div>

      <ServicesGrid limit={3} />

      <div className="services-preview-cta">
        <button className="btn-primary" onClick={() => onViewAll && onViewAll('services')}>
          View All Services
        </button>
      </div>
    </div>
  );
};

export default ServicesPreview;
