import { createContext, useContext, useState } from "react";
import { timeApi } from "../../services/timeApi";

const HourContext = createContext("");

export const HourProvider = ({ children }) => {
    const [hour, setHour] = useState("");

    const getTime = () => {
        timeApi.get("/").then((res) => {
            const dateHour = res.data.datetime;

            const dateFormat = new Date(dateHour);

            const hour = dateFormat.getHours();
            const minutes = dateFormat.getMinutes();

            const currentTime = `${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}`;

            setHour(currentTime);
        });
    };

    getTime();

    setInterval(getTime, 30000);

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
