<script setup>
  import Type from '../../index.vue'
  const props = defineProps({
    double_damage_from: {
    }
  })

  const {double_damage_from} = props
  console.log("props.double_damage_from", props)

</script>
<template>
  <li>
    Double damage from
    <ul>
      <Type
        v-for="type_nested in double_damage_from"
        :type="type_nested"
      />
    </ul>
  </li>

</template>
