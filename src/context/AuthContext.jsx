import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user state from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Save to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}