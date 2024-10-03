import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Determine if the current route is '/orders' or '/history'
  const hideLayout = location.pathname === '/orders' || location.pathname === '/history';

  return (
    <div className="row">
      {/* Conditionally render Sidebar */}
      {!hideLayout && (
        <div className="col-2 p-0">
          <Sidebar />
        </div>
      )}
      
      <div className={hideLayout ? 'col-12 p-0' : 'col-10 p-0'}>
        {/* Conditionally render Navbar */}
        {!hideLayout && <Navbar />}
        
        {/* This is where child routes will be rendered */}
        <Outlet />
        
        {/* Conditionally render Footer */}
        {!hideLayout && <Footer />}
        
      </div>
    </div>
  );
};

export default Layout;
