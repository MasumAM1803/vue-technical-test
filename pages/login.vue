<script setup lang="ts">
definePageMeta({
    layout: 'auth',
    middleware: 'auth'
})
</script>
<template>
    <CardDefault type="login" /> 
</template>