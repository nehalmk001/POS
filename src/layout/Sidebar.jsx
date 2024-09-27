import React from 'react'
import "../css/Sidebar.css"

const Sidebar = () => {
  return (
    <div>

<nav id="sidebar" className="active">
    {" "}
    {/*sidebar collapse*/}
    <div className="sidebar-header bg-white">
      <h3 className="text-center logo">ItemPOS</h3>
    </div>
    <ul className="list-unstyled components side-link">
      <li>
        <a style={{ textDecoration: "none" }} href="#">
          <span>
            {" "}
            {/*sidebar 2 link*/}
            <i className="fa-solid fa-chart-simple" />
          </span>
          Overview
        </a>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
            <i className="fa-solid fa-user" />
          </span>
          Customers
        </a>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
            <i className="fa-solid fa-cart-shopping" />
          </span>
          Orders
        </a>
      </li>
      <li className="active settings-sub">
        <a style={{ textDecoration: "none" }} href="#" id="settingsDropdown">
          <span>
            <i className="fa-solid fa-gear" />
          </span>
          Settings
          <i className="fa-solid fa-caret-down m-2 dropdownicon" />
        </a>
        <ul className="collapse list-unstyled" id="settingsMenu">
          <li>
            <a style={{ fontSize: "1em" }} href="#">
              <span>
                <i className="fa-solid fa-square-plus" />
              </span>
              Add Product
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a style={{ textDecoration: "none" }} href="">
          <span>
            <i className="fa-solid fa-message" />
          </span>
          Messages
        </a>
      </li>
    </ul>
  </nav>

    </div>
  )
}

export default Sidebar