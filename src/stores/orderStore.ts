import {defineStore} from "pinia";
import {OrderItem} from "../interfaces/items/OrderItem";
import {OrderDto} from "../interfaces/dtos/OrderDto";
import orderApi from "../services/orderApi";
import {HttpStatusCode} from "axios";

type State = {
  orders: OrderItem
  lastOrder: OrderItem
}

export const useOrderStore = defineStore('order', {
  state: (): State => ({
    orders: [] as OrderItem,
    lastOrder: {} as OrderItem,
  } as State),
  getters: {
    ordersGet: (state: State) => state.orders,
    lastOrderGet: (state: State) => state.lastOrder
  },
  actions: {
    async getOrders(): Promise<OrderItem[]> {
      let response: Promise<OrderItem> = await orderApi.getOrders()
      if (response.status === HttpStatusCode.Ok) {
        this.orders = response.data
      }
    },
    async getLastOrder(): Promise<OrderItem> {
      const response: Promise<OrderItem> = await orderApi.getLastOrder()
      if (response.status === HttpStatusCode.Ok) {
        this.lastOrder = response.data[0]
      }
    },
    async addOrder(orderDto: OrderDto): Promise<OrderItem> {
      let response: Promise<OrderItem> = await orderApi.saveOrder(orderDto);
      if (response.status === HttpStatusCode.Created) {
        this.orders.push(response.data)
        this.lastOrder = response.data
      }
      return response
    },
    // async updateOrder(index: number) {
    //   const response = await orderApi.updateOrder()
    //   if (response.status === HttpStatusCode.Ok) {
    //     Object.assign(this.orders[index], response.data)
    //   }
    // }
  }
})
