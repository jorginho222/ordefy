import {createRouter, createWebHistory, Router} from "vue-router";
import Home from "./pages/Home.vue";
import TableOrder from "./pages/TableOrder.vue";
import CreateOrder from "./pages/CreateOrder.vue";
import Invoice from "./pages/Invoice.vue";
import InvoicePaid from "./pages/InvoicePaid.vue";

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/table/:table',
    name: 'table',
    children: [
      {
        path: 'order',
        component: TableOrder,
        name: 'tableOrder',
      },
      {
        path: 'order/create',
        component: CreateOrder,
        name: 'createOrder'
      },
    ]
  },
  {
    path: '/invoice/:table',
    children: [
      {
        path: 'show',
        component: Invoice,
        name: 'tableInvoice',
        props: true
      },

      {
        path: 'success/:order',
        component: InvoicePaid,
        name: 'invoicePaid',
        props: true
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
