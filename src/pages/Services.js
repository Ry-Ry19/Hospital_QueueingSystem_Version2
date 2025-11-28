import EmergencyServices from '../components/EmergencyServices';
import ServicesGrid from '../components/ServicesGrid';
import '../styles/Services.css';

const Services = () => {
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/images/vidbg-final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="services-hero">
        <h1>Our Medical Services</h1>
        <p>Quality care with intelligent patient prioritization</p>
      </section>
      
      <div className="services-container">
        <ServicesGrid />
        <EmergencyServices />
      </div>
    </div>
  );
};

export default Services;