<script>
import Vue from 'vue';
import VLazyComponent from '@/v-lazy-component.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VLazyComponent
  }
});
</script>

<template>
  <div id="app">
    <div style="height: 150vh;"></div>
    <v-lazy-component>
      <span>My Component</span>
      <p slot="placeholder">Loading...</p>
    </v-lazy-component>
  </div>
</template>
