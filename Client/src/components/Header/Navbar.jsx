import React from 'react'
import { useState } from 'react';
// images
import logo from '/images/logo.png'
// import product1 from '../../assets/images/product01.png'
// import { Telephone } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Telephone, Envelope, GeoAlt, Heart, Cart3, List, X, ArrowRightCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import { useAuth } from '../../context/AuthContext';


const Navbar = ({ onCartToggle }) => {
    const [authModalType, setAuthModalType] = useState(null); // 'login', 'signup', or null
    const { user, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

     const navLinks = [
    { name: 'Home', active: true },
    { name: 'Hot Deals', active: false },
    { name: 'Categories', active: false },
    { name: 'Laptops', active: false },
    { name: 'Smartphones', active: false },
    { name: 'Cameras', active: false },
    { name: 'Accessories', active: false },
  ];

  return (
    <>
     <header className="font-sans w-full">
      
      {/* 1. TOP HEADER - Responsive Grid */}
      <div className="bg-[#15161D] py-2 border-b border-[#2B2D33]">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-[12px] text-white gap-2">
          <ul className="flex flex-wrap justify-center gap-4 items-center">
            <li className="flex items-center gap-1 hover:text-[#D10024] cursor-pointer">
              <Telephone className="text-[#D10024]" size={10} /> +021-95-51-84
            </li>
            <li className="flex items-center gap-1 hover:text-[#D10024] cursor-pointer">
              <Envelope className="text-[#D10024]" size={10} /> email@email.com
            </li>
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              <GeoAlt className="text-[#D10024]" /> 1734 Stonecoal Road
            </li>
            {/* <li className="hidden md:flex items-center gap-1 hover:text-[#D10024] cursor-pointer">
              <GeoAlt className="text-[#D10024]" size={10} /> 1734 Stonecoal Road
            </li> */}
          </ul>
          <ul className="flex gap-4 items-center">
        {!user ? (
          /* --- GUEST VIEW: Show Login and Signup --- */
          <>
            <li 
              onClick={() => setAuthModalType('login')} 
              className="hover:text-[#D10024] cursor-pointer"
            >
              Login
            </li>
            <li 
              onClick={() => setAuthModalType('signup')} 
              className="hover:text-[#D10024] cursor-pointer"
            >
              Signup
            </li>
          </>
        ) : (
          /* --- LOGGED IN VIEW: Show Email and Account Dropdown --- */
          <>
            <li className="text-gray-600 text-sm lowercase">{user.email}</li>
            
            <div className="relative">
              <li 
                onClick={() => setShowDropdown(!showDropdown)} 
                className="hover:text-[#D10024] cursor-pointer flex items-center gap-1"
              >
                Account <span className="text-[10px] align-middle">▼</span>
              </li>

              {/* The Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
                  {/* <Link 
                    to="/account" 
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Profile
                  </Link> */}
                  <button 
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t border-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </ul>
        </div>
      </div>

      {/* Logic to render based on the string state */}
      {authModalType === 'login' && (
        <Login 
          isOpen={true} 
          onClose={() => setAuthModalType(null)} 
          openSignup={() => setAuthModalType('signup')} 
        />
      )}

      {authModalType === 'signup' && (
        <Signup 
          isOpen={true} 
          onClose={() => setAuthModalType(null)} 
          openLogin={() => setAuthModalType('login')} 
        />
      )}

      {/* 2. MAIN HEADER - Flex Wrap & Mobile Optimization */}
      <div className="bg-[#1E1F29] py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-y-4">
            
            {/* Logo - Centers on Mobile */}
            <div className="w-1/2 md:w-1/4 order-1">
              <a href="/" className="inline-block">
                <img src={logo} alt="Logo" className="max-w-/[120px] md:max-w-/[150px]" />
              </a>
            </div>

            {/* Icons & Menu Toggle - Aligns Right on Mobile */}
            <div className="w-1/2 md:w-1/4 flex justify-end items-center gap-4 md:gap-6 order-2 md:order-3 text-white">
              <div className="relative flex flex-col items-center cursor-pointer group">
                <Heart size={18} className="md:size-/[20px]" />
                <span className="hidden sm:block text-[10px] uppercase mt-1">Wishlist</span>
                <div className="absolute -top-2 -right-1 bg-[#D10024] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">2</div>
              </div>

              <div className="relative group flex flex-col items-center cursor-pointer" onClick={(e) => {
         // Debugging: Check your console (F12)
        onCartToggle(); 
      }}>
                <Cart3 size={18} className="md:size-/[20px]"/>
                <span className="hidden sm:block text-[10px] uppercase mt-1">Cart</span>
                <div className="absolute -top-2 -right-1 bg-[#D10024] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">3</div>
              </div>

              {/* Mobile Menu Toggle Button */}
              {/* <button 
                className="lg:hidden flex flex-col items-center text-white" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <Cart3 size={22} /> : <Cart3 size={22} />}
                <span className="text-[10px] uppercase mt-1">Menu</span>
              </button> */}
            </div>

            {/* Search Bar - Full Width on Mobile */}
            <div className="w-full md:w-1/2 order-3 md:order-2">
              <div className="flex bg-white rounded-full overflow-hidden border-2 border-transparent focus-within:border-[#D10024]">
                <select className="bg-gray-50 px-4 py-2 border-r border-gray-200 outline-none text-xs hidden lg:block">
                  <option value="0">All Categories</option>
                  <option value="1">Laptops</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Search here" 
                  className="grow px-4 py-2 outline-none text-sm w-full"
                />
                <button className="bg-[#D10024] text-white!  px-5 md:px-8 py-2 font-semibold! hover:bg-[#A9001D] transition-colors flex items-center gap-2">
                  Search
                  {/* <span className="hidden md:block">SEARCH</span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
       <nav id="navigation" className="bg-white border-b border-gray-100 relative">
      <div className="container mx-auto px-4">
        
        {/* MOBILE VIEW: Header for the nav (Visible only on small screens) */}
        <div className="flex lg:hidden justify-between items-center py-4">
          <span className="font-bold uppercase text-sm tracking-widest text-[#2B2D33]">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#2B2D33] focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div id="responsive-nav" className={`
    /* Use state to toggle: if true 'block', if false 'hidden' */
    ${isMenuOpen ? 'block' : 'hidden'} 
    lg:block transition-all duration-300
  `}>
          <ul className="flex flex-col lg:flex-row lg:justify-start items-start lg:items-center lg:space-x-8 uppercase tracking-tight font-medium z-999999">
            
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`
                  relative w-full lg:w-auto border-b lg:border-none border-gray-50
                  ${link.active ? 'text-[#D10024]' : 'text-[#2B2D33] hover:text-[#D10024]'} 
                  transition-colors duration-300
                `}
              >
                <a href="#" className={`
                  block py-4 lg:pt-5 lg:pb-5 text-sm lg:text-[15px]
                  ${link.active ? 'lg:after:content-[""] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-/[3px] lg:after:bg-[#D10024]' : ''}
                `}>
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
          
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[-1] lg:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
    </header>
    </>
  )
}

export default Navbar
