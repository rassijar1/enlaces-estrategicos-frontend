import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue';


const routes = [
{path:'/', name:'Home', component:Home},
{path: '/login', name:'Login', component:()=>import("../components/Login.vue") },
{path: '/register', name:'Register', component:()=>import("../components/Register.vue") },
{path: '/forgot-password', name:'ForgotPassword', component:()=>import("../components/ForgotPassword.vue") },
{path: '/password-reset/:token', name:'ResetPassword', component:()=>import("../components/ResetPassword.vue") },
{path: '/posts',name: 'PostIndex',component: () => import('../components/PostIndex.vue')},
{path: '/posts/create',name: 'PostCreate',component: () => import('../components/PostCreate.vue')},
{path: '/posts/:id/edit',name: 'PostEdit',component: () => import('../components/PostEdit.vue')}



];

const router= createRouter({

history:createWebHistory(),
routes,


})


export default router;