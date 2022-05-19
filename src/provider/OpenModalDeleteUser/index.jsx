import { createContext, useState, useEffect, useContext } from "react";

const OpenModalDeleteUserContext = createContext();

export const OpenModalDeleteUserProvider = ({ children }) => {
  const [modalDeleteUser, setModalDeleteUser] = useState(false);

  const toggleModalDeleteUser = () => {
    setModalDeleteUser(!modalDeleteUser);
  };

  return (
    <OpenModalDeleteUserContext.Provider
      value={{ modalDeleteUser, toggleModalDeleteUser }}
    >
      {children}
    </OpenModalDeleteUserContext.Provider>
  );
};

export const useOpenModalDeleteUser = () => useContext(OpenModalDeleteUserContext);
