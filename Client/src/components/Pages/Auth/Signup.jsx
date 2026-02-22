import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// 1. Import the hook at the top
import { useAuth } from '@/context/AuthContext';

import { toast } from 'sonner';

const Signup = ({ isOpen, onClose, openLogin }) => {
  // 2. Inside your component
  const { login } = useAuth();
  if (!isOpen) return null;

  // ... inside your component
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', password: '' });

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Clean and Validate Data
  const firstName = formData.first_name.trim();
  const lastName = formData.last_name.trim();
  const email = formData.email.trim();
  const password = formData.password;

  // 2. Manual Validation (Sonner Red Toasts)
  if (!firstName || !lastName) {
    return toast.error("Please enter a valid name (no empty spaces)");
  }
  
  if (!email || !email.includes("@")) {
    return toast.error("Please enter a valid email address");
  }

  if (password.length < 8) {
    return toast.error("Password must be at least 8 characters");
  }
  
  try{
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: 'include' // MUST have this to receive the cookie!
    });
    
    // Check if the response is actually JSON before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      toast.error("Server Issue");
      throw new Error("Server didn't send JSON. Is the backend down?");
    }
    
    const data = await response.json();
    if (response.ok) {
      // localStorage.setItem("token", data.token);
      // It sets the user in AuthContext, which makes the Navbar re-render instantly.
      // 1. Update Global Auth State
      login(data.user);
      // 2. Feedback
      toast.success("Account created successfully.");
      // 3. Close Modal
      onClose();
    } else {
      toast.error(data.message || "Registration failed");
    }
  } catch(error){
    toast.error("Could not connect to the server. Please check your internet connection.");
  }
};

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Fixed w-96 and min-h-[400px] ensures size equality */}
      <div className="bg-white w-96 p-8 rounded-none shadow-2xl relative flex flex-col justify-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">×</button>
        
        <h2 className="text-xl font-light tracking-widest uppercase mb-8 text-center">Register</h2>
        
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input type="text" required name="first_name" onChange={handleChange} placeholder="First Name" className="w-1/2 border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.first_name} />
            <input type="text" required placeholder="Last Name" name="last_name" onChange={handleChange} className="w-1/2 border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.last_name} />
          </div>
          <input type="email" required name="email" onChange={handleChange} placeholder="Email Address" className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.email}/>
          <input type="password" name="password" onChange={handleChange} placeholder="Password" required minLength={8} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.password}/>
          
          <button type="submit" className="bg-black text-white py-3 mt-4 text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors cursor-pointer">
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-[11px] text-gray-500 uppercase tracking-wider">
          Already a member? <span onClick={openLogin} className="text-black cursor-pointer underline underline-offset-4">Sign In</span>
        </p>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Signup;