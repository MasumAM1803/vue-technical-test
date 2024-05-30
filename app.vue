<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

const { data: test } = await useFetch('https://dummyjson.com/test');
</script>

<template>
  <div>
    <ModalDefault />
    <p>Page visits: {{ test.status }}</p>
  </div>
</template>
