<template>
  <div class="flex flex-col items-center justify-center p-10 min-h-[200px]">
    <div class="w-[50px] h-[50px] border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    <p class="mt-5 text-lg text-gray-600 font-light">{{ message }}</p>
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