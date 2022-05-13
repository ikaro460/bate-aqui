import axios from "axios"

export const api = axios.create({
    baseURL: 'https://bateaqui-api.herokuapp.com',
})