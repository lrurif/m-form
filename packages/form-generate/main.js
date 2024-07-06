import FormDesign from "./src/index.vue"
import { installComs } from "@m-form/core"
export default (app) => {
    app.use(installComs)
    app.component("FormDesign", FormDesign);
}