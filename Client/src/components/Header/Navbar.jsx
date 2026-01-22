import React from 'react'
import { useState } from 'react';
// images
import logo from '../../assets/images/logo.png'
import product1 from '../../assets/images/product01.png'
// import { Telephone } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Telephone, Envelope, GeoAlt, Heart, Cart3, List, X, ArrowRightCircle } from 'react-bootstrap-icons';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
    <header className="font-sans">
      {/* TOP HEADER */}
      <div id="top-header" className="bg-[#15161D] py-2 border-b border-[#2B2D33]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[12px] text-white">
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              <Telephone className="text-[#D10024]" /> +021-95-51-84
            </li>
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              <Envelope className="text-[#D10024]" /> email@email.com
            </li>
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              <GeoAlt className="text-[#D10024]" /> 1734 Stonecoal Road
            </li>
          </ul>
          <ul className="flex space-x-6 mt-2 md:mt-0 items-center">
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              <span className="text-[#D10024] font-bold">$</span> USD
            </li>
            <li className="flex items-center gap-2 hover:text-[#D10024] cursor-pointer">
              My Account
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div id="header" className="bg-[#1E1F29] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* LOGO */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <a href="/" className="inline-block">
                <img src={logo} alt="Logo" className="max-w-\[150px]" />
              </a>
            </div>

            {/* SEARCH BAR */}
            <div className="w-full md:w-1/2 px-2">
              <div className="flex bg-white rounded-full overflow-hidden">
                <select className="bg-transparent px-4 py-2 border-r border-gray-200 outline-none text-sm hidden lg:block">
                  <option value="0">All Categories</option>
                  <option value="1">Category 01</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Search here" 
                  className="grow px-4 py-2 outline-none text-sm"
                />
                <button className="text-white! bg-[#D10024] px-8 py-2 font-bold! hover:bg-[#A9001D] transition-colors">
                 Search
                </button>
              </div>
            </div>

            {/* ACCOUNT/CART */}
            <div className="w-full md:w-1/4 flex justify-end items-center space-x-8 mt-4 md:mt-0 text-white">
              <div className="relative flex flex-col items-center cursor-pointer group">
                <Heart size={20} />
                <span className="text-[10px] uppercase mt-1">Wishlist</span>
                <div className="absolute -top-2 -right-2 bg-[#D10024] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</div>
              </div>

              {/* Cart Dropdown Container */}
              <div className="relative group py-2">
                <div className="flex flex-col items-center cursor-pointer">
                  <Cart3 size={20} />
                  <span className="text-[10px] uppercase mt-1">Your Cart</span>
                  <div className="absolute -top-2 -right-2 bg-[#D10024] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</div>
                </div>
                
                {/* Hidden Dropdown on Hover */}
                <div className="absolute right-0 top-full w-\[300px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4 border-t-4 border-[#D10024]">
                  <div className="max-h-\[200px] overflow-y-auto">
                    {/* Item */}
                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                      <img src="/img/product01.png" alt="" className="w-12 h-12 object-contain" />
                      <div className="grow px-3">
                        <h3 className="text-xs font-bold truncate">Product Name</h3>
                        <p className="text-xs">1x <span className="font-bold">$980.00</span></p>
                      </div>
                      <X className="cursor-pointer hover:text-red-500" />
                    </div>
                  </div>
                  <div className="py-2 border-b">
                    <p className="text-sm">3 Item(s) selected</p>
                    <p className="text-lg font-bold">SUBTOTAL: $2940.00</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gray-800 text-white py-2 text-sm font-bold">View Cart</button>
                    <button className="flex-1 bg-[#D10024] text-white py-2 text-sm font-bold flex items-center justify-center gap-2">
                      Checkout <ArrowRightCircle />
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu Toggle */}
              <div className="lg:hidden flex flex-col items-center cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <List size={24} />
                <span className="text-[10px] uppercase mt-1">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={`bg-white border-b-2 border-gray-100 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 py-4 text-sm font-semibold text-[#2B2D33]">
            <li className="text-[#D10024] border-b-2 border-[#D10024] lg:border-none"><a href="#">Home</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Hot Deals</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Categories</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Laptops</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Smartphones</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Cameras</a></li>
            <li className="hover:text-[#D10024] transition-colors"><a href="#">Accessories</a></li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
