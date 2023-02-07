<script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue';

  const hasData = ref(false)
  const ability_data = reactive({})
  const description = ref('')

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
      hasData.value = true
      console.log(data)
      ability_data.value = data
      description.value = data.effect_entries.find(e => e.language.name == 'en')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const {ability} = props
</script>
<template>
  <div
    v-if="hasData"
    >
    <h5>{{ability_data.value.name}}</h5>
    {{ description.effect }}
  </div>
  <li
    v-else
    @click="fetchAbility(ability.ability.url)"
    >
    {{ ability.ability.name }}
  </li>
</template>
