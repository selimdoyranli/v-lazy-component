<template>
  <div class="app-card">
    <img class="app-card__media" :src="`https://picsum.photos/${media.width}/${media.height}`">
    <div class="app-card__body">
      <strong>HEYY</strong>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  media: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.app-card {
  position: relative;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  max-width: 320px;
}

.app-card__media {
  position: relative;
  max-width: 100%;
  height: auto;
  display: inline-block;
}

.app-card__body {
  position: relative;
  padding: 1rem;
}
</style>
