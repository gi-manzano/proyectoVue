<template>
    <div class="card animate__fadeIn">
        <hr>
        <h1 class="display-2 text-center">Tú plato:</h1>
        <h3>Plato: {{producto.titulo}}</h3>
        <p>Descripción: {{producto.descripcion}}</p>
        <p>Disponible: {{producto.stock}}</p>
        <p>${{producto.precio}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {

name:'DetallePage',


data() {

    return {
        product: {
            title: '',
            description: '',
            amount: '',
            price: 0,
        }
    };
},
 async mounted(){
    
    /*eslint-disable*/
    debugger;

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
}
</script>

<style scoped>
.card {
    background-color: rgb(201, 232, 148);
}

</style>