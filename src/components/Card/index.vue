<script setup>
  import { reactive, ref } from 'vue';
  import NoData from './NoData.vue'
  // const pokemon = {name: "placeholder", url: "#"}
  const cardData = reactive({})
  const props = defineProps({
    pokemon: {
      type: Object,
      required: false
    }
  })
  const hasData = ref(false)
  const { pokemon } = props

  const callback = (pokemon) => {
    console.log("callback", pokemon)
    hasData.value = true
    cardData.pokemon = pokemon
  }
</script>
<template>
  <div
    class="card">
    <div
      v-if="hasData"
      class="card-body">
      <img 
        :src="cardData.pokemon.sprites.front_default"
      >
      <h2 class="card-title">{{cardData.pokemon.name}}</h2>
      <p class="card-text">
        <h4>Types</h4>
        <ol>
          <li
            v-for="t in cardData.pokemon.types"
          >
            {{ t.type.name }}
          </li>
        </ol>
        <h4>Abilities</h4>
        <ol>
          <li
            v-for="a in cardData.pokemon.abilities"
          >
            {{ a.ability.name }}
          </li>
        </ol>
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
    <NoData
      v-else
      @has-data="callback"
      :url="props.pokemon.url"
      :name="props.pokemon.name"
    />
  </div>
</template>