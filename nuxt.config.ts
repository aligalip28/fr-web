import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "nuxt-toastify",
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ['services']
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      {
        code: "tr",
        iso: "tr",
        img: "/trflag.png",
        name: "TÜRKÇE",
        file: "tr.json",
        messages: { tr: "TÜRKÇE", en: "TURKISH" },
      },
      {
        code: "en",
        iso: "en",
        img: "/enflag.png",
        name: "ENGLISH",
        file: "en.json",
        messages: { tr: "İNGİLİZCE", en: "ENGLISH" },
      },
    ],
    defaultLocale: "tr",
    strategy: "prefix_except_default",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
    customRoutes: "config",
    pages: {
      index: { tr: "/", en: "/" },
      contactus: { tr: "/iletisim", en: "/contact-us" },
      aboutus: { tr: "/hakkimizda", en: "/about-us" },
      recipe: { tr: "/tarifler", en: "/recipe" },
    },
  },
})

