import React from 'react'
// images
import product1 from '../../../assets/images/product01.png'
import product2 from '../../../assets/images/product02.png'
import product3 from '../../../assets/images/product03.png'
import product4 from '../../../assets/images/product04.png'
import product5 from '../../../assets/images/product05.png'
import product6 from '../../../assets/images/product06.png'
import product7 from '../../../assets/images/product07.png'
import product8 from '../../../assets/images/product08.png'
import product9 from '../../../assets/images/product09.png'
import shop1 from '../../../assets/images/shop01.png'
import shop2 from '../../../assets/images/shop02.png'
import shop3 from '../../../assets/images/shop03.png'

import {ArrowRightCircleFill} from "react-bootstrap-icons"

import { useState } from 'react';
import { StarFill, Heart, Shuffle, Eye, CartDash } from 'react-bootstrap-icons';

const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories'];

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('Laptops');
    const shops = [
    { id: 1, name: "Laptop", img: "./img/shop01.png" },
    { id: 2, name: "Accessories", img: "./img/shop03.png" },
    { id: 3, name: "Cameras", img: "./img/shop02.png" },
  ];
  return (
    <div>
      {/* NAVIGATION */}


		{/* <!-- SECTION --> */}
		 <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Responsive Grid: 1 col on mobile, 2 on small tablets, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {shops.map((shop) => (
            <div key={shop.id} className="relative overflow-hidden group bg-[#E4E7ED] h-64">
  
  {/* The Product Image - Stays in the background */}
  <img 
    src={shop1} 
    alt={shop.name} 
    className="absolute right-0 bottom-0 w-2/3 h-full object-contain transition-transform duration-500 group-hover:scale-110" 
  />

  {/* RED TRIANGLE OVERLAY - This creates the slanted shape */}
  <div 
    className="absolute inset-0 bg-[#D10024] opacity-90 transition-all duration-500 group-hover:bg-[#1E1F29]"
    style={{
      // This creates a triangle/polygon from the top-left
      clipPath: "polygon(0 0, 100% 0, 20% 100%, 0% 100%)" 
    }}
  ></div>

  {/* TEXT CONTENT - Placed inside the triangle area */}
  <div className="absolute inset-0 p-8 flex flex-col justify-center z-20">
    <h3 className="text-2xl font-bold text-white leading-tight uppercase">
      {shop.name}<br />Collection
    </h3>
    <a 
      href="#" 
      className="mt-4 flex items-center gap-2 text-white font-bold uppercase text-xs hover:underline"
    >
      Shop now 
      <ArrowRightCircleFill className="text-white" />
    </a>
  </div>
  
</div>
          ))}

        </div>
      </div>
    </div>
		{/* <!-- /SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* SECTION TITLE & NAV */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#E4E7ED] mb-8 pb-2">
          <h3 className="text-2xl font-bold uppercase text-[#1E1F29]">New Products</h3>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveTab(cat)}
                    className={`text-sm font-bold uppercase transition-all relative pb-2
                      ${activeTab === cat 
                        ? 'text-[#D10024] after:content-[""] after:absolute after:bottom-\[-2px] after:left-0 after:w-full after:h-\[2px] after:bg-[#D10024]' 
                        : 'text-[#8D99AE] hover:text-[#D10024]'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* SINGLE PRODUCT CARD */}
          <div className="group relative border border-[#E4E7ED] p-4 transition-all hover:shadow-lg hover:border-[#D10024]">
            
            {/* PRODUCT IMAGE */}
            <div className="relative h-64 flex items-center justify-center overflow-hidden">
              <img 
                src={product1} 
                alt="Product" 
                className="max-h-full transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                <span className="bg-[#D10024] text-white text-[10px] px-2 py-1 font-bold">-30%</span>
                <span className="bg-[#1E1F29] text-white text-[10px] px-2 py-1 font-bold uppercase">New</span>
              </div>
            </div>

            {/* PRODUCT BODY */}
            <div className="text-center mt-4">
              <p className="text-[10px] uppercase text-[#8D99AE] mb-1">Category</p>
              <h3 className="text-sm font-bold uppercase hover:text-[#D10024] transition-colors mb-2">
                <a href="#">Product Name Goes Here</a>
              </h3>
              <h4 className="text-[#D10024] font-bold text-lg">
                $980.00 <del className="text-[#8D99AE] font-normal text-sm ml-2">$990.00</del>
              </h4>

              {/* RATING */}
              <div className="flex justify-center gap-1 my-2 text-[#D10024]">
                <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} />
              </div>

              {/* ACTION BUTTONS (Appear on hover) */}
              <div className="flex justify-center gap-4 mt-4">
                <button className="relative group/tool">
                  <Heart className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">wishlist</span>
                </button>
                <button className="relative group/tool">
                  <Shuffle className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">compare</span>
                </button>
                <button className="relative group/tool">
                  <Eye className="hover:text-[#D10024]" />
                  <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">quick view</span>
                </button>
              </div>
            </div>

            {/* ADD TO CART BUTTON (Slide up effect) */}
			<div className="absolute inset-x-0 bottom-/[-50px] opacity-0 
				group-hover:bottom-0 group-hover:opacity-100 
				group-hover:transition-all group-hover:duration-300 
				bg-[#1E1F29] p-2 z-10 transition-none">
			<button className="w-full text-white! uppercase text-xs font-bold py-2 flex 	items-center justify-center gap-2 hover:text-[#D10024]">
				<CartDash size={16} /> Add to Cart
			</button>
			</div>

          </div>
          {/* END SINGLE PRODUCT */}

        </div>
      </div>
    </div>
		{/* <!-- /SECTION --> */}

		{/* <!-- HOT DEAL SECTION --> */}
		<div id="hot-deal" className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="#">Shop now</a>
						</div>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /HOT DEAL SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="w-full px-4">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-gray-200 pb-4 mb-8">
    {/* Section Title */}
    <h3 className="text-2xl font-bold uppercase text-[#1E1F29] mb-4 md:mb-0 tracking-tight">
      Top selling
    </h3>

    {/* Section Navigation */}
    <nav>
      <ul className="flex flex-wrap items-center gap-4 md:gap-8">
        <li className="relative group">
          <a 
            href="#tab2" 
            className="text-sm font-semibold uppercase transition-colors text-[#D10024] after:absolute after:bottom-/[-18px] after:left-0 after:w-full after:h-/[2px] after:bg-[#D10024]"
          >
            Laptops
          </a>
        </li>
        <li>
          <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
            Smartphones
          </a>
        </li>
        <li>
          <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
            Cameras
          </a>
        </li>
        <li>
          <a href="#tab2" className="text-sm font-semibold uppercase text-gray-500 hover:text-[#D10024] transition-colors">
            Accessories
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div className="container mx-auto px-4 py-8">
      {/* Grid wrapper: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* START SINGLE PRODUCT ITEM */}
        <div className="group relative border border-gray-200 p-4 transition-all hover:border-[#D10024] bg-white">
          
          {/* Product Image & Labels */}
          <div className="relative overflow-hidden mb-4">
            <img 
              src={product6} // Replace with your dynamic image variable
              alt="Product Name" 
              className="w-full h-auto object-cover" 
            />
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <span className="bg-[#D10024] text-white text-[10px] font-bold px-2 py-1 border border-[#D10024]">
                -30%
              </span>
              <span className="bg-white text-[#D10024] text-[10px] font-bold px-2 py-1 border border-[#D10024]">
                NEW
              </span>
            </div>
          </div>

          {/* Product Body */}
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase mb-1">Category</p>
            <h3 className="text-sm font-bold uppercase mb-2 hover:text-[#D10024] cursor-pointer">
              <a href="#">Product Name Goes Here</a>
            </h3>
            <h4 className="text-[#D10024] font-bold text-lg mb-2">
              $980.00 <del className="text-gray-400 font-normal text-sm ml-1">$990.00</del>
            </h4>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4 text-[#D10024] text-xs">
              {/* <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> */}
              {/* <FaRegStar className="text-gray-300" /> */}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex justify-center gap-4 text-gray-700 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <button className="hover:text-[#D10024] transition-colors"></button>
              <button className="hover:text-[#D10024] transition-colors"></button>
              <button className="hover:text-[#D10024] transition-colors"></button>
            </div>
          </div>

          {/* Add to Cart - Slide up effect with exit fix */}
          <div className="absolute inset-x-0 bottom-/[-50px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 bg-[#1E1F29] p-2 z-10 transition-none">
            <button className="w-full text-white! uppercase text-xs font-bold py-2 flex items-center justify-center gap-2 hover:text-[#D10024] transition-colors">
              <CartDash size={14} /> add to cart
            </button>
          </div>
        </div>
        {/* END SINGLE PRODUCT ITEM */}

      </div>
    </div>
					{/* <!-- /Products tab & slick --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /SECTION --> */}

		{/* <!-- SECTION --> */}
		 <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Responsive Grid: 1 col on mobile, 2 on small tablets, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Top Selling */}
          <div>
            <div className="border-b-2 border-gray-100 pb-3 mb-6">
              <h4 className="text-lg font-bold uppercase text-[#1E1F29]">Top selling</h4>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Product Widget Item */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 shrink-0 overflow-hidden">
                  <img src={product7} alt="product" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="grow">
                  <p className="text-[10px] text-gray-400 uppercase">Category</p>
                  <h3 className="text-sm font-bold uppercase mb-1 hover:text-[#D10024] transition-colors">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="text-sm font-bold text-[#1E1F29]">
                    $980.00 <del className="text-xs font-normal text-gray-400 ml-1">$990.00</del>
                  </h4>
                </div>
              </div>
              {/* End Product Widget Item */}
            </div>
          </div>

          {/* Column 2: Top Selling */}
          <div>
            <div className="border-b-2 border-gray-100 pb-3 mb-6">
              <h4 className="text-lg font-bold uppercase text-[#1E1F29]">Top selling</h4>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 shrink-0">
                  <img src={product4} alt="product" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Category</p>
                  <h3 className="text-sm font-bold uppercase mb-1 hover:text-[#D10024]">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 className="text-sm font-bold text-[#1E1F29]">
                    $980.00 <del className="text-xs font-normal text-gray-400 ml-1">$990.00</del>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Top Selling */}
          <div>
            <div className="border-b-2 border-gray-100 pb-3 mb-6">
              <h4 className="text-lg font-bold uppercase text-[#1E1F29]">Top selling</h4>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Note: You can map your dynamic data here */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-20 h-20 shrink-0">
                    <img src={product3} alt="product" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Category</p>
                    <h3 className="text-sm font-bold uppercase mb-1 hover:text-[#D10024]">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="text-sm font-bold text-[#1E1F29]">
                      $980.00 <del className="text-xs font-normal text-gray-400 ml-1">$990.00</del>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
		{/* <!-- /SECTION --> */}

    </div>
  )
}

export default Homepage
