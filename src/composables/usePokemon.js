import { ref } from 'vue';

export function usePokemon() {
  const pokemonList = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPokemon = async (limit = 150) => {
    loading.value = true;
    error.value = null;

    try {
      const promises = [];
      
      for (let i = 1; i <= limit; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
      
      const results = await Promise.all(promises);
      
      pokemonList.value = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      
      // console.log(pokemonList.value);
    } catch (err) {
      error.value = 'Failed to load Pokémon. Please try again.';
      console.error('Error fetching pokemon:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    pokemonList,
    loading,
    error,
    fetchPokemon
  };
}
