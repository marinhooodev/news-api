<template>
  <div class="w-full my-auto flex flex-col items-center justify-center py-10 mx-auto ">
    <div
      id="signupBox"
      class="p-8 border border-gray-500 rounded-md flex flex-col justify-center items-stretch gap-4"
    >
      <div>
        <small>Post news to public!</small>
        <h2>Create News</h2>
      </div>

      <div class="mb-2">
        <label for="" class="pb-2 block">News Title:</label>
        <InputText
          v-model="postTitle"
          placeholder="Something happened in..."
          class="w-full"
        />
      </div>
      <div class="mb-2">
        <label for="" class="pb-2 block">News Banner:</label>
        <input type="file" name="image" id="image" class="w-full text-sm p-inputtext" ref="postImage">
      </div>



      <div class="w-full">
        <label for="" class="pb-2 block">News Content:</label>
        <Editor v-model="postContent" editorStyle="height: 320px" />
      </div>

      <div class="flex justify-end w-full mt-2">
        <Button
          label="Preview and Post"
          :loading="loading"
          @click="visible = true"
          :disabled=" postTitle.length <= 0 || postContent.length <= 0 "
        ></Button>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    maximizable
    modal
    header="Preview"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="p-2">
      <div class="mb-3 w-full">
        <h2>{{ postTitle }}</h2>
      </div>

      <div v-html="postContent" class="w-full"></div>
    </div>

    <template #footer>
      <div class="flex gap-2 pt-5">
        <Button
          label="Cancel"
          text
          severity="secondary"
          @click="visible = false"
          autofocus
        />
        <Button label="Post" @click="visible = false" autofocus />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { api } from "@/plugins/axios";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Editor from "primevue/editor";
import FileUpload from "primevue/fileupload";
import InputText from "primevue/inputtext";
import { ref } from "vue";

const postContent = ref<string>("");
const postTitle = ref<string>("");
const postBanner = ref<any>();
const imageInput = ref<HTMLInputElement | null>(null)

const visible = ref<boolean>(false);
const loading = ref<boolean>(false);

const sendPost = async () => {
  try {
    await api.post("/news", {
      hat: "",
      title: postTitle.value,
      content: postContent.value,
      author: "Zé da Manga",
    });
  } catch (error) {

  }
};
</script>

<style scoped>
#signupBox {
  backdrop-filter: blur(2px);
  background: rgba(white, 0.05);
}
</style>
