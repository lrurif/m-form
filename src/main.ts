import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createPinia } from "pinia"
const vm = createApp(App)
vm.use(router);
vm.use(createPinia());
vm.mount('#app')
