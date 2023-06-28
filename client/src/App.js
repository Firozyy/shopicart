import React from 'react'
import Header from './compenents/Header'
import Footer from './compenents/Footer'

import Home from './compenents/screens/Home'
import { BrowserRouter as Roter, Routes, Route } from "react-router-dom";
import ProductScreen from './compenents/screens/ProductScreen'
import CartScreen from './compenents/screens/CartScreen';
import LoginScreen from './compenents/screens/LoginScreen';
import RegisterScreen from './compenents/screens/RegisterScreen';
import ProfileScreen from './compenents/screens/ProfileScreen';
import ShippingScreen from './compenents/screens/ShippingScreen';
import PaymentScreen from './compenents/screens/PaymentScreen';
import Placerder from './compenents/screens/Placerder';
import OrderScreen from './compenents/screens/OrderScreen';

import Success from './compenents/screens/Success';
const App = () => {
  return (
    <Roter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/product/:id' element={<ProductScreen />} exact />
        <Route path='/cart/:id?' element={<CartScreen />} exact />
        <Route path='/login' element={<LoginScreen />} exact />
        <Route path='/register' element={<RegisterScreen />} exact />
        <Route path='/profile' element={<ProfileScreen />} exact />
        <Route path='/shipping' element={<ShippingScreen />} exact />
        <Route path='/payment' element={<PaymentScreen />} exact />
        <Route path='/placeOrder' element={<Placerder />} exact />

        <Route path='/order/:id' element={<OrderScreen />} exact />
        
   
        <Route path='/paymentsuccess' element={<Success/>} exact />
        

        Tests



      </Routes>







      <Footer />
    </Roter>
  )
}

export default App