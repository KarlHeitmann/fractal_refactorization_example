<script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue'

  const stateOn = ref(false)
  const type_data = reactive({})

  const props = defineProps({
    type: {
      type: Object,
      required: true,
    },
  })

  const fetchType = (url) => {
    console.log("fetchPokemon", url)
    const config = {
      method: 'get',
      url,
      headers: { }
    };

    axios(config)
    .then(function (response) {
      const { data } = response
      console.log("////////////")
      console.log(data)
      console.log("////////////")
      type_data.type = data
      stateOn.value = true
    })
    .catch(function (error) {
      console.log(error);
    });
  }
</script>
<template>
  <li
    v-if="stateOn"
    >
    <h5>{{ type_data.name }}</h5>
    <p>Damage Relations</p>
    <ul>
      <li>
        Double damage from
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.double_damage_from"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
      <li>
        Double damage to
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.double_damage_to"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
      <li>
        Half damage from
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.half_damage_from"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
      <li>
        Half damage to
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.half_damage_to"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
      <li>
        No damage from
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.no_damage_from"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
      <li>
        No damage to
        <ul>
          <li
            v-for="type_nested in type_data.type.damage_relations.no_damage_to"
          >
            {{type_nested.name}}
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li
    v-else
    @click="fetchType(type.type.url)"
  >
    {{ type.type.name }}
  </li>

</template>