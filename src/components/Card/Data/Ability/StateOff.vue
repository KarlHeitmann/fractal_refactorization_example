<script setup>
  import axios from 'axios'
  
  const props = defineProps({
    url: {
      type: Object,
      required: true,
    },
    name: {
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

const {url, name} = props
</script>
<template>
  <li
    @click="fetchAbility(url)"
  >
    {{ name }}
  </li>
</template>
