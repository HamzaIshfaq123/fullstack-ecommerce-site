import { useState } from 'react'
import Navbar from './components/Header/Navbar'

// style files
// import './components/styles/bootstrap.min.css';
// import './components/styles/slick.css';
// import './components/styles/slick-theme.css';
// import './components/styles/nouislider.min.css';
// import './components/styles/font-awesome.min.css';
// import './components/styles/style.css'; 

import "tailwindcss";

// bootstrap for font awesome
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import Footer from './components/Footer/footer';
import Homepage from './components/Pages/Homepage/Homepage';
import Store from './components/Store/Store';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <>
      <Navbar/>
      {/* <Homepage/> */}
      {/* <Store/> */}
      <Checkout/>
      <Footer/>
    </>
  )
}

export default App
