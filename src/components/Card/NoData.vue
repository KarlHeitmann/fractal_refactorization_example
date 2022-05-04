<script setup>
  import {ref} from 'vue'
  import axios from 'axios'

  const hasData = ref(false)

  const props = defineProps({
    name: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    }
  })

  const {name, url} = props

  const emit = defineEmits(['hasData'])

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
      emit('hasData', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
</script>
<template>
  <div
    class="card-body"
  >
    <button
      class="btn btn-primary"
      @click="fetchPokemon(url)"
    >
      {{ name }}
    </button>
  </div>
</template>
