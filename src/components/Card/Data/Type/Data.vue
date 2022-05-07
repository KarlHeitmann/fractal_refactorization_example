<script setup>
  import {onMounted, ref} from 'vue'

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
  <h5>{{ type.name }}</h5>
  <p>Damage Relations</p>
  <ul>
    <li>
      Double damage from
      <ul>
        <li
          v-for="type_nested in type.damage_relations.double_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Double damage to
      <ul>
        <li
          v-for="type_nested in type.damage_relations.double_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Half damage from
      <ul>
        <li
          v-for="type_nested in type.damage_relations.half_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      Half damage to
      <ul>
        <li
          v-for="type_nested in type.damage_relations.half_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      No damage from
      <ul>
        <li
          v-for="type_nested in type.damage_relations.no_damage_from"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
    <li>
      No damage to
      <ul>
        <li
          v-for="type_nested in type.damage_relations.no_damage_to"
        >
          {{type_nested.name}}
        </li>
      </ul>
    </li>
  </ul>
</template>