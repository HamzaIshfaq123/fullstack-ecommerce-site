import React from 'react';
import { createPortal } from 'react-dom';

const Login = ({ isOpen, onClose, openSignup }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Same w-96 and spacing as Signup.jsx */}
      <div className="bg-white w-96 p-8 rounded-none shadow-2xl relative flex flex-col justify-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">×</button>
        
        <h2 className="text-xl font-light tracking-widest uppercase mb-8 text-center">Login</h2>
        
        <form className="flex flex-col gap-5">
          <input type="email" placeholder="Email Address" className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" />
          <input type="password" placeholder="Password" className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" />
          
          <button className="bg-black text-white py-3 mt-4 text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-[11px] text-gray-500 uppercase tracking-wider">
          New Customer? <span onClick={openSignup} className="text-black cursor-pointer underline underline-offset-4">Create Account</span>
        </p>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Login;