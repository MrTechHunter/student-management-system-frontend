import React, { createContext, ReactNode, useContext, useState } from "react";

import UserDataService from "../services/user.service";

interface AuthContextType {
  isAuthenticated: boolean;
  loginWithPhoneNumber: (phoneNumber: string) => Promise<void>;
  verifySmsCode: (phoneNumber: string, code: string) => Promise<void>;
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
    UserDataService.invite({ username: phoneNumber })
      .then((response) => {
        console.log("invite response", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const verifySmsCode = async (phoneNumber: string, code: string) => {
    // Call SMS Code Verification API
    UserDataService.invite({ username: phoneNumber, code: code })
      .then((response) => {
        console.log("confirm response", response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // Update isAuthenticated
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logout logic and isAuthenticated updation
    setIsAuthenticated(false);
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
