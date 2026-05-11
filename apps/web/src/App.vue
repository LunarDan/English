<template>
    <Login />
    <RouterView />
    <Search />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Search from '@/components/Search/index.vue'
import Login from '@/components/Login/index.vue'
import { IS_SHOW_LOGIN } from '@/components/Login/type'
import { provide,ref } from 'vue'
provide(IS_SHOW_LOGIN, ref(false))
</script>

<style lang="scss" scoped>
</style>
