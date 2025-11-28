import { fireEvent, render, screen, within } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

// Helper to render with memory history for route assertions
const renderWithRoute = (initialEntries = ['/']) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    history,
    ...render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    ),
  };
};

// 1) Should render the project list with initial projects
it('renders initial projects in the list', () => {
  renderWithRoute(['/']);
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  const list = screen.getByRole('list');
  const items = within(list).getAllByRole('listitem');
  // 3 initial projects
  expect(items).toHaveLength(3);
  expect(screen.getByText('Onboarding Portal')).toBeInTheDocument();
  expect(screen.getByText('API Gateway')).toBeInTheDocument();
  expect(screen.getByText('Mobile App Revamp')).toBeInTheDocument();
});

// 2) Should cycle project status when Change Status is clicked
it('cycles project status on Change Status click', () => {
  renderWithRoute(['/']);
  const item = screen.getByText('Onboarding Portal').closest('li');
  const badge = within(item).getByText('Pending');
  const button = within(item).getByRole('button', { name: /change status/i });

  // Pending -> In Progress -> Done -> Pending
  fireEvent.click(button);
  expect(within(item).getByText('In Progress')).toBeInTheDocument();
  fireEvent.click(button);
  expect(within(item).getByText('Done')).toBeInTheDocument();
  fireEvent.click(button);
  expect(within(item).getByText('Pending')).toBeInTheDocument();
});

// 3) Should navigate to detail page when clicking a project title
it('navigates to project detail and shows its data', () => {
  const { history } = renderWithRoute(['/']);
  fireEvent.click(screen.getByRole('link', { name: 'Onboarding Portal' }));
  // route should be /project/1
  expect(history.location.pathname).toBe('/project/1');
  expect(screen.getByRole('heading', { name: 'Onboarding Portal' })).toBeInTheDocument();
  expect(screen.getByText(/status:/i)).toBeInTheDocument();
  expect(screen.getByText('Build an onboarding portal for new hires.')).toBeInTheDocument();
});

// 4) Should show not found for unknown project id
it('shows not found for an unknown project id', () => {
  renderWithRoute(['/project/999']);
  expect(screen.getByRole('heading', { name: /project not found/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /back to projects/i })).toBeInTheDocument();
});

// 5) Should include a nav bar with brand and projects link
it('renders navbar with brand and Projects link', () => {
  renderWithRoute(['/']);
  expect(screen.getByText(/project tracker/i)).toBeInTheDocument();
  const projectsLink = screen.getByRole('link', { name: /projects/i });
  expect(projectsLink).toHaveAttribute('href', '/');
});