import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import './App.css'; 

import "tailwindcss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { ToastContainer, toast } from 'react-toastify';

// bootstrap for font awesome
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import Footer from './components/Footer/Footer';
// import Homepage from './components/Pages/Homepage/Homepage';
import Store from './components/Pages/Store/Store';
import Checkout from './components/Pages/Checkout/Checkout';


function App() {

  return (
    <>
      <Navbar/>
      {/* <Homepage/> */}
      <Store/>
      {/* <ToastContainer /> */}
      {/* <Checkout/> */}
      <Footer/>
    </>
  )
}


export default App
