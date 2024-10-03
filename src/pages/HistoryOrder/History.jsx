import React, { useState } from 'react'
import Table from '../../Components/Table/Table';
import { IoIosSearch } from 'react-icons/io';
import Navtabs from '../../Components/Navtabs/Navtabs';
import { Link } from 'react-router-dom';
import { FaEye, FaHome } from 'react-icons/fa';
import '../../css/History.css'

  
const History = () => {

  const [selectedInvoice, setselectedInvoice] = useState(null)

    const historyHeaders = [
      { label: 'Cust ID', key: 'custId', width: '100px' },
      { label: 'Date', key: 'date', width: '100px'}, 
      { label: 'Product', key: 'product', width: '1fr' },
      { label: 'Quantity', key: 'quantity', width: '100px' },
      { label: 'Price', key: 'price', width: '1fr' },
      { label: 'invoice ID', key: 'invoiceId', width: '1fr', 
        render: (invoiceId, row) => (
          <div className='d-flex'>
            {invoiceId}
            <div>
              <FaEye style={{cursor:'pointer'}} onClick={() => setselectedInvoice(row)} />
            </div>
          </div>
        ) 
      },
      { label: 'Payment Mode', key: 'paymentMode', width: '1fr' },
      { label: 'Status', key: 'Status', width: '1fr' }
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
      Status: 'Completed'
    },
    {
      custId: 'C002',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card',
      Status: 'Completed'
    },
    {
      custId: 'C003',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card',
      Status: 'Completed'
    },
    {
      custId: 'C004',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card',
      Status: 'Completed'
    },
    {
      custId: 'C005',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card',
      Status: 'Completed'
    },
    {
      custId: 'C006',
      date: '2024-09-01',
      product: 'Laptop',
      quantity: 2,
      price: '$2400',
      invoiceId: 'INV1001',
      paymentMode: 'Credit Card',
      Status: 'Completed'
    },
    // More rows...
  ];

  

  return (
    <div>
    <div className='row'>
  <div className='col-11'>
    <Navtabs />
  </div>
  <div className='col home d-flex justify-content-center align-items-center'><Link to="/" >
      <FaHome size={20} />
    </Link></div>
</div>
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
          
        </div>

        <div className='table-wrapper'>
          <Table headers={historyHeaders} data={historyData}/>
          </div>
     
      </div>

      {/* order window div */}
      <div className="order-window ">
        <div className="orders">
          {selectedInvoice && (
          <div className='invoice-details p-4 '>
            <div className='invoice-head p-2'>
              <h1 className='text-center'>Invoice</h1>
            </div>
            <hr />
            <div className='invoice-body mt-4'>
              <div className='invoice-content d-flex justify-content-between'>
              <p>Cust Id</p> <p>{selectedInvoice.custId}</p>
              </div>
              <div className='invoice-content d-flex justify-content-between'>
              <p>email</p> <p></p>
              </div>
              <div className='invoice-content d-flex justify-content-between'>
              <p>Date</p> <p>{selectedInvoice.date}</p>
              </div>
              <div className='invoice-content d-flex justify-content-between'>
              <p>Time</p> <p>10:00 am</p>
              </div>

              <h4>Products</h4>
              
              <div className='invoice-content d-flex justify-content-between'>
              <p>{selectedInvoice.product}</p> <p>qty:{selectedInvoice.quantity} price:$1200</p>
              </div>
              <div className='invoice-content d-flex justify-content-between'>
              <p>mobile</p> <p>qty:2 price:$1200</p>
              </div>
              <div className='invoice-content d-flex justify-content-between'>
              <p>mode of payment</p> <p>debit card</p>
              </div>
              <hr />
              <div className='total d-flex justify-content-between'>
               <h1>Total</h1><h1>$1400</h1>
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