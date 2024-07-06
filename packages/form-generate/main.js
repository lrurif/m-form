import FormDesign from "./src/index.vue"
import { installComs } from "@m-form/core"
export default (app) => {
    debugger;
    app.use(installComs)
    app.component("FormDesign", FormDesign);
}