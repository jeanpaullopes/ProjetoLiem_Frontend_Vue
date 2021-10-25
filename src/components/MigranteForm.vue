<template>
  <form action="#">
    Nome:
    <input v-model="dado.nome"/>
    <br/>
    email:
    <input type="email" v-model="dado.email"/>
    <br/>
    telefone:
    <input type="tel" v-model="dado.telefone"/>
    <br/>
    idioma:
    <button type="button" @click="addIdioma">+ idioma</button>
    <div v-for="idm in dado.idiomas" :key="idm">
      <input readonly :value="idm"/>
    </div>
    <button type="button" @click="addFormacao">+ formação</button>
    <div v-for="formacao in dado.formacoes" :key="formacao">
      <formacao-form :formacao="formacao" />
    </div>
    

  </form>
</template>

<script>
import FormacaoForm from './FormacaoForm.vue';
export default {
  components: { FormacaoForm },
    name: "MigranteForm",
    data() {
    return {
      dado: Object,
      idiomas:["Português", "English", "Francoise", "Italiano", "Turco"]
      
    };
  },
    props: {
        detail: Object
    },
    setup(){
      
      
    },
    created() {
      console.log(this.detail)
      console.log(this.dado)
      this.dado = this.detail
      
    },
    methods:{
      addIdioma(){
        this.dado.idiomas.push("")
      },
      addFormacao(){
        this.dado.formacoes.push({curso:"", area:"", descricao:""})
      }
    }

}
</script>

<style>

</style>