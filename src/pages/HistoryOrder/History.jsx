import React from 'react'
import '../../css/Orders.css'
import Table from '../../Components/Table/Table';
import Navbar from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import Footer from '../../layout/Footer';
import  orders from '../../assets/order.jpg'


const headers = [
    { label: 'Cust ID', width: '15%' },
    { label: 'Date', width: '40%' },
    { label: 'Product', width: '40%' },
    { label: 'Quantity', width: '30%' },
    { label: 'price', width: '40%' },
    { label: 'invoice id', width: '30%' },
    { label: 'Payment Mode', width: '30%' }
  ];

  const data = [
    ['C001', '2024-09-01', 'Laptop', '2', '$2400', 'INV1001', 'Credit Card'],
    ['C002', '2024-09-02', 'Smartphone', '1', '$800', 'INV1002', 'Debit Card'],
    ['C003', '2024-09-03', 'Tablet', '3', '$1200', 'INV1003', 'Cash'],
    ['C004', '2024-09-04', 'Monitor', '4', '$1600', 'INV1004', 'Credit Card'],
    ['C005', '2024-09-05', 'Keyboard', '5', '$500', 'INV1005', 'PayPal'],
    ['C006', '2024-09-06', 'Mouse', '10', '$400', 'INV1006', 'Debit Card'],
    ['C007', '2024-09-07', 'Headphones', '2', '$300', 'INV1007', 'Cash'],
    ['C008', '2024-09-08', 'Smartwatch', '1', '$200', 'INV1008', 'Credit Card'],
    ['C009', '2024-09-09', 'Camera', '1', '$1500', 'INV1009', 'PayPal'],
    ['C010', '2024-09-10', 'Printer', '2', '$600', 'INV1010', 'Debit Card'],
  ];
  
const History = () => {
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
            <i className="fas fa-search search-icon" />
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item ">
              <a
                className="nav-link active "
                aria-current="page"
                id="show-orders"
                href="#"
              >
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id="show-history" href="#">
                History
              </a>
            </li>
          </ul>
        </div>

        <div className='table-wrapper'>
          <Table headers={headers} data={data}/>
          </div>
     
      </div>

      {/* order window div */}
      <div className="order-window ">
        <div className="collapse-btn">
          <img style={{ width: 25 }} src="./images/collapse.png" alt="" />
        </div>
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

      <Footer/>
    </div>
  )
}

export default History