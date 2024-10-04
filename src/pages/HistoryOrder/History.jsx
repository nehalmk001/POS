import React, { useState } from 'react';
import '../../css/Orders.css'
import Table from '../../Components/Table/Table';
import Navbar from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import Footer from '../../layout/Footer';
import  orders from '../../assets/order.jpg'
import { IoIosSearch } from 'react-icons/io';
import Navtabs from "../../components/Navtabs/Navtabs"
import { Link } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa';
import Calculator from '../../components/Calculator/Calculator';
import { AiFillHome } from 'react-icons/ai';

  
const History = () => {


  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };



    const historyHeaders = [
      { label: 'Cust ID', key: 'custId', width: '100px' },
      { label: 'Date', key: 'date', width: '100px'}, 
      { label: 'Product', key: 'product', width: '1fr' },
      { label: 'Quantity', key: 'quantity', width: '100px' },
      { label: 'Price', key: 'price', width: '1fr' },
      { label: 'invoice ID', key: 'invoiceId', width: '1fr' },
      { label: 'Payment Mode', key: 'paymentMode', width: '1fr' }
    ];
  
  const historyData = [
    {
      custId: 'C001',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card'
    },
    // More rows...
  ];

  const link = [
    { href: "/orders", eventKey: "orders", label: "Orders" },
    { href: "/history", eventKey: "history", label: "History" },
  ]

  return (
    <div className='pt-2'>
    <div className='row d-flex justify-content-between'>
  <div className='col-9'>
    <Navtabs />
  </div>


  <div className=" col-2 dropdown-calcu">
          <button
            className="btn btn-secondary dropdown-toggle calcu-btn d-flex align-center justify-items-between"
            type="button"
            onClick={toggleDropdown} // Toggle the dropdown when button is clicked
          >
            <FaCalculator size={16}/><p className='mb-0 ms-2'>Calculator</p>
          </button>
          <div
            className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
            aria-labelledby="dropdownMenuButton"
          >
            <Calculator />
          </div>
        </div>
        
  <div className='col home d-flex justify-content-center align-items-center'>
    <Link to="/" style={{background:"#de982f",color:"#ffffff",padding:"5px",display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}} >
    <AiFillHome size={20}/>
    </Link>
    </div>
</div>

    <div className='grid-container'>
     
     
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
          
        </div>

        <div className='table-wrapper'>
          <Table headers={historyHeaders} data={historyData}/>
          </div>
     
      </div>

      {/* order window div */}
      <div className="order-window ">
        <div className="collapse-btn">
          <img style={{ width: 25 }} src="./images/collapse.png" alt="" />
        </div>
        <div className="orders">
          <div className="orders-list" id="order-list">
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

      
    </div>
    </div>
  )
}

export default History