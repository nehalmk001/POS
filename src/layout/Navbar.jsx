import React, {useEffect} from 'react'
import '../css/Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import profileImg from "../assets/profile.png"
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';



const Navbar = ({ onToggleSidebar, isCollapsed }) => {

  useEffect(() => {
    // Initialize all tooltips on the page
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
   

    <nav className="navbar navbar-expand-lg" style={{ width: isCollapsed ? '100%' : '85%' }}>
      <div className="container-fluid nav-content">
        <button onClick={onToggleSidebar} className="navbar-brand" id="navbar-brand">
        <TiThMenu />      
        </button> 


        <div className="search-container mx-auto w-25">
          <div className="input-group">
            <input type="search" className="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text search-icon">
            <IoMdSearch />
            </span>
          </div>
        </div>

        <div className="d-flex ms-auto" style={{justifyContent:" space-between", alignItems:" center"}}>
              <ul className="navbar-nav me-2">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle ms-0" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    En
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">En</a></li>
                    <li><a className="dropdown-item" href="#">Mal</a></li>
                    <li><a className="dropdown-item" href="#">Arab</a></li>
                  </ul>
                </li>
              </ul>
        
        <div  className="bell-icon me-3 nav-icons">
          <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Notification">
          <FaBell />
            </button>
        </div>
          <div className="avatar me-3 bell-icon me-3 nav-icons dropdown">
        <a href="#" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <img 
            style={{ width: "30px", height: "30px" }} 
            src={profileImg} 
            alt="Profile" 
          />
        </a>
        <ul className="dropdown-menu dropdown-menu-end" style={{marginRight:'10px',background:'#dedee3'}} >
          <li style={{textAlign:'center',padding:'0'}} ><Link to='/' className="dropdown-logout" href="#" style={{textDecoration:'none'}}><MdLogout style={{marginRight:'5px'}} />Logout</Link></li>
        </ul>
         </div>
        </div>
        </div>
    </nav>
        


  )
}

export default Navbar