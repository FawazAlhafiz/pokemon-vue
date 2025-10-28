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


<style scoped>
  .card {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .card-image {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
    color: #2c3e50;
  }

  .card-subtitle {
    font-size: 14px;
    color: #7f8c8d;
    margin: 5px 0 0 0;
    text-transform: capitalize;
  }
</style>
