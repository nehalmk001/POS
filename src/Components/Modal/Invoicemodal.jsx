import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const Invoicemodal = ({show,handleClose,total,selectedProduct}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Order Summary</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='product-details'>
        {selectedProduct.length > 0 ? (
          selectedProduct.map((product, index) => (
            <div key={index} className="product-detail">
              <p>{product.name} (Quantity: {product.quantity}) - ${(product.quantity * product.price).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No products selected</p>
        )}
      </div>
      <hr />
      <h5>Total: ${total}</h5>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Confirm Payment
      </Button>
    </Modal.Footer>
  </Modal>
);
};

export default Invoicemodal