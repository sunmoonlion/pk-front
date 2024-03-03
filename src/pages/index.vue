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
    <HelloWorld></HelloWorld> 
    <userUserComponent></userUserComponent>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <!-- custom plane -->
    <div class="i-ion:airplane" style="color: red;font-size: 1.5rem;"></div>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';


const msg = ref("hello world by unplugin-auto-import");

const target = ref(null);

const {x,y,isOutside} = useMouseInElement(target)
</script>

<style scoped>

</style>

<route lang="yaml">
    meta:
        layout:default
</route>