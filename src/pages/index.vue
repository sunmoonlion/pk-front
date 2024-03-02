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
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';


const msg = ref("hello world by unplugin-auto-import");

const target = ref(null);

const {x,y,isOutside} = useMouseInElement(target)
</script>

<style scoped>

</style>