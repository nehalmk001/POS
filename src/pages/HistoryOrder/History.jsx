import React, { useState } from 'react';
// import '../../css/Orders.css'
import '../../css/History.css'
import Table from '../../Components/Table/Table';
import { IoIosSearch } from 'react-icons/io';
import Navtabs from "../../components/Navtabs/Navtabs"
import { Link } from 'react-router-dom';
import { FaCalculator, FaEye, FaRegFileExcel } from 'react-icons/fa';
import Calculator from '../../components/Calculator/Calculator';
import { AiFillHome } from 'react-icons/ai';

  
const History = () => {


  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  const [selectedInvoice, setselectedInvoice] = useState(null)

  
const dropdown = [{name:'Catgeory',cat1:'Electronics',cat2:'Groceries',cat3:'Home appliance'}]

    const historyHeaders = [
      { label: 'Cust ID', key: 'custId', width: '100px' },
      { label: 'Date', key: 'date', width: '100px'}, 
      { label: 'Product', key: 'product', width: '1fr' },
      { label: 'Quantity', key: 'quantity', width: '100px' },
      { label: 'Price', key: 'price', width: '1fr' },
      { label: 'invoice ID', key: 'invoiceId', width: '1fr',
       render:(invoiceId,row) =>(
        <div className='d-flex'>
          {invoiceId}
          <div>
            <FaEye style={{cursor:'pointer'}} onClick={()=>setselectedInvoice(row)} />
          </div>
        </div>
       )
       },
      { label: 'Payment Mode', key: 'paymentMode', width: '1fr' },
      { label: 'Status', key: 'status', width: '1fr' }
    ];
  
    const historyData = [
      {
        custId: 'C001',
        date: '2024-09-01',
        product: 'Laptop',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      {
        custId: 'C002',
        date: '2024-09-01',
        product: 'Laptop',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      {
        custId: 'C003',
        date: '2024-09-01',
        product: 'Laptop',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      {
        custId: 'C004',
        date: '2024-09-01',
        product: 'Laptop',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      {
        custId: 'C005',
        date: '2024-09-01',
        product: 'Laptop',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      {
        custId: 'C006',
        date: '2024-09-01',
        product: 'Mobile',
        quantity: 2,
        price: '$2400',
        invoiceId: 'INV1001',
        paymentMode: 'Credit Card',
        status: 'Completed'
      },
      // Additional entries...
    ];

  const link = [
    { href: "/orders", eventKey: "orders", label: "Orders" },
    { href: "/history", eventKey: "history", label: "History" },
  ]

  const filteredData = historyData.filter(item =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='pt-2'>
    <div className='row d-flex justify-content-between'>
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
    <Link to="/" style={{background:"#de982f",color:"#ffffff",padding:"5px",display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50%"}} >
    <AiFillHome size={20}/>
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
            <div className='search-icon'><IoIosSearch size={20}/></div>

          </div>
          <div className='excel-icon d-flex align-items-center ms-2'><FaRegFileExcel size={25} /></div>          
        </div>

        <div className='table-wrapper'>
            {filteredData.length > 0 ? (
              <Table headers={historyHeaders} data={filteredData} />
            ) : (
              <p>No results found for "{searchTerm}"</p>
            )}
          </div>
        </div>

      {/* order window div */}
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

export default History