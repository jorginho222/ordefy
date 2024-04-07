import axios from "axios";
import {OrderDto} from "../interfaces/dtos/OrderDto";
import {HOST} from "../config";
import {UpdateOrderDto} from "../interfaces/dtos/UpdateOrderDto";

export default {
  async getOrders() {
    return await axios.get('')
  },
  async fetchLastOrder(table: number) {
    return await axios.get(HOST + '/orders/last/' + table)
  },
  async saveOrder(orderDto: OrderDto) {
    return await axios.post(HOST + '/orders', orderDto)
  },
  async updateOrder(updateOrderDto: UpdateOrderDto) {
    return await axios.patch(HOST + '/orders', updateOrderDto)
  }
}
