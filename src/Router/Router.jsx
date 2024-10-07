import React from 'react'
import Orders from '../pages/Orders/Orders'
import Dashboard from '../pages/Dashboard/Dashboard'
import History from '../pages/HistoryOrder/History'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from '../layout/Layout'
import ItemPage from '../pages/AddProducts/ItemPage'
import AddItempage from '../pages/AddProducts/AddItempage'
const Router = () => {
  return (
    <div>
      <BrowserRouter> {/* BrowserRouter instead of Router */}
      <Routes>
        <Route element={<Layout />}> {/* Layout for shared navbar/sidebar/footer */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/history" element={<History />} />
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/addItempage" element={<AddItempage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router