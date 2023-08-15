import { createPinia } from "pinia";
import type { App } from "vue"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia();
store.use(piniaPluginPersistedstate);
export default {
  install(app: App) {
    app.use(store);
  }
};