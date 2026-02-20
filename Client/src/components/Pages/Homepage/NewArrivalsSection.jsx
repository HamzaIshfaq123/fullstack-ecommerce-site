import React, { useState, useEffect } from 'react'

// images
import shop1 from '/images/shop01.png'
import shop2 from '/images/shop02.png'
import shop3 from '/images/shop03.png'

import { toast } from 'sonner';

import { Link } from 'react-router-dom';

import {ArrowRightCircleFill} from "react-bootstrap-icons"

import { useAuth } from '@/context/AuthContext'

import { StarFill, Heart, Shuffle, Eye, CartDash } from 'react-bootstrap-icons';

const NewArrivalsSection = () => {
    const shops = [
        { id: 1, name: "Laptop", img: shop1 },
        { id: 2, name: "Accessories", img: shop2 },
        { id: 3, name: "Cameras", img: shop3 },
      ];
    
      const [products, setProducts] = useState([]);
      const { user, loading } = useAuth(); // Get 'loading' from context
        // const storeId = "65b2f1a5e4b0a1a2b3c4d5e6"; // Replace with dynamic ID later
     // Re-run once 'loading' becomes false
     useEffect(() => {
      // 1. Create a "placeholder" toast and store its ID
      // const toastId = toast.loading("Verifying credentials...");
      // 2. DISMISS the loading and show SUCCESS
      // toast.success("Login Successful!", { id: toastId });
      const fetchProducts = async () => {
        // 1. ONLY wait for loading. We want to fetch even if !token (for guests)
        if (loading) return;
    
        try {
          const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
          
          // 2. Prepare headers (optional: send token ONLY if it exists)
          const token = localStorage.getItem("token");
          const headers = { "Content-Type": "application/json" };
          if (token) headers["Authorization"] = `Bearer ${token}`;
    
          const response = await fetch(`${API_URL}/api/products`, { headers });
          
          const data = await response.json();
          
          if (response.ok) {
            setProducts(data.products);
          } else {
            console.error("Server Error:", data.message);
          }
        } catch (err) {
          console.error("Fetch products error:", err);
        }
      };
    
      fetchProducts();
    }, [loading]); // Keep [loading] so it fires once Auth is initialized
  return (
    <div>
      {/* <!-- SECTION --> */}
             <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {/* Responsive Grid: 1 col on mobile, 2 on small tablets, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                
                {shops.map((shop) => (
                  <div key={shop.id} className="relative overflow-hidden group bg-[#E4E7ED] h-64">
        
        {/* The Product Image - Stays in the background */}
        <img 
          src={shop.img} 
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
        <div className="absolute inset-0 p-8 flex flex-col justify-center">
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
                    {/* {categories.map((cat) => (
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
                    ))} */}
                  </ul>
                </div>
              </div>
      
              {/* PRODUCTS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* SINGLE PRODUCT CARD */}
                {products && products.map((product) => (<div key={product._id} className="group relative border border-[#E4E7ED] p-4 transition-all hover:shadow-lg hover:border-[#D10024]">
                  
                  {/* PRODUCT IMAGE */}
                  <div className="relative h-64 flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.images[0]} 
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
                    <p className="text-[10px] uppercase text-[#8D99AE] mb-1">{product.category}</p>
                    <h3 className="text-sm font-bold uppercase hover:text-[#D10024] transition-colors mb-2">
                        <Link to={`/product/${product._id}`} className="group cursor-pointer">
                      {product.name}
                        </Link>
                    </h3>
                    <h4 className="text-[#D10024] font-bold text-lg">
                      ${product.price} <del className="text-[#8D99AE] font-normal text-sm ml-2">${product.old_price}</del>
                    </h4>
      
                    {/* RATING */}
                    <div className="flex justify-center gap-1 my-2 text-[#D10024]">
                      <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} />
                    </div>
      
                    {/* ACTION BUTTONS (Appear on hover) */}
                    <div className="flex justify-center gap-4 mt-4">
                      <button className="relative group/tool">
                        {/* <Heart className="hover:text-[#D10024]" /> */}
                        <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">wishlist</span>
                      </button>
                      <button className="relative group/tool">
                        {/* <Shuffle className="hover:text-[#D10024]" /> */}
                        <span className="absolute bottom-full mb-2 hidden group-hover/tool:block bg-[#1E1F29] text-white text-[10px] py-1 px-2 rounded">compare</span>
                      </button>
                      <button className="relative group/tool">
                        {/* <Eye className="hover:text-[#D10024]" /> */}
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
      
                </div>))}
                {/* END SINGLE PRODUCT */}
      
              </div>
            </div>
          </div>
            {/* <!-- /SECTION --> */}
    </div>
  )
}

export default NewArrivalsSection
