<script setup>
  import axios from 'axios'

  const props = defineProps({
    type: {
      type: Object,
      required: true,
    },
  })

  const fetchType = (url) => {
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
</script>
<template>
  <li
    @click="fetchType(type.type.url)"
  >
    {{ type.type.name }}
  </li>

</template>