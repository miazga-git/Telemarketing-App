import axios from 'axios';

const PRODUCTS_API_BASE_URL = "http://localhost:8080/api/items";

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error)
    })


class ProductService {
    getProducts() {
        return axios.get(PRODUCTS_API_BASE_URL);
    }
    getProduct(id) {
        return axios.get(PRODUCTS_API_BASE_URL + '/' + id);
    }
    createProduct(item) {
        return axios.post(PRODUCTS_API_BASE_URL, item)
    }
}

export default new ProductService()