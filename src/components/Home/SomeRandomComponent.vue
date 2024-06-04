<template>
  <div id="banner">
      <img src="" alt="">
  </div>
  <MainContainer>
    
      {{ token }}
    
  </MainContainer>
</template>

<script setup lang="ts">
import { getToken } from '@/token';
import MainContainer from '../MainContainer.vue';

const token = getToken()
</script>

<style scoped>
  
</style>