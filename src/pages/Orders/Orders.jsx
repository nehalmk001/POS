import React, { useState } from 'react';
import '../../css/Orders.css';

import Table from '../../Components/Table/Table';
import orders from '../../assets/order.jpg';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus, FaCalculator } from "react-icons/fa";

import Calculator from '../../components/Calculator/Calculator';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Navtabs from "../../components/Navtabs/Navtabs"
import Dropdowns from '../../Components/Dropdown/Dropdown';


const Orders = () => {

  // dropdown calculator

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Sort By');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };



  


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
      imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg'
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
      imageUrl: 'https://images-cdn.ubuy.co.in/633b593b89c5453959017fec-google-pixel-slate-12-3-quot.jpg'
    },
    {
      id: '004',
      name: 'Basmati Rice',
      category: 'Groceries',
      quantity: 50,
      brand: 'india gate',
      price: 30,
      imageUrl: 'https://m.media-amazon.com/images/I/91MZComV1xL.jpg'
    },
    {
      id: '005',
      name: 'Milk',
      category: 'Groceries',
      quantity: 40,
      brand: 'milma',
      price: 20,
      imageUrl: 'https://homedelivery.ramachandran.in/media/catalog/product/cache/04c5c5c4276fe9dba74400abc896c29c/m/i/milma.jpg'
    },
    {
      id: '006',
      name: 'Microwave Oven',
      category: 'Home Appliance',
      quantity: 5,
      brand: 'LG',
      price: 300,
      imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/lg-microwave-oven-2-12-2022-024-272327279-7ls2ynt0.jpg'
    },
    {
      id: '007',
      name: 'Vacuum Cleaner',
      category: 'Home Appliance',
      quantity: 7,
      brand: 'Dyson',
      price: 500,
      imageUrl: 'https://www.jiomart.com/images/product/original/rvmyn14rtm/inalsa-spruce-1200-w-vacuum-cleaner-with-blower-function-and-reusable-dust-bag-red-product-images-orvmyn14rtm-p598712841-0-202302231843.jpg?im=Resize=(420,420)'
    }
  ];
  


    // search fuction

    const [searchTerm, setsearchTerm] = useState('');
    const dropdownCategories = [
      { label: 'All', value: 'All' },
      { label: 'Electronics', value: 'Electronics' },
      { label: 'Groceries', value: 'Groceries' },
      { label: 'Home Appliance', value: 'Home Appliance' }
  ];
   
  const [selectedCategory, setselectedCategory] = useState('')

  const handleSelectCategory = (category) => {
    console.log("Selected Category:", category); // Log selected category
    setselectedCategory(category);
    setSelectedSort(category); // Update title here if needed
};

  const filtereddata = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || selectedCategory === '' || item.category === selectedCategory)
  );
  

    

    
  
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
    <div className='order-main'>
    
      <div className='tab-header row d-flex justify-content-between pt-2'>
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
    <Link to="/dashboard"  style={{background:"#de982f",color:"#ffffff",padding:"5px",display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}} >
      
      <AiFillHome size={20} />
    </Link>
    </div>
</div>

      <div className="grid-container">
        <div className="main">
          <div className="search-box d-flex align-items-start">
            <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search your Products"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
              />
              <div className="search-icon"><IoIosSearch size={20} /></div>
            </div>

           <div className='sort-div ms-2'>  <Dropdowns category={dropdownCategories} onSelectCategory={handleSelectCategory} title={selectedSort} /></div>
          </div>
          <div className="table-wrapper">
            <Table headers={headers} data={filtereddata} onRowClick={handleRowClick}  />
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
                      <button className="btn-counter" onClick={() => decrementQuantity(product.id)}><FaMinus size={14} /></button>
                        <button className="btn-display">{product.quantity}</button>
                        <button className="btn-counter" onClick={() => incrementQuantity(product.id)}><FaPlus size={14} /></button>
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
                      <button className="confirm-btn btn-final-green" disabled={selectedProduct.length === 0}>Confirm</button>
                      <button className="confirm-btn btn-final-red" onClick={deleteAllProducts}>Cancel</button>
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
