<template>
<div>
<section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5 ">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Mi Comida App</h3>
            <b-form>

              <div class="row">
                <div class="col-md-12 mb-4">

                  <div class="form-outline">
                    <label class="form-label" for="nombre">Tu Email</label>
                    <b-form-input 
                    type="text" 
                    id="nombre" 
                    class="form-control form-control-lg" 
                    v-model="email"/>
                  </div>

                  <div class="form-outline">
                    <label class="form-label" for="pwd">Tu Password</label>
                    <b-form-input 
                    type="password" 
                    id="password" 
                    class="form-control form-control-lg" 
                    v-model="password"/>
                  </div>
                </div>

              <div class="mt-4 pt-2">
                
                <b-button @click="validarLogin" variant="primary">Login</b-button>
              </div>
           </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>

import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      usuario: "",
      email: "",
      password: "",
      usuarios: [],
    };
  },
  methods: {
    validarLogin() {
      /*eslint-disable*/
      debugger;
      let data = this.usuarios.find(
        (o) => o.email === this.usuario && o.password === this.password
      ); 
      localStorage.clear();
      if (data) {
        localStorage.setItem("isLogged", "true");
        if (data?.isAdmin) {
          localStorage.setItem("isAdmin", "true");
          this.$router.push("admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          this.$router.push("main");
        }
      }
    },
  },
  async mounted() {
    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/users"
    );
    this.usuarios = resp.data;
   
  },
};
</script>

<style scoped>
.custom-card {

background: #b7bcaa;

}

.card-body {
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(139,195,150,0.8130602582830007) 100%);
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 5px;
line-height: 2;
padding-left: 20px;
padding-right: 20px;
}

.card-registration .select-arrow {
top: 13px;
}
</style>