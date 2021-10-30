<template>
  <form action="#">
    
    <br/>
    Nome:
    <input v-model="dado.nome" />
    <br />
    email:
    <input type="email" v-model="dado.email" />
    telefone:
    <input type="tel" v-model="dado.telefone" />
    <br />
    
  </form>
</template>

<script>
export default {
  name: "MigranteForm",
  data() {
    return {
      dado: Object,
    };
  },
  props: {
    detail: Object,
  },
  setup() {},
  created() {
    this.dado = this.detail;
  },
  methods: {
  },

};
</script>

<style>
</style>