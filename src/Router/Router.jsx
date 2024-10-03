import React from 'react'
import Orders from '../pages/Orders/Orders'
import Dashboard from '../pages/Dashboard/Dashboard'
import History from '../pages/HistoryOrder/History'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProducts from '../pages/AddProducts/AddProducts'

import Layout from '../layout/Layout'
const Router = () => {
  return (
    <div>
      <BrowserRouter> {/* BrowserRouter instead of Router */}
      <Routes>
        <Route element={<Layout />}> {/* Layout for shared navbar/sidebar/footer */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/history" element={<History />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router