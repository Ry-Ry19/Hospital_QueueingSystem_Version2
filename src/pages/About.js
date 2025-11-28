import ServicesPreview from '../components/ServicesPreview';
import TeamGrid from '../components/TeamGrid';
import "../styles/About.css";

export default function About({ onPageChange }) {
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
        <section className="about-hero">
          <h1>About Patient Centered-Care</h1>
          <p>Revolutionizing healthcare through intelligent patient prioritization</p>
        </section>

        <div className="about-three">
          <div className="core-values">
            {/* existing core values */}
          </div>

          <section className="timeline">
            {/* existing timeline items */}
          </section>

          <div className="team-column">
            <div className="services-preview">
              <TeamGrid />
            </div>
          </div>
        </div>

        {/* Services preview (short) for About page */}
        <section className="services-section">
          <ServicesPreview onViewAll={onPageChange} />
        </section>
      </main>
    </>
  );
}