import { createStore } from "vuex";
import MigranteService from "../services/MigranteService";

export default createStore({
  state: {
    migrante:null,
    migrantes:[],
    empresa:[],
    empresas:[],
    usuario:{}
  },
  mutations: {},
  actions: {},
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


