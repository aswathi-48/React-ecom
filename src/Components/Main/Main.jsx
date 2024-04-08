import React from 'react'
import ProductList from '../product/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../../layout/Layout'

const Main = () => {
  return (
    <div>
      <BrowserRouter>
     {/* <Layout> */}
      <Routes>
        {/* <Route path="/" element={<Layout/>}/> */}
        {/* <Route path="/productlist" element={<ProductList/>}/> */}
      </Routes>
     {/* </Layout> */}
     </BrowserRouter>
    </div>
  )
}

export default Main