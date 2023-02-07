import axios from 'axios';

const TRANSACTIONS_API_BASE_URL = "http://localhost:8080/api/transactions";

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
    getNotPlannedTransactions() {
        return axios.get(TRANSACTIONS_API_BASE_URL+ '/notPlanned');
    }
    getPlannedTransactions() {
        return axios.get(TRANSACTIONS_API_BASE_URL + '/planned');
    }
    getStatistics() {
        return axios.get(TRANSACTIONS_API_BASE_URL+ '/statistics');
    }
    getStatisticsPerItems() {
        return axios.get(TRANSACTIONS_API_BASE_URL + '/statistics/perItems');
    }
    getThreeItemsWithBiggestSupport(itemAid) {
        return axios.get(TRANSACTIONS_API_BASE_URL + '/supportItems/' + itemAid);
    }
    deleteTransaction(transactionId) {
        return axios.delete(TRANSACTIONS_API_BASE_URL + '/' + transactionId);
    }
}

export default new ProductService()