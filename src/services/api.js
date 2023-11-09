import axios from "axios"

//53437400/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;