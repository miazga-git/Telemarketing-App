import axios from 'axios';

const PRODUCTS_API_BASE_URL = "http://localhost:8080/api/iteminfo";


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