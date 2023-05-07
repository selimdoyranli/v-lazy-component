<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center pt-6">
        <h2>Scroll Down</h2>
        <v-icon>mdi-arrow-down</v-icon>
      </div>

      <div style="height: 150vh"></div>

      <lazy-component wrapper-tag="section" @intersected="writeLog">
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://picsum.photos/768/768"></v-img>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>

      <div style="height: 150vh"></div>

      <lazy-component @intersected="writeLog">
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://picsum.photos/300/600"></v-img>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>

      <div style="height: 150vh"></div>

      <pre class="my-2">
        <strong>Do not wait observer, Default loaded</strong>
        <code>... :is-intersected="true" ...></code>
      </pre>

      <lazy-component :is-intersected="true" @intersected="writeLog">
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://picsum.photos/600/300"></v-img>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>

      <div style="height: 150vh"></div>

      <pre class="my-2">
        <strong>Do not use observer, wait trigger</strong>
        <code>... :is-intersected="isIntersected" :idle="true" ...></code>
      </pre>
      <v-btn class="d-block my-4" color="primary" @click="isIntersected = true">
        Click for render component</v-btn
      >

      <lazy-component
        :is-intersected="isIntersected"
        idle
        @intersected="writeLog"
      >
        <v-card>
          <v-card-title class="headline"> HEYY ! </v-card-title>
          <v-img height="250" src="https://picsum.photos/768/768"></v-img>
        </v-card>
        <template #placeholder>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </lazy-component>
    </v-col>
  </v-row>
</template>

<script>
import LazyComponent from '../../vue2'

export default {
  components: {
    LazyComponent,
  },
  data() {
    return {
      isIntersected: false,
    }
  },
  methods: {
    writeLog(el) {
      // eslint-disable-next-line no-console
      console.log('Loaded', el)
    },
  },
}
</script>

<style scoped>
.v-lazy-component.v-lazy-component--loading {
  filter: blur(20px);
}

.v-lazy-component.v-lazy-component--loaded {
  filter: blur(0);
  transition: filter 1s;
}

.v-lazy-component:last-child {
  filter: none !important;
}
</style>
