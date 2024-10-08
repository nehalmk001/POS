import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../css/Sidebar.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation();
  
  
  // Determine the active item based on the current pathname
  const getActiveItem = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 1;
      case '/itemlist':
      case  '/additem':
        return 2;
      case '/orders':
        return 3;
      case '/messages':
        return 4;
      default:
        return null;
    }
  };

  const activeItem = getActiveItem();

  return (
    <nav id="sidebar" className={`active ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header text-center">
        <h3>{!isCollapsed && 'ItemPOS'}</h3>
      </div>
      <ul className="list-unstyled components side-link">
        <li className={activeItem === 1 ? 'active-item' : ''}>
          <Link to='/dashboard' style={{ textDecoration: "none" }}>
            <MdDashboard />
            {!isCollapsed && ' Dashboard'}
          </Link>
        </li>
        <li className={activeItem === 2 ? 'active-item' : ''}>
          <Link to='/itemlist' style={{ textDecoration: "none" }}>
            <MdDashboard />
            {!isCollapsed && ' Product'}
          </Link>
        </li>
        <li className={activeItem === 3 ? 'active-item' : ''}>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <FaShoppingCart />
            {!isCollapsed && ' POS'}
          </Link>
        </li>
        <li className={activeItem === 4 ? 'active-item' : ''}>
          <Link to="/messages" style={{ textDecoration: "none" }}>
            <MdMessage />
            {!isCollapsed && ' Messages'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
