import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import moment from "moment";
import { ToastSuccess } from "../../components/Toasts/Index";

const CheckinContext = createContext();

export const CheckinProvider = ({ children }) => {
    const Checkin = (group, hour) => {
        const { userId, name, surname, groupsId, coachId, id } = group;

        const data = new Date();

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();
        const dataAtual = dia + "/" + mes + "/" + ano;

        api.post(
            `/checkin`,
            {
                userId: userId,
                name: name,
                surname: surname,
                groupsId: groupsId,
                coachId: id,
                type: "checkin",
                date: dataAtual,
                hour: hour,
                students: "-",
                works: "-",
                problems: "-",
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
        )
            .then((res) => {
                return ToastSuccess("Check-in feito com sucesso!!!");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return <CheckinContext.Provider value={{ Checkin }}>{children}</CheckinContext.Provider>;
};

export const useCheckin = () => useContext(CheckinContext);
