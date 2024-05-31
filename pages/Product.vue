<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

import { storeToRefs } from 'pinia'
import { useProductsStore } from '~/store/products';

const store = useProductsStore();
const { fetchProducts } = store;
const { products } = storeToRefs(store)

await fetchProducts();
console.log(products.value)
</script>
<template>
    <div>
        <h1 class="text-2xl">Product</h1>
        <ul v-for="product in products" :key="product.id">
            <li>{{ product.title }}</li>
        </ul>
    </div>
</template>