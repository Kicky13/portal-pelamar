import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from 'bootstrap-vue-3'

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import 'vue-select/dist/vue-select.css';
import "@/core/plugins/prismjs";
import "bootstrap";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(BootstrapVue3)

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.mount("#app");
