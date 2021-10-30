<template>
  <div >
      {{migrante.nome}}
      <migrante-form v-if="migrante.id !=null" :detail="migrante" />
  </div>
</template>

<script>
import MigranteForm from '../components/MigranteForm.vue'
import Migrante from '../classes/Migrante'
import STORE from '../store/index'
import STATE_ENUMS from '../store/StateEnums'
//import MigranteService from '../services/MigranteService'
export default {
    components: { MigranteForm }, 
    name: "editMigrante",
    
    data(){
        return {
            migrante: new Migrante()
        }
    },
    created() {
        STORE.dispatch("loadMigrante", "616c6c0295fa1b1e2f437fce")
        setTimeout(()=> this.migrante = STORE.state.migrante, 1000)
        
        
    },
    methods:{
        aguardaMigrante() {
            console.log("aguardaMigrante")
            if (STORE.state.apiState != STATE_ENUMS.LOADED) {
                setTimeout(()=>{this.aguardaMigrante()}, 200)
            } else {
                this.migrante = STORE.state.migrante
            }
        }
    },
    computed: {
    
    apiStateLoaded() {
        console.log("apiStateloaded =>"+STORE.state.apiState === STATE_ENUMS.LOADED)
      return STORE.state.apiState === STATE_ENUMS.LOADED;
    },
    apiStateLoading() {
      return STORE.state.apiState === STATE_ENUMS.LOADING || STORE.state.apiState === STATE_ENUMS.INIT;
    },
    apiStateError() {
      return STORE.state.apiState === STATE_ENUMS.ERROR;
    },
    }
}
</script>

<style>

</style>