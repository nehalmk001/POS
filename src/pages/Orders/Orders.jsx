import React, { useState } from 'react';
import '../../css/Orders.css';
import Footer from '../../layout/Footer'; // Navbar and Sidebar are commented out
import Table from '../../Components/Table/Table';
import orders from '../../assets/order.jpg';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus, FaHome } from "react-icons/fa";
import Navtabs from '../../Components/Navtabs/Navtabs';
import { Link, NavLink } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";

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
    }
    ,{
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
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
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
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
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
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
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
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
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://m.media-amazon.com/images/I/71k+KbTBn5L.jpg'
    }
    // Add more data if needed
  ];
  
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleRowClick = (product) => {
    const productIndex = selectedProduct.findIndex(item => item.id === product.id);
    if (productIndex === -1) {
      setSelectedProduct([...selectedProduct, { ...product, quantity: 1 }]);
    } else {
      const updatedProducts = [...selectedProduct];
      updatedProducts[productIndex].quantity += 1;
      setSelectedProduct(updatedProducts);
    }
  };

  const incrementQuantity = (productId) => {
    setSelectedProduct(selectedProduct.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decrementQuantity = (productId) => {
    setSelectedProduct(selectedProduct.map(product =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  const deleteProduct = (productId) => {
    setSelectedProduct(selectedProduct.filter(product => product.id !== productId));
  };

  const deleteAllProducts = () => {
    setSelectedProduct([]);
  };

  const calculateTotal = () => {
    return selectedProduct.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
  };

  return (
    <div>
      {/* Navbar and Sidebar are commented out */}
      {/* <Navbar /> */}
      <div className='row'>
  <div className='col-11'>
    <Navtabs />
  </div>
  <div className='col home d-flex justify-content-center align-items-center'><Link to="/" >
      <FaHome size={20} />
    </Link></div>
</div>
      <div className="grid-container">
        <div className="main">
          <div className="search-box d-flex align-items-start">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search your Products"
              />
              <div className="search-icon"><IoIosSearch size={20} /></div>
            </div>
            <div className='filter-icon ms-3 '><FaFilter size={25} className='mt-1' /></div>
          </div>
          <div className="table-wrapper">
            <Table headers={headers} data={data} onRowClick={handleRowClick} />
          </div>
        </div>

        <div className="order-window">
          <div className="container orders">
            {selectedProduct.length > 0 ? (
              <>
                <div id="order-list">
                  {selectedProduct.map((product) => (
                    <div key={product.id} className="card-wrapper d-flex justify-content-around p-6" style={{ position: 'relative', height: '100px' }}>
                      <div className="d-flex" style={{ alignItems: 'center' }}>
                        <div className="pdt-img">
                          <img src={product.imageUrl} style={{ width: '66px', height: '66px' }} alt="Product" />
                        </div>
                        <div className="order-text">
                          <h5 className="title-order">{product.name}</h5>
                          <p>Category: {product.category}</p>
                          <p>Price: ${(product.quantity * product.price).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="d-flex" style={{ alignItems: 'center' }}>
                        <button className="btn-counter" onClick={() => incrementQuantity(product.id)}><FaPlus /></button>
                        <button className="btn-display">{product.quantity}</button>
                        <button className="btn-counter" onClick={() => decrementQuantity(product.id)}><FaMinus /></button>
                      </div>

                      <div className="d-flex" style={{ position: 'absolute', top: '0', right: '0' }}>
                        <IoMdClose onClick={() => deleteProduct(product.id)} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-summary">
                  <h5>Total Amount: ${calculateTotal()}</h5>
                  <div className="payment-method">
                    <strong>Mode of Payment:</strong>
                    <div>
                      <label><input type="radio" name="payment" value="cash" /> Cash</label>
                      <label style={{ marginLeft: '10px' }}><input type="radio" name="payment" value="debit" /> Debit Card</label>
                    </div>
                    <div className="confirm-btn-container d-flex justify-content-center">
                      <button className="confirm-btn" disabled={selectedProduct.length === 0}>Confirm</button>
                      <button className="confirm-btn" onClick={deleteAllProducts}>Cancel</button>
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
  );
}

export default Orders;
