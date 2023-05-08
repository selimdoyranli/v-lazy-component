<template>
  <div class="app-spinner" />
</template>

<style scoped>
.app-spinner {
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-top-color: #333;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
