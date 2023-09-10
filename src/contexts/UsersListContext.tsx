import React, { createContext, ReactNode, useContext, useState } from "react";

import axios from "axios";

import ErrorSnackbar from "../components/ErrorSnackbar";
import { useAuth } from "./AuthContext";

type Props = {
  children?: ReactNode;
};

type IUsersListContext = {
  fetchUsersList: () => Promise<any>;
  usersListData: any;
  errorMessage: string;
};

const UsersListContext = createContext<IUsersListContext | undefined>(
  undefined
);

export function useUsersList() {
  const context = useContext(UsersListContext);
  if (!context) {
    throw new Error("useUsersList must be used within an UsersListProvider");
  }
  return context;
}

const UsersListProvider: React.FC<Props> = ({ children }) => {
  const { token } = useAuth();

  const [usersListData, setUsersListData] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchUsersList = async () => {
    try {
      if (token) {
        const response = await axios.get(
          "https://core.brookliapp.com/api/v1/coach-panel/panel",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const transformedData = response?.data?.data?.map((item: any) => ({
          name: item.user.name,
          start_date: item.user.diet.start_date,
          gender: item.user.gender,
          birth_year: item.user.birth_year,
          status: item.order_status,
        }));

        console.log("response", response?.data?.data);
        setUsersListData(transformedData);
      }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  return (
    <UsersListContext.Provider
      value={{
        usersListData,
        fetchUsersList,
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
    </UsersListContext.Provider>
  );
};

export default UsersListProvider;
