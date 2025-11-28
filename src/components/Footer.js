
import '../styles/Footer.css';

const Footer = ({ onPageChange }) => {
  const contactInfo = {
    address: "Gregorio Lluch Memorial City Hospital, Iligan City",
    phone: "(063) 221-1234",
    email: "info@prioritycare.com",
    hours: "Open 24/7"
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Patient Centered-Care</h3>
          <p>A cutting-edge queue management system designed specifically for Gregorio Lluch Memorial City Hospital to enhance patient experience and operational efficiency.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/GTLMHOfficial" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <button className="social-btn">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-btn">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="social-btn">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><button onClick={() => onPageChange('home')} className="footer-link-btn">Home</button></li>
            <li><button onClick={() => onPageChange('about')} className="footer-link-btn">About Us</button></li>
            <li><button onClick={() => onPageChange('services')} className="footer-link-btn">Services</button></li>
            <li><button onClick={() => onPageChange('appointment')} className="footer-link-btn">Appointments</button></li>
            <li><button onClick={() => onPageChange('contact')} className="footer-link-btn">Contact</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> {contactInfo.address}</p>
          <p><i className="fas fa-phone"></i> {contactInfo.phone}</p>
          <p><i className="fas fa-envelope"></i> {contactInfo.email}</p>
          <p><i className="fas fa-clock"></i> {contactInfo.hours}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/images/iit.png" alt="IIT Logo" />
          <div className="footer-logo-text">
            <h3>Priority-Care</h3>
            <p>Queue Management System</p>
          </div>
        </div>
        <p className="copyright">&copy; 2025 Gregorio Lluch Memorial City Hospital. All Rights Reserved. | Developed by Ryan Recososa</p>
      </div>
    </footer>
  );
};

export default Footer;