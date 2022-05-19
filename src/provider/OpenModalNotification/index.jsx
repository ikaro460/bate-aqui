import { useState, useContext, createContext } from "react";


const OpenModalNotificationContext = createContext()

export const OpenModalNotificationProvider = ({children}) => {

    const [modalNotification, setModalNotification] = useState(false);

    const toggleModalNotification = () => {
        setModalNotification(!modalNotification)
    }

    return(
        <OpenModalNotificationContext.Provider value={{modalNotification, toggleModalNotification}}>
            {children}
        </OpenModalNotificationContext.Provider>
    )
}

export const useOpenModalNotification = () => useContext(OpenModalNotificationContext)