<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p class="loading-text">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Loading...'
  }
});
</script>