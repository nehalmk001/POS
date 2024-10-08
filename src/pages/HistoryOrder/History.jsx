import React, { useState, useEffect } from 'react';
import '../../css/History.css';
import Table from '../../Components/Table/Table';
import { IoIosSearch } from 'react-icons/io';
import Navtabs from "../../components/Navtabs/Navtabs";
import { Link } from 'react-router-dom';
import { FaCalculator, FaEye, FaFilter, FaRegFileExcel, FaShoppingCart } from 'react-icons/fa';
import Calculator from '../../components/Calculator/Calculator';
import { AiFillHome } from 'react-icons/ai';
import Dropdowns from '../../Components/Dropdown/Dropdown';
import { MdHistory } from 'react-icons/md';

const History = () => {

  useEffect(() => {
    // Initialize all tooltips on the page
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const navtablabel = [
    { label: "Orders", key: 'orders', path: '/orders', icon:<FaShoppingCart /> },
    { label: 'History', key: 'history', path: '/history',icon:<MdHistory />  }
  ];
  

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedSort, setSelectedSort] = useState(<FaFilter />);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const historyHeaders = [
    { label: 'Cust ID', key: 'custId', width: '100px' },
    { label: 'Date', key: 'date', width: '100px' },
    { label: 'Product', key: 'product', width: '1fr' },
    { label: 'Quantity', key: 'quantity', width: '100px' },
    { label: 'Price', key: 'price', width: '1fr' },
    {
      label: 'Invoice ID', key: 'invoiceId', width: '1fr',
      render: (invoiceId, row) => (
        <div className='d-flex'>
          {invoiceId}
          <div data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="view">
            <FaEye style={{ cursor: 'pointer' }} onClick={() => setSelectedInvoice(row)} />
          </div>
        </div>
      )
    },
    { label: 'Payment', key: 'paymentMode', width: '1fr' },
    { label: 'Status', key: 'status', width: '1fr' }
  ];

  const historyData = [
    { custId: 'C001', date: '2024-10-04', product: 'Laptop', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2023-9-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2024-8-26', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2023-7-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2024-6-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2023-5-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2023-4-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
    { custId: 'C001', date: '2023-12-04', product: 'mobile', quantity: 2, price: '$2400', invoiceId: 'INV1001', paymentMode: 'Credit Card', status: 'Completed' },
  ];

  const historyCategories = [
    { label: 'older', value: 'Sort By Date older' },
    { label: 'latest', value: 'Sort By Date latest' },
  ];

  const filteredData = historyData.filter(item =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    if (selectedSort === 'Sort By Date older') {
      return dateA - dateB; // Sort by date ascending
    }
    if (selectedSort === 'Sort By Date latest') {
      return dateB - dateA; // Sort by date descending
    }
    return 0; // No sorting applied for other options
  });

  return (
    <div>
      <div className='tab-header row d-flex justify-content-between pt-2'>
        <div className='col-9'>
          <Navtabs links={navtablabel}/>
        </div>

        <div className="col-2 dropdown-calcu">
          <button
            className="btn btn-secondary dropdown-toggle calcu-btn d-flex align-center justify-items-between"
            type="button"
            onClick={toggleDropdown}
          >
            <FaCalculator size={16} /><p className='mb-0 ms-2'>Calculator</p>
          </button>
          <div className={`dropdown-menus ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            <Calculator />
          </div>
        </div>

        <div className='col home d-flex justify-content-center align-items-center'>
          <Link to="/dashboard" style={{ background: "#de982f", color: "#ffffff", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%",marginTop:'-12px'}}>
            <AiFillHome size={20} style={{}} />
          </Link>
        </div>
      </div>

      <div className='grid-container'>
        <div className="main">
          <div className="search-box d-flex ">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search your Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className='search-icon'><IoIosSearch size={20} /></div>
            </div>
            <div className='excel-icon d-flex align-items-center ms-2'>
              <Dropdowns 
                category={historyCategories} 
                onSelectCategory={setSelectedSort}  // Update selectedSort on selection
                title={<FaFilter />} 
              />
            </div>
            <div className='excel-icon d-flex align-items-center ms-2' data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Export To Excel">
              <FaRegFileExcel size={25} style={{ cursor: 'pointer' }} />
            </div>
            
          </div>

          <div className='table-wrapper'>
            {sortedData.length > 0 ? (
              <Table headers={historyHeaders} data={sortedData} />
            ) : (
              <p>No results found for "{searchTerm}"</p>
            )}
          </div>
        </div>

        {/* Order window div */}
        <div className="order-window ">
          <div className="orders p-4">
            {selectedInvoice && (
              <div className='invoice-details p-4'>
                <div className='invoice-head p-2'>
                  <h1 className='text-center'>Invoice</h1>
                </div>
                <hr />
                <div className='invoice-body mt-4'>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>Cust Id</p> <p>{selectedInvoice.custId}</p>
                  </div>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>Email</p> <p></p>
                  </div>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>Date</p> <p>{selectedInvoice.date}</p>
                  </div>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>Time</p> <p>10:00 am</p>
                  </div>
                  <h4>Products</h4>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>{selectedInvoice.product}</p> <p>Qty: {selectedInvoice.quantity} Price: {selectedInvoice.price}</p>
                  </div>
                  <div className='invoice-content d-flex justify-content-between'>
                    <p>Mode of Payment</p> <p>{selectedInvoice.paymentMode}</p>
                  </div>
                  <hr />
                  <div className='total d-flex justify-content-between'>
                    <h1>Total</h1><h1>{selectedInvoice.price}</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;
