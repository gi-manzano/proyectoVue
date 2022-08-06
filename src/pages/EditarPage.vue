<template lang="html">
  <section class="edit-component" >
    <h1>Editar lista de productos</h1>
        <div class="container">
              <div class="row justify-content-center">
                <div class="col-6 py-5">
                  <form @submit.prevent="ActualizarProducto">
                    <div class="card-body shadow-5-strong text-center">
                      <p class="card-title">Title: <input type="text" name="title" class="form-control" v-model="title"></p>
                      <p class="card-text"> Description:<input type="text" name="description"  class="form-control" v-model="description"></p>
                      <p class="card-text">Price: <input type="number" name="price" class="form-control" v-model="price"></p>
                      <p class="card-text">Amount: <input type="number" name="amount"  class="form-control" v-model="amount"></p>
                      <button type="submit" class="btn btn-primary">Edit</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "EditarPage",
  props: [],
  data() {
    return {
     title: '',
     description: '',
     price: '',
     amount: '',
    };
  },
  async mounted() {
    /*eslint-disable*/
    debugger;

    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/home");
    }
    let paramId = this.$route.params.id
    let producto = await axios.get(
      "https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + paramId
    );
    this.title= producto.data.title;
    this.description=producto.data.description;
    this.price=producto.data.price;
    this.amount= producto-data.amount;
  },
  methods: {
    async ActualizarProducto() {

     await axios.put(
        "https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + this.$route.params.id,
       {
        title: this.title,
        description: this.descripcion,
        price: this.price,
        amount: this.amount,
       }
       ).then(
        response => {
          console.log(response);
          this.$router.push("/admin");
        }) .catch (error => {
          console.log(error);
        });
      alert('Actualce mi producto')
    },
  },
  computed: {

  }
};
</script>