import React from 'react'

import { createPortal } from 'react-dom';

import { Link } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  
const { cart, removeFromCart, updateQuantity } = useAuth();

// Calculate Subtotal
const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  return createPortal( 
    
      <>
      {/* 1. DARK OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsCartOpen(false)}
      />

      {/* 2. CART SIDEBAR */}
      <aside className={`
        fixed top-0 right-0 h-full w-full lg:w-100 sm:w-/[400px] bg-white z-/[9998] shadow-2xl
        transform transition-transform duration-300 z-/[9998] ease-in-out flex flex-col
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        
        {/* HEADER */}
        <div className="p-6 z-/[9998] border-b flex justify-between items-center bg-gray-50">
          <h3 className="text-xl font-bold uppercase tracking-tight">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} className="text-3xl hover:text-red-600 transition-colors cursor-pointer">&times;</button>
        </div>

        {/* PRODUCT LIST (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 z-/[9998]">
          <div className="flex justify-between font-bold text-xs uppercase tracking-widest border-b pb-2 text-gray-400">
            <span>Product</span>
            <span>Total</span>
          </div>

          {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
  <div key={item._id} className="group border-b border-gray-100 py-4 last:border-0">
    {/* Main Row: Three Columns */}
    <div className="flex items-center justify-between gap-4">
      
      {/* 1. Left: Remove Button + Product Name */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button 
          onClick={() => removeFromCart(item._id)}
          className="text-gray-300 hover:text-red-600 transition-colors text-lg shrink-0"
        >
          ×
        </button>
        <div className="min-w-0">
           <p className="text-sm font-bold text-gray-800 truncate">{item.name}</p>
           <p className="text-[10px] text-gray-400">Rs.{item.price.toLocaleString()} each</p>
        </div>
      </div>

      {/* 2. Center: Plus/Minus Controls */}
      <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2 shrink-0">
        <button 
          onClick={() => updateQuantity(item._id, -1)}
          className="text-gray-500 hover:text-[#D10024] font-bold w-4 transition-colors"
        >
          −
        </button>
        <span className="text-xs font-bold w-4 text-center select-none">
          {item.quantity}
        </span>
        <button 
          onClick={() => updateQuantity(item._id, 1)}
          className="text-gray-500 hover:text-[#D10024] font-bold w-4 transition-colors"
        >
          +
        </button>
      </div>

      {/* 3. Right: Subtotal for this item */}
      <div className="shrink-0 text-right min-w-[80px]">
        <span className="font-bold text-sm text-gray-900">
          Rs.{(item.price * item.quantity).toLocaleString()}
        </span>
      </div>
    </div>
  </div>
))
          
        )}
    
        </div>

        {/* SUMMARY & CHECKOUT (Fixed at Bottom) */}
        <div className="p-6 border-t bg-gray-50 space-y-4 z-/[9998]">
          <div className="flex justify-between text-sm py-1">
            <span className="text-gray-500 uppercase font-bold">Shipping</span>
            <span className="font-bold text-red-600">FREE</span>
          </div>
          <div className="flex justify-between text-xl font-bold py-2 border-t border-gray-200">
            <span className="uppercase">Total</span>
            <span className="text-red-600">${subtotal.toFixed(2)}</span>
          </div>

            
          <Link 
  to="/checkout" 
  onClick={() => setIsCartOpen(false)}
  className="
    flex items-center justify-center w-full 
    
    /* 2. Sizing: Add consistent padding */
    py-4 px-6 
    
    /* 3. Style: Colors and Borders */
    bg-[#D10024] text-white rounded-sm
    
    /* 4. Typography: Bold, uppercase, spaced out */
    font-bold text-sm uppercase tracking-widest
    
    /* 5. Interactivity: The hover effect */
    hover:bg-black transition-all duration-300 ease-in-out
    
    cursor-pointer relative z-10
  "
>
  Go to Checkout
</Link>
          
          <button 
            onClick={() => setIsCartOpen(false)}
            className="w-full text-center text-xs text-gray-400 uppercase font-bold tracking-widest hover:text-red-600 transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>,
      document.getElementById('portal-root') 
  )
}
export default Cart
