import {defineStore} from "pinia";
import {OrderItem} from "../interfaces/items/OrderItem";
import {OrderDto} from "../interfaces/dtos/OrderDto";
import orderApi from "../services/orderApi";
import {HttpStatusCode} from "axios";
import {Ref, ref, UnwrapRef} from "vue";

type State = {
  orders: UnwrapRef<Ref<OrderItem[]>>
  lastOrder: UnwrapRef<Ref<OrderItem>>,
  table: UnwrapRef<Ref<number>>
}

export const useOrderStore = defineStore('order', {
  state: (): State => ({
    orders: ref([] as OrderItem[]),
    lastOrder: ref({} as OrderItem),
    table: ref(1)
  }),
  getters: {
    ordersGet: (state: State) => state.orders,
    lastOrderGet: (state: State) => state.lastOrder,
    tableGet: (state: State) => state.table
  },
  actions: {
    async getOrders(): Promise<OrderItem[]> {
      let response: Promise<OrderItem> = await orderApi.getOrders()
      if (response.status === HttpStatusCode.Ok) {
        this.orders = response.data
      }
    },
    async getLastOrder(): Promise<OrderItem> {
      const response: Promise<OrderItem> = await orderApi.fetchLastOrder(this.table)
      if (response.status === HttpStatusCode.Ok) {
        this.lastOrder = response.data[0]
      }
    },

    setTable(table: number) {
      this.table = table
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
