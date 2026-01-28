import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
      {/* <!-- BREADCRUMB --> */}
<nav className="bg-gray-100 border-b border-gray-200 py-6" aria-label="Breadcrumb">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Checkout</h3>
    <ul className="flex items-center space-x-2 text-sm mt-2 text-gray-500">
      <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
      <li><span className="mx-2">/</span></li>
      <li className="text-red-600 font-medium">Checkout</li>
    </ul>
  </div>
</nav>

{/* <!-- MAIN SECTION --> */}
<div className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* <!-- LEFT COLUMN: BILLING & SHIPPING --> */}
      <div className="lg:col-span-7 space-y-10">
        
        {/* <!-- Billing Details --> */}
        <section className="billing-details">
          <div className="border-b-2 border-gray-100 pb-4 mb-6">
            <h3 className="text-xl font-bold uppercase">Billing address</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="text" name="first-name" placeholder="First Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="text" name="last-name" placeholder="Last Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none md:col-span-2" type="email" name="email" placeholder="Email"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none md:col-span-2" type="text" name="address" placeholder="Address"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="text" name="city" placeholder="City"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="text" name="country" placeholder="Country"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="text" name="zip-code" placeholder="ZIP Code"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" type="tel" name="tel" placeholder="Telephone"/>
          </div>

          <div className="mt-6">
            <label className="inline-flex items-center cursor-pointer group">
              <input type="checkbox" id="create-account" className="peer hidden"/>
              <span className="w-5 h-5 border-2 border-gray-300 flex items-center justify-center peer-checked:bg-red-600 peer-checked:border-red-600 transition">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
              </span>
              <span className="ml-2 text-sm font-bold uppercase group-hover:text-red-600 transition">Create Account?</span>
            </label>
            <div className="hidden peer-checked:block mt-4 p-4 bg-gray-50 border border-gray-200 animate-fadeIn">
              <p className="text-sm text-gray-600 mb-4">Please provide a password to secure your new account.</p>
              <input className="w-full px-4 py-3 border border-gray-300 rounded bg-white" type="password" name="password" placeholder="Enter Your Password"/>
            </div>
          </div>
        </section>

        {/* <!-- Shipping Details --> */}
        <section className="shipping-details">
          <label className="inline-flex items-center cursor-pointer group mb-6">
            <input type="checkbox" id="shipping-address" className="peer hidden"/>
            <span className="w-5 h-5 border-2 border-gray-300 flex items-center justify-center peer-checked:bg-red-600 peer-checked:border-red-600 transition">
              <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
            </span>
            <span className="ml-2 text-xl font-bold uppercase group-hover:text-red-600 transition">Ship to a different address?</span>
          </label>
          
          <div className="hidden peer-checked:grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="First Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="Last Name"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded md:col-span-2" type="email" placeholder="Email"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded md:col-span-2" type="text" placeholder="Address"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="City"/>
            <input className="w-full px-4 py-3 border border-gray-300 rounded" type="text" placeholder="Country"/>
          </div>
        </section>

        <textarea className="w-full px-4 py-3 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Order Notes"></textarea>
      </div>

      {/* <!-- RIGHT COLUMN: ORDER SUMMARY --> */}
      <div className="lg:col-span-5">
        <div className="border-2 border-gray-100 p-6 rounded-lg sticky top-6">
          <h3 className="text-xl font-bold uppercase text-center mb-8">Your Order</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between font-bold text-sm uppercase tracking-widest border-b pb-2">
              <span>Product</span>
              <span>Total</span>
            </div>
            {/* <!-- Dynamic Items --> */}
            <div className="flex justify-between text-gray-600 text-sm">
              <span>1x Product Name Goes Here</span>
              <span className="font-medium">$980.00</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm border-b pb-4">
              <span>2x Product Name Goes Here</span>
              <span className="font-medium">$1960.00</span>
            </div>
            
            <div className="flex justify-between text-sm py-2">
              <span>Shipping</span>
              <span className="font-bold text-red-600">FREE</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t-2 border-gray-100">
              <span>TOTAL</span>
              <span className="text-red-600">$2940.00</span>
            </div>
          </div>

          {/* <!-- Payment Methods --> */}
          <div className="space-y-4 mb-6">
            <label className="block cursor-pointer">
              <input type="radio" name="payment" className="peer hidden" />
              <div className="flex items-center text-sm font-bold uppercase peer-checked:text-red-600">
                <span className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2 flex items-center justify-center peer-checked:border-red-600 after:content-[''] after:w-2 after:h-2 after:bg-red-600 after:rounded-full after:hidden peer-checked:after:block"></span>
                Direct Bank Transfer
              </div>
              <p className="hidden peer-checked:block text-xs text-gray-500 mt-2 ml-6">Transfer funds directly to our bank account.</p>
            </label>
            {/* <!-- Add more payment options here following the same structure --> */}
          </div>

          <label className="flex items-start mb-6 cursor-pointer">
            <input type="checkbox" id="terms" className="mt-1"/>
            <span className="ml-2 text-xs text-gray-600 italic">I've read and accept the <a href="#" className="text-red-600 underline">terms & conditions</a></span>
          </label>

          <button className="w-full bg-red-600 text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-black transition-colors duration-300">
            Place Order
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Checkout
