<template>
  <div >
      <empresa-form :detail="empresa" />
      <router-link to="loginEmpresa">Já sou cadastrado</router-link>
  </div>
</template>

<script>
import EmpresaForm from '../components/EmpresaForm.vue'
import Empresa from '../classes/Empresa'
export default {
    components: { EmpresaForm }, 
    name: "newEmpresa",
    
    data(){
        return {
            empresa: new Empresa()
        }
    },
    created() {
        this.empresa = new Empresa()
        
        
    },
    methods:{
    },
    computed: {
    
    }
}
</script>

<style>

</style>