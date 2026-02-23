import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

import { toast } from 'sonner';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🚀 ADD THIS: Global Modal State
  // Possible values: null, 'login', 'signup'
  const [authModalType, setAuthModalType] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openLogin = () => setAuthModalType('login');
  const openSignup = () => setAuthModalType('signup');
  const closeAuth = () => setAuthModalType(null);
  
  // Auto-verify user on page refresh
  useEffect(() => {
    const initAuth = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const res = await fetch(`${API_URL}/api/me`, { 
      method: "GET",
      credentials: "include" 
    });

    // 1. SILENTLY handle guests
    if (res.status === 401) {
      setUser(null);
      setIsLoggedIn(false);
      setLoading(false);
      return; // Exit here! No error, no alert.
    }

    // 2. If it's another error (500, 404), throw to the catch block
    if (!res.ok) {
      throw new Error("Server issue");
    }

    // 3. If successful
    const data = await res.json();
    setUser(data.user);
    setIsLoggedIn(true);

  } catch (err) {
    // 4. This ONLY triggers if the server is actually down
    console.warn("User is not logged in or server is unreachable");
  } finally {
    setLoading(false);
  }
};
  
  initAuth();
}, []);

  const login = (userData) => {
    // localStorage.setItem("token", token);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    await fetch(`${API_URL}/logout`, { method: "POST", credentials: "include" });
    
    // Clear state locally WITHOUT a hard page reload first
    setUser(null);
    setIsLoggedIn(false);
    
    toast.success("Logged out");
    
    // Use a slight delay or just navigate if using React Router
    // window.location.href = "/"; 
  } catch (error) {
    console.error("Logout failed", error);
  }
};

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, openLogin, openSignup, closeAuth, authModalType, isCartOpen, toggleCart, openCart, closeCart }}>
      {/* 3. We show children even if loading to prevent 'white screen' on slow connections */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);