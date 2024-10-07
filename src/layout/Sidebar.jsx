import React from 'react'
import "../css/Sidebar.css"
import { FaHistory } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({isCollapsed}) => {

  // product dropdown

    

  return (
 

<nav id="sidebar" className={`active ${isCollapsed ? 'collapsed' : ''}`}>
    {/*sidebar collapse*/}
    <div className="sidebar-header text-center">
      <h3>{!isCollapsed && 'ItemPOS'}</h3>
    </div>
    <ul className="list-unstyled components side-link">
      <li>
        <Link to='/dashboard' style={{ textDecoration: "none" }} >
          <span>
            {/*sidebar 2 link*/}
            <MdDashboard />
          </span>
          {!isCollapsed && 'Dashboard'}
        </Link>
      </li>
      <li>
        <Link to='/itemlist' style={{ textDecoration: "none" }} >
          <span>
            {/*sidebar 2 link*/}
            <MdDashboard />
          </span>
          {!isCollapsed && 'Product'}
        </Link>
      </li>
      <li className="active ">
        <Link to="/orders" className='d-flex' style={{ textDecoration: "none" }} >
          <span>
          <FaShoppingCart />
          </span>
          {!isCollapsed && 'POS'}
        </Link>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
          <MdMessage />
          </span>{!isCollapsed && 'Messages'}
        </a>
      </li>
    </ul>
  </nav>

  )
}

export default Sidebar