import React, {useState} from 'react'
import "../css/Sidebar.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Sidebar = () => {

  // product dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for managing dropdown

  const toggleProducts = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsProductsOpen(!isProductsOpen); // Toggle the dropdown
  };
    

  // orders dropdown

  const [isOrdersOpen, setIsOrdersOpen] = useState(false); // State for managing dropdown

  const toggleOrders = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsOrdersOpen(!isOrdersOpen); // Toggle the dropdown
  };
    

  return (
 

<nav id="sidebar" className="active">
    {/*sidebar collapse*/}
    <div className="sidebar-header">
      <h3 className="text-center logo">ItemPOS</h3>
    </div>
    <ul className="list-unstyled components side-link">
      <li>
        <a style={{ textDecoration: "none" }} href="/">
          <span>
            {/*sidebar 2 link*/}
            <MdDashboard />
          </span>
          Dashboard
        </a>
      </li>
      <li className="active product-sub">
        <a className='d-flex' style={{ textDecoration: "none" }} href="#" id="productsDropdown" onClick={toggleProducts}>
          <span>
          <FaShoppingCart />
          </span>
          Product
          <div className='dropdownicon'>
            <IoMdArrowDropdown />
            </div>

        </a>
        <ul className={`collapse list-unstyled ${isProductsOpen ? 'show' : ''}`} id="productsMenu">
        <li>
            <a style={{ fontSize: "1em", display:"flex"}} href="#">
              <span style={{paddingLeft:"10%"}}>
              <IoMdAddCircle />
              </span>
              Add new
              
            </a>
          </li>
        </ul>
      </li>
      <li className="active orders-sub">
        <a className='d-flex' style={{ textDecoration: "none" }} href="#" id="ordersDropdown" onClick={toggleOrders}>
          <span>
          <FaShoppingCart />
          </span>
          Orders
          <div className='dropdownicon'>
            <IoMdArrowDropdown />
            </div>

        </a>
        <ul className={`collapse list-unstyled ${isOrdersOpen ? 'show' : ''}`} id="ordersMenu">
        <li>
            <a style={{ fontSize: "1em", display:"flex"}} href="#">
              <span style={{paddingLeft:"10%"}}>
              <IoMdAddCircle />
              </span>
              Order history
            </a>
          </li>
          <li>
            <a style={{ fontSize: "1em", display:"flex" }} href="#">
              <span style={{paddingLeft:"10%"}}>
              <IoMdAddCircle />
              </span>
              New orders
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
          <MdMessage />
          </span>
          Messages
        </a>
      </li>
    </ul>
  </nav>

  )
}

export default Sidebar