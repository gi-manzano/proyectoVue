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
.card {
    background-color: rgb(201, 232, 148);
}

</style>