import React, { useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

// App owns the project state and passes it down via props; it also passes callbacks
function App() {
  // useState array containing mock project log objects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Onboarding Portal', status: 'Pending', description: 'Build an onboarding portal for new hires.' },
    { id: 2, title: 'API Gateway', status: 'In Progress', description: 'Create a gateway to unify microservices.' },
    { id: 3, title: 'Mobile App Revamp', status: 'Done', description: 'Refresh UI and performance of the mobile app.' },
  ]);

  // callback to update a project status; demonstrates props-based update from child
  const handleChangeStatus = useCallback((id) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== id) return p;
      // cycle through statuses as an example state update
      const order = ['Pending', 'In Progress', 'Done'];
      const next = order[(order.indexOf(p.status) + 1) % order.length];
      return { ...p, status: next };
    }));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* Routes define SPA navigation without full refresh */}
        <Routes>
          <Route
            path="/"
            element={<ProjectList projects={projects} onChangeStatus={handleChangeStatus} />}
          />
          <Route
            path="/project/:id"
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;