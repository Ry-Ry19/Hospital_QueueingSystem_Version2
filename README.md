Hospital Queueing System (SPA) – Lab 6
This React app demonstrates a stateful Single-Page Application (SPA) using:

useState for parent-owned state
Props and callback props for unidirectional data flow
Client-side routing with react-router-dom v6
Navigation via Link for smooth transitions without page refresh
How this meets Lab 6 requirements

State (useState): App.js owns an array of mock project logs [{ id, title, status }].
Props: App passes the projects array to ProjectList and to ProjectDetail.
Callback prop: App passes a toggleStatus function to ProjectList; the child calls it to update parent state.
Routing: BrowserRouter, Routes, and Route configured for:
“/” -> ProjectList (List View)
“/project/:id” -> ProjectDetail (Detail View)
Navigation: All internal navigation uses Link.
Components: At least four functional components: App, NavBar, ProjectList, ProjectDetail.
Data flow: Unidirectional. Parent owns state; children display data or invoke a parent callback.
Interactivity: Clicking links changes the URL and view with no full refresh; clicking “Change Status” updates the list immediately.
Project structure (key files)

src/index.js: Wraps App with BrowserRouter.
src/App.js: Owns state, defines routes, passes props and callback.
src/components/NavBar.js: Contains Link-based navigation.
src/components/ProjectList.js: Renders list via .map(), includes “Change Status” and detail Links.
src/components/ProjectDetail.js: Reads :id via useParams and shows details.
Prerequisites

Node.js 16+ recommended
npm 8+ or yarn
Setup

Install dependencies:
npm install
Install React Router (if not already installed):
npm install react-router-dom@6
Start the dev server:
npm start
Open the app:
http://localhost:3000
Usage walkthrough

Click “Projects” in the NavBar to view the list (at “/”).
Click any project title to navigate to its detail view (at “/project/:id”).
Click “Back to list” on the detail view to return to the list.
In the list, click “Change Status” to toggle a project’s status (e.g., done/pending). The list updates immediately.
Key implementation notes

useState is called at the top level of App (no conditional hooks).
Props are destructured in child components, e.g., const ProjectList = ({ projects, onToggleStatus }) => { … }.
The callback prop does not mutate state directly in the child; it calls the parent function to update via setState.
Routes are declared with react-router-dom v6 (Routes/Route), not the legacy Switch component.
Troubleshooting

If navigation triggers a full page reload, verify:
You are using Link from react-router-dom instead of anchor tags.
App is wrapped in BrowserRouter (in src/index.js).
If the detail page shows “Project not found,” verify the :id is parsed as a string and compare loosely (String(p.id) === String(id)).
If clicking “Change Status” does nothing, ensure onToggleStatus is passed from App and wired to the button’s onClick.
Optional enhancements

Add filtering or sorting in ProjectList.
Add more project fields (e.g., owner, createdAt).
Persist state with localStorage.
Add tests for routing and state updates.