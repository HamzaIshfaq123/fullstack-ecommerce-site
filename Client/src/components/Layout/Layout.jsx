import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/footer';

const Layout = () => {

  return (
    <>
      {/* Navbar gets the function to open the cart */}
      <Navbar onCartToggle={() => setIsCartOpen(true)} />
      
      {/* The Sidebar itself */}
      {/* <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} /> */}

      {/* Outlet renders the specific page (Home, Store, etc.) */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout
