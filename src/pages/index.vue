import { createWebHistory } from 'vue-router';
<template>
    <div>
        hello world by unplugin-vue-router
    </div>
    <h1 class="text-3xl font-bold underline">hello tailwind</h1>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/">home</RouterLink>
    <i-mdi-account style="color: red;font-size: 1.5rem"/>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
</script>

<style scoped>

</style>