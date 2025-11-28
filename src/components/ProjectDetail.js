import React from 'react';
import { useParams, Link } from 'react-router-dom';

// ProjectDetail reads id from the URL and finds the project passed from parent via props
const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div style={styles.container}>
        <h2>Project not found</h2>
        <Link to="/" style={styles.back}>Back to Projects</Link>
      </div>
    );
  }

  const { title, status, description } = project;

  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <p><strong>Status:</strong> {status}</p>
      {description && <p>{description}</p>}
      <Link to="/" style={styles.back}>Back to Projects</Link>
    </div>
  );
};

const styles = {
  container: { padding: 16 },
  back: { color: '#0a6', textDecoration: 'none' },
};

export default ProjectDetail;
