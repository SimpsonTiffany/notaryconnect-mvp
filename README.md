Project Overview

NotaryConnect is a React single-page application designed to streamline the process of requesting and managing mobile notary services. The application allows users to submit document notarization requests, track their requests, and view request details through a structured dashboard interface.

This project demonstrates modern frontend development practices including React component architecture, client-side routing, authentication systems, and secure deployment. The application was developed as a final project to simulate building a production-ready frontend application.

The goal of the application is to provide a simple but scalable foundation for a digital notary service platform where users can schedule and manage notarization appointments.

Features
Request Notary Service
Users can submit a new notarization request by entering:
-Full name
-Document type
-Appointment date and time
Each request is stored and assigned a unique ID that allows the user to view request details.

Request Dashboard
The dashboard provides a centralized view of submitted requests. Users can:
-View request status
-Navigate to detailed request information
-Manage multiple requests
The dashboard is protected using authentication and only accessible to logged-in users.

Authentication System
The application implements a JWT-style authentication flow using React Context API for state management.
Authentication features include:
-User registration
-User login
-Secure logout
-Protected routes
-Session expiration handling
Protected routes ensure only authenticated users can access sensitive application areas such as the dashboard.

Responsive Design
The application is designed using a mobile-first approach and includes responsive layout adjustments using CSS and media queries.
-The interface adapts to:
-Desktop screens
-Tablets
-Mobile devices
This ensures a consistent experience across multiple device types.

Error Handling
Improved error handling was implemented to strengthen the user experience. The application validates form input and prevents invalid submissions.

Examples include:
-Required field validation
-Safe form handling
-Navigation protection
-Graceful fallback routes using a custom 404 page

Technology Stack
-Frontend
-React
-React Router
-React Context API

Development Tools
-Vite
-ESLint
-Vitest
-Testing Library

Deployment
-Vercel

Version Control
-Git
-GitHub

Application Architecture
The application follows a modular React architecture using reusable components and centralized state management.

Project structure:
src/
 ├── components/
 │   ├── Header.jsx
 │   └── ProtectedRoute.jsx
 │
 ├── contexts/
 │   ├── AuthContext.jsx
 │   └── RequestsContext.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   ├── Dashboard.jsx
 │   ├── RequestForm.jsx
 │   ├── RequestDetail.jsx
 │   └── NotFound.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── App.css

The architecture separates responsibilities into components, contexts, and pages to improve maintainability and scalability.

Authentication Flow
-A user registers with an email and password.
-Credentials are validated and stored within the authentication context.
-When logged in, the application marks the session as authenticated.
-Protected routes check authentication status before rendering.
-If a user is not authenticated, they are redirected to the login page.
Logout clears the authentication state and removes stored session information.

Security Enhancements
The application implements basic frontend security best practices including:
-Input validation to prevent malicious input
-Avoiding unsafe HTML rendering
-Secure session handling
-Authentication-based route protection
-Environment variable usage for configuration values
Environment variables are used for configuration settings such as authentication session timeout.

Example:
-VITE_AUTH_TIMEOUT_MINUTES=30

Testing
The application includes testing infrastructure using Vitest and React Testing Library.
Testing coverage includes:
-Authentication behavior
-Protected route access
-Component rendering
-Form interaction
To run tests:
-npm run test

Installation and Setup
Clone the repository:
git clone https://github.com/SimpsonTiffany/notaryconnect-mvp.git

Navigate to the project directory:
cd notaryconnect-mvp

Install dependencies:
npm install

Start the development server:
npm run dev

Deployment
The application is deployed using Vercel for production hosting.

Live application:
https://notaryconnect-mvp.vercel.app

Vercel provides:
-automatic deployments from GitHub
-environment variable management
-production build optimization

Future Enhancements
Possible improvements for future development include:
-Backend API integration for persistent request storage
-Real JWT authentication with a secure backend
-Role-based access control
-Email confirmations for appointment scheduling
-Push notifications for request updates
-Calendar integration for scheduling
-Administrative dashboard for notaries

Learning Outcomes
This project demonstrates the ability to:
-Build a multi-page React application using React Router
-Implement authentication with protected routes
-Use React Context API for state management
-Structure scalable React component architecture
-Handle form validation and user input
-Deploy production-ready applications
-Manage projects using Git and GitHub workflows

Author

Tiffany Simpson
Computer Science – Cybersecurity
Newberry College

GitHub
https://github.com/SimpsonTiffany