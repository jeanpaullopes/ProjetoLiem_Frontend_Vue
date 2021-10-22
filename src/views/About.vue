<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{objMigrante.nome}}
    <migrante-form :migrante="objMigrante"/>
    <hr/>
   <!-- <migrante-detalhe :migrante="objMigrante"/>
   -->
  </div>
</template>
<script>
//import MigranteDetalhe from '../components/MigranteDetalhe.vue'
import MigranteForm from '../components/MigranteForm.vue'
import STORE from '../store/index'
export default {
  components: { /*MigranteDetalhe,*/ MigranteForm },
  name: 'About',
  data() {
    return {
      objMigrante: Object
    }
  },
  async created(){
    this.objMigrante = await STORE.getters.getMigrante;
    console.log(this.objMigrante)
  }
}
</script>
