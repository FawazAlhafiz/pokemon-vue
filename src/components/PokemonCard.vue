<template>
  <li class="bg-white rounded-lg p-5 text-center shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
    <img 
      class="w-30 h-30 object-contain mx-auto" 
      :src="pokemon.image" 
      :alt="pokemon.name"
      @error="handleImageError"
    />
    <h2 class="text-lg font-semibold mt-2.5 mb-2.5 text-gray-800">
      {{ pokemon.id }}. {{ formatName(pokemon.name) }}
    </h2>
    <p class="text-sm text-gray-500 mt-1 capitalize">
      Type: {{ pokemon.type }}
    </p>
  </li>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    pokemon: {
      type: Object,
      required: true
    }
  });

  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/120?text=No+Image';
  };
</script>