import React, {useState} from 'react';
import { createPortal } from 'react-dom';

// 1. Import the hook at the top
import { useAuth } from '../../../context/AuthContext';

import { toast } from 'sonner';


const Login = ({ isOpen, onClose, openSignup }) => {
  // 2. Inside your component
  const { login } = useAuth();
  if (!isOpen) return null;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log(data.token);
        localStorage.setItem("token", data.token); // Store the "Passport"
        // alert("Login Successful!");
        toast.success("Login Successful! Welcome back.");
        
        onClose();
        // It sets the user in AuthContext, which makes the Navbar re-render instantly.
        login(data.user, data.token);
        // return toast("Wow so easy!");
        // window.location.reload(); // Optional: Refresh to update UI (like Navbar)
      } else {
        // alert(data.message || "Invalid Credentials");
        toast.error("Invalid email or password. Please try again");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Same w-96 and spacing as Signup.jsx */}
      <div className="bg-white w-96 p-8 rounded-none shadow-2xl relative flex flex-col justify-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">×</button>
        
        <h2 className="text-xl font-light tracking-widest uppercase mb-8 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} className="border-b border-gray-300 py-2 focus:border-black outline-none transition-all text-sm" />
          
          <button disabled={loading} className="bg-black text-white py-3 mt-4 text-xs tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors cursor-pointer">
            {loading ? "Verifying..." : "Sign In"}
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