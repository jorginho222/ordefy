import {createRouter, createWebHistory, Router} from "vue-router";
import Home from "./pages/Home.vue";
import TableOrder from "./pages/TableOrder.vue";
import CreateOrder from "./pages/CreateOrder.vue";
import Invoice from "./pages/Invoice.vue";

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/table/:table/order',
    component: TableOrder,
    name: 'tableOrder'
  },
  {
    path: '/table/:table/order/create',
    component: CreateOrder,
    name: 'createOrder'
  },
  {
    path: '/invoice/:table',
    component: Invoice,
    name: 'tableInvoice',
    props: true
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
