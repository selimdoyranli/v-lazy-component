import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  ssr: true,
  components: [
    {
      prefix: '',
      path: resolve('./components'),
      global: true
    },
  ]
})
