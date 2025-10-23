<template>
    <h1> {{ pokemon.name }} </h1>
</template>


<script setup>

const pokemon = defineProps({
    name: String,
    image: String,
    type: String,
    id: Number
});

</script>