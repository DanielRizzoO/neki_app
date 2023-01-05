import axios from "axios";

export const api = axios.create({
    baseURL: 'http://107.178.219.190:8080/',//Endereço IPV4 ou Ngrok
    headers: {
        "Content-Type": "application/json",
    },
});

export const createSession = async (username, password) => {
    return api.post("/login", {username, password})
}