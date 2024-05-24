<template>
  <div class="w-full my-auto flex flex-col items-center justify-center py-10">
    <div id="signupBox"
      class="p-8 border border-gray-500 rounded-md  flex flex-col justify-center items-stretch gap-4"
    >
      <div>
          <small>is it your first time here?</small>
          <h2>Create an account</h2>
      </div>

      
        <Message severity="success" v-if="successfulRegister" class="w-full text-sm" :closable="false">Successfully Registered!</Message>
        <Message severity="warn" v-if="emptyInputs" class="w-full text-sm" :closable="false">There are empty inputs!</Message>
        <Message severity="error" v-if="error" class="w-full text-sm" :closable="false">{{ errorMessage }} </Message>
  
        

      <div class="flex flex-col items-stretch justify-center my-1">
        <label for="username">Name: </label>
        <InputText id="username" v-model="username" placeholder="Peter Jackson " class="text-sm w-full" />
      </div>
      <div class="flex flex-col items-stretch justify-center my-1">
        <label for="email">Email: </label>
        <InputText id="email" v-model="email" placeholder="myemail@email.com" class="text-sm w-full" />
      </div>
      <div class="flex flex-col items-stretch justify-center my-1">
        <label for="password">Password: </label>
        <Password input-id="password" v-model="password" input-class="text-sm w-full" toggleMask/>
      </div>
      <div class="flex flex-col items-stretch justify-center my-1">
        <label for="confirmPassword">Confirm Password: </label>
        <Password input-id="confirmPassword" v-model="confirmPassword" input-class="text-sm w-full" :feedback="false" toggleMask  />
      </div>

      <div class="flex justify-end w-full mt-5">
        <Button label="Register" :loading="loading" @click="registerUser"></Button>
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

// UTILS
const loading = ref<boolean>(false)
const toast = useToast()

// INPUTS
const username = ref<string>("")
const email = ref<string>("")
const password = ref<string>("")
const confirmPassword = ref<string>("")

// MESSAGE IF's
const successfulRegister = ref<boolean>(false)
const emptyInputs = ref<boolean>(false)
const error = ref<boolean>(false)
const errorMessage = ref<string>("")

const registerUser = async () => {
    emptyInputs.value

    if(!username.value) {
        emptyInputs.value = true
        return
    }

    await api.post("/register", {
        name: username.value,
        email: email.value,
        password: password.value
    })
    .then((res) => {
        successfulRegister.value = true
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
