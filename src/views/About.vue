<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{objMigrante.nome}}
    <migrante-detalhe :migrante="objMigrante"/>
    <hr/>
   <migrante-form :detail="obj1"/>
    
  </div>
</template>
<script>
import MigranteDetalhe from '../components/MigranteDetalhe.vue'
import MigranteForm from '../components/MigranteForm.vue'
import STORE from '../store/index'
export default {
  components: { MigranteDetalhe, MigranteForm },
  name: 'About',
  data() {
    return {
      objMigrante: Object,
      obj1 : Object

    }
  },
  created(){
    this.objMigrante = new Object()
    this.obj1 = new Object()
    STORE.getters.getMigrante.then((m)=>{console.log(m); this.obj1 = m; this.objMigrante = m})
    
    
  }
}
</script>
