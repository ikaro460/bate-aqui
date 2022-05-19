import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";
import { timeApi } from "../../services/timeApi";

const HourContext = createContext("");

export const HourProvider = ({ children }) => {
    const [hour, setHour] = useState("");

    // const getTime = () => {
    //     timeApi.get("/").then((res) => {
    //         const dateHour = res.data.datetime;
    //         const dateFormat = new Date(dateHour);
    //         const hour = dateFormat.getHours();
    //         const minutes = dateFormat.getMinutes();
    //         const currentTime = `${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}`;
    //         setHour(currentTime);
    //     });
    // };

    // getTime();

    // setInterval(getTime, 30000);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const nowDate = now._d;
            const hour = nowDate.getHours();
            const minutes = nowDate.getMinutes();
            const currentTime = `${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}`;
            setHour(currentTime);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HourContext.Provider
            value={{
                hour,
            }}
        >
            {children}
        </HourContext.Provider>
    );
};

export const useHour = () => useContext(HourContext);
