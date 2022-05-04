<script setup>
  import axios from 'axios'
  // const pokemon = {name: "placeholder", url: "#"}
  const props = defineProps({
    pokemon: {
      type: Object,
      required: false
    }
  })
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
      console.log(data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
</script>
<template>
  <div
    class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <button
        class="btn btn-primary"
        @click="fetchPokemon(pokemon.url)"
      >
        {{ pokemon.name }}
      </button>
      <!--
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      -->
    </div>
  </div>
</template>