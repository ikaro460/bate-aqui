import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

const UsersContext = createContext([]);

export const UsersProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    const getUsers = (token) => {
        api.get('/users', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
            
        }).then((response) => setUsers(response.data)).catch((error) => console.log(error))    
    }
    
    return (
        <UsersContext.Provider value={{users, setUsers, getUsers}}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext)