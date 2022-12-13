import { createApp } from "vue";
import store from "./store/store";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/main.css";

// Multi language locale
import i18n from "@/i18n";
// Maps
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.use(OpenLayersMap);

app.mount("#app");
