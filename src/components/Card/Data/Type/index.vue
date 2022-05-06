<script setup>
  import { ref } from 'vue';
  import StateOff from './StateOff.vue'

  const props = defineProps({
    type: {
      type: Object,
      required: true,
    },
  })

  const stateOn = ref(false)

  const fetchSuccess = (type) => {
    console.log("ffffffffff")
    stateOn.value = true
  }
</script>
<template>
  <div
    v-if="stateOn"
  >
    TODO
  </div>

  <StateOff
    v-else
    @type-incoming="fetchSuccess"
    :url="type.type.url"
    :name="type.type.name"
  />


</template>