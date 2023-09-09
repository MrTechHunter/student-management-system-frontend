import React, { createContext, ReactNode, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import ErrorSnackbar from "../components/ErrorSnackbar";
import AuthDataService from "../services/auth.service";

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  isAuthenticated: boolean;
  userProfile: any;
  loginWithPhoneNumber: (phoneNumber: string) => Promise<void>;
  confirmSmsCode: (phoneNumber: string, code: string) => Promise<any>;
  logout: () => void;
  errorMessage: string;
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const loginWithPhoneNumber = async (phoneNumber: string) => {
    // Send SMS API Call By Phone Number
    try {
      await AuthDataService.invite({ username: phoneNumber });
      // If the SMS is sent successfully, update state or redirect
    } catch (error: any) {
      if (error.response) {
        const responseData = error?.response?.data?.data.message;
        setErrorMessage(responseData || "");
        console.log(error);
      }
      console.log(error);
    }
  };

  const confirmSmsCode = async (phoneNumber: string, code: string) => {
    // Call SMS Code Verification API By Phone Number and Code
    try {
      const requestBody = { username: phoneNumber, code: code };
      const response = await AuthDataService.confirm(requestBody);

      if (response?.data?.status === "success") {
        // If verification is successful, set isAuthenticated to true
        setIsAuthenticated(true);
        setUserProfile(response?.data?.data?.profile);
        navigate("/");
      }

      // Extract and store the user profile data from the response
    } catch (error: any) {
      if (error.response) {
        const responseData = error?.response?.data?.data.message;
        setErrorMessage(responseData || "");
        console.log(error);
      }
      console.log(error);
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
        errorMessage,
      }}
    >
      {children}
      {errorMessage && (
        <ErrorSnackbar
          errorMessage={errorMessage}
          onClose={() => setErrorMessage("")}
        />
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
