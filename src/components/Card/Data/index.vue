<script setup>
  import Type from './Type/index.vue'
  import Ability from './Ability/index.vue'

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
        <Type
          v-for="t in pokemon.types"
          :type="t"
        />
      </ol>
      <h4>Abilities</h4>
      <ol>
        <Ability
          v-for="ability in pokemon.abilities"
          :ability="ability"
        />
      </ol>
    </p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</template>
