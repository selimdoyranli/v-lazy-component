<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center pt-6">
        <h2>Scroll to bottom</h2>
        <v-icon>mdi-arrow-down</v-icon>
      </div>
      <div style="height: 150vh"></div>
      <lazy-component wrapper-tag="section" @intersected="writeLog">
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://source.unsplash.com/random"></v-img>
          <v-card-text>
            <p>I'm loaded.</p>
          </v-card-text>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>

      <div class="mb-6 pb-6"></div>

      <div style="height: 150vh"></div>
      <lazy-component @intersected="writeLog">
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://source.unsplash.com/random"></v-img>
          <v-card-text>
            <p>I'm loaded.</p>
          </v-card-text>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>

      <div class="mb-6 pb-6"></div>
    </v-col>
  </v-row>
</template>

<script>
import LazyComponent from '../../dist/v-lazy-component.esm'

export default {
  components: {
    LazyComponent,
  },
  methods: {
    writeLog(el) {
      console.log('Loaded', el)
    },
  },
}
</script>

<style scoped>
.v-lazy-component.loading {
  filter: blur(20px);
}

.v-lazy-component.loaded {
  filter: blur(0);
  transition: filter 1s;
}
</style>
