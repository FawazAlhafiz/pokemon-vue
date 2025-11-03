<template>
  <div class="p-5 max-w-[1200px] mx-auto md:p-[15px]">
    <header class="text-center mb-[30px]">
      <h1 class="text-4xl text-gray-800 mb-2 md:text-[28px]">Pokédex</h1>
      <p class="text-base text-gray-600 m-0">Discover {{ pokemonList.length }} Pokémon</p>
    </header>
    
    <LoadingSpinner 
      v-if="loading" 
      message="Loading Pokémon..." 
    />
    
    <ErrorMessage 
      v-else-if="error" 
      :message="error"
      :on-retry="handleRetry"
    />
    
    <PokemonGrid 
      v-else 
      :pokemon-list="pokemonList"
    />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { usePokemon } from '../composables/usePokemon';
  import PokemonGrid from './PokemonGrid.vue';
  import LoadingSpinner from './LoadingSpinner.vue';
  import ErrorMessage from './ErrorMessage.vue';

  const { pokemonList, loading, error, fetchPokemon } = usePokemon();

  onMounted(() => {
    fetchPokemon(150);
  });

  const handleRetry = () => {
    fetchPokemon(150);
  };
</script>