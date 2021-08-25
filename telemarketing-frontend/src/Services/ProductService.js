import axios from 'axios';

const PRODUCTS_API_BASE_URL = "http://localhost:8080/api/iteminfo";

class ProductService {
    getProducts() {
        return axios.get(PRODUCTS_API_BASE_URL);
    }
}

export default new ProductService()