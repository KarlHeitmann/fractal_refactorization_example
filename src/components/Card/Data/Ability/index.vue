<script setup>
  import {ref, reactive} from 'vue'

  import StateOff from './StateOff.vue'
  import AbilityData from './AbilityData.vue'

  const stateOn = ref(false)
  const abilityData = reactive({})

  const props = defineProps({
    ability: {
      type: Object,
      required: true,
    },
  })

  const {ability} = props

  const fetchSuccess = (ability) => {
    stateOn.value = true
    abilityData.ability = ability
  }
</script>
<template>
  <AbilityData
    v-if="stateOn"
    :ability="abilityData.ability"
  />
  <StateOff
    v-else
    @abilities-incoming="fetchSuccess"
    :url="ability.ability.url"
    :name="ability.ability.name"
  />
</template>