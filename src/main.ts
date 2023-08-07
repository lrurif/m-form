import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import customComponents from "@/components";
import i18n from "@/locals"
const vm = createApp(App);
vm.use(router);
vm.use(store);
vm.use(i18n);
vm.use(customComponents);
vm.mount("#app");
