<template lang="html">
  <section class="admin-component container">
    <h1>Editar listado: (admin)</h1>
      <a href="/admin/create" class="btn btn-secundary">Setting</a>
        <table class="table table-striped">
          <thead class="thead-light">
                 <tr>
                    <th>Title</th>
                    <th>Descripcion</th>
                    <th>Amount</th>
                    <th>Precio</th>
                    <th>Editar</th>
                 </tr>
            </thead>
          <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td><b>{{ item.title }}</b></td>
        <td><b>{{item.descripcion }}</b></td>
        <td>${{ item.price }}</td>
        <td v-if="item.amount < 20">{{ item.amount }}</td>
        <td v-if="item.amount >= 20 && item.amount <= 50">{{ item.amount }}</td>
        <td v-else>{{ item.amount }}</td>
        <td>
        <div class="row">
          <button class="btn btn-primary bm-1" @click="editarProducto(item.id)">Editar</button>
          <button class="btn btn-danger" @click="borrarProducto(item.id)">Eliminar </button>
        </div>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPage",
  props: [],

  data() {
    return {
      products: [],
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
      this.$router.push("/home");
    }
    let response = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products"
    );
    this.products = response.data;
  },
  methods: {
    editarProducto(id) {
   
      this.$router.push({path: "/admin/edit/" + id});
    },
     async borrarProducto(id) {
            await axios.delete("https://62e6d7cd69bd03090f764b0b.mockapi.io/api/productos/" + id)
            .then (response => {
              console.log (response);
              location.reload ()
            })
            .catch (error => {
              console.log(error)
            });
        }
  },
  filters: {
        capitalize: function (value) {
            if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
    },
    computed : {
      
    }
};
</script>