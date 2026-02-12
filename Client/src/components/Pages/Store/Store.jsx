import React from 'react'
import { useState, useRef } from 'react'
import product1 from '/images/product01.png'
import { Link } from 'react-router-dom'

const Store = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <div>
        

      <div id="breadcrumb" className="bg-[#FBFBFC] border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <ul className="flex flex-wrap items-center gap-2 md:gap-4 text-[12px] md:text-sm font-medium uppercase tracking-wide">
            {/* Breadcrumb Item */}
            <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              {/* <a href="#" className="hover:text-[#D10024] transition-colors">
                Home
              </a> */}
              <Link to="/" className="hover:text-[#D10024] transition-colors">Home</Link>
            </li>

            {/* <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              <a href="#" className="hover:text-[#D10024] transition-colors">
                All Categories
              </a>
            </li> */}

            {/* <li className="flex items-center gap-2 md:gap-4 text-gray-500 after:content-['/'] after:text-gray-300 last:after:content-none">
              <a href="#" className="hover:text-[#D10024] transition-colors">
                Accessories
              </a>
            </li> */}

            {/* Active Item */}
            <li className="text-[#D10024] font-bold">
              Headphones (66 Results)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row">
    {/* <!-- Left Sidebar Area (Placeholder structure) --> */}

    {/* MOBILE FILTER DRAWER OVERLAY */}
<div 
  className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${isFilterOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
  onClick={() => setIsFilterOpen(false)}
/>

{/* SIDEBAR / DRAWER */}
<aside className={`
  fixed lg:static top-0 left-0 h-full lg:h-auto z-50 lg:z-0
  w-72 lg:w-64 bg-white p-6 shadow-xl lg:shadow-none
  transform transition-transform duration-300 ease-in-out
  ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  overflow-y-auto lg:overflow-visible
`}>
    <div className="flex justify-between items-center lg:hidden mb-6 border-b pb-2">
      <h2 className="text-xl font-bold">FILTERS</h2>
      <button onClick={() => setIsFilterOpen(false)} className="text-2xl">&times;</button>
    </div>

    {/* ... ALL YOUR EXISTING CATEGORIES, PRICE, AND BRAND CODE HERE ... */}
    <h2 className="text-lg font-semibold mb-4 text-gray-800">CATEGORIES</h2>
        <ul className="space-y-3 mb-6">
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Laptops (120)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Smartphones (0)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Cameras (1450)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Accessories (57)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Laptops (100)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Smartphones (740)</label></li>
        </ul>

        <h2 className="text-lg font-semibold mb-4 text-gray-800">PRICE</h2>
        {/* <!-- Price range input area --> */}
        <div className="flex items-center  mb-6">
            <input type="number" value="1.00" className="w-1/2 p-2 border border-gray-300 rounded text-sm" />
            <span>-</span>
            <input type="number" value="999.00" className="w-1/2 p-2 border border-gray-300 rounded text-sm" />
        </div>
        
        <h2 className="text-lg font-semibold mb-4 text-gray-800">BRAND</h2>
        <ul className="space-y-3">
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> SAMSUNG (578)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> LG (126)</label></li>
        </ul>

    <button className="w-full lg:hidden bg-[#D10024] text-white py-3 mt-6 font-bold uppercase rounded">
      Apply Filters
    </button>
</aside>

    {/* <aside className="hidden lg:block w-full lg:w-64 p-6 bg-white shadow-lg h-auto lg:h-screen text-center align-middle justify-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">CATEGORIES</h2>
        <ul className="space-y-3 mb-6">
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Laptops (120)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Smartphones (0)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Cameras (1450)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Accessories (57)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Laptops (100)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> Smartphones (740)</label></li>
        </ul>

        <h2 className="text-lg font-semibold mb-4 text-gray-800">PRICE</h2>
        {/* <!-- Price range input area --> */}
        {/* <div className="flex items-center  mb-6">
            <input type="number" value="1.00" className="w-1/2 p-2 border border-gray-300 rounded text-sm" />
            <span>-</span>
            <input type="number" value="999.00" className="w-1/2 p-2 border border-gray-300 rounded text-sm" />
        </div>
        
        <h2 className="text-lg font-semibold mb-4 text-gray-800">BRAND</h2>
        <ul className="space-y-3">
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> SAMSUNG (578)</label></li>
            <li><label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 text-red-600 rounded mr-2" /> LG (126)</label></li>
        </ul>
    </aside>  */}

    {/* <!-- Main Content Area --> */}
    <main className="flex-1 p-6 bg-gray-50">
        {/* Mobile Toggle Button */}
    <button 
      onClick={() => setIsFilterOpen(true)}
      className="lg:hidden flex items-center gap-2 mb-4 bg-gray-100 px-4 py-2 rounded border border-gray-200 text-sm font-bold uppercase tracking-tight"
    >
      <i className="fa fa-filter"></i> Filter 
    </button>

    {/* ... Your Top Controls (Sort By, etc.) and Product Grid ... */}
        {/* <!-- Top controls/toolbar --> */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
                <label for="sort" className="text-sm font-medium text-gray-700">SORT BY:</label>
                <select id="sort" className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm">
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                </select>
                <label for="show" className="text-sm font-medium text-gray-700">SHOW:</label>
                <select id="show" className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-sm">
                    <option>20</option>
                    <option>40</option>
                    <option>80</option>
                </select>
            </div>
            <div className="flex">
                <button className="p-2 border border-gray-300 rounded text-gray-600 hover:bg-red-500 hover:text-white transition duration-150">
                    {/* <!-- Icon placeholder: List view --> */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 11a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <button className="p-2 border border-gray-300 bg-red-500 text-white rounded">
                    {/* <!-- Icon placeholder: Grid view (active) --> */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2A2 2 0 009 7V5a2 2 0 00-2-2H5zm0 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm11-5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V9zM13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2z"></path></svg>
                </button>
            </div>
        </div>

        {/* <!-- Product Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* <!-- Product Card 1 (Laptop) --> */}
            <div className="group bg-white p-4 rounded shadow-lg transition duration-300 hover:shadow-xl relative flex flex-col items-center">
                <div className="absolute top-0 right-0 m-4 flex">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-30%</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                </div>
                <img src={product1} alt="Product 1" className="mt-8 mb-4 object-contain h-40" />
                <p className="text-xs text-gray-500 uppercase">Category</p>
                <p className="text-sm font-semibold text-gray-800 mb-2">PRODUCT NAME GOES HERE</p>
                <div className="flex items-baseline mb-3">
                    <span className="text-lg font-bold text-red-600">$980.00</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$9990.00</span>
                </div>
                
                {/* <!-- Action area: Stars/Icons (default) vs Add to Cart (hover) --> */}
                <div className="relative w-full text-center h-12 flex items-center justify-center">
                    {/* <!-- Default State (visible) --> */}
                    <div className="absolute transition duration-300 ease-in-out group-hover:opacity-0 group-hover:invisible">
                        {/* <!-- Stars placeholder --> */}
                        <div className="text-yellow-400 mb-1 text-xl">★★★★★</div> 
                        <div className="flex text-gray-400 justify-center">
                            <span>♡</span><span>=</span><span>◎</span>
                        </div>
                    </div>
                    
                    {/* <!-- Hover State (hidden) --> */}
                    <div className="absolute top-0 left-0 w-full transition duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <button className="bg-red-600 text-white px-4 py-2 w-full hover:bg-red-700 transition duration-300 rounded text-sm font-semibold">ADD TO CART</button>
                    </div>
                </div>
            </div>

            {/* <!-- Product Card 2 (Headphones) --> */}
            <div className="group bg-white p-4 rounded shadow-lg transition duration-300 hover:shadow-xl relative flex flex-col items-center">
                <div className="absolute top-0 right-0 m-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                </div>
                <img src="{product1}" alt="Product 2" className="mt-8 mb-4 object-contain h-40" />
                <p className="text-xs text-gray-500 uppercase">Category</p>
                <p className="text-sm font-semibold text-gray-800 mb-2">PRODUCT NAME GOES HERE</p>
                <div className="flex items-baseline mb-3">
                    <span className="text-lg font-bold text-red-600">$980.00</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$9990.00</span>
                </div>
                
                {/* <!-- Action area: Stars/Icons (default) vs Add to Cart (hover) --> */}
                <div className="relative w-full text-center h-12 flex items-center justify-center">
                    {/* <!-- Default State (visible) --> */}
                    <div className="absolute transition duration-300 ease-in-out group-hover:opacity-0 group-hover:invisible">
                        {/* <!-- Stars placeholder --> */}
                        <div className="text-yellow-400 mb-1 text-xl">★★★★☆</div> 
                        <div className="flex  text-gray-400 justify-center">
                            <span>♡</span><span>=</span><span>◎</span>
                        </div>
                    </div>
                    
                    {/* <!-- Hover State (hidden) --> */}
                    <div className="absolute top-0 left-0 w-full transition duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <button className="bg-red-600 text-white px-4 py-2 w-full hover:bg-red-700 transition duration-300 rounded text-sm font-semibold">ADD TO CART</button>
                    </div>
                </div>
            </div>

            {/* <!-- Product Card 3 (Laptop 2) --> */}
            <div className="group bg-white p-4 rounded shadow-lg transition duration-300 hover:shadow-xl relative flex flex-col items-center">
                <img src="{product1}" alt="Product 3" className="mt-8 mb-4 object-contain h-40" />
                <p className="text-xs text-gray-500 uppercase">Category</p>
                <p className="text-sm font-semibold text-gray-800 mb-2">PRODUCT NAME GOES HERE</p>
                <div className="flex items-baseline mb-3">
                    <span className="text-lg font-bold text-red-600">$980.00</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$9990.00</span>
                </div>
                
                {/* <!-- Action area: Stars/Icons (default) vs Add to Cart (hover) --> */}
                <div className="relative w-full text-center h-12 flex items-center justify-center">
                    {/* <!-- Default State (visible) --> */}
                    <div className="absolute transition duration-300 ease-in-out group-hover:opacity-0 group-hover:invisible">
                        {/* <!-- Stars placeholder --> */}
                        <div className="text-yellow-400 mb-1 text-xl">★★★★★</div> 
                        <div className="flex  text-gray-400 justify-center">
                            <span>♡</span><span>=</span><span>◎</span>
                        </div>
                    </div>
                    
                    {/* <!-- Hover State (hidden) --> */}
                    <div className="absolute top-0 left-0 w-full transition duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <button className="bg-red-600 text-white px-4 py-2 w-full hover:bg-red-700 transition duration-300 rounded text-sm font-semibold">ADD TO CART</button>
                    </div>
                </div>
            </div>
            
            {/* <!-- You can add more cards here --> */}

        </div>
    </main>
</div>
    </div>
  )
}

export default Store

