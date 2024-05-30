<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

// const { data: test } = await useFetch('https://dummyjson.com/test');
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Login</NuxtLink></li>
          <li><NuxtLink to="/product">Product</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="absolute flex justify-center items-center h-full w-full">
      <!-- <ModalDefault /> -->
      <!-- <p>Page visits: {{ test.status }}</p> -->
      <NuxtPage />
    </div>
  </div>
</template>
