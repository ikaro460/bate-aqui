import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

const CoachGroupsContext = createContext([]);

export const CoachGroupsProvider = ({children}) => {

    const [coachGroups, setCoachGroups] = useState([]);

    const [notify, setNotify] = useState([]);

    const getCoachGroups = (token, id) => {
        api.get(`/users/${id}/?_embed=coach`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }            
        }).then((response) => setCoachGroups([...response.data.coach])).catch((error) => console.log(error))
        
        
    }
    
    return (
        <CoachGroupsContext.Provider value={{coachGroups, setCoachGroups, getCoachGroups, notify, setNotify}}>
            {children}
        </CoachGroupsContext.Provider>
    )
}

export const useCoachGroups = () => useContext(CoachGroupsContext)