<template>
<div class="carrito-card">
     <h1>{{ $store.state.msg }}</h1>   
  <h1>Carrito 🛍</h1>

  <ul>
    <li v-for="(item, index) in $store.state.carrito" :key="index">
      {{item.titulo}} - {{item.cantidadCarrito}}
      <p>${{item.precio}}</p>
      <button class="btn btn-success mx-2" 
      @click="sumarUno(item)">+</button>
      <button class="btn btn-success mx-2" 
      @click="restarUno(item)">-</button>
    <hr>
    </li>
  </ul>
  <ul>
    <h1>Productos</h1>
    <li
     v-for="(item, index) in $store.state.products"
        :key="index"
        @click="agregarProductoAlCarrito(item)"
      >
        {{ item.name }}>

    </li>
  </ul>

  <p class="text-center">Precio Total: $ {{precioTotal}}</p>
      <button class="btn">Pagar</button>
  <hr>
</div>
</template>

<script>
import axios from "axios";
export default {
name:'CarritoPage',
data(){
 return {
  cantidadCarrito: 0,
  product: {
    title: '',
    description: '',
    amount: '',
    price: 0
  }
 };
},
async mounted() {
    /*eslint-disable*/
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/main");
    }
    let paramId = this.$route.params.id
    let resp = await axios.get(
      "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + paramId
    );
    this.product = resp.data;
  },


methods:{
    sumarUno(){
        this.cantidadCarrito +=1;
        },
    restarUno(){
        this.cantidadCarrito >= 1 ? this.cantidadCarrito -= 1 : null;
        }, 
    carroLocalMethod (newObject,)  {
        this.$emit("emitActualizarCarrito", newObject)
    },   
    agregarProductoAlCarrito(payload) {
      let o = { ...payload, cantidadCarrito: 1 };
      this.$store.commit("agregarAlCarrito", o);
    },
    async Comprar() {
        "https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + this.$route.params.id,
        this.product
      alert('Compra Finalizada')
    },
  },
};
</script>

<style scoped>
.carrito-card {
  background-color: rgb(176, 228, 240);
}
.btn {
  background-color: rgb(202, 240, 35);
}
</style>