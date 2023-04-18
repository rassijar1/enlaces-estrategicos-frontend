<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route =useRoute();
const authStore=useAuthStore();

onMounted(async()=>{



//get user

await authStore.getUser();
await authStore.getPosts();
// await authStore.handleLogout();
// await authStore.getToken();


});

const form=ref({

titulo:"",
resumen:"",
introduccion:"",
cuerpo:"",
conclusion:"",
id_post_fk:authStore.user.id


});



</script>
<template>
<div v-if="!authStore.user">
    

</div>

<div v-else>
    
 <div class="mt-12">
        
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="authStore.storePost(form)">
            
            <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Titulo</label>
    <input type="text" id="name" v-model="form.titulo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div v-if="authStore.errors.titulo">
    <span class="text-sm text-red-400">{{authStore.errors.titulo[0]}}</span>


</div>
<div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Resumen</label>
    <input type="text" id="slug" v-model="form.resumen" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>

<div v-if="authStore.errors.resumen">
    <span class="text-sm text-red-400">{{authStore.errors.resumen[0]}}</span>


</div>

<div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Introduccion</label>
    <input type="text" id="slug" v-model="form.introduccion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>

<div v-if="authStore.errors.introduccion">
    <span class="text-sm text-red-400">{{authStore.errors.introduccion[0]}}</span>


</div>

<div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cuerpo</label>
    <input type="text" id="slug" v-model="form.cuerpo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>

<div v-if="authStore.errors.cuerpo">
    <span class="text-sm text-red-400">{{authStore.errors.cuerpo[0]}}</span>


</div>

<div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Conclusion</label>
    <input type="text" id="slug" v-model="form.conclusion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>

<div v-if="authStore.errors.conclusion">
    <span class="text-sm text-red-400">{{authStore.errors.conclusion[0]}}</span>


</div>

<div class="mt-4">
    <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded ">Guardar Post</button>
</div>
        </form>
    </div>


</div>

   
   
</template> 