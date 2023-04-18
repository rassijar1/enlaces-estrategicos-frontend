<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRoute } from "vue-router";

const route =useRoute();
const authStore=useAuthStore();

const form=ref({

password: "",
password_confirmation: "",
email: route.query.email,
token: route.params.token

});

</script>


<template>
	
<div class="mt-12" align="center">
	<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="authStore.handleResetPassword(form)">
  	<div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status">
      {{authStore.status}}        
      </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Nueva Contraseña
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newpassword" type="password" v-model="form.password" placeholder="*********">

      <div v-if="authStore.errors.password" class="flex">
        <span class="text-red-400 text-sm m-2 p-2">{{authStore.errors.password[0]}}</span>
      </div>

      

    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Confirmar Contraseña
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" v-model="form.password_confirmation"  placeholder="*********">

      
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Restablecer contraseña
      </button>
    
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Enlaces Estrategicos. Todos los derechos reservados.
  </p>
</div>
</div>


</template>