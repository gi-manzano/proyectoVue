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

    <carrito-page :carro='Carrito' @emitActualizarCarritoPrincipal="recibirActualizarAlCarrito"
    />

    <detalle-page v-if="selected" :producto="selected"/>
    
    <main-page 
    v-if= "canAccess"
    @changeFlagFromMain="recibiElMensaje" 
    :menú="listadoDeMenú"
    @emitVerDetalle="recibirVerDetalle"
    @emitAgregarAlCarrito="recibirAgregarAlCarrito"
    />
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
    listadoDeMenú:[

      {
        'id': 1,
        'titulo': 'pastas',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/6a/b6/e8/6ab6e8d07b614c2390505eaf5c3a9630.jpg'
      },
      {
        'id': 2,
        'titulo': 'pastas',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/20/0e/46/200e46b9cd4f24f2225078aef2491a12.jpg'
      },
      {
        'id': 3,
        'titulo': 'pastas',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/55/e4/c7/55e4c7852ac6bc19e02cb95b66b77bb6.jpg'
      },
      {
        'id': 4,
        'titulo': 'Pizza',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/fc/50/3e/fc503eb0404f90ad4214104a3314475f.jpg'
      },
      {
        'id': 5,
        'titulo': 'Churros',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/cd/c8/63/cdc863190cf8953f94b2d109129191d9.jpg'
      },
      {
        'id': 6,
        'titulo': 'Nachos',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/fe/cc/98/fecc98685308601789e4e6eaf01bccb2.jpg'
      },
      {
        'id': 7,
        'titulo': 'Helado',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/93/ea/5e/93ea5e6be623f3c246b5f7ae5e128137.jpg'
      },
      {
        'id': 8,
        'titulo': 'Pastel de lima',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/f6/15/e7/f615e77eb435c0f6bb37f78145a65c5e.jpg'
      },
      {
        'id': 9,
        'titulo': 'Pastel de chocolate y fresas',
        'stock': 23,
        'precio': 590,
        'imagen': 'https://i.pinimg.com/564x/b5/81/c3/b581c34329a0fabdcb8a42cf12e33abe.jpg'
      },
    
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
          this.carrito = Object.assign(this.carrito,payload)
          
    },
   
    recibirVerDetalle(payload){
      this.selected =payload
    },

    cambiardeRutaLogin(){
      this.estoyEnLogin = !this.estoyEnLogin;
    }
  }
}
</script>


<style scope>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
