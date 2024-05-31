<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div class="absolute flex justify-center items-center h-full w-full">
      <NuxtPage />
    </div>
</template>
