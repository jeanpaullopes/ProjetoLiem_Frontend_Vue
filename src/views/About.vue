<template>
  <div class="about">
    <h1>This is an about page</h1>
    <migrante-detalhe :migrante="objMigrante"/>
  </div>
</template>
<script>
import MigranteDetalhe from '../components/MigranteDetalhe.vue'
import STORE from '../store/index'
export default {
  components: { MigranteDetalhe },
  name: 'About',
  data() {
    return {
      objMigrante: Object
    }
  },
  created(){
    (STORE.getters.getMigrante).then((response)=>{console.log(response); this.objMigrante = response})
  }
}
</script>ipt
