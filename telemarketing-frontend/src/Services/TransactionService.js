import axios from 'axios';

const TRANSACTIONS_API_BASE_URL = "http://localhost:8080/api/transactions";

console.log(localStorage.getItem('token'))
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error)
    })


class ProductService {

    createTransaction(transaction) {
        return axios.post(TRANSACTIONS_API_BASE_URL, transaction)
    }
    getTransactions() {
        return axios.get(TRANSACTIONS_API_BASE_URL);
    }
    getStatistics() {
        return axios.get(TRANSACTIONS_API_BASE_URL+ '/statistics');
    }
    getStatisticsPerItems() {
        return axios.get(TRANSACTIONS_API_BASE_URL + '/statistics/perItems');
    }
}

export default new ProductService()