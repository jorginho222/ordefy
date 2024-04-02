import axios from "axios";
import {OrderDto} from "../interfaces/dtos/OrderDto";
import {HOST} from "../config";
export default {
  async getOrders() {
    return await axios.get('')
  },
  async getLastOrder() {
    return await axios.get(HOST + '/orders/last')
  },
  async saveOrder(orderDto: OrderDto) {
    return await axios.post(HOST + '/orders', orderDto)
  }
}
