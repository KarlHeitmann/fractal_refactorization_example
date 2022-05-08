<script setup>
  import { reactive, ref } from 'vue';
  import StateOff from './StateOff.vue'
  import Data from './Data/index.vue'

  const props = defineProps({
    type: {
      type: Object,
      required: true,
    },
  })

  const stateOn = ref(false)
  const data = reactive({})

  const fetchSuccess = (type) => {
    stateOn.value = true
    data.type = type
  }
</script>
<template>
  <Data
    v-if="stateOn"
    :data="data"
    :type="data.type"
  />

  <StateOff
    v-else
    @type-incoming="fetchSuccess"
    :url="type.url"
    :name="type.name"
  />


</template>