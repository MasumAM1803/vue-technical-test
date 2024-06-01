<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>

<template>
    <div>
        <div class="flex justify-center">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-4 mt-6 rounded-full shadow-lg" src="/img/mam-logo.png" alt="Bonnie image"/>
                    <h5 class="mb-1 text-sm font-medium text-gray-600 dark:text-white">created by</h5>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ma'sum Abdul Matin</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Junior Software Developer</span>
                    <div class="flex mt-4 md:mt-6">
                        <a href="https://masumam.site/" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">WEB</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>