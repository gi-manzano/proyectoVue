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
                    @keyup="validarNombre"
                    id="inline-form-input.name"
                    class="form-control form-control-lg"
                    placeholder="Usuario"
                    />
                  </div>
            <div class="col-md-12 mb-2" v-if='mensajeNombre != ""'>
              <p class="errorForm">{{ mensajeNombre }}</p>
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
                    v-model="usuario.email"
                    @keyup="validarEmail"/>
                  </div>
            <div class="col-md-12 mb-2" v-if='mensajeMail != ""'>
              <p class="errorForm">{{ mensajeMail }}</p>
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
                    v-model="usuario.contrasena"
                    @keyup="validarPassword"/>
                  </div>
            <div class="col-md-12 mb-2" v-if='mensajePassword != ""'>
              <p class="errorForm">{{ mensajePassword }}</p>
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
  /* eslint-disable */ 
  name: " RegistroPage",
  data() {
    return {
      usuario: {
        nombre: "",
        email: "",
        password: "",
      },
      mensajeNombre: "",
      mensajeMail: "",
      mensajePassword: "",
    };
  },
  methods: {
    async createUser() {
      if (this.checkFrom ()) {
      const newUser = {
        name: this.usuario.nombre,
        password: this.usuario.password,
        email: this.usuario.email,
        isAdmin: false,
      };
      let resp = await axios.post(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/users",
        newUser
      );
      this.usuarios = resp.data;
      this.$router.push('/login')
      alert ('Listo, ya estas registrado!!')
      }
    },
     checkForm () {
            return (this.validarNombre() && this.validarMail() && this.validarEdad() && this.validarPassword())
            },
        validarNombre(){
            let regex1 = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            if (regex1.test(this.usuario.nombre)){
                this.mensajeNombre = "";
                return true;
            } else {
                this.mensajeNombre = "Nombre inválido";
                return false;
            }
        },
        validarEmail(){
            let regex2 =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (regex2.test(this.usuario.email)){
                this.mensajeMail = "";
                return true;
            } else {
                this.mensajeMail = "Email inválido";
                return false;
            }
        },
        validarPassword(){
            let regex3 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (regex3.test(this.usuario.password)){
                this.mensajePassword = "";
                return true;
            } else {
                this.mensajePassword = "Clave inválida"
                return false;
            }
        }
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