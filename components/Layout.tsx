import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ToastContainer from './ToastContainer';

const { Outlet, useLocation } = ReactRouterDOM;

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Handle scroll to top on route change or hash scroll
  useEffect(() => {
    if (hash) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <ToastContainer />
    </div>
  );
}