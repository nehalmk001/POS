import React ,{useState , useEffect} from 'react'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'
import '../../css/Dashboard.css'
import { IoMail } from "react-icons/io5";

const Dashboard = () => {

 
  
  return (
   
  

<div className="container-fluid wrapper">
  <div id="content"  >


          <div className="main-wrapper">
            <div className="row d-flex">


              <div className="col col-8 d-flex flex-column justify-content-between" style={{gridRowGap:"20px"}}> 

               {/* first */}
              
                  <div className=" text-center first-card">
                    <div className="row row-cols-2" style={{gridRowGap: "10px"}}>

                      {/* <!-- email 1 --> */}

                      <div className="col first-main">
                      
                           <div className="email-col">
                              <div className="first-icon orange">
                              <IoMail />
                              </div>
                          
                          <div className="first-text">
                            <h4>Email</h4>
                            <h5>hello@gmail.com</h5>
  
                          </div>
                           </div>
                       
                      </div>

                      {/* <!-- register --> */}

                      <div className="col first-main">

                        <div className="reg-col">
                          <div className="first-icon violet">
                          <IoMail />
                          </div>
                      
                      <div className="first-text">
                        <h4>Email</h4>
                        <h5>hello@gmail.com</h5>

                      </div>
                       </div>

                      </div>

                        {/* <!-- branch --> */}

                      <div className="col first-main">
                        <div className="branch-col">
                          <div className="first-icon green">
                          <IoMail />
                          </div>
                      
                      <div className="first-text">
                        <h4>Email</h4>
                        <h5>hello@gmail.com</h5>

                      </div>
                       </div>
                      </div>

                      {/* <!-- item --> */}

                      <div className="col first-main">
                        <div className="item-col">
                          <div className="first-icon cream">
                          <IoMail />
                          </div>
                      
                      <div className="first-text">
                        <h4>Email</h4>
                        <h5>hello@gmail.com</h5>

                      </div>
                       </div>
                        
                      </div>
                    </div>
                  
                </div>

                {/* <!-- second --> */}

               

                  <div className="container-fluid second">
                    <div className="row rows-col-3 second-main">
                      
                     
                        
                        <div className="col second-sub">
                          <div className="total-1 d-flex justify-content-between align-items-center">
                          <IoMail />
                            <p>Total Points </p>
                            <span>300</span>
                          </div>
                        <div className="total2 d-flex flex-column  mt-4">
                            <div className="total-2 d-flex">
                              <p>point used</p>
                              <p>150</p>
                            </div>
                            <div className="total-3 d-flex">
                              <p>oustanding points</p>
                              <p>150</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col second-sub">
                          <div className="total-1 d-flex justify-content-between align-items-center">
                          <IoMail />
                            <p>Total Points </p>
                            <span>300</span>
                          </div>
                        <div className="total2 d-flex flex-column  mt-4">
                            <div className="total-2 d-flex">
                              <p>point used</p>
                              <p>150</p>
                            </div>
                            <div className="total-3 d-flex">
                              <p>oustanding points</p>
                              <p>150</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col second-sub">
                          <div className="total-1 d-flex justify-content-between align-items-center">
                          <IoMail />
                            <p>Total Points </p>
                            <span>300</span>
                          </div>
                        <div className="total2 d-flex flex-column  mt-4">
                            <div className="total-2 d-flex">
                              <p>point used</p>
                              <p>150</p>
                            </div>
                            <div className="total-3 d-flex">
                              <p>oustanding points</p>
                              <p>150</p>
                            </div>
                        </div>
                        </div>

                    </div>

                  </div>

                

              </div>

              {/* <!-- third coloumn --> */}

              <div className="col col-4 d-flex flex-column">

                <div className="profile">

                  <div className="profile1">

              

                     <div className="profile1-img"> 
                      <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt=""/>
                    </div>

                     
                      <div className="profile-text">
                        
                
             
                      <h3>Customer Name</h3>
                      <h5>+91 83********</h5>

            
                    </div>
                  </div>

                  <div className="profile2 d-flex">
                   
                      <div className="profile-i-color">
                      <IoMail />
                      </div>
                  
          
                    <div className="profile2-2">
                      <h4>birthday</h4>
                      <h5>15/02/2003</h5>
                    </div>
                  </div>

                  <div className="profile3 d-flex">
                   
                     
                      <div className="profile-i-color">
                      <IoMail />
                      </div>
                   
          
                    <div className="profile3-2">
                      <h4>birthday</h4>
                      <h5>15/02/2003</h5>
                    </div>
                  </div>




                  
                </div>

              </div>
            </div>
          </div>

          
           {/* <!-- table --> */}
          <div className="order-list">
             <div className="container-fluid table-content">
              <div className="table-top">
                <div className="top-heading">
                <h2>  Order List</h2>
  
                </div>
                <div className="date">
                  <a href="#all" className="date-link active" id="all">All</a>
                  <a href="#monthly" className="date-link" id="monthly">Monthly</a>
                  <a href="#weekly" className="date-link" id="weekly">Weekly</a>
                  <a href="#today" className="date-link" id="today">Today</a>
                </div>              
              </div>
              <div className="table">
                <div className="table-header">
                  <div className="table-cell">Order ID</div>
                  <div className="table-cell">Date/Time</div>
                  <div className="table-cell">Order Type</div>
                  <div className="table-cell">Employee</div>
                  <div className="table-cell">Status</div>
                  <div className="table-cell">Payment Status</div>
                  <div className="table-cell">Amount</div>
                </div>
                <div className="table-body">
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-complete"><span>Complete</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
                  {/* <!-- Additional rows can go here --> */}
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-pending"><span>Pending</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
  
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-complete"><span>Complete</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
  
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-complete"><span>Complete</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
  
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-pending"><span>Pending</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
  
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-complete"><span>Complete</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
  
                  <div className="table-row">
                    <div className="table-cell">01015</div>
                    <div className="table-cell">10:00 PM</div>
                    <div className="table-cell">Regular</div>
                    <div className="table-cell">Masud Rana</div>
                    <div className="table-cell status-complete"><span>Complete</span></div>
                    <div className="table-cell paid">Paid</div>
                    <div className="table-cell">$250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>



    {/* <Footer/> */}
    </div>
  )
}

export default Dashboard