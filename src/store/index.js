import { createStore } from "vuex";
import MigranteService from "../services/MigranteService";
import STATE_ENUMS from "./StateEnums";
export default createStore({
  state: {
    apiState: STATE_ENUMS.INIT,
    migrante: null,
    migrantes:[],
    empresa:[],
    empresas:[],
    usuario:{}
  },
  mutations: {
    SET_MIGRANTE(state, migrante) {
      state.migrante = migrante
      this.commit("SET_APISTATE",STATE_ENUMS.LOADED)
      console.log("SET_MIGRANTE")
      console.log(state.migrante )
    },
    SET_APISTATE(state, apiState) {
      state.apiState = apiState
    } 
  },
  actions: {
    loadMigrante(state, id) {
      this.commit("SET_APISTATE",STATE_ENUMS.LOADING)
      console.log("loadMigrante ")
      MigranteService.buscaMigrante(id).then( (response)=>{console.log("no response"); this.commit("SET_MIGRANTE", response.data)}
      ).catch( 
        this.commit("SET_APISTATE",STATE_ENUMS.ERROR)
        )
     
    }
  },
  getters: {
    getMigrante: async (state) => {
      let migr
      if (state.migrante == null) {
        migr = await MigranteService.buscaMigrante('616c6c0295fa1b1e2f437fce')
        //state.migrante = migr
      }
      console.log(migr)
      return migr //state.migrante
    }, 
  },
  modules: {},
});


