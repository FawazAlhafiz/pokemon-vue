<template>
  <ul class="pokemon-grid">
    <PokemonCard 
      v-for="pokemon in pokemonList" 
      :key="pokemon.id" 
      :pokemon="pokemon"
    />
  </ul>
</template>

<script setup>
  import { defineProps } from 'vue';
  import PokemonCard from './PokemonCard.vue';

  defineProps({
    pokemonList: {
      type: Array,
      required: true,
      default: () => []
    }
  });
</script>


<style scoped>
  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    .pokemon-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }
  }
</style>
