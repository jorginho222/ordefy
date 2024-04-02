import axios from "axios";
import { HOST } from "../config";
export default {
    async getOrders() {
        return await axios.get('');
    },
    async fetchLastOrder(table) {
        return await axios.get(HOST + '/orders/last/' + table);
    },
    async saveOrder(orderDto) {
        return await axios.post(HOST + '/orders', orderDto);
    }
};
