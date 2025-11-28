# Hospital Queueing System (SPA) – Lab Activity 6

This React project demonstrates a stateful Single-Page Application (SPA) that applies component interaction, state management, and client-side routing using React Router.

---

## Purpose of the Application
This application was developed to fulfill the requirements for Lab Activity 6 by demonstrating the use of React state, props, and routing inside a working SPA environment.

---

## Features and Technologies Used

The application uses the following concepts and tools:

- React with Functional Components
- `useState` Hook for state management
- Props and callback props for parent-to-child and child-to-parent communication
- React Router v6 for client-side routing
- `<Link>` for navigation without browser refresh

---

## How the System Works

### State Management
The main component (`App.js`) holds an array of mock project records using the `useState` hook. Each project includes an `id`, `title`, `status`, and `description`.

### Props and Callback Functions
The project list is passed from the parent component to child components using props. A callback function is also passed to allow child components to update the state owned by the parent.

### Routing and Navigation
The project uses React Router with the following routes:

| Route | View |
|--------|------|
| `/` | Project List |
| `/project/:id` | Project Details |

Navigation between pages uses the `<Link>` component, allowing smooth transitions without refreshing the browser.

### Components
This project contains the required functional components:
- App
- NavBar
- ProjectList
- ProjectDetail

### Data Flow
All data follows unidirectional flow: the parent manages state, and child components only display data or request updates using callback props.

### Interactivity
Users can:
- Click a project title to view details
- Click "Back to Projects" to return
- Click "Change Status" to update a project state instantly

---

## Key Files Structure
src/
├── index.js
├── App.js
├── components/
│ ├── NavBar.js
│ ├── ProjectList.js
│ ├── ProjectDetail.js



---

## Setup Instructions

### Requirements
- Node.js 16 or higher
- npm 8+ (or yarn)

### Installation
npm install


### Install React Router (if not installed)
npm install react-router-dom@6


### Run Project
npm start


### Access in Browser
http://localhost:3000


---

## Troubleshooting

- If navigation refreshes the page, check that `<Link>` is used instead of `<a>` tags.
- If the detail view shows "Project not found", verify the ID comparison logic.
- If clicking "Change Status" does not work, ensure the callback function is correctly passed and invoked.

---

## Notes

- `useState` is called only at the top level of the parent component.
- Props use destructuring for readability.
- Routing uses React Router v6 syntax (`Routes` and `Route`).
- State is updated only in the parent component.

---

## Author
CCC151_RECOSOSA  
Lab Activity 6 – Component State, Data Flow, and Routing
