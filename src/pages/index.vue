import { createWebHistory } from 'vue-router';
<template>
    <div>
        hello world by unplugin-vue-router
    </div>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/">home</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
</script>

<style scoped>

</style>