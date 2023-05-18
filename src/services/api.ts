import axios from "axios";

// URL Base: https://api.themoviedb.org/3/
//movie/now_playing?api_key=3c8b27ece8b6d0e93b646bb0ba6bfb75&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;