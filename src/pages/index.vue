import { createWebHistory } from 'vue-router';
<template>
    <div >
        home
    </div>
    
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
onMounted(() => {
    registerSW({
        immediate: true,
        onRegisteredSW(url, registration) {
            console.log(url, registration),
                setInterval(() => {
                    registration && registration.update()
                }, 360000)
        }
            })
            
        })   

</script>

<style scoped></style>

<route lang="yaml">
meta:
    layout: default
</route>