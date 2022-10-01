<script setup>
  import Personal from './Personal.vue'
</script>

<template>
  <Personal/>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

