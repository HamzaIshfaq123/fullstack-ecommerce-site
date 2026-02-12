import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto-verify user on page refresh
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      
      // 1. If no token, just stop loading and stay as 'guest'
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const res = await fetch(`${API_URL}/api/me`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          // 2. Token is invalid? Just clear local state, don't force a redirect yet
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (err) {
        console.error("Auth verify failed:", err);
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    // Use window.location only if you REALLY want a hard reset, 
    // otherwise just let React handle the UI change.
    window.location.href = "/"; 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {/* 3. We show children even if loading to prevent 'white screen' on slow connections */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);