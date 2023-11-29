// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: { class: "font-sans" },
      title: "Download Support",
      link: [{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }],
    },
  },
  build: {
    transpile: ["vue-sonner"],
  },
  css: ["~/assets/css/main.css", "~/assets/css/app.css"],
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/supabase"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/register", "/"],
    },
  },
});
