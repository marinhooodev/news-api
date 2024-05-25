<template>
  <div id="mainContainer">
    <slot class="block"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    padding-top: 70px; // Header Height
    @apply max-w-[90vw] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg w-full mx-auto
} 
</style>
