import NProgress from "nprogress";
import "nprogress/nprogress.css"
export default (router) => {
    router.beforeEach((to, from) => {
        if (to.path !== from.path) NProgress.start();
    });
    router.afterEach(() => {
            NProgress.done();
    });
};
