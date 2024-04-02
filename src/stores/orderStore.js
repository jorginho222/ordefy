import { defineStore } from "pinia";
import orderApi from "../services/orderApi";
import { HttpStatusCode } from "axios";
export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        lastOrder: {}
    }),
    getters: {
        ordersGet: (state) => state.orders,
        lastOrderGet: (state) => state.lastOrder
    },
    actions: {
        async getOrders() {
            let response = await orderApi.getOrders();
            if (response.status === HttpStatusCode.Ok) {
                // @ts-ignore
                this.orders = response.data;
            }
        },
        async getLastOrder() {
            const response = await orderApi.getLastOrder();
            if (response.status === HttpStatusCode.Ok) {
                // @ts-ignore
                this.lastOrder = response.data[0];
            }
        },
        async addOrder(orderDto) {
            let response = await orderApi.saveOrder(orderDto);
            if (response.status === HttpStatusCode.Created) {
                // @ts-ignore
                this.orders.push(response.data);
                // @ts-ignore
                this.lastOrder = response.data;
            }
            return response;
        },
        // async updateOrder(index: number) {
        //   const response = await orderApi.updateOrder()
        //   if (response.status === HttpStatusCode.Ok) {
        //     Object.assign(this.orders[index], response.data)
        //   }
        // }
    }
});
