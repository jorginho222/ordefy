import { defineStore } from "pinia";
import orderApi from "../services/orderApi";
import { HttpStatusCode } from "axios";
import { ref } from "vue";
export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: ref([]),
        lastOrder: ref({}),
        table: ref('1')
    }),
    getters: {
        ordersGet: (state) => state.orders,
        lastOrderGet: (state) => state.lastOrder,
        tableGet: (state) => state.table
    },
    actions: {
        async getOrders() {
            let response = await orderApi.getOrders();
            if (response.status === HttpStatusCode.Ok) {
                this.orders = response.data;
            }
        },
        async getLastOrder() {
            const response = await orderApi.fetchLastOrder(this.table);
            if (response.status === HttpStatusCode.Ok) {
                this.lastOrder = response.data[0];
            }
        },
        setTable(table) {
            this.table = table;
        },
        async addOrder(orderDto) {
            let response = await orderApi.saveOrder(orderDto);
            if (response.status === HttpStatusCode.Created) {
                this.orders.push(response.data);
            }
            return response;
        },
        async updateOrder(updateOrderDto) {
            const response = await orderApi.updateOrder(updateOrderDto);
            if (response.status === HttpStatusCode.Ok) {
                this.lastOrder = response.data;
            }
        }
    }
});
