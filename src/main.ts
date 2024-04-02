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

const pinia = createPinia()
const app = createApp(App)
registerPlugins(app)

app.use(pinia)
app.mount('#app')
