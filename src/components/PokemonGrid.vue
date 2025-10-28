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