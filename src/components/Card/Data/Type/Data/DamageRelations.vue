<script setup>
  import Type from '../index.vue'

  const props = defineProps({
    damage_relations: {
      type: Object,
      required: true
    }
  })

  const {damage_relations} = props
</script>
<template>
  <p>Damage Relations</p>
  <ul>
    <li>
      Double damage from
      <ul>
        <Type
          v-for="type_nested in damage_relations.double_damage_from"
          :type="type_nested"
        />
      </ul>
    </li>
    <li>
      Double damage to
      <ul>
        <Type
          v-for="type_nested in damage_relations.double_damage_to"
          :type="type_nested"
        />
      </ul>
    </li>
    <li>
      Half damage from
      <ul>
        <Type
          v-for="type_nested in damage_relations.half_damage_from"
          :type="type_nested"
        />
      </ul>
    </li>
    <li>
      Half damage to
      <ul>
        <Type
          v-for="type_nested in damage_relations.half_damage_to"
          :type="type_nested"
        />
      </ul>
    </li>
    <li>
      No damage from
      <ul>
        <Type
          v-for="type_nested in damage_relations.no_damage_from"
          :type="type_nested"
        />
      </ul>
    </li>
    <li>
      No damage to
      <ul>
        <Type
          v-for="type_nested in damage_relations.no_damage_to"
          :type="type_nested"
        />
      </ul>
    </li>
  </ul>
</template>