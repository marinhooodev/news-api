<template>
  <div id="banner">
    <img src="" alt="" />
  </div>
  <MainContainer>
    {{ token }}
    <div v-for="post in newsList" :key="post._id" class="newsCard border border-slate-300 p-5">
      <router-link :to="'/news/' + post._id">
        <img :src="'https://api-ts-node.onrender.com/uploads/' + post.image" alt="" class="max-w-[200px]">
        <h3>{{post.title}}</h3>
        <p v-html="post.content"></p>
      </router-link>
    </div>
  </MainContainer>
</template>

<script setup lang="ts">
import { getToken } from "@/token";
import MainContainer from "../MainContainer.vue";
import { api } from "@/plugins/axios";
import { onMounted, ref } from "vue";
import type IPost from "@/interfaces/IPost";

const token = getToken();
const newsList = ref<IPost[]>([])


const getNews = async () => {
await api.get("news").then((res) => {
  newsList.value = res.data
  console.log(res.data)
})

};

onMounted(() => {
  getNews()
})
</script>

<style scoped lang="scss">
.newsCard {
  background: #ffffff23;
  backdrop-filter: blur(2px);
}
</style>
