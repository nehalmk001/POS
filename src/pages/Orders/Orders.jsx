import React, { useState } from 'react'
import '../../css/Orders.css'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import Table from '../../Components/Table/Table'
import  orders from '../../assets/order.jpg'
import { IoIosSearch } from "react-icons/io";

import Card from 'react-bootstrap/Card';
import { IoMdClose } from "react-icons/io";
import { FaPlus,FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Navtabs from '../../Components/Navtabs/Navtabs'



const Orders = () => {
  const headers = [
    { label: 'ID', key: 'id', width: '100px' },
    { label: 'Image', key: 'imageUrl', width: '1fr', render: (imageUrl) => <img src={imageUrl} alt="Product" style={{ width: '50px', height: '50px' }} /> },
    { label: 'Product', key: 'name', width: '1fr' },
    { label: 'Category', key: 'category', width: '1fr' },
    { label: 'Quantity', key: 'quantity', width: '1fr' },
    { label: 'Brand', key: 'brand', width: '1fr' },
    { label: 'Price', key: 'price', width: '100px', render: (price) => `$${price.toFixed(2)}` }
  ];
  
  const data = [
    {
      id: '001',
      name: 'Laptop',
      category: 'Electronics',
      quantity: 10,
      brand: 'Apple',
      price: 1200,
      imageUrl: 'https://images-cdn.ubuy.co.in/6366930598ef383b595e65ea-apple-macbook-air-11-6-inch-retina.jpg'
    },
    {
      id: '002',
      name: 'Smartphone',
      category: 'Electronics',
      quantity: 20,
      brand: 'Samsung',
      price: 800,
      imageUrl: 'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg'
    },
    {
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
    },
    {
      id: '004',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
    },
    {
      id: '005',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
    },
    {
      id: '006',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
    }

  ];
  
  const link = [
    { href: "/orders", eventKey: "orders", label: "Orders" },
    { href: "/history", eventKey: "history", label: "History" },
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedProduct, setselectedProduct] = useState([])
  
  const handleRowClick = (product) => {
    const productIndex = selectedProduct.findIndex(item => item.id === product.id);
    if (productIndex === -1) {
      const productWithQuantity = {
        ...product, // Spread the product object
        quantity: 1
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

  const deleteProduct = (productId) =>{
      const updatedProducts = selectedProduct.filter(product=>product.id != productId);
      setselectedProduct(updatedProducts)
  }


  const deleteAllProducts = ()=>{
    setselectedProduct([]);
  }

  const calculateTotal = () =>{
    return selectedProduct.reduce((total,product)=>total+product.quantity * product.price,0).toFixed(2);
  }



  return (
    <div>
  <Navbar />
    <Navtabs />
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
          {/* <div className='nav-tab'><Navlink link={link} defaultActiveKey="/orders"  /></div> */}
        </div>

        <div className='table-wrapper'>
          <Table headers={headers} data={data} onRowClick={handleRowClick}/>
          </div>
      </div>

      {/* order window div */}
      <div className="order-window ">
        <div className="orders " >
          <div className="order-lists" id="order-lists">
          {selectedProduct.length > 0 ? (
  <>
    <div id="order-lists">
      {selectedProduct.map((product, index) => (
        <div key={index} className='card-wrapper d-flex justify-content-around p-6' style={{ position: 'relative', height: '100px' }}>
          <div className='d-flex' style={{ alignItems: 'center' }}>
            <div className='pdt-img'>
              <img src={product.imageUrl} style={{ width: '66px', height: '66px' }} alt="Product" />
            </div>
            <div className='order-text mb-0'>
              <h5 className='title-order mt-0'>{product.name}</h5>
              <p className='mb-0' style={{ fontSize: '12px', marginBottom: '0px' }}>Category: {product.category}</p>
              <p className='mb-3' style={{ fontSize: '12px', marginBottom: '0px' }}>Price: ${(product.quantity * product.price).toFixed(2)}</p>
            </div>
          </div>

          <div className='d-flex' style={{ alignItems: 'center' }}>
            <button className='btn-counter' onClick={() => incrementQuantity(product.id)}>
              <FaPlus />
            </button>
            <button className='btn-display'>
              {product.quantity}
            </button>
            <button className='btn-counter' onClick={() => decrementQuantity(product.id)}>
              <FaMinus />
            </button>
          </div>

          <div className='d-flex' style={{ position: 'absolute', top: '0', right: '0' }}>
            <p><IoMdClose onClick={() => deleteProduct(product.id)} /></p>
          </div>
        </div>
      ))}
    </div>

    {/* Display order summary only when there are products */}
    <div className='order-summary'>
       <p><strong>Sub total</strong></p>
      <p><strong>gst:</strong></p>
      <hr />
      <h5>Total Amount: ${selectedProduct.reduce((total, product) => total + (product.quantity * product.price), 0).toFixed(2)}</h5>
      <div className='payment-method' style={{ marginBottom: '10px' }}>
    <strong>Mode of Payment:</strong>
    <div style={{ marginTop: '5px' }}>
      <label>
        <input type="radio" name="payment" value="cash" />
        Cash
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input type="radio" name="payment" value="debit" />
        Debit Card
      </label>
    </div>
    <div className='confirm-btn-container d-flex'>
            <button className='confirm-btn' disabled={selectedProduct.length===0} variant="primary" onClick={handleShow}>Confirm</button>
            <div className='dlt-btn'><AiFillDelete size={26} onClick={deleteAllProducts}/></div>
          </div>
  </div>
    </div>
  </>
) : (
  <div className="hide">
    <p className="text-center">Your orders will be displayed here</p>
    <img style={{ width: "100%", marginTop: 30 }} src={orders} alt="Orders" />
  </div>
)}
</div>
         
          
        </div> 
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Orders