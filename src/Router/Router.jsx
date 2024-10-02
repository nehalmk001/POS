import React from 'react'
import Orders from '../pages/Orders/Orders'
import Dashboard from '../pages/Dashboard/Dashboard'
import History from '../pages/HistoryOrder/History'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProducts from '../pages/AddProducts/AddProducts'
const Router = () => {
  return (
    <div>

    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/orders' element={<Orders /> }/>
    <Route path='/history' element={<History /> }/>
    <Route path='/addproducts' element={<AddProducts/> }/>
   </Routes>
   </BrowserRouter>

    </div>
  )
}

export default Router