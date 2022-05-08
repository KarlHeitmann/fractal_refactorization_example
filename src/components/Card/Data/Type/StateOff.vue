<script setup>
  import axios from 'axios'

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  })

  const emit = defineEmits(['TypeIncoming'])

  const fetchType = (url) => {
    const config = {
      method: 'get',
      url,
      headers: { }
    };

    axios(config)
    .then(function (response) {
      const { data } = response
      console.log(data)
      emit('typeIncoming', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const {url, name} = props
</script>

<template>
  <li
    @click="fetchType(url)"
  >
    {{ name }}
  </li>
</template>