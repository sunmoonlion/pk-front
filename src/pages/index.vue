import { createWebHistory } from 'vue-router';
<template>
    <div ref="target">
        hello world by unplugin-vue-router
    </div>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/">home</RouterLink>
    <h1 class="text-3xl font-bold underline">hello world</h1>
    <div>{{ msg }}</div>
    <div>x:{{ x }},y:{{ y }},isOutside:{{ isOutside }}</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';


const msg = ref("hello world by unplugin-auto-import");

const target = ref(null);

const {x,y,isOutside} = useMouseInElement(target)
</script>

<style scoped>

</style>