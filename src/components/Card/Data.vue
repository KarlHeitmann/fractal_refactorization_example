<script setup>
  const props = defineProps({
    pokemon: {
      type: Object,
      required: true,
    },
  })
  const {pokemon} = props
</script>
<template>
  <div
    class="card-body">
    <img 
      :src="pokemon.sprites.front_default"
    >
    <h2 class="card-title">{{pokemon.name}}</h2>
    <p class="card-text">
      <h4>Types</h4>
      <ol>
        <li
          v-for="t in pokemon.types"
        >
          {{ t.type.name }}
        </li>
      </ol>
      <h4>Abilities</h4>
      <ol>
        <li
          v-for="a in pokemon.abilities"
        >
          {{ a.ability.name }}
        </li>
      </ol>
    </p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</template>
