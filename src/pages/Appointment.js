import "../styles/Appointment.css";

const Appointment = () => {
  return (
    <div>
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/images/vidbg-final.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="container">
        {/* Appointment Hero Section */}
        <section className="appointment-hero">
          <h2>How are you feeling today?</h2>
          <p>Schedule your visit with our healthcare professionals quickly and conveniently.</p>
          
          <button className="ai-symptom-checker">
            <i className="fas fa-robot"></i> AI Symptom Checker
          </button>

          <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>Let our AI help prioritize your condition before booking</p>
        </section>

        {/* Appointment Form Section */}
        <section className="appointment-section">
          <div className="appointment-form">
            <div className="form-header">
              <h3>Appointment Request</h3>
              <p>Fill out the form to schedule your visit</p>
            </div>
            <form id="appointmentForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="form-control" required />
              </div>

              {/* Hidden fields for future use */}
              <input type="hidden" name="date" value="" />
              <input type="hidden" name="time" value="" />
              <input type="hidden" name="department" value="" />

              <div className="form-group">
                <label htmlFor="symptoms">How are you feeling?</label>
                <textarea id="symptoms" name="symptoms" className="form-control" rows="3" placeholder="Describe your symptoms..."></textarea>
              </div>

              <div className="form-group" style={{display: 'none'}}>
                <label htmlFor="priority">Priority Level (Optional)</label>
                <select id="priority" name="priority" className="form-control">
                  <option value="">Select priority</option>
                  <option value="critical">Critical - Need immediate attention</option>
                  <option value="high">High - Urgent but not life-threatening</option>
                  <option value="medium">Medium - Needs care within 24 hours</option>
                  <option value="low">Low - Routine checkup or follow-up</option>
                </select>
              </div>

              <button type="submit" className="btn-submit">Request Appointment</button>
            </form>
          </div>

          <div className="appointment-benefits">
            <div className="benefits-header">
              <h3>Why Book With Us?</h3>
              <p>Experience healthcare designed around your needs</p>
            </div>
            <ul className="benefits-list">
              <li className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="benefit-content">
                  <h4>Priority-Based Scheduling</h4>
                  <p>Patients with more urgent conditions are seen first, ensuring timely care for those who need it most.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="benefit-content">
                  <h4>Reduced Waiting Times</h4>
                  <p>Our smart queue system minimizes your time in the waiting room through efficient scheduling.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="benefit-content">
                  <h4>AI-Powered Triage</h4>
                  <p>Our symptom checker helps determine the appropriate priority level for your condition.</p>
                </div>
              </li>
              <li className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="benefit-content">
                  <h4>Real-Time Notifications</h4>
                  <p>Receive updates about your appointment status via email or SMS.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* AI Priority Indicator Section */}
        <section className="priority-indicator">
          <h3>Want to know your possible symptoms?</h3>
          <p>Our AI Symptom Checker can help assess your condition and provide possible symptoms and findings of your illness.</p>
          <button className="ai-symptom-checker">
            <i className="fas fa-robot"></i> Check My Feelings Now
          </button>
          
          <div className="priority-levels">
            <div className="priority-level critical">
              <h4>Critical</h4>
              <p>Life-threatening conditions requiring immediate care</p>
            </div>
            <div className="priority-level high">
              <h4>High</h4>
              <p>Urgent conditions that need care within hours</p>
            </div>
            <div className="priority-level medium">
              <h4>Medium</h4>
              <p>Serious but stable conditions needing care within 24 hours</p>
            </div>
            <div className="priority-level low">
              <h4>Low</h4>
              <p>Routine checkups or non-urgent follow-ups</p>
            </div>
          </div>
        </section>

        {/* Patient Records Section */}
        <section className="patient-records">
          <div className="records-header">
            <h3>Appointment Records</h3>
            <button className="action-btn">
              <i className="fas fa-sync"></i> Refresh
            </button>
          </div>
          <table className="records-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Department</th>
                <th>Symptoms</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ryan Recososa</td>
                <td>2025-01-15</td>
                <td>Emergency</td>
                <td>Chest pain, shortness of breath</td>
                <td><span className="priority-indicator-table critical">Critical</span></td>
                <td><span className="status-indicator">Completed</span></td>
              </tr>
              <tr>
                <td>Amin Casan</td>
                <td>2025-01-16</td>
                <td>Cardiology</td>
                <td>High blood pressure</td>
                <td><span className="priority-indicator-table high">High</span></td>
                <td><span className="status-indicator">Scheduled</span></td>
              </tr>
              <tr>
                <td>Ajman Mocsana</td>
                <td>2025-01-17</td>
                <td>Orthopedics</td>
                <td>Back pain</td>
                <td><span className="priority-indicator-table medium">Medium</span></td>
                <td><span className="status-indicator">Pending</span></td>
              </tr>
              <tr>
                <td>Ana Reyes</td>
                <td>2025-01-18</td>
                <td>Pediatrics</td>
                <td>Regular checkup</td>
                <td><span className="priority-indicator-table low">Low</span></td>
                <td><span className="status-indicator">Scheduled</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Appointment;