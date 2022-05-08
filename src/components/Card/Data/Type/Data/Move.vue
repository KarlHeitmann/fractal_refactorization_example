<script setup>
import { onMounted } from 'vue';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  })
  const {name, url} = props

  onMounted(() => {
    console.log("Move props", props)
  })
</script>

<template>
  <h5>
    {{name}}
  </h5>
</template>