<script setup>
  import Type from './Type.vue'
  const props = defineProps({
    type_data: {
      type: Object,
      required: true,
    },
  })
  // console.log("======= type data: ", type_data)
  const t = props.type_data.type
  // console.log("//////////////////\\\\\\\\\\\\\\\\", props.type_data.type)
  console.log("//////////////////\\\\\\\\\\\\\\\\", t)
</script>
<template>
  <h5>{{ t.name }}</h5>
  <p>Damage Relations</p>
  <ul>
    <li>
      Double damage from
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.double_damage_from"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
    <li>
      Double damage to
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.double_damage_to"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
    <li>
      Half damage from
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.half_damage_from"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
    <li>
      Half damage to
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.half_damage_to"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
    <li>
      No damage from
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.no_damage_from"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
    <li>
      No damage to
      <ul>
        <Type
          v-for="type_nested in t.damage_relations.no_damage_to"
          :type="{ type: type_nested }"
        />
      </ul>
    </li>
  </ul>
</template>