import type { App } from "vue";
const modules = import.meta.glob(["./*.vue", "!./index.vue"], {
    eager: true,
});
export default {
    install(app: App) {
        for (let key of Object.keys(modules)) {
            let name = key.match(/\/([^/]+)\.vue$/)[1];
            app.component(name, modules[key].default);
        }
    },
};
