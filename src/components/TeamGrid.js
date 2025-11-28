import '../styles/Team.css';

const TeamGrid = () => {
  return (
    <section className="team-section">
      <div className="section-header">
        <h3>Our Leadership Team</h3>
        <p>Meet the experts behind our innovative healthcare solutions</p>
      </div>

      <div className="team-grid">
        {/* Member 1 */}
        <div className="team-member">
          <div className="member-image">
            <img src="/images/luffy3.jpg" alt="Dr. Sarah Johnson" />
            <div className="member-overlay">
              <div className="member-info">
                <h4>Dr. Sarah Johnson</h4>
                <p>Chief Medical Officer</p>
                <p>
                  Specializing in patient care optimization with 15 years of
                  experience in healthcare management and patient-centered care
                  models.
                </p>
                <div className="member-skills">
                  <span>Healthcare Management</span>
                  <span>Patient Care</span>
                  <span>Medical Innovation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="member-contact">
            <p>
              <i className="fas fa-envelope"></i> sjohnson@patientcare.com
            </p>
            <p>
              <i className="fas fa-phone"></i> (063) 221-1001
            </p>
            <p>
              <i className="fas fa-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-member">
          <div className="member-image">
            <img src="/images/luffy.jpg" alt="Ryan Recososa" />
            <div className="member-overlay">
              <div className="member-info">
                <h4>Ryan Recososa</h4>
                <p>System Developer</p>
                <p>
                  Leading our technical team to ensure seamless queue
                  management operations and digital healthcare solutions
                  implementation.
                </p>
                <div className="member-skills">
                  <span>System Development</span>
                  <span>Queue Management</span>
                  <span>Digital Solutions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="member-contact">
            <p>
              <i className="fas fa-envelope"></i> ryanrecososa16@patientcare.com
            </p>
            <p>
              <i className="fas fa-phone"></i> (063) 221-1002
            </p>
            <p>
              <i className="fas fa-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-member">
          <div className="member-image">
            <img src="/images/luffy1.jpg" alt="Jennifer Lee" />
            <div className="member-overlay">
              <div className="member-info">
                <h4>Jennifer Lee</h4>
                <p>Patient Experience Manager</p>
                <p>
                  Dedicated to improving patient satisfaction and streamlining
                  hospital visits through innovative service design and process
                  optimization.
                </p>
                <div className="member-skills">
                  <span>Patient Experience</span>
                  <span>Service Design</span>
                  <span>Process Optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="member-contact">
            <p>
              <i className="fas fa-envelope"></i> jlee@patientcare.com
            </p>
            <p>
              <i className="fas fa-phone"></i> (063) 221-1003
            </p>
            <p>
              <i className="fas fa-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
