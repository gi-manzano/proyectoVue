<template>
    <div>
        <hr>
        <h1>carrito 🛍</h1>
        <ul>
            <li v-for="item in carroLocal" :key="item.id">
                <p><i>{{item.titulo}}</i></p>
                <p>{{item.cantidadCarrito}}</p>
                <p>{{item.stock}}</p>
                <p>${{item.precio}}</p>
                <button class="btn btn-success mx-2" @click="sumarUno(item)">+</button>
                <button class="btn btn-success mx-2" @click="restarUno(item)">-</button>
            <hr>
            </li>
        </ul>

        <p class="text-center">Precio Total: {{precioTotal}}</p>
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
        payload.cantidadCarrito++;
        this.precioTotal += payload.precio
        },
    restarUno(payload){
        payload.cantidadCarrito > 0? payload.cantidadCarrito --: null;
        this.precioTotal -= payload.precio
        }, 
    carroLocalMethod (newObject)  {
        this.$emit ("emitActualizarCarritoPrincipal", newObject)
    },   
    },

watch:{
    carro (nuevoValor) {
        this.carroLocal = nuevoValor
    }
},   
}
</script>

<style scoped>

</style>