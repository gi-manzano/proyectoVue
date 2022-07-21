<template>
    <div>
        <hr>
        <h1 class="display-2 text-center">Tu pedido</h1>
        <h3>Plato: {{producto.titulo}}</h3>
        <p>Descripción: {{producto.descripcion}}</p>
        <p>${{producto.precio}}</p>
    </div>
</template>

<script>
export default {

name:'DetallePage',
props:['producto'],

data() {

    return {
    }
},
mounted(){
},   
}
</script>

<style scoped>

</style>