import React from 'react';
import { Link } from 'react-router-dom';

// ProjectList receives projects and an onChangeStatus callback from the parent (App)
const ProjectList = ({ projects, onChangeStatus }) => {
  return (
    <div style={styles.container}>
      <h2>Projects</h2>
      <ul style={styles.list}>
        {projects.map(({ id, title, status }) => (
          <li key={id} style={styles.item}>
            <div style={styles.itemHeader}>
              <Link to={`/project/${id}`} style={styles.title}>{title}</Link>
              <span style={styles.badge}>{status}</span>
            </div>
            <button
              style={styles.button}
              onClick={() => onChangeStatus(id)}
            >
              Change Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: 16 },
  list: { listStyle: 'none', padding: 0, display: 'grid', gap: 12 },
  item: { border: '1px solid #ddd', padding: 12, borderRadius: 8 },
  itemHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontWeight: 'bold', textDecoration: 'none', color: '#0a6' },
  badge: { background: '#eef', padding: '2px 8px', borderRadius: 12, fontSize: 12 },
  button: { marginTop: 8, padding: '6px 10px', cursor: 'pointer' },
};

export default ProjectList;
