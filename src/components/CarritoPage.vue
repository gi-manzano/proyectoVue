<template>
    <div class="carrito-card">
        
        <h1 class="cart">Carrito 🛍</h1>
        <ul>
            <li v-for="item in carroLocal" :key="item.id">
                <p><i>{{item.titulo}}</i></p>
                <p>{{item.cantidadCarrito}}</p>
                <p>${{item.precio}}</p>
                <button class="btn btn-success mx-2" @click="sumarUno(item)">+</button>
                <button class="btn btn-success mx-2" @click="restarUno(item)">-</button>
            <hr>
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
props:['carro'],

data(){

    return {
        carroLocal:[],
        precioTotal: 0
    }
},

mounted(){
    this.carroLocal = this.carro
},

methods:{
    sumarUno(payload){
        payload.stock++;
        this.precioTotal += payload.precio
        },
    restarUno(payload){
        payload.stock > 0? payload.stock --: null;
        this.precioTotal -= payload.precio
        }, 
    carroLocalMethod (newObject)  {
        this.$emit ("emitActualizarCarrito", newObject)
    },   
    },

watch:{
    carro (newValue) {
        this.carroLocal = newValue
    }
},   
}
</script>

<style scoped>
.carrito-card {
  background-color: rgb(176, 228, 240);
}
</style>