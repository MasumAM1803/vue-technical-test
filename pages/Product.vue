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
// console.log(products.value)
</script>
<template>
    <div>
        <h1 class="text-2xl font-semibold">Product</h1>
        <!-- <ul v-for="product in products" :key="product.id">
            <li>{{ product.title }}</li>
        </ul> -->
        <div class="flex justify-end mt-6">
            <button type="button" class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded text-sm px-4 py-2 text-center inline-flex items-center me-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                <svg class="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
                New product
            </button>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" class="px-6 py-3">
                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900  dark:text-white">
                            {{ product.title }}
                        </th>
                        <td class="px-6 py-4">
                            {{ product.description }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.category }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.price }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.stock }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline me-6">Edit</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>