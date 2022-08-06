<template lang="html">
<div class="containter">
  <h1 class="display-2 text-center "> {{text | capitalize}} </h1>
    <div class="row">
      <div v-for="(item, index) in products" :key="index" class = "col-md-4">
          <div class="card" style="width: 35rem padding: 10px;">
            <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.descripcion}}</h6>
            <p class="card-subtitle mb-2 text-muted">${{item.precio}}</p>
            <p class="card-subtitle mb-2 text-muted">Amount: {{item.amount}}</p>
            <button @click="agregarProductoAlCarrito(item)" class="btn btn-primary mb-2">Agregar al pedido</button> 
          </div>
        </div>
      </div>
    </div>
  <div class="card-volver">
  <button href="/login" type="button" class="btn btn-secundary">Salir</button>
  </div>
</div>
</template>

<script>

import axios from "axios"
export default {
  name: "HomePage",
  props: [],
  
  async mounted() {
    /*eslint-disable*/
    debugger;
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged != "true") {
      this.$router.push("/home");
    }
    let response = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = response.data;
  },
  data () {
    return {
      products: [],
    }
  },

  method: {
    agregarProductoAlCarrito (payload) {
      let o = {... payload, cantidadCarrito: 1 }
      this.$store.commit('agregarAlCarrito', o)
    }
  },
  computed: {

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