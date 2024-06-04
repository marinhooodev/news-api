<template>
    <div class="w-full my-auto flex flex-col items-center justify-center py-10">
      <div id="signupBox"
        class="p-8 border border-gray-500 rounded-md  flex flex-col justify-center items-stretch gap-4"
      >
        <div>
            <small>welcome back again!</small>
            <h2>Login</h2>
        </div>
  
        
          
          <Message severity="warn" v-if="emptyInputs" class="w-full text-sm" :closable="false">There are empty inputs!</Message>
          <Message severity="error" v-if="error" class="w-full text-sm" :closable="false">{{ errorMessage }} </Message>
    
          
  
        <div class="flex flex-col items-stretch justify-center my-1">
          <label for="email">Email: </label>
          <InputText id="email" v-model="email" placeholder="myemail@email.com" class="text-sm w-full" />
        </div>
        <div class="flex flex-col items-stretch justify-center my-1">
          <label for="password">Password: </label>
          <Password input-id="password" v-model="password" input-class="text-sm w-full"  :feedback="false" toggleMask/>
        </div>

  
        <div class="flex justify-end w-full mt-5">
          <Button label="Log-in" :loading="loading" @click="registerUser"></Button>
        </div>
      </div>
    </div>
  
    <Toast />
  </template>
  
  <script setup lang="ts">
  import { api } from "@/plugins/axios";
  import Button from "primevue/button";
  import InputText from "primevue/inputtext";
  import Message from "primevue/message";
  import Password from "primevue/password";
  import Toast from "primevue/toast";
  import { useToast } from "primevue/usetoast";
  import { ref } from "vue";
  import Cookies from 'js-cookie';
import { useRouter } from "vue-router";

  // UTILS
  const loading = ref<boolean>(false)
  const toast = useToast()
  const router = useRouter()
  
  // INPUTS
  const email = ref<string>("")
  const password = ref<string>("")
  
  // MESSAGE IF's
  const emptyInputs = ref<boolean>(false)
  const error = ref<boolean>(false)
  const errorMessage = ref<string>("")
  
  const registerUser = async () => {
      emptyInputs.value = false
  
      if(!email.value.trim().length || password.value.trim().length === 0) {
          emptyInputs.value = true
          return
      }
      
      loading.value = true

      await api.post("/login", {
          email: email.value,
          password: password.value
      })
      .then((res) => {
          Cookies.set("auth_token", res.data.token, {expires: 7})

          router.push("/")
      })
      .catch((err) => {
          errorMessage.value = err
          error.value = true
      })
      .finally(() => loading.value = false)
  
  }
  
  </script>
  
  <style scoped lang="scss">
  #signupBox {
      backdrop-filter: blur(2px);
      background: rgba(white, 0.05);
  }
  
  input::placeholder {
      @apply text-gray-500
  }
  </style>
  