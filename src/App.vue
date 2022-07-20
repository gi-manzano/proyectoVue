<template>
  <div id="app">
    <div v-if="!canAccess">
      <ul class="nav nav-pills nav-justified mb-3">
        <li class="nav-item">
          <a class="navbar-toggler active" data-mdb-toggle="pill" @click="cambiardeRutaLogin" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item">
          <a class="navbar-toggler" data-mdb-toggle="pill" @click="cambiardeRutaLogin" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
      </ul>

      <login-page 
      v-show="estoyEnLogin"
      @changeFlag="recibiElMensaje" 
      :usuarios="listadoDeUsuarios"/>
    
      <registro-page
      v-show="!estoyEnLogin"
      @enviarRegistro="recibirRegistro" 
      />
    </div>
    
    <div v-else>
    <main-page 
    v-if="canAccess" 
    @changeFlagFromMain="recibiElMensaje" 
    :productos="listadoDeProductos"
    @emitVerDetalle="recibirVerDetalle"
    @emitAgregarAlCarrito="recibirAgregarAlCarrito"
    />
    
    <carrito-page :carro='carrito' @emitActualizarCarritoPrincipal="recibirActualizarAlCarrito"/>
    
    <detalle-page v-if="selected" :producto="selected"/>

    </div>
</div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import RegistroPage from './components/RegistroPage.vue'
import MainPage from './components/MainPage.vue'
import CarritoPage from './components/CarritoPage.vue'
import DetallePage from './components/DetallePage.vue'



export default {
  name: 'App',
  components: {
    MainPage,
    LoginPage,
    RegistroPage,
    CarritoPage,
    DetallePage,
    
    
  },
  data(){
    return{
    canAccess:false,
    estoyEnLogin:true,
    listadoDeUsuarios:[],
    listadoDeProductos:[
  

      
     ],
    carrito:[],
    selected: null
    }
  },
  methods:{
    recibiElMensaje(){
      this.canAccess = !this.canAccess
    },
    recibirRegistro(payload){
      this.listadoDeUsuarios.push(payload)
    },
    recibirAgregarAlCarrito(payload){
      this.carrito.push(payload)
    },
    recibirActualizarAlCarrito(payload){
          this.carrito = [...payload]
          //this.carrito = Object.assing(this.carrito,payload)
    },
    recibirVerDetalle(payload){
      this.selected = payload
    },
    cambiardeRutaLogin(){
      this.estoyEnLogin = !this.estoyEnLogin;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
