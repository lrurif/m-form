import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            component: () => import("@/view/Login/index.vue"),
        },
        {
            path: "/register",
            component: () => import("@/view/Register/index.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("@/view/404/index.vue"),
        },
    ], // `routes: routes` 的缩写
});

export default router;
