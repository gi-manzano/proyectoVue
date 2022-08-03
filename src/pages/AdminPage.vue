<template>
  <div>
    <h1>Administrador:</h1>
    <div class="container" v-if="products.lenght !=0">
    <table class="table table-striped">
       <thead class="thead-light">
                 <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                 </tr>
            </thead>
          <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.amount }}</td>
        <td> <p class="btn btn-danger" @click="editarProducto(item.id)">Editar</p></td>
        <td> <p class="btn btn-danger" @click="borrarProducto(item)">Eliminar</p></td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      products: [],
      selected: 0,
    };
  },
  methods: {
    editarProducto(payload) {
      /*eslint-disable*/
      debugger
      this.$router.push({ name: "editar", params: { id: payload } });
    },
  },
  async mounted() {
   
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");
    if (isLogged != "true") {
      this.$router.push("/login");
    }
    if (isAdmin != "true") {
      this.$router.push("/main");
    }
    let resp = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = resp.data;
  },
  methods: {
    editarProducto(payload) {
      /*eslint-disable*/
      this.$router.push({ name: "editar", params: { id: payload } });
    },
     async borrarProducto(payload) {
            await axios.delete("https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + payload.id);
            alert(`${payload.title} eliminado`)
            location. reload()
        }
  },
  filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
    },
};
</script>