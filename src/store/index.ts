import { createPinia } from "pinia";
import type { App } from "vue"
const store = createPinia();
export default {
  install(app: App) {
    app.use(store);
  }
};