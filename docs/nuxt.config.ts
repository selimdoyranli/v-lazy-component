import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  components: [
    {
      prefix: '',
      path: resolve('./components'),
      global: true
    },
  ]
})
