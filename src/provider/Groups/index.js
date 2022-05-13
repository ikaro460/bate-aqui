import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

const GroupsContext = createContext([]);

export const GroupsProvider = ({children}) => {

    const [groups, setGroups] = useState([]);

    const getGroups = (token) => {
        api.get('/groups_admin', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
            
        }).then((response) => setGroups(response.data)).catch((error) => console.log(error))    
    }
    
    return (
        <GroupsContext.Provider value={{groups, setGroups, getGroups}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext)