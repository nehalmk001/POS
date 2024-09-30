import React from 'react'
import '../../css/Orders.css'
import Table from '../../Components/Table/Table';
import Navbar from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import Footer from '../../layout/Footer';
import  orders from '../../assets/order.jpg'
import { IoIosSearch } from 'react-icons/io';
import Navlink from '../../Components/Navlinks/Navlink';

  
const History = () => {

  const historyHeaders = [
    { label: 'Cust ID', key: 'custId', width: '15%' },
    { label: 'Date', key: 'date', width: '40%' },
    { label: 'Product', key: 'product', width: '40%' },
    { label: 'Quantity', key: 'quantity', width: '30%' },
    { label: 'Price', key: 'price', width: '40%' },
    { label: 'Invoice ID', key: 'invoiceId', width: '30%' },
    { label: 'Payment Mode', key: 'paymentMode', width: '30%' }
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

      <Footer/>
    </div>
  )
}

export default History