/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { registerPlugins } from '@/plugins'
// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import {createPinia} from "pinia";
import router from "./router";

const pinia = createPinia()
const app = createApp(App)
registerPlugins(app)

app.use(pinia)
app.use(router)
app.mount('#app')
