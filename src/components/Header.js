import '../styles/Header.css';

const Header = ({ currentPage, onPageChange, title }) => {
  const hospitalInfo = {
    title: "Gregorio Lluch Memorial Hospital",
    description: "Patient Centered-Care Queue Management System"
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'appointment', label: 'Appointment' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header id="header">
      <div className="logo">
        <img src="/images/iit.png" alt="Hospital Logo" />
        <div className="logo-text">
          <h1>{title || hospitalInfo.title}</h1>
          <p>{hospitalInfo.description}</p>
        </div>
      </div>
      
      <nav id="desktop-nav">
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href="#!" 
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => onPageChange(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="theme-switcher">
        <button id="themeToggle" className="theme-toggle">
          <i className="fas fa-moon"></i>
          <span className="theme-text">Dark Mode</span>
        </button>
      </div>
      
      <button className="mobile-menu-btn">
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;