import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVue3Resolver } from "unplugin-vue-components/resolvers";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    base: "/uoc-tfm/",
    plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVue3Resolver()],
      }),
      VueI18nPlugin({
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "./src/locales/**"
        ),
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @import "./src/styles/main.scss";
              `,
        },
      },
    },
    define: processEnvValues,
  };
});

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/uoc-tfm/",
//   plugins: [
//     vue(),
//     Components({
//       resolvers: [BootstrapVue3Resolver()],
//     }),
//     VueI18nPlugin({
//       include: resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         "./src/locales/**"
//       ),
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "./src/styles/main.scss";
//         `,
//       },
//     },
//   },
// });
