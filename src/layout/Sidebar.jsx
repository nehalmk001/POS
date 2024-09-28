import React from 'react'
import "../css/Sidebar.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Sidebar = () => {
  return (
 

<nav id="sidebar" className="active">
    {/*sidebar collapse*/}
    <div className="sidebar-header">
      <h3 className="text-center logo">ItemPOS</h3>
    </div>
    <ul className="list-unstyled components side-link">
      <li>
        <a style={{ textDecoration: "none" }} href="#">
          <span>
            {/*sidebar 2 link*/}
            <FaChartSimple />
          </span>
          Overview
        </a>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
          <IoPerson />
          </span>
          Customers
        </a>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
          <FaShoppingCart />
          </span>
          Orders
        </a>
      </li>
      <li className="active settings-sub">
        <a style={{ textDecoration: "none" }} href="#" id="settingsDropdown">
          <span>
          <IoSettingsSharp />
          </span>
          Settings
          <IoMdArrowDropdown />
        </a>
        <ul className="collapse list-unstyled" id="settingsMenu">
          <li>
            <a style={{ fontSize: "1em" }} href="#">
              <span>
              <IoMdAddCircle />
              </span>
              Add Product
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