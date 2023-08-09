import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import AutoImportConfig from "./pluginsConfig/AutoImport.js";
import { createHtmlPlugin } from "vite-plugin-html";
import htmlConfig from "./pluginsConfig/htmlConfig.js";
import viteCompression from "vite-plugin-compression";
import Icons from "unplugin-icons/vite";
// icon自动引入
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
// icon自动引入
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport(AutoImportConfig),
        createHtmlPlugin(htmlConfig),
        viteCompression(),
        Components({
            resolvers: [
                IconsResolver({
                    prefix: "icon",
                }),
            ],
        }),
        Icons({
            /* options */
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js", //去除vue-i18n的警告信息
        },
    },
});
