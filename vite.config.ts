import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import AutoImportConfig from "./pluginsConfig/AutoImport.js";
import { createHtmlPlugin } from 'vite-plugin-html'
import htmlConfig from './pluginsConfig/htmlConfig.js'
import viteCompression from 'vite-plugin-compression';
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport(AutoImportConfig),
        createHtmlPlugin(htmlConfig),
        viteCompression()
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js", //去除vue-i18n的警告信息
        },
    },
});
