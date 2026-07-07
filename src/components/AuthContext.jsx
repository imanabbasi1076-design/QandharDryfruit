import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAdmin, setAdmin] = useState(false);
  function login() {
    setAdmin(true);
  }
  function logout() {
    setAdmin(false);
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
