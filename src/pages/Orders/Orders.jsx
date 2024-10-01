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
import { FaPlus,FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Invoicemodal from '../../Components/Modal/invoicemodal'


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
      imageUrl: 'https://bl-i.thgim.com/public/incoming/fk5hrs/article67097604.ece/alternates/FREE_1200/MacBookAir%2015inch_5.JPG'
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
        <div className="orders " >
          <div className="order-lists" id="order-lists">

            {selectedProduct.length > 0 ? (
              selectedProduct.map((product, index) => (
                <Card key={index} border="success" style={{ width: '20rem', marginBottom: '10px' ,background:' background-color: #ebfaf1'}}>
                  <Card.Header className='d-flex justify-content-end bg-white p-0 m-0' style={{borderBottom:'none' }}>
                    <div><IoMdClose onClick={()=>deleteProduct(product.id)}/></div>
                  </Card.Header>
                  <Card.Body className='m-0 p-0'>
                    <Card.Text>
                      <div className='card-content d-flex justify-content-around'>
                    <div className='pdt-img'><img src={product.imageUrl}style={{width:'66px',height:'66px'}} alt="Product" /></div>
                     <div className='order-txt'>
                     <Card.Title className='title-order mt-0'>{product.name}</Card.Title>
                      <p className='mb-0' style={{fontSize:'14px',marginBottom:'0px'}}>Quantity: {product.quantity}</p>
                      <p className='mb-3'>Price: ${(product.quantity * product.price).toFixed(2)}</p></div>
                      <div  className='btn-cont w-25 d-flex p-0 m-0 '>
                        <button className='btn-counter' onClick={() => incrementQuantity(product.id)}><FaPlus /></button>
                        <button className='btn-counter' onClick={() => decrementQuantity(product.id)}><FaMinus /></button>
                      </div>
                      </div>
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
          <Invoicemodal show={show} handleClose={handleClose} total={calculateTotal()} selectedProduct={selectedProduct}/>
          <div className='confirm-btn-container d-flex'>
            <button className='confirm-btn' disabled={selectedProduct.length===0} variant="primary" onClick={handleShow}>Confirm</button>
            <div className='dlt-btn'><AiFillDelete size={26} onClick={deleteAllProducts}/></div>
          </div>
        </div> 
      </div>

      <Footer />
    </div>
  )
}

export default Orders