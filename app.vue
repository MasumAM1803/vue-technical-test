<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div>
      <NuxtLayout>
        <!-- <UContainer> -->
          <NuxtPage />
        <!-- </UContainer> -->
        
        <!-- <UModals /> -->
      </NuxtLayout>
    </div>
</template>
