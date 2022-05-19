import { createContext, useState, useContext } from "react";

const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    return (
        <SideBarContext.Provider
            value={{
                sideBar,
                toggleSideBar,
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};

export const useSideBar = () => useContext(SideBarContext);
