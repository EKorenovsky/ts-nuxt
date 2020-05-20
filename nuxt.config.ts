import colors from "vuetify/lib/util/colors";
export default {
  env: {},
  head: {
    title: "ts-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: [
    '@/assets/sass/overrides.sass'
  ],
  build: {
    cssSourceMap: true,
    extractCSS: true,
  },
  buildModules: ["@nuxt/typescript-build","@nuxtjs/vuetify"],
  vuetify: {
    customVariables: ['@/assets/sass/variables.scss'],
    frameworkOptions: "@/utils/vuetify.options.ts",
  },
  modules: [
    "@nuxtjs/axios",
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.ts'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'en',
    }]
  ],
  axios: {}
}
