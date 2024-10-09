import React, { useState } from 'react';
import '../../css/Orders.css';
import data from '../../assets/datas/data.json'
import Table from '../../Components/Table/Table';
import orders from '../../assets/order.jpg';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus, FaCalculator, FaShoppingCart, FaFilter, FaRegEdit } from "react-icons/fa";

import Calculator from '../../components/Calculator/Calculator';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Navtabs from "../../components/Navtabs/Navtabs"
import Dropdowns from '../../Components/Dropdown/Dropdown';
import { MdHistory } from 'react-icons/md';


const Orders = () => {

  // dropdown calculator

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const [selectedSort, setSelectedSort] = useState(<FaFilter />);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
};



  const navtablabel = [
    { label: "Orders", key: 'orders', path: '/orders', icon:<FaShoppingCart /> },
    { label: 'History', key: 'history', path: '/history',icon:<MdHistory />  }
  ];
  


  const headers = [
    { label: 'ID', key: 'id', width: '100px' },
    { label: 'Image', key: 'imageUrl', width: '1fr', render: (imageUrl) => <img src={imageUrl} alt="Product" style={{ width: '50px', height: '50px' }} /> },
    { label: 'Product', key: 'name', width: '1fr' },
    { label: 'Category', key: 'category', width: '1fr' },
    { label: 'Quantity', key: 'quantity', width: '1fr' },
    { label: 'Brand', key: 'brand', width: '1fr' },
    { label: 'Price', key: 'price', width: '100px', render: (price) => `$${price.toFixed(2)}` },
    { label: 'Action', key: 'action', width: '100px', 
      render: (row) => (
        <div className='d-flex '>
          <div className='btn-action' onClick={() => handleEdit(row.id)} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Edit"><FaRegEdit /> Edit</div>
          
        </div>
      ) 
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
   // Log selected category
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
    <Navtabs links={navtablabel} />
  </div>


  <div className="col-2 dropdown-calcu">
    <button
        className="btn btn-secondary dropdown-toggle calcu-btn d-flex align-center justify-items-between"
        type="button"
        onClick={toggleDropdown} // Toggle the dropdown when button is clicked
    >
        <FaCalculator size={16}/><p className='mb-0 ms-2'>Calculator</p>
    </button>
    <div
        className={`dropdown-menus ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
    >
        <Calculator />
    </div>
</div>

        
  <div className='col home d-flex justify-content-center align-items-center p-0'>
    <Link to="/dashboard"  style={{background:"#de982f",color:"#ffffff",padding:"5px",display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50%",marginTop:'-12px'}} >
      
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
                placeholder="Quick Search"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
              />
              <div className="search-icon"><IoIosSearch size={20} /></div>
            </div>

           <div className='sort-div ms-2'>  <Dropdowns category={dropdownCategories} onSelectCategory={handleSelectCategory} title={<FaFilter />} /></div>
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
