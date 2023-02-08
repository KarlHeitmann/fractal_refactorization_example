<script setup>
  import {onMounted, ref} from 'vue'
  import DamageRelations from './DamageRelations/index.vue'
  import Move from './Move.vue'

  const props = defineProps({
    type: {
      type: Object,
      required: true
    }
  })

  const {type} = props

  onMounted(() => {
    console.log("type", type)
  })

</script>

<template>
  <li>
    <h5>{{ type.name }}</h5>
    <DamageRelations
      :damage_relations="type.damage_relations"
    />
    <ul>
      <Move
        v-for="move in type.moves"
        :name="move.name"
        :url="move.url"
      />
    </ul>
  </li>
</template>