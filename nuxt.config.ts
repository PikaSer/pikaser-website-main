import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/devtools",
    "@nuxt/devtools-ui-kit",
  ],

  css: [
    "github-markdown-css/github-markdown-dark.css",
  ],

  colorMode: {
    preference: "dark",
    fallback:   "dark",

    // default is "-mode"
    classSuffix: "",
  },

  compatibilityDate: '2024-08-06',

  content: {
    highlight: {
      theme: {
        default:  "github-dark",
        dark:     "github-dark",
      }
    }
  },

  // https://github.com/nuxt/framework/issues/5200
  // https://github.com/nuxt/framework/discussions/4071
  // components: {
  //   "dirs": [
  //     {
  //       "path": "~/components/global",
  //       "global": true
  //     },
  //     "~/components"
  //   ]
  // },

  i18n: {
    locales: [
      {
        code:     "en",
        language: "en",
        name:     "English",
        file:     "en.js",
      },
      {
        code:     "zh",
        language: "zh-Hant",
        name:     "正體中文",
        file:     "zh.js",
      },
    ],
    defaultLocale:  "en",

    strategy:       "prefix",

    // Redirect seem malfunctioning
    // detectBrowserLanguage: false,
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: "en",
      redirectOn:     "root",
    },

    vueI18n: './i18n.config.ts',

    // Per component I18n
    vueI18nLoader: true,

    langDir: "locales",
  },

  vite: {
    vue: {
      optionsAPI: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'pinia',
        'vue-observe-visibility',
      ]
    }
  },

  // Enable Client-side only rendering
  ssr: false,
  // pre-render your pages at build time to improve performance and avoid CPU usage on the server
  routeRules: {
    '/': { prerender: true },
  },

  // Enable devtool
  // Since nuxt 3.4
  devtools: {
    enabled: true,
  },

  future: {
    compatibilityVersion: 4,
  },
})
