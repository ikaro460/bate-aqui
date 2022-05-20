import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";

const GroupUsersContext = createContext([]);

export const GroupUsersProvider = ({ children }) => {
  const [groupUsers, setGroupUsers] = useState([]);

  const getGroupUsers = (token, groupsId) => {
    api
      .get(`/coach?groupsId=${groupsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const coachs = res.data;
        const coachsFilter = coachs.filter(
          (coach) => coach.status_ativo === 1 && coach.status_aceito === 1
        );
        setGroupUsers(coachsFilter);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupUsersContext.Provider
      value={{ groupUsers, setGroupUsers, getGroupUsers }}
    >
      {children}
    </GroupUsersContext.Provider>
  );
};

export const useGroupUsers = () => useContext(GroupUsersContext);
