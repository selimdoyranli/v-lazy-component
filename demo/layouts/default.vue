<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <a
        href="https://github.com/RadKod/v-lazy-component"
        target="_blank"
        title="v-lazy-component"
      >
        <v-btn icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </a>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'v-lazy-component',
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
