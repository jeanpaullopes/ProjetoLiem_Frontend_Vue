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
      if (state.migrante == null) {
        let migr = await MigranteService.buscaMigrante('616c6c0295fa1b1e2f437fce')
        state.migrante = migr
      }
      return state.migrante
    }, 
  },
  modules: {},
});


