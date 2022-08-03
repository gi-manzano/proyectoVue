<template>
<div>
  <h1 class="display-2 text-center "> {{text | capitalize}} </h1>
    <div class="row">
      <div class = "col-md-4" v-for= "(item, index) in $store.state.carrito" :key="index">
          <div class="card" style="width: 35rem padding: 10px;">
            <img class="card-img" :src="item.imagen" :alt="item.titulo">
            <div class="card-body">
            <h5 class="card-title">{{item.titulo}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.descripcion}}</h6>
            <p class="card-subtitle mb-2 text-muted">${{item.precio}}</p>
            <button @click="agregarProductoAlCarrito(item)" class="btn btn-primary mb-2">Agregar al pedido</button><br>
            <button @click="verDetalle(item)" class="btn btn-primary">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  <div class="card-volver">
  <button @click="desloguear" type="button" class="btn btn-secundary">Salir</button>
  </div>
</div>
</template>

<script>

import axios from "axios"
export default {
  name: "MainPage",
  data(){
    return {
        products: [],
    }
  },
  async mounted() {
    /*eslint-disable*/
    debugger;
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged != "true") {
      this.$router.push("/main");
    }
    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = resp.data;
  },
  method: {
    agregarProductoAlCarrito (payload) {
      let o = {... payload, cantidadCarrito: 1 }
      this.$store.commit('agregarAlCarrito', o)
    }
  }
};


</script>

<style scope>
.card-body {
    background: #c7cfb2;
    
}
.card-volver {
    background-color: #eb4b96;
    
}

</style>