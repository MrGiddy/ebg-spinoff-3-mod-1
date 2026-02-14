import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ServiceOfferingDetail from './pages/ServiceOfferingDetail';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectDetail from './pages/ProjectDetail';
import PortfolioPage from './pages/PortfolioPage';
import { ToastProvider } from './context/ToastContext';

const { createHashRouter, RouterProvider, Navigate } = ReactRouterDOM;

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "services/:categorySlug/:serviceSlug",
        element: <ServiceOfferingDetail />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ]
  }
]);

function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

export default App;