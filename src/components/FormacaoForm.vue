<template>
  <div>
  <div style="border:solid 1px;">
  Curso: <input v-model="dado.diploma"/>
  <br/>
  Área: <input v-model="dado.area"/>
  <br/>
  Descrição: <input v-model="dado.descricao"/>
  </div>
  </div>
</template>

<script>
export default {
    name: "Formacao",
    data() {
      return {
        dado: Object
      }
    },
    props: {
        formacao: Object
    },
    created() {
      this.dado = this.formacao
    }

}
</script>

<style>

</style>