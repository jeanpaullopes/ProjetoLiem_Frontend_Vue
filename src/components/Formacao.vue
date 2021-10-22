<template>
  <div style="border:solid 1px;">
  Curso: {{formacao.diploma}}<br/>Área: {{formacao.area}}<br/>
  <p v-if="formacao.descricao">Descrição: {{formacao.descricao}}</p>
  </div>
</template>

<script>
export default {
    name: "Formacao",
    props: {
        formacao: Object
    }

}
</script>

<style>

</style>