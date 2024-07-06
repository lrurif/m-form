import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/locals"
import installNprogress from "@/plugins/nprogress"
import formDesignInstall from "@m-form/form-generate"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "normalize.css"
const vm = createApp(App);
vm.use(router);
vm.use(store);
vm.use(i18n);
vm.use(formDesignInstall)
vm.use(ElementPlus)
installNprogress(router);
vm.mount("#app");
