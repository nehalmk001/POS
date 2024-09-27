import React from 'react'
import '../../css/Orders.css'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

const Orders = () => {
  return (
    <div className='grid-container'>
         <Navbar /> 
         <Sidebar />
         <div className="main">
    {/* modal here */}
    <div
      className="modal fade"
      id="addproducts"
      tabIndex={-1}
      aria-labelledby="addproductsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add New Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form id="addProductForm">
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Enter product name"
                    required=""
                  />
                </div>
                <div className="col">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select className="form-select" id="category" required="">
                    <option value="" selected="" disabled="">
                      Select category
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Books">Books</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Enter price"
                    required=""
                  />
                </div>
                <div className="col">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    placeholder="Enter quantity"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  placeholder="Enter brand"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  placeholder="Enter color"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUpload" className="form-label">
                  Product Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  required=""
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="saveProductBtn"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* modal above */}
    <div className="expand-btn">
      <img style={{ width: 25 }} src="./images/expand.png" alt="" />
    </div>
    <div className="search-box d-flex justify-content-between ">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your Products"
        />
        <i className="fas fa-search search-icon" />
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item ">
          <a
            className="nav-link active "
            aria-current="page"
            id="show-orders"
            href="#"
          >
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " id="show-history" href="#">
            History
          </a>
        </li>
      </ul>
    </div>
    <div className="table-container bg-white">
      {/* Orders Table */}
      <div className="table" id="orders-table" style={{ minWidth: 450 }}>
        <div className="row header">
          <div className="conatiner col row-column">ID</div>
          <div className="conatiner col row-column">Product</div>
          <div className="conatiner col row-column">Category</div>
          <div className="conatiner col row-column">quantity</div>
          <div className="conatiner col row-column">brand</div>
          <div className="conatiner col row-column">color</div>
          <div className="conatiner col row-column">price</div>
        </div>
        {/* Data for orders will be inserted here */}
      </div>
      {/* History Table (Initially Hidden) */}
      <div
        className="table d-none"
        id="history-table"
        style={{ minWidth: 500 }}
      >
        <div className="row header">
          <div className="conatiner col row-column">customer Id</div>
          <div className="conatiner col row-column">Date</div>
          <div className="conatiner col row-column">Product</div>
          <div className="conatiner col row-column">Price</div>
          <div className="conatiner col row-column">Quantity</div>
          <div className="conatiner col row-column">Invoice id</div>
          <div className="conatiner col row-column">payment mode</div>
        </div>
        {/* Data for history will be inserted here */}
        <div className="row datas ps-3">
          <div className="conatiner col column">C001</div>
          <div className="conatiner col column">2024-09-23</div>
          <div className="conatiner col column">Laptop</div>
          <div className="conatiner col column">$1200</div>
          <div className="conatiner col column">1</div>
          <div className="conatiner col column">INV001</div>
          <div className="conatiner col column">Credit Card</div>
        </div>
        <div className="row  datas ps-3">
          <div className="conatiner col column">C002</div>
          <div className="conatiner col column">2024-09-22</div>
          <div className="conatiner col column">Smartphone</div>
          <div className="conatiner col column">$800</div>
          <div className="conatiner col column">2</div>
          <div className="conatiner col column">INV002</div>
          <div className="conatiner col column">PayPal</div>
        </div>
        <div className="row  datas ps-3">
          <div className="conatiner col column">C003</div>
          <div className="conatiner col column">2024-09-21</div>
          <div className="conatiner col column">Tablet</div>
          <div className="conatiner col column">$400</div>
          <div className="conatiner col column">3</div>
          <div className="conatiner col column">INV003</div>
          <div className="conatiner col column">Debit Card</div>
        </div>
      </div>
    </div>
  </div>
  {/* order window div */}
  <div className="order-window ">
    <div className="collapse-btn">
      <img style={{ width: 25 }} src="./images/collapse.png" alt="" />
    </div>
    <div className="orders">
      <div className="order-list" id="order-list">
        {/* Selected products will be added here */}
        <div className="hide">
          <p className="text-center">Your orders will be displayed here</p>
          <img
            style={{ width: "100%", marginTop: 30 }}
            src="./images/order.jpg"
          />
        </div>
      </div>
      <div className="confirm-btn-container hidden">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="confirm-btn"
        >
          confirm order
        </button>
        <button className="cancel-btn">
          <span className="material-symbols-outlined">delete</span>
          <span className="tooltip">delete</span>
        </button>
        {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="invoice-btn"><span><i class="fa-solid fa-file-invoice"></i></span><span class="tooltip">Invoice</span></button> */}
      </div>
      {/* modal here */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">
                Confirm Your Order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body"
              style={{
                maxHeight: 400,
                overflowY: "auto",
                position: "relative",
                backgroundColor: "#f7f8fc"
              }}
            >
              <div
                style={{ fontSize: 14, padding: "5px 8px" }}
                id="invoice-items"
              />
            </div>
            <div
              className="modal-footer"
              style={{ position: "sticky", borderTop: "2px dashed black" }}
            >
              <div
                style={{
                  position: "sticky",
                  bottom: 0,
                  backgroundColor: "white"
                }}
                id="invoice-total"
              ></div>
              <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  id="total"
                  data-bs-dismiss="modal"
                >
                  {/*total amount displayed here*/}{" "}
                </button>
                <button
                  type="button"
                  onclick="printInvoice()"
                  className="btn btn-primary"
                >
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal here */}
    </div>
  </div>

         <Footer />
    </div>
  )
}

export default Orders