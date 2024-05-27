<template>
  <!-- Header  Icon -->
  <i class="fa fa-bars" @click="visible = !visible"></i>

  <Sidebar
    v-model:visible="visible"
    header="Welcome"
    position="right"
    id="sidebar"
    class="backdrop-blur"
  >
    <template #header>
      <div class="flex gap-2 items-center justify-start px-3">
        <i class="fa fa-user rounded-full p-2 border border-gray-400"></i>
        <p>Username</p>
      </div>
    </template>
    <div
      class="w-full h-full flex flex-col justify-between items-stretch pt-5 border-t border-gray-400"
    >
      <div>
        <router-link
          to="/"
          class="flex items-center justify-start gap-2 p-3 rounded-xl mb-3 last-of-type:mb-0"
          @click="visible = !visible"
        >
          <i class="fa-regular fa-newspaper"></i>
          News
        </router-link>
        <router-link
          to="/"
          class="flex items-center justify-start gap-2 p-3 rounded-xl mb-3 last-of-type:mb-0"
          @click="visible = !visible"
        >
          <i class="fa fa-circle-plus"></i>
          Post News
        </router-link>
        <router-link
          to="/"
          class="flex items-center justify-start gap-2 p-3 rounded-xl mb-3 last-of-type:mb-0"
          @click="visible = !visible"
        >
          <i class="fa fa-scroll"></i>
          My News
        </router-link>
        <router-link
          to="/"
          class="flex items-center justify-start gap-2 p-3 rounded-xl mb-3 last-of-type:mb-0"
          @click="visible = !visible"
        >
          <i class="fa fa-lock"></i>
          Admin
        </router-link>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex justify-around mb-2">
          <router-link to="/login">
            <Button
              label="Log-in"
              link
              class="text-gray-400"
              @click="visible = !visible"
            ></Button>
          </router-link>
          <router-link to="/sign-up">
            <Button
              label="Create an Account"
              link
              class="text-gray-400"
              @click="visible = !visible"
            ></Button>
          </router-link>
        </div>
        <Button
          icon="fa fa-right-from-bracket"
          class="border"
          label="logout"
          severity="danger"
          outlined
          @click="visible = !visible"
        ></Button>
      </div>
    </div>
  </Sidebar>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import { ref } from "vue";

const visible = ref<boolean>(false);
</script>

<style lang="scss">
#sidebar {
  background: rgba(black, 0.5);
}
</style>
