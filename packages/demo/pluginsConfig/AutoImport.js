export default {
    include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
    ],
    // global imports to register
    imports: [
        // presets
        "vue",
        "vue-router",
        "@vueuse/core",
    ],
}