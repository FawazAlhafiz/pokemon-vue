<template>
  <div id="app">
    <ul>
      <li v-for="pokemon in pokemoon" :key="pokemon.id">
        <Pokemam :name="pokemon.name" :image="pokemon.image" :type="pokemon.type" :id="pokemon.id" />
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Pokemam from './Pokemam.vue';

const pokemoon = ref([]);

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 10; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        console.log(results);
        pokemoon.value = results;
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();


</script>


<style scoped></style>
