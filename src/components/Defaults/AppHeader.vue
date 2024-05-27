<template>
    <header class="fixed w-full z-30 backdrop-blur border-b border-gray-400 shadow-2xl">
        <div class="w-full flex justify-between items-center px-8 py-2">
            <div class="flex items-center gap-2 "><img src="@/assets/img/news.png" alt="Logo" class="max-w-[50px] drop-shadow-sm"> <span class="text-2xl">News</span></div>
            <SideBarMenu />
        </div>
    </header>
</template>

<script setup lang="ts">
import SideBarMenu from './SidebarMenu.vue';


</script>

<style scoped lang="scss">
header {
background: rgba(black, 0.5)

}
</style>