<template>
  <section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registrate Aquí</h3>
            <b-form class="formulario"> 

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <label class="form-label" for="firstName">Nombre</label>
                    <b-form-input type="text"  
                    v-model="usuario.nombre"
                    id="inline-form-input.name"
                    class="form-control form-control-lg"
                    placeholder="Usuario"
                    />
                  </div>
                </div>
                <hr>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="lastName">Apellido</label>
                    <b-form-input 
                    type="text" 
                    id="lastName" 
                    class="form-control form-control-lg" 
                    v-model="usuario.apellido"/>
                  </div>
                </div>
                <hr>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="firstName">Email</label>
                    <b-form-input 
                    type="text" 
                    id="firstName" 
                    class="form-control form-control-lg" 
                    v-model="usuario.email"/>
                  </div>
                </div>
                <hr>
                  <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="password">Contraseña</label>
                    <b-form-input 
                    type="password" 
                    name="password" 
                    class="form-control form-control-lg" 
                    v-model="usuario.contrasena"/>
                  </div>
                </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-secondary btn-lg" @click="createUser" value="Registrate" />
              </div>
           </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import axios from "axios";

export default {
  name: " RegistroPage",
  data() {
    return {
      usuario: "",
      password: "",
      mail: "",
    };
  },
  methods: {
    async createUser() {
      const newUser = {
        name: this.usuario,
        password: this.password,
        email: this.mail,
        isAdmin: false,
      };
      let resp = await axios.post(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/users",
        newUser
      );
      this.usuarios = resp.data;
      this.$router.push('/login')
      alert ('Listo, ya estas registrado!!')
    },
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
top: 10px;
}
</style>