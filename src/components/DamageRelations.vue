<script setup>
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
        <li
          v-for="type_nested in t.damage_relations.double_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Double damage to
      <ul>
        <li
          v-for="type_nested in t.damage_relations.double_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Half damage from
      <ul>
        <li
          v-for="type_nested in t.damage_relations.half_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Half damage to
      <ul>
        <li
          v-for="type_nested in t.damage_relations.half_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      No damage from
      <ul>
        <li
          v-for="type_nested in t.damage_relations.no_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      No damage to
      <ul>
        <li
          v-for="type_nested in t.damage_relations.no_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
  </ul>
</template>