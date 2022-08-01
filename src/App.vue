<template>
  <div id="app">
    <router-link to="/login" >Login</router-link>
    &nbsp;
    <router-link to="/registro">Registro</router-link>
    &nbsp;
    <router-link to="/admin">Admin</router-link>
    &nbsp;
    <router-link to="/main">Main</router-link>
    &nbsp;
    <button @click="desloguear">Desloguear</button>
    &nbsp;
    <router-view></router-view>
  </div>
</template>

<script>




export default {
  name: 'App',
  components: { },
  data(){
    return{
    // canAccess:false,
    // estoyEnLogin:true,
    // listadoDeUsuarios:[],
    
    // listadoDeproductos:[

    //   {
    //     'id': 1,
    //     'titulo': 'Pastas',
    //     'descripcion': 'Salsa picante',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/f0/d0/59/f0d059982201a9bf3371b67f2d0fe73c.jpg'
    //   },
    //   {
    //     'id': 2,
    //     'titulo': 'Pastas 2',
    //     'descripcion': 'Salsa suave',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/20/0e/46/200e46b9cd4f24f2225078aef2491a12.jpg'
    //   },
    //   {
    //     'id': 3,
    //     'titulo': 'Sandwich de pollo',
    //     'descripcion': 'Mostaza y miel',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/55/e4/c7/55e4c7852ac6bc19e02cb95b66b77bb6.jpg'
    //   },
    //   {
    //     'id': 4,
    //     'titulo': 'Pizza',
    //      'descripcion': 'Salsa con hierbas',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/a2/8b/71/a28b71f9f3ce26283a93b102fc34ee57.jpg'
    //   },
    //   {
    //     'id': 5,
    //     'titulo': 'Arepas',
    //      'descripcion': 'Arepas',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/b0/ab/58/b0ab5854a070cda6227cadd8cd0284d3.jpg'
    //   },
    //   {
    //     'id': 6,
    //     'titulo': 'Nachos',
    //      'descripcion': 'Salsa chedar',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/fe/cc/98/fecc98685308601789e4e6eaf01bccb2.jpg'
    //   },
    //   {
    //     'id': 7,
    //     'titulo': 'Helado',
    //     'descripcion': 'Crema de frutas natulares',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/94/81/76/9481761ac211bdbc62cd683e18d3443c.jpg'
    //   },
    //   {
    //     'id': 8,
    //     'titulo': 'Pastel de lima',
    //     'descripcion': 'Sabor lima suave',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/f6/15/e7/f615e77eb435c0f6bb37f78145a65c5e.jpg'
    //   },
    //   {
    //     'id': 9,
    //     'titulo': 'Pastel de chocolate y fresas',
    //     'descripcion': 'Salsa de chocolate',
    //     'stock': 23,
    //     'precio': 590,
    //     'imagen': 'https://i.pinimg.com/564x/b5/81/c3/b581c34329a0fabdcb8a42cf12e33abe.jpg'
    //   },
    
    //  ],

    // carrito:[],
    // selected: null
    }
  },
  methods:{
    desloguear () {
      localStorage.clear ()
      this.$router.push('login')
    }
  }
}
</script>


<style scope>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: aquamarine;
  
}
</style>
