<template>
  <div >
      <migrante-form :detail="migrante" />
      <router-link to="loginMigrante">Já sou cadastrado</router-link>
  </div>
</template>

<script>
import MigranteForm from '../components/MigranteForm.vue'
import Migrante from '../classes/Migrante'
//import MigranteService from '../services/MigranteService'
export default {
    components: { MigranteForm }, 
    name: "newMigrante",
    
    data(){
        return {
            migrante: new Migrante()
        }
    },
    created() {
        this.migrante = new Migrante()
        
        
    },
    methods:{
        
    },
    computed: {
    
   
    }
}
</script>

<style>

</style>