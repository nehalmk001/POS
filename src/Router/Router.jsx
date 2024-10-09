import React from 'react'
import Orders from '../pages/Orders/Orders'
import Dashboard from '../pages/Dashboard/Dashboard'
import History from '../pages/HistoryOrder/History'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from '../layout/Layout'
import Login from '../pages/Login/Login'

import AddItempage from '../pages/AddProducts/AddItempage'
import ItemList from '../pages/AddProducts/ItemList'
const Router = () => {
  return (
    <div>
      <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Login />}/>
        <Route element={<Layout />}> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/history" element={<History />} />
          <Route path="/itemlist" element={<ItemList />} />
          <Route path="/additem" element={<AddItempage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router