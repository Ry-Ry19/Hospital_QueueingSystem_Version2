import '../styles/Index.css';

const Home = () => {
  return (
    
    <div>
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/images/vidbg-final.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Transforming Healthcare <span>Experience</span></h2>
            <p>Priority-Care is an innovative queue management system designed to streamline patient flow, reduce waiting times, and prioritize critical cases at Gregorio Lluch Memorial City Hospital.</p>
            <div className="btn-group">
              <button className="btn btn-cta">Make an Appointment</button>
              <button className="btn btn-outline">Show Solution</button>
            </div>
          </div>
        </section>
      </main>
      

      <section className="features">
        <div className="section-title">
          <h2>Our Key Features</h2>
          <p>Discover how Priority-Care revolutionizes patient management in healthcare facilities.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-clock"></i></div>
            <h3>Reduced Waiting Time</h3>
            <p>Our smart queue system minimizes patient waiting time by optimizing appointment scheduling and resource allocation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-heartbeat"></i></div>
            <h3>Priority Management</h3>
            <p>Automatically prioritizes patients based on medical urgency, ensuring critical cases receive immediate attention.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
            <h3>Real-time Updates</h3>
            <p>Patients receive live updates about their queue status via SMS or mobile app, reducing anxiety and uncertainty.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="section-title">
          <h2>Our Impact</h2>
          <p>Numbers that demonstrate our commitment to better healthcare</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">85</div>
            <div className="stat-label">% Reduction in Waiting Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12000</div>
            <div className="stat-label">Patients Served Monthly</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95</div>
            <div className="stat-label">% Patient Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">/7 Availability</div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Get quick answers about our Priority-Care Queue Management System</p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              What is Priority-Care Queue Management System? <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>It is a digital solution designed to manage hospital queues efficiently, prioritize patients based on urgency, and reduce waiting times.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              How are patients prioritized? <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>Patients are categorized by medical urgency using an automated assessment and triage system integrated with staff evaluation.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Is the system available 24/7? <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>Yes, the Priority-Care system operates continuously to handle outpatient scheduling and emergency responses around the clock.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;