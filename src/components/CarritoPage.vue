<template>
<div class="carrito-card">
        
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

export default {

name:'CarritoPage',


data(){

    return {}
},

// mounted(){
//     this.carroLocal = this.carro
// },

methods:{
    sumarUno(payload){
        payload.cantidadCarrito++;
        this.precioTotal += payload.precio
        },
    restarUno(payload){
        payload.cantidadCarrito > 0? payload.cantidadCarrito --: null;
        this.precioTotal -= payload.precio
        }, 
    carroLocalMethod (newObject,)  {
        this.$emit("emitActualizarCarrito", newObject)
    },   
    agregarProductoAlCarrito(payload) {
      let o = { ...payload, cantidadCarrito: 1 };
      this.$store.commit("agregarAlCarrito", o);
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