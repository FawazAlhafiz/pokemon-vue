<template>
  <div class="flex flex-col items-center justify-center p-10 min-h-[200px]">
    <div class="text-5xl mb-4">⚠️</div>
    <p class="text-red-600 text-lg text-center mb-5">{{ message }}</p>
    <button 
      v-if="onRetry" 
      @click="onRetry" 
      class="px-5 py-2.5 bg-blue-500 text-white border-none rounded cursor-pointer text-base transition-colors hover:bg-blue-700"
    >
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