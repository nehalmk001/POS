import React from 'react'
import Orders from '../pages/Orders/Orders'
import Dashboard from '../pages/Dashboard/Dashboard'
import History from '../pages/HistoryOrder/History'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from '../layout/Layout'
import Login from '../pages/Login/Login'
import ItemList from '../pages/AddProducts/itemlist'
import AddItempage from '../pages/AddProducts/AddItempage'
const Router = () => {
  return (
    <div>
      <BrowserRouter> {/* BrowserRouter instead of Router */}
      <Routes>
      <Route path="/" element={<Login />}/>
        <Route element={<Layout />}> {/* Layout for shared navbar/sidebar/footer */}
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