<script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue'
  import DamageRelations from './DamageRelations.vue'
  import Move from './Move.vue'

  const stateOn = ref(false)
  const type_data = reactive({})

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
      console.log("////////////")
      console.log(data)
      console.log("////////////")
      type_data.type = data
      stateOn.value = true
    })
    .catch(function (error) {
      console.log(error);
    });
  }
</script>
<template>
  <li
    v-if="stateOn"
    >
    <DamageRelations
      :type_data="type_data"
    />
    <ul>
      <Move
        v-for="move in type_data.type.moves"
        :name="move.name"
        :url="move.url"
      />
    </ul>
  </li>
  <li
    v-else
    @click="fetchType(type.type.url)"
  >
    {{ type.type.name }}
  </li>

</template>