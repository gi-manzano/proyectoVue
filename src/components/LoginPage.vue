<template>
<div>
<section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Mi Comida App</h3>
            <form>

              <div class="row">
                <div class="col-md-12 mb-4">

                  <div class="form-outline">
                    <input type="text" id="nombre" class="form-control form-control-lg" v-model="nombre"/>
                    <label class="form-label" for="nombre">Tu Nombre</label>
                  </div>

                  <div class="form-outline">
                    <input type="password" id="pwd" class="form-control form-control-lg" v-model="pwd"/>
                    <label class="form-label" for="pwd">Tu Contraseña</label>
                  </div>
                </div>

              <div class="mt-4 pt-2">
                <input type="button" class="btn btn-secondary btn-lg" value="Entrar" @click="cambiarValor"/>
              </div>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    usuarios: Array
  },
  data(){
    return {
      nombre:'',
      pwd:'',
    }
  },
  methods:{
    cambiarValor(){
      let existe = this.usuarios.filter(o=>o.usuario == this.nombre && o.contrasena == this.pwd)
      if(existe){
        this.$emit('changeFlag')
      }
    }
  }
}
</script>

<style scoped>
.custom-card {

background: #b7bcaa;

}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 5px;
line-height: 2;
padding-left: 20px;
padding-right: 20px;
}

.card-registration .select-arrow {
top: 13px;
}
</style>