"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([
    {
      name: "Nimfa",
      email: "March",
      password: "12345",
      key: 1,
    },
    {
      name: "Dafne",
      email: "Montefusco",
      password: "678910",
      key: 2,
    },
  ]);

  const getUsersList = () => usersList;

  return (
    <UserContext.Provider value={{ usersList, setUsersList, getUsersList }}>
      {children}
    </UserContext.Provider>
  );
};
