<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/Defaults/AppHeader.vue';
import AppFooter from './components/Defaults/AppFooter.vue';
import MainContainer from './components/MainContainer.vue';
</script>

<template>
  <AppHeader />
  <MainContainer>
    <RouterView />
  </MainContainer>
  <AppFooter />
</template>

<style scoped></style>
