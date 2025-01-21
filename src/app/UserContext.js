"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([
    {
      name: "Nimfa",
      surname: "March",
      key: 1,
    },
    {
      name: "Dafne",
      surname: "Montefusco",
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
