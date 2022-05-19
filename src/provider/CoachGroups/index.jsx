import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const CoachGroupsContext = createContext([]);

export const CoachGroupsProvider = ({ children }) => {

    const [coachGroups, setCoachGroups] = useState([]);

    const [coachsToSeparate, setCoachsToSeparate] = useState([])

    const [notify, setNotify] = useState([]);

    const getCoachGroups = (token, id) => {
        api.get(`/users/${id}/?_embed=coach`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setCoachsToSeparate(response.data.coach);
                console.log(coachGroups);
            })

            .catch((error) => console.log(error));
    };

    useEffect(() => {
        setNotify(
            coachsToSeparate.filter((each) => {
                return each.status_aceito === 0;
            })
        );
        setCoachGroups( 
            coachsToSeparate.filter((each) => {
                return each.status_aceito === 1 && each.ativo === 1;
            })
        )
    }, [coachsToSeparate]);

    return (
        <CoachGroupsContext.Provider
            value={{
                coachGroups,
                setCoachGroups,
                getCoachGroups,
                notify,
                setNotify,
            }}
        >
            {children}{" "}
        </CoachGroupsContext.Provider>
    );
};

export const useCoachGroups = () => useContext(CoachGroupsContext);
