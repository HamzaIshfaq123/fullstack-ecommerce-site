import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Signup = ({ isOpen, onClose, openLogin }) => {
  if (!isOpen) return null;

  // ... inside your component
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', password: '' });

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try{
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
    // Check if the response is actually JSON before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server didn't send JSON. Is the backend down?");
    }
    
    const data = await response.json();
    if (response.ok) {
      // create notification here in future
      alert("Account Created Successfully!");
      localStorage.setItem("token", data.token);
      onClose();
    } else {
      alert(data.message || "Registration failed");
    }
  } catch(error){
    console.error("Network Error:", error);
    alert("Could not connect to the server. Please check your internet.");
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
            <input type="text" name="first_name" onChange={handleChange} placeholder="First Name" className="w-1/2 border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.first_name} />
            <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} className="w-1/2 border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.last_name} />
          </div>
          <input type="email" name="email" onChange={handleChange} placeholder="Email Address" className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.email}/>
          <input type="password" name="password" onChange={handleChange} placeholder="Password" className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" value={formData.password}/>
          
          <button type='submit' className="bg-black text-white py-3 mt-4 text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors">
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