import React, { useState } from 'react'
import '../../css/Orders.css'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import Table from '../../Components/Table/Table'
import  orders from '../../assets/order.jpg'
import { IoIosSearch } from "react-icons/io";
import Navlink from '../../Components/Navlinks/Navlink'
import Card from 'react-bootstrap/Card';
import { IoMdClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaPlus,FaMinus } from "react-icons/fa";

import { AiFillDelete } from "react-icons/ai";


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


  const [selectedProduct, setselectedProduct] = useState([])
  
  const handleRowClick = (rowData) => {
    const productIndex = selectedProduct.findIndex(product => product.id === rowData[0]);
    if (productIndex === -1) {
      const productWithQuantity = {
        id: rowData[0],
        name: rowData[1],
        category: rowData[2],
        quantity: 1,
        brand: rowData[4],
        price: parseFloat(rowData[5].replace('$', '')),
      };
      setselectedProduct([...selectedProduct, productWithQuantity]);
    } else {
      const updatedProducts = [...selectedProduct];
      updatedProducts[productIndex].quantity += 1;
      setselectedProduct(updatedProducts);
    }
  };

  // Function to increment the quantity
  const incrementQuantity = (productId) => {
    const updatedProducts = selectedProduct.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setselectedProduct(updatedProducts);
  };

  // Function to decrement the quantity
  const decrementQuantity = (productId) => {
    const updatedProducts = selectedProduct.map(product => {
      if (product.id === productId) {
        const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setselectedProduct(updatedProducts);
  };




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
          <Table headers={headers} data={data} onRowClick={handleRowClick}/>
          </div>
     
      </div>

      {/* order window div */}
      <div className="order-window ">
        <div className="orders " style={{border:'1px solid black'}}>
          <div className="order-list" id="order-list">
            {selectedProduct.length > 0 ? (
              selectedProduct.map((product, index) => (
                <Card key={index} border="success" style={{ width: '28rem', marginBottom: '10px' }}>
                  <Card.Header className='d-flex justify-content-between bg-white' style={{borderBottom:'none'}}>
                    <div className='pdt-img'><img src="https://hbkonline.in/pub/media/catalog/product/a/p/apple_fruit_powder3.jpg" style={{width:'66px',height:'66px'}} alt="Product" /></div>
                    <div><IoMdClose /></div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className='mt-0'>{product.name}</Card.Title>
                    <Card.Text>
                      <p className='mb-0'>Quantity: {product.quantity}</p>
                      <p className='mb-3'>Price: ${(product.quantity * product.price).toFixed(2)}</p>
                      <ButtonGroup size="sm" className='w-50'>
                        <Button className='btn-counter' onClick={() => incrementQuantity(product.id)}><FaPlus /></Button>
                        <Button className='btn-counter' onClick={() => decrementQuantity(product.id)}><FaMinus /></Button>
                      </ButtonGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <div className="hide">
                <p className="text-center">Your orders will be displayed here</p>
                <img style={{ width: "100%", marginTop: 30 }} src={orders} alt="Orders" />
              </div>
            )}
          </div>
          <div className='confirm-btn-container d-flex'>
            <button className='confirm-btn'>Confirm</button>
            <div className='dlt-btn'><AiFillDelete size={26} /></div>
          </div>
        </div> 
      </div>

      <Footer />
    </div>
  )
}

export default Orders