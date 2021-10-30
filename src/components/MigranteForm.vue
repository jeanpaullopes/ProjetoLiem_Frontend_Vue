<template>
  <form action="#">
    <button v-if="passo != 1" type="button" @click="passo = 1">1</button>
    <button v-if="passo != 2" type="button" @click="passo = 2">2</button>
    <button v-if="passo != 3" type="button" @click="passo = 3">3</button>
    <br/>
    Nome:
    <input v-model="dado.nome" />
    <br />
    <div v-if="passo == 1">
    email:
    <input type="email" v-model="dado.email" />
    <br />
    telefone:
    <input type="tel" v-model="dado.telefone" />
    <br />
    </div>
    <div v-if="passo == 2">
      idioma:
      <button type="button" @click="addIdioma">+ idioma</button>
      <div v-for="idm in dado.idiomas" :key="idm">
        <input :value="idm" />
      </div>
    </div>

    <div v-if="passo == 3">
      <button type="button" @click="addFormacao">+ formação</button>
      <div v-for="formacao in dado.formacoes" :key="formacao">
        <formacao-form :formacao="formacao" />
      </div>
    </div>
  </form>
</template>

<script>
import FormacaoForm from "./FormacaoForm.vue";
export default {
  components: { FormacaoForm },
  name: "MigranteForm",
  data() {
    return {
      passo: 1,
      dado: Object,
      idiomas: ["Português", "English", "Francoise", "Italiano", "Turco"],
    };
  },
  props: {
    detail: Object,
  },
  setup() {},
  created() {
    console.log(this.detail);
    console.log(this.dado);
    this.dado = this.detail;
  },
  methods: {
    addIdioma() {
      this.dado.idiomas.push("");
    },
    addFormacao() {
      this.dado.formacoes.push({ curso: "", area: "", descricao: "" });
    },
  },

};
</script>

<style>
</style>