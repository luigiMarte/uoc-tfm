import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "es_SP",
  fallbackLocale: "en_GB",
  availableLocales: ["en_GB", "es_SP"],
  messages: messages,
});

export default i18n;
