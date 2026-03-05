import React, { createContext, useContext, useState } from "react";
import movieApi from "../api/movieAPI";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await movieApi.get(
        `/accounts?username=${username}&password=${password}`
      );

      if (res.data.length > 0) {
        setUser(res.data[0]);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};