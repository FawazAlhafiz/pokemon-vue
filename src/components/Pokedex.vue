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

<style scoped>
  .pokedex-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pokedex-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .pokedex-header h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
  }

  @media (max-width: 768px) {
    .pokedex-container {
      padding: 15px;
    }
    
    .pokedex-header h1 {
      font-size: 28px;
    }
  }
</style>
