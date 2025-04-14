import axios from "axios";

// Cria uma instância do axios com a base da API
const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export default api;