<script setup>
  import {onMounted, ref} from 'vue'
  import DamageRelations from './DamageRelations.vue'

  const props = defineProps({
    type: {
      type: Object,
      required: true
    }
  })

  const {type} = props

  onMounted(() => {
    console.log("sahdghdfsjkdsfhkds")
    console.log("type", type)
  })

</script>

<template>
  <li>
    <h5>{{ type.name }}</h5>
    <DamageRelations
      :damage_relations="type.damage_relations"
    />
  </li>
</template>