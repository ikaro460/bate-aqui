import { createContext, useState, useContext } from "react";

const OpenModalCreateGroupContext = createContext();

export const OpenModalCreateGroupProvider = ({ children }) => {
    const [modalCreateGroup, setModalCreateGroup] = useState(false);

    const toggleModalCreateGroup = () => {
        setModalCreateGroup(!modalCreateGroup);
    };

    return (
        <OpenModalCreateGroupContext.Provider value={{ modalCreateGroup, toggleModalCreateGroup }}>
            {children}
        </OpenModalCreateGroupContext.Provider>
    );
};

export const useOpenModalCreateGroup = () => useContext(OpenModalCreateGroupContext);
