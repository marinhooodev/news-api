<template>
  <div id="banner">
    <img src="" alt="" />
  </div>
  <MainContainer>
    {{ token }}
    <div v-for="item in list" :key="item.id" class="border border-slate-300 bg-slate-400 p-5">
      <img :src="item.image" alt="" class="max-w-[200px]">
    </div>
  </MainContainer>
</template>

<script setup lang="ts">
import { getToken } from "@/token";
import MainContainer from "../MainContainer.vue";
import { api } from "@/plugins/axios";
import { onMounted, ref } from "vue";

const token = getToken();
const list = ref([])


const getNews = async () => {
await api.get("news").then((res) => {
  list.value = res.data
  console.log(res.data)
})

};

onMounted(() => {
  getNews()
})
</script>

<style scoped></style>
