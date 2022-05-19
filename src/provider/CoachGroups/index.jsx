import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../../services/api";

const CoachGroupsContext = createContext([]);

export const CoachGroupsProvider = ({ children }) => {
    const [coachGroups, setCoachGroups] = useState([]);

    const [coachsToSeparate, setCoachsToSeparate] = useState([]);

    const [notify, setNotify] = useState([]);

    const [verifyNotify, setVerifyNotify] = useState(false);

    const getCoachGroups = (token, id) => {
        api.get(`/users/${id}/?_embed=coach`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setCoachsToSeparate(response.data.coach);
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
                return each.status_aceito === 1 && each.status_ativo === 1;
            })
        );
    }, [coachsToSeparate]);

    return (
        <CoachGroupsContext.Provider
            value={{
                coachGroups,
                setCoachGroups,
                getCoachGroups,
                notify,
                setNotify,
                verifyNotify,
                setVerifyNotify,
            }}
        >
            {children}
        </CoachGroupsContext.Provider>
    );
};

export const useCoachGroups = () => useContext(CoachGroupsContext);
