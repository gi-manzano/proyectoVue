import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        carrito: [],
        products: [],
        name: '',
        email: '',
        password: '',
        isAdmin: false
    },
    mutations: {
        cambiarMensaje: (state, payload) => {
            if(payload) state.msg = payload
        },
        agregarAlCarrito: (state, payload) => {
          let o = state.carrito.find(x => x.id === payload.id)
          if(o){
            
            payload = {...payload,cantidadCarrito: o.id + 1 };
          }
          state.carrito.unshift(payload); //push
        },
        editarUsuario: (state, payload) => {
          state.usuario.nombre = payload
        },
        obtenerProductos: (state, payload) => {
          state.products = payload
        },
    },
    actions: {
      setMensaje: ({commit}, payload) => {
        setTimeout (
          () => {
            commit('cambiarMensaje', payload);
          }, 5000);
      },
      
      getAllProducts: ({ commit }) => {
        fetch (`https://62e8071893938a545bded358.mockapi.io/products/`)
        .then((response) => response.json ())
        .then((response) => {
          let producto = response.data;
          commit('obtenerProductos', producto);
        })
        .catch (error => {
          alert(error);
        })
      },
    },
});