<script setup>
  import axios from 'axios'

  const props = defineProps({
    ability: {
      type: Object,
      required: true,
    },
  })

  const fetchAbility = (url) => {
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
      // emit('hasData', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const {ability} = props
</script>
<template>
  <li
    @click="fetchAbility(ability.ability.url)"
  >
    {{ ability.ability.name }}
  </li>
</template>