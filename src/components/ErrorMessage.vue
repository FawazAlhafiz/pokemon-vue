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



<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 200px;
}

.error-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.error-message {
  color: #d32f2f;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.retry-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.retry-button:hover {
  background-color: #2980b9;
}
</style>
