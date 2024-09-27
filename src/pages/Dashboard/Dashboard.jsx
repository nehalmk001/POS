import React from 'react'
import Navbar from '../../layout/Navbar'
import Sidebar from '../../layout/Sidebar'
import Footer from '../../layout/Footer'

const Dashboard = () => {
  return (
    <div className='wrapper'>
    <Navbar/>
    <Sidebar/>
    <Footer/>
    </div>
  )
}

export default Dashboard