import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(),],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js', //去除vue-i18n的警告信息
        },
    },
});
