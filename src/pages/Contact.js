import TeamGrid from '../components/TeamGrid';
import "../styles/About.css";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      {/* FontAwesome is now loaded globally from public/index.html */}

      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/images/vidbg-final.mp4" type="video/mp4" />
        </video>
      </div>

      <main>
        <div className="container">
          {/* Contact Hero (use shared page hero styles for consistency) */}
          {/* Page Hero (use shared about-hero for consistent styling) */}
          <section className="about-hero">
            <h1>Meet Our Healthcare Team</h1>
            <p>
              Get to know the dedicated professionals who make Patient
              Centered-Care exceptional
            </p>

            <div className="emergency-alert">
              <i className="fas fa-exclamation-triangle"></i>
              <span>24/7 Emergency Hotline: (063) 224-8454</span>
            </div>
          </section>

          {/* Team Section (rendered via TeamGrid component) */}
          <TeamGrid />

          {/* Quick Contact */}
          <section className="quick-contact">
            <div className="section-header">
              <h3>Quick Contact Options</h3>
              <p>Reach us through these convenient channels</p>
            </div>

            <div className="contact-options">
              {/* Option 1 */}
              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>Emergency Hotline</h4>
                <p>(063) 224-8454</p>
                <a href="tel:+63632248454" className="option-btn">
                  <i className="fas fa-phone"></i> Call Now
                </a>
              </div>

              {/* Option 2 */}
              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Visit Us</h4>
                <p>Gregorio Lluch Memorial Hospital, Iligan City</p>
                <a
                  href="https://maps.google.com/maps?q=gregorio+lluch+memorial+hospital"
                  className="option-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-directions"></i> Get Directions
                </a>
              </div>

              {/* Option 3 */}
              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>ryanrecososa16@gmail.com</p>
                <a
                  href="mailto:ryanrecososa16@gmail.com"
                  className="option-btn"
                >
                  <i className="fas fa-paper-plane"></i> Send Email
                </a>
              </div>

              {/* Option 4 */}
              <div className="contact-option">
                <div className="option-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Operating Hours</h4>
                <p>
                  Emergency: 24/7 <br /> Outpatient: 8AM-5PM <br /> Admin:
                  8AM-5PM
                </p>
                <button
                  className="option-btn"
                  onClick={() =>
                    alert(
                      "Emergency: 24/7. Outpatient: Mon-Fri 8AM-5PM. Admin: Mon-Fri 8AM-5PM."
                    )
                  }
                >
                  <i className="fas fa-info-circle"></i> View Hours
                </button>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="map-section">
            <div className="section-header">
              <h3>Find Our Location</h3>
              <p>Visit us at Gregorio Lluch Memorial Hospital in Iligan City</p>
            </div>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=gregorio+lluch+memorial+hospital&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                title="Gregorio Lluch Memorial Hospital Location"
              ></iframe>
            </div>
          </section>

          {/* Emergency Banner */}
          <section className="emergency-banner">
            <div className="emergency-content">
              <i className="fas fa-exclamation-triangle"></i>
              <div className="emergency-text">
                <h3>24/7 Emergency Services Available</h3>
                <p>
                  Immediate care for critical conditions | Hotline: (063)
                  224-8454
                </p>
              </div>
              <a href="tel:+63632248454" className="emergency-btn">
                <i className="fas fa-phone"></i> Call Emergency
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
