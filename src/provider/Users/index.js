import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const UsersContext = createContext([]);

export const UsersProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    const getUsers = (token) => {
        axios.get('https://bateaqui-api.herokuapp.com/users', {
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