import React from 'react'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  return createPortal( 
    
      <>
      {/* 1. DARK OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsCartOpen(false)}
      />

      {/* 2. CART SIDEBAR */}
      <aside className={`
        fixed top-0 right-0 h-full w-full lg:w-96 sm:w-/[400px] bg-white z-/[9998] shadow-2xl
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

          {/* ITEM 1 */}
          <div className="flex justify-between items-center group">
             <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-red-600">×</button>
                <div className="text-sm font-medium">
                  <p className="text-gray-800">1x Product Name Goes Here</p>
                  <p className="text-xs text-gray-400">$980.00 each</p>
                </div>
             </div>
             <span className="font-bold text-sm">$980.00</span>
          </div>

          {/* ITEM 2 */}
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-red-600">×</button>
                <div className="text-sm font-medium">
                  <p className="text-gray-800">2x Product Name Goes Here</p>
                  <p className="text-xs text-gray-400">$980.00 each</p>
                </div>
             </div>
             <span className="font-bold text-sm">$1960.00</span>
          </div>
        </div>

        {/* SUMMARY & CHECKOUT (Fixed at Bottom) */}
        <div className="p-6 border-t bg-gray-50 space-y-4 z-/[9998]">
          <div className="flex justify-between text-sm py-1">
            <span className="text-gray-500 uppercase font-bold">Shipping</span>
            <span className="font-bold text-red-600">FREE</span>
          </div>
          <div className="flex justify-between text-xl font-bold py-2 border-t border-gray-200">
            <span className="uppercase">Total</span>
            <span className="text-red-600">$2940.00</span>
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
