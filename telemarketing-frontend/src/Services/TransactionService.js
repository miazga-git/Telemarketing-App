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
}

export default new ProductService()