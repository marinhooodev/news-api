<template>
  <div id="mainContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#mainContainer {
    display: flex;
    flex-direction: column;
    min-height: calc(100dvh - 50px);
    @apply max-w-screen-lg w-full flex justify-center mx-auto
}
</style>
