<template>
  <div class="error-container">
    <div class="error-icon">⚠️</div>
    <p class="error-message">{{ message }}</p>
    <button v-if="onRetry" @click="onRetry" class="retry-button">
      Try Again
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  message: {
    type: String,
    required: true
  },
  onRetry: {
    type: Function,
    default: null
  }
});
</script>