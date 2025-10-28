<template>
  <li class="card">
    <img 
      class="card-image" 
      :src="pokemon.image" 
      :alt="pokemon.name"
      @error="handleImageError"
    />
    <h2 class="card-title">
      {{ pokemon.id }}. {{ formatName(pokemon.name) }}
    </h2>
    <p class="card-subtitle">
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