import React, {useState} from 'react'
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
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for managing dropdown

  const toggleProducts = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsProductsOpen(!isProductsOpen); // Toggle the dropdown
  };
    

  // orders dropdown

  const [isOrdersOpen, setIsOrdersOpen] = useState(false); // State for managing dropdown



  return (
 

<nav id="sidebar" className={`active ${isCollapsed ? 'collapsed' : ''}`}>
    {/*sidebar collapse*/}
    <div className="sidebar-header text-center">
      <h3>{!isCollapsed && 'ItemPOS'}</h3>
    </div>
    <ul className="list-unstyled components side-link">
      <li>
        <Link to='/' style={{ textDecoration: "none" }} >
          <span>
            {/*sidebar 2 link*/}
            <MdDashboard />
          </span>
          {!isCollapsed && 'Dashboard'}
        </Link>
      </li>
      <li className="active product-sub">
        <a className='d-flex' style={{ textDecoration: "none" }} href="#" id="productsDropdown" onClick={toggleProducts}>
          <span>
          <FaShoppingCart />
          </span>
          {!isCollapsed && 'Product'}
          <div>
            <IoMdArrowDropdown className={`dropdownicon ${isProductsOpen ? 'rotate' : ''}`} />
            </div>

        </a>
        <ul className={`collapse list-unstyled ${isProductsOpen ? 'show' : ''}`} id="productsMenu">
        <li>
            <Link to='/itempage' style={{ fontSize: "1em", display:"flex"}} href="#">
              <span style={{paddingLeft:"10%"}}>
              <IoMdAddCircle />
              </span>
             {!isCollapsed && 'add new'}
              
            </Link>
          </li>
        </ul>
      </li>
      <li className="active orders-sub">
        <Link to="/orders" className='d-flex' style={{ textDecoration: "none" }}  id="ordersDropdown" >
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