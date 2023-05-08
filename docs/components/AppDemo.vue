<template>
  <div class="app-demo">
    <h3 class="scroll-down-title">
      Scroll down ⬇️
    </h3>

    <lazy-component class="mb-100">
      <app-card :media="{ width: 320, height: 320 }" />

      <!-- Optional -->
      <template #placeholder>
        <app-spinner />
      </template>
    </lazy-component>

    <lazy-component class="mb-100">
      <app-card :media="{ width: 600, height: 350 }" />

      <!-- Optional -->
      <template #placeholder>
        <app-spinner />
      </template>
    </lazy-component>

    <aside>
      <strong>Do not wait observer, Default loaded</strong>
      <br>
      <code>... :is-intersected="true" ...></code>
    </aside>
    <br>
    <lazy-component class="mb-100" :is-intersected="true" @intersected="writeLog">
      <app-card :media="{ width: 300, height: 600 }" />

      <!-- Optional -->
      <template #placeholder>
        <app-spinner />
      </template>
    </lazy-component>

    <aside>
      <strong>Do not use observer, wait trigger</strong>
      <br>
      <code>... :is-intersected="isIntersected" :idle="true" ...></code>
    </aside>
    <br>
    <button @click="isIntersected = true">
      Click for render component
    </button>
    <br>
    <br>
    <lazy-component
      :is-intersected="isIntersected"
      idle
      @intersected="writeLog"
    >
      <app-card :media="{ width: 400, height: 400 }" />

      <!-- Optional -->
      <template #placeholder>
        <app-spinner />
      </template>
    </lazy-component>
  </div>
</template>

<script setup>
import LazyComponent from 'v-lazy-component'

const isIntersected = ref(false)

const writeLog = el => {
  // eslint-disable-next-line no-console
  console.log('Loaded', el)
}

</script>

<style scoped>
.app-demo {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  height: 60vh;
  overflow: auto;
}

.scroll-down-title {
  position: relative;
  margin-bottom: 100vh;
  font-size: 1.2rem;
  display: block;
}

button {
  position: relative;
  background-color: rgb(8, 101, 50);
  color: #fff;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  border: 0;
}

.mb-100 {
  margin-bottom: 100vh;
}

.v-lazy-component.v-lazy-component--loading:not(:last-child) {
  filter: blur(20px);
}

.v-lazy-component.v-lazy-component--loaded {
  filter: blur(0);
  transition: filter 1s;
}
</style>
