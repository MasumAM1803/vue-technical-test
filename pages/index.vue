<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>

<template>
    <div class="flex justify-center">
        <CardDefault type="profile" /> 
    </div>
</template>