<template>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 list-none p-0 m-0">

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
