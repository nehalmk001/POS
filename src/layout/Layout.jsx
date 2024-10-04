import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  // Sidebar state
  const [issidebarcollapsed, setissidebarcollapsed] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setissidebarcollapsed(!issidebarcollapsed);
  };

  // Determine if the current route is '/orders' or '/history'
  const hideLayout = location.pathname === '/orders' || location.pathname === '/history';

  return (
    <div style={{ display: 'flex' }}>
  
      {!hideLayout && (
        <div
          style={{
            width: issidebarcollapsed ? '0%' : '15%',
            transition: '',
            minHeight: '100vh', // Ensures the sidebar takes up the full height
            overflow: 'hidden',  // Prevents content overflow when collapsed
          }}
        >
          <Sidebar isCollapsed={issidebarcollapsed} />
        </div>
      )}

      <div
        style={{
          width: hideLayout ? '100%' : issidebarcollapsed ? '100%' : '85%',
          
        }}
      >

        {!hideLayout && <Navbar onToggleSidebar={toggleSidebar} />}
        
     
        <Outlet />
        
   
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
};

export default Layout;