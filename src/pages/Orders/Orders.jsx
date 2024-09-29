import React from 'react'
import '../../css/Orders.css'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import Table from '../../Components/Table/Table'
import  orders from '../../assets/order.jpg'


const Orders = () => {
  const headers = [
    { label: 'ID', width: '15%' },
    { label: 'Product', width: '40%' },
    { label: 'Category', width: '40%' },
    { label: 'Quantity', width: '30%' },
    { label: 'Brand', width: '40%' },
    { label: 'Price', width: '30%' }
  ];
  
  const data = [
    ['001', 'Laptop', 'Electronics', '1', 'Apple', '$1200'],
    ['002', 'Smartphone', 'Electronics', '2', 'Samsung', '$800'],
    ['003', 'Tablet', 'Electronics', '3', 'Google', '$400'],
    // Add more rows as needed
  ];
  


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

      <Footer />
    </div>
  )
}

export default Orders