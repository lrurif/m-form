import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"
import store from '@/store'
const vm = createApp(App)
vm.use(router);
vm.use(store);
vm.mount('#app')
