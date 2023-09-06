import React, { createContext, ReactNode, useContext, useState } from "react";

import { Navigate } from "react-router-dom";

import AuthDataService from "../services/auth.service";

interface AuthContextType {
  isAuthenticated: boolean;
  userProfile: any;
  loginWithPhoneNumber: (phoneNumber: string) => Promise<void>;
  confirmSmsCode: (phoneNumber: string, code: string) => Promise<any>;
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
  const [userProfile, setUserProfile] = useState<any>(null);

  const loginWithPhoneNumber = async (phoneNumber: string) => {
    // Send SMS API Call By Phone Number
    try {
      await AuthDataService.invite({ username: phoneNumber });
      // If the SMS is sent successfully, update state or redirect
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., show a message to the user)
    }
  };

  const confirmSmsCode = async (phoneNumber: string, code: string) => {
    // Call SMS Code Verification API By Phone Number and Code

    try {
      const requestBody = { username: phoneNumber, code: code };
      const response = await AuthDataService.confirm(requestBody);
      // If verification is successful, set isAuthenticated to true

      if (response?.data?.status === "success") {
        setIsAuthenticated(true);
        setUserProfile(response?.data?.data?.profile);

        return <Navigate to="/" />;
      }

      // Extract and store the user profile data from the response
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., show a message to the user)
    }
  };

  const logout = () => {
    // Logout logic and isAuthenticated updation
    setIsAuthenticated(false);
    // Clear the user profile data
    setUserProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userProfile,
        loginWithPhoneNumber,
        confirmSmsCode,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
