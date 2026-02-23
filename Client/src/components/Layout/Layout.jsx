import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Cart from '../Pages/Cart/Cart';
import Signup from '../Pages/Auth/Signup';
import Login from '../Pages/Auth/Login';
import WhatsAppWidget from '../Pages/Widget/WhatsappWidget';

const Layout = () => {

// 🚀 Pull the Global Modal State and Functions
  const { authModalType, closeAuth, openLogin, openSignup, isCartOpen, closeCart } = useAuth();
  return (
    <>
      {/* Navbar gets the function to open the cart */}
      <Navbar/>

        {/* 🚀 GLOBAL AUTH MODALS */}
      {/* These will now work regardless of what page you are on */}
      {authModalType === 'login' && (
        <Login 
          isOpen={true} 
          onClose={closeAuth} 
          openSignup={openSignup} 
        />
      )}

      {authModalType === 'signup' && (
        <Signup 
          isOpen={true} 
          onClose={closeAuth} 
          openLogin={openLogin} 
        />
      )}
      
      {/* The Sidebar itself */}
      <Cart isCartOpen={isCartOpen} setIsCartOpen={closeCart} />

      {/* Outlet renders the specific page (Home, Store, etc.) */}
      <main>
        <Outlet />
      </main>
      <WhatsAppWidget/>
      <Footer />
    </>
  );
};

export default Layout
