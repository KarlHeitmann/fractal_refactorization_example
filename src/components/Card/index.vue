<script setup>
  import { reactive, ref } from 'vue';
  import NoData from './NoData.vue'
  import Data from './Data/index.vue'
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
    <Data
      v-if="hasData"
      :pokemon="cardData.pokemon"
    />
    <NoData
      v-else
      @has-data="callback"
      :url="props.pokemon.url"
      :name="props.pokemon.name"
    />
  </div>
</template>