import React from 'react';
import { Link } from 'react-router-dom';

// Simple navigation bar using Link to ensure SPA navigation
const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Project Tracker</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Projects</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
    background: '#0a6',
    color: '#fff',
  },
  brand: { fontWeight: 'bold' },
  links: { display: 'flex', gap: 12 },
  link: { color: '#fff', textDecoration: 'none' },
};

export default NavBar;
