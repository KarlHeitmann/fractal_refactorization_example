<script setup>
import { onMounted, ref } from 'vue';

  const description = ref('')

  const props = defineProps({
    ability: {
      type: Object,
      required: true,
    },
  })

  const {ability} = props
  onMounted(() => {
    description.value = ability.effect_entries.find(e => e.language.name == 'en')
  })
</script>

<template>
  <h5>{{ability.name}}</h5>
  {{ description.effect}}
</template>