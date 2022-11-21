import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/main.css";

// Multi language locale
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
// Maps
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "es_SP",
  fallbackLocale: "en_GB",
  availableLocales: ["en_GB", "es_SP"],
  messages: messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(OpenLayersMap);

app.mount("#app");
