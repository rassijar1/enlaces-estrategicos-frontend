import {
	defineStore
} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {

	state: () => ({

		authUser: null,
		authErrors: [],
		authStatus:null,
		posts: null,
		post: null,

	}),
	getters: {

		user: (state) => state.authUser,
		errors: (state) => state.authErrors,
		status:(state) =>state.authStatus
	},
	actions: {
		async getToken() {

			await axios.get("/sanctum/csrf-cookie");
		},
		async getUser() {
			await this.getToken();
			const data = await axios.get('/api/user');
			//console.log("data", data);
			this.authUser = data.data;
		},

		async handleLogin(data) {
			this.authErrors = [];
			await this.getToken();

			try {

				await axios.post('/login', {

					email: data.email,
					password: data.password


				});
				this.router.push("/");


			} catch (error) {

				if (error.response.status === 422) {

					this.authErrors = error.response.data.errors;

				}

			}

		},
		async handleRegister(data) {

			this.authErrors = [];
			await this.getToken();
			try {

				await axios.post('/register', {

					name: data.name,
					email: data.email,
					password: data.password,
					password_confirmation: data.password_confirmation



				});
				this.router.push("/");


			} catch (error) {

				if (error.response.status === 422) {

					this.authErrors = error.response.data.errors;

				}


			}
		},

		async handleLogout() {
			this.getToken();
			await axios.post('/logout').then(() => {
      //window.location.href = "/";
      this.router.push("/");
    })
    .catch(function () {
      //window.location.href = "/";
      this.router.push("/");
    });
			this.authUser = null;
			//this.router.go('/');
		},
		async handleForgotPassword(email) {
			this.authErrors = [];
			this.getToken();
			try {

				const response= await axios.post('/forgot-password', {

					email: email

				});
				this.authStatus= response.data.status;

			} catch (error) {

				if (error.response.status === 422) {

					this.authErrors = error.response.data.errors;

				}
			}


		},

		async handleResetPassword(resetData){

			this.authErrors = [];

			try{

			   const response= await axios.post('/reset-password',resetData);
				//this.router.push("/login");
				this.authStatus= response.data.status;


			}catch(error){

				if (error.response.status === 422) {

					this.authErrors = error.response.data.errors;

				}
			}

		},
		async getPosts(){


const response= await axios.get("api/V1/posts");
  this.posts = response.data.data;




},

 async getPost(id){


const response= await axios.get("api/V1/posts/" + id);
this.post= response.data.data;




},

 async storePost(data){

	try{

const response=await axios.post("api/V1/posts",data).then(() => {
      window.alert('Post Creado');
     this.router.push("/");
    });
//await router.push({name:"Home"});

	}catch(error){

		if (error.response.status===422) {

			this.authErrors = error.response.data.errors;

		}

	}
},

async updatePost(id){

try{

const response = await axios.put("api/V1/posts/" + id, this.post).then(() => {
      window.alert('Post Actualizado');
   	     this.router.push("/");
    });

}catch(error){


	if (error.response.status===422) {

			this.authErrors= error.response.data.errors;

		}
}


},

async destroyPost(id){

try{
if(window.confirm("¿Esta Seguro de borrar el registro?")){
const response= await axios.delete("api/V1/posts/" + id).then(() => {
      window.alert('Post Borrado');
		//window.location = "/";
   	   
    });

	
}else{
return;

}

}catch(error){

if (error.response.status===422) {

			this.authErrors= error.response.data.errors;

		}

}


			//console.log("data", data);
			//this.authUser = await getPosts();


},



	},


});