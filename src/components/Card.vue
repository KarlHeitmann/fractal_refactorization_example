<script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue';
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
  const fetchPokemon = (url) => {
    console.log("fetchPokemon", url)
    const config = {
      method: 'get',
      url,
      headers: { }
    };

    axios(config)
    .then(function (response) {
      const { data } = response
      hasData.value = true
      console.log(data)
      cardData.pokemon = data
      console.log(cardData)
    })
    .catch(function (error) {
      console.log(error);
    });
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
    <div
      class="card-body"
      v-else
    >
      <button
        class="btn btn-primary"
        @click="fetchPokemon(pokemon.url)"
      >
        {{ pokemon.name }}
      </button>
    </div>
  </div>
</template>