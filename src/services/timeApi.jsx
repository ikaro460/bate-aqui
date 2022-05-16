import axios from "axios";

export const timeApi = axios.create({
    baseURL: "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
});
