<template>
    <div>

    </div>
</template>

<!-- <script setup lang="ts">
//重定向方案2：编程式导航
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/')
</script>

<style scoped>

</style> -->
<!-- 重定向方案3：pages官方方案
<route lang="yaml">
    name: home
    redirect: 
        path: /
</route> -->

<!-- 重定向方案4：pages官方方案json格式 -->
<route>
    {name:'home',redirect:'/'}
</route>
