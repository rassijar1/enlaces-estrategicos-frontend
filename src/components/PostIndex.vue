<script setup>

import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore= useAuthStore();

onMounted(async()=>{



//get user

await authStore.getUser();
await authStore.getPosts();



});






</script>

<template>

  
<div v-if="!authStore.user">
  <br>


</div>
<div v-else>
  
  <h1>{{authStore.user.name}}</h1>
<p>{{authStore.user.email}}</p>

<div class="mt-12">
      <div class="button-m-2 p-2" align="left">
      
        <router-link :to="{name:'PostCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded ">Crear</router-link>
      </div>
      <br>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Titulo
                </th>
                <th scope="col" class="px-6 py-3">
                    Resumen
                </th>
                <th scope="col" class="px-6 py-3">
                    Introduccion
                </th>
                <th scope="col" class="px-6 py-3">
                    Cuerpo
                </th>
                <th scope="col" class="px-6 py-3">
                    Conclusion
                </th>
                <th scope="col" class="px-6 py-3">
                   Acciones 
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in authStore.posts" :key="post.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <td class="px-6 py-4">{{ post.titulo}}</td>
                   <td class="px-6 py-4">{{ post.resumen}}</td>
                     <td class="px-6 py-4">{{ post.introduccion}}</td>
                   <td class="px-6 py-4">{{ post.cuerpo}}</td>
                     <td class="px-6 py-4">{{ post.conclusion}}</td>
                   <td class="px-6 py-4 space-x-2">
                      
                      <router-link :to="{name: 'PostEdit', params:{id:post.id}}" class="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded">
                   Editar</router-link>
                   
                   <button @click="authStore.destroyPost(post.id)" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Eliminar</button>

                   </td>
            </tr>
            </tbody>
    </table>
</div>




    </div>
</div>
</template>
