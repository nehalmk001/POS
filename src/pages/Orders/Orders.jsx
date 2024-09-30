import React from 'react'
import '../../css/Orders.css'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import Table from '../../Components/Table/Table'
import  orders from '../../assets/order.jpg'
import { IoIosSearch } from "react-icons/io";
import Navlink from '../../Components/Navlinks/Navlink'


const Orders = () => {
  const headers = [
    { label: 'ID', width: '100px' },
    { label: 'Product', width: '1fr' },
    { label: 'Category', width: '1fr' },
    { label: 'Quantity', width: '1fr' },
    { label: 'Brand', width: '1fr' },
    { label: 'Price', width: '100px' }
  ];
  
  const data = [
    ['001', 'Laptop', 'Electronics', '10', 'Apple', '$1200'],
    ['002', 'Smartphone', 'Electronics', '20', 'Samsung', '$800'],
    ['003', 'Tablet', 'Electronics', '30', 'Google', '$400'],
    // Add more rows as needed
  ];


  const link = [
    { href: "/orders", eventKey: "orders", label: "Orders" },
    { href: "/history", eventKey: "history", label: "History" },
  ]
  


  return (
    <div className='grid-container'>
      <Navbar />
      <Sidebar />
      <div className="main">     
        <div className="search-box d-flex justify-content-between ">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search your Products"
            />
            <div className='search-icon'><IoIosSearch size={20}/></div>
          </div>
          <div className='nav-tab'><Navlink link={link} defaultActiveKey="/orders"  /></div>
        </div>

        <div className='table-wrapper'>
          <Table headers={headers} data={data}/>
          </div>
     
      </div>

      {/* order window div */}
      <div className="order-window ">
        
        <div className="orders">
          <div className="order-list" id="order-list">
            {/* Selected products will be added here */}
            <div className="hide">
              <p className="text-center">Your orders will be displayed here</p>
              <img
                style={{ width: "100%", marginTop: 30 }}
                src={orders}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Orders