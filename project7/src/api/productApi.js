import axios from 'axios';
let baseUrl = import.meta.env.VITE_BASE_URL;

export let fetchProducts = async () => {
    let result = await axios.get(`${baseUrl}/api/product`);
    return result.data;
}