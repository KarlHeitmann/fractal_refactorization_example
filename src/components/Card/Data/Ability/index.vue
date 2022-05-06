<script setup>
  import {ref} from 'vue'

  import StateOff from './StateOff.vue'

  const stateOn = ref(false)

  const props = defineProps({
    ability: {
      type: Object,
      required: true,
    },
  })

  const {ability} = props
</script>
<template>
  <div
    v-if="stateOn"
  >
    TODO
  </div>
  <StateOff
    v-else
    :url="ability.ability.url"
    :name="ability.ability.name"
  />
</template>