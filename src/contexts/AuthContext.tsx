import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  loginWithPhoneNumber: (phoneNumber: string) => Promise<void>;
  verifySmsCode: (code: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginWithPhoneNumber = async (phoneNumber: string) => {
    // Send SMS API Call
    // Update isAuthenticated
  };

  const verifySmsCode = async (code: string) => {
    // Call SMS Code Verification API
    // Update isAuthenticated
  };

  const logout = () => {
    // Logout logic and isAuthenticated updation
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginWithPhoneNumber, verifySmsCode, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
