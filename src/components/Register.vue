<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore=useAuthStore();


const form=ref({

name:'',
email:'',
password:'',
password_confirmation:''



});




</script>

<template>

<div class="mt-12" align="center">
	<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="authStore.handleRegister(form)">
    <div class="mb-4">
     
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="form.name" placeholder="Nombre">
      <div v-if="authStore.errors.name" class="flex">
        <span class="text-red-400 text-sm m-2 p-2">{{authStore.errors.name[0]}}</span>
      </div>
    </div>

    <div class="mb-4">
     
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="form.email" placeholder="Usuario">
      <div v-if="authStore.errors.email" class="flex">
        <span class="text-red-400 text-sm m-2 p-2">{{authStore.errors.email[0]}}</span>
      </div>
    </div>

    <div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="form.password" placeholder="Contraseña">
      <div v-if="authStore.errors.password" class="flex">
        <span class="text-red-400 text-sm m-2 p-2">{{authStore.errors.password[0]}}</span>
      </div>
    </div>

<div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password_confirmation" type="password" v-model="form.password_confirmation" placeholder="Confirme contraseña">
      
    </div>


    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
     Registrar
      </button>
     
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
   &copy;2023 Enlaces Estrategicos. Todos los derechos reservados.
  </p>
</div>
</div>

</template>
