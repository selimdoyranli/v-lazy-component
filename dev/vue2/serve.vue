<template>
  <div id="app">
    <h1>Scroll down</h1>
    <div style="height: 150vh"></div>

    <lazy-component>
      <h2>My Component</h2>

      <template #placeholder>
        <h2>Loading...</h2>
      </template>
    </lazy-component>
  </div>
</template>

<script>
import LazyComponent from '../../dist/vue2'

export default {
  name: 'ServeDev',
  components: {
    LazyComponent
  }
}
</script>
