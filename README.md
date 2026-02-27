# React + Vite
 NotaryConnect MVP
 Project Overview

NotaryConnect is a React Single Page Application (SPA) that allows users to request mobile notary services and track appointment details in one place.

This MVP demonstrates core frontend development skills including:

Component-based architecture

React Router multi-view navigation

Dynamic routing

Local and global state management using React Context API

External REST API integration

Basic unit testing with Vitest

Production deployment on Vercel

 Problem This Application Solves

Individuals often struggle to find and organize mobile notary services. Communication happens through phone calls or text messages with no centralized tracking system.

NotaryConnect provides:

A structured request form

Appointment tracking

Status updates (Pending, Confirmed, Cancelled)

Address autocomplete via public API

A centralized dashboard view

 Technologies Used

React (Vite)

React Router DOM

React Context API

OpenStreetMap Nominatim API (address autocomplete)

Vitest

React Testing Library

Vercel (Deployment)

Git / GitHub

 Application Features (MVP Scope)
1️ Multi-View Navigation

Home

Request Form

Request Detail (dynamic route: /requests/:id)

Dashboard

404 Not Found route

2️ Dynamic Routing

Each request generates a unique route:

/requests/<generated-id>

3️ State Management

Local state for form inputs and UI interactions

Global state (Context API) for managing all notary requests

Requests are stored in memory for MVP purposes.

4️ External API Integration

The application integrates with:

OpenStreetMap Nominatim API

Used for:

Address autocomplete suggestions

Latitude and longitude retrieval

No API key required.

5️ Responsive Design

The application follows a mobile-first layout and adapts across:

Desktop

Tablet

Mobile

6️ Basic Testing

Basic unit tests were implemented using:

Vitest

React Testing Library

Tests verify:

Header navigation rendering

Request form rendering and required fields

 Running the Project Locally

Clone the repository:

git clone https://github.com/SimpsonTiffany/notaryconnect-mvp.git
cd notaryconnect-mvp

Install dependencies:

npm install

Run development server:

npm run dev

Run tests:

npm test

Build for production:

npm run build
 Live Deployment

Vercel Deployment:

 https://notaryconnect-mvp.vercel.app

 Vercel SPA Routing Configuration

A vercel.json file was added to support React Router dynamic routes:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

This prevents 404 errors on refresh for dynamic routes.

 Future Enhancements (Final Project Phase)

Planned expansions beyond MVP:

User authentication & role-based access

Persistent database (backend integration)

Real-time request updates

Payment processing

Admin dashboard

Map visualization using lat/lon coordinates

Full-stack expansion using Node.js / Express

 Author

Tiffany Simpson
Frontend Developer | Business Analyst | Computer Science Student
