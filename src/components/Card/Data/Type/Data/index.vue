<script setup>
  import {onMounted, ref} from 'vue'
  import Type from '../index.vue'

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
    <p>Damage Relations</p>
    <ul>
      <li>
        Double damage from
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.double_damage_from"
            :type="type_nested"
          />
        </ul>
      </li>
      <li>
        Double damage to
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.double_damage_to"
            :type="type_nested"
          />
        </ul>
      </li>
      <li>
        Half damage from
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.half_damage_from"
            :type="type_nested"
          />
        </ul>
      </li>
      <li>
        Half damage to
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.half_damage_to"
            :type="type_nested"
          />
        </ul>
      </li>
      <li>
        No damage from
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.no_damage_from"
            :type="type_nested"
          />
        </ul>
      </li>
      <li>
        No damage to
        <ul>
          <Type
            v-for="type_nested in type.damage_relations.no_damage_to"
            :type="type_nested"
          />
        </ul>
      </li>
    </ul>
  </li>
</template>