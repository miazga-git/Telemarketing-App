import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8080/api/clients";

console.log(localStorage.getItem('token'))
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error)
    })

class ClientService {
    getClients() {
        return axios.get(CLIENTS_API_BASE_URL);
    }
    getClient(id) {
        return axios.get(CLIENTS_API_BASE_URL + '/' + id);
    }
    createClient(client) {
        return axios.post(CLIENTS_API_BASE_URL, client)
    }
}

export default new ClientService()