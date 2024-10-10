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
    <div style={{ display: 'flex',height:'100vh' }}>
  
      {!hideLayout && (
       <div
       style={{
         width: issidebarcollapsed ? '0%' : '15%', // Adjust this based on whether the sidebar is collapsed
         
       }}
     >
     
          <Sidebar isCollapsed={issidebarcollapsed}/>
        </div>
      )}

      <div
        style={{
          width: hideLayout ? '100%' : issidebarcollapsed ? '100vw' : '85%',
          overflowX:'hidden',backgroundColor:'#f7f8fc'
        }}
      >

        {!hideLayout && <Navbar onToggleSidebar={toggleSidebar} isCollapsed={issidebarcollapsed} />}
        
     
        <Outlet  />
        
   
        {!hideLayout && <Footer isCollapsed={issidebarcollapsed} />}
      </div>
    </div>
  );
};

export default Layout;