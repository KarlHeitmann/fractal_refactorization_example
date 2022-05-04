<script setup>
  import { ref } from "vue"
  import axios from 'axios'

  import Navbar from "@/components/Navbar.vue";
  import Card from "@/components/Card.vue";

  const pokemons = ref([])
  const fetchAllPokemons = () => {
    console.log("fetchAllPokemons")
    const config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      const { results } = response.data
      console.log(results)
      pokemons.value = results
    })
    .catch(function (error) {
      console.log(error);
    });
  }
</script>

<template>
  <Navbar />
  <div class="container">
    <button
      class="btn btn-primary"
      @click="fetchAllPokemons"
    >
      Fetch all data
    </button>
    <div class="row">
      <div
        class="col-4"
        v-for="pokemon in pokemons"
        :key="pokemon.url"
      >
        <Card
          :pokemon="pokemon"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import './assets/base.css';
@import './assets/bootstrap.min.css';

</style>
