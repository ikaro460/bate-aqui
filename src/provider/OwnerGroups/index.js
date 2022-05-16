import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

const OwnerGroupsContext = createContext([]);

export const OwnerGroupsProvider = ({children}) => {

    const [OwnerGroups, setOwnerGroups] = useState([]);

    const getOwnerGroups = (token, id) => {
        api.get(`/users/${id}/?_embed=groups`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }            
        }).then((response) => setOwnerGroups(response.data)).catch((error) => console.log(error))    
    }
    
    return (
        <OwnerGroupsContext.Provider value={{OwnerGroups, setOwnerGroups, getOwnerGroups}}>
            {children}
        </OwnerGroupsContext.Provider>
    )
}

export const useOwnerGroups = () => useContext(OwnerGroupsContext)