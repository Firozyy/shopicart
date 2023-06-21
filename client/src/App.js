import React from 'react'
import Header from './compenents/Header'
import Footer from './compenents/Footer'

import Home from './compenents/screens/Home'
import { BrowserRouter as Roter, Routes, Route } from "react-router-dom";
import ProductScreen from './compenents/screens/ProductScreen'

const App = () => {
  return (
    <Roter>
      <Header />
      <Routes>
      <Route path='/'  element={<Home />} exact/> 
      <Route path='/product/:id'  element={<ProductScreen/>} exact/> 
      </Routes>







      <Footer />
    </Roter>
  )
}

export default App