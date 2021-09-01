import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8080/api/clientinfo";


class ClientService {
    getClients() {
        return axios.get(CLIENTS_API_BASE_URL);
    }
    createClient(client) {
        return axios.post(CLIENTS_API_BASE_URL, client)
    }
}

export default new ClientService()