<template>
  <div class="pokedex-container">
    <header class="pokedex-header">
      <h1>Pokédex</h1>
      <p class="subtitle">Discover {{ pokemonList.length }} Pokémon</p>
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