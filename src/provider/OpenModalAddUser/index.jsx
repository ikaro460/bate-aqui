import { createContext, useState, useEffect, useContext } from "react";

const OpenModalAddUserContext = createContext();

export const OpenModalAddUserProvider = ({ children }) => {
  const [modalAddUser, setModalAddUser] = useState(false);

  const toggleModalAddUser = () => {
    setModalAddUser(!modalAddUser);
  };

  return (
    <OpenModalAddUserContext.Provider
      value={{ modalAddUser, toggleModalAddUser }}
    >
      {children}
    </OpenModalAddUserContext.Provider>
  );
};

export const useOpenModalAddUser = () => useContext(OpenModalAddUserContext);
