import React, {useState} from 'react'
import "../css/Sidebar.css"
import { FaHistory } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

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
          <div>
            <IoMdArrowDropdown className={`dropdownicon ${isProductsOpen ? 'rotate' : ''}`} />
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
          <div>
            <IoMdArrowDropdown className={`dropdownicon ${isOrdersOpen ? 'rotate' : ''}`}/>
            </div>

        </a>
        <ul className={`collapse list-unstyled ${isOrdersOpen ? 'show' : ''}`} id="ordersMenu">
        <li>
            <a style={{ fontSize: "1em", display:"flex"}} href="#">
              <span style={{paddingLeft:"10%"}}>
              <FaHistory />
              </span>
              Order history
            </a>
          </li>
          <li>
            <a style={{ fontSize: "1em", display:"flex" }} href="#">
              <span style={{paddingLeft:"10%"}}>
              <FaCartPlus />
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