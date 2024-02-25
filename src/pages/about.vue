<template>
    <div > 
        <RouterLink to="/about">about</RouterLink>
        <RouterLink to="/">home</RouterLink>      
        <h1>This is an about page</h1>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>