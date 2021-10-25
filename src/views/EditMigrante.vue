<template>
  <div>
      {{migrante.nome}}
      <migrante-form :detail="migrante"/>
  </div>
</template>

<script>
import MigranteForm from '../components/MigranteForm.vue'
//import STORE from '../store/index'
import MigranteService from '../services/MigranteService'
export default {
  components: { MigranteForm },
    name: "editMigrante",
    data(){
        return {
            migrante: Object
        }
    },
    created() {
        this.migrante = MigranteService.buscaMigrante("123456")
    }

}
</script>

<style>

</style>