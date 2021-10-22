<template>
  <div>
      detalhe do migrante {{migrante.nome}}
      <p>email: {{migrante.email}}</p>    
      <p>telefone: {{migrante.telefone}}</p> 
      <p>Idomas:
          <ul v-for="idioma in migrante.idiomas" :key="idioma">
            <li > {{idioma}}</li>
          </ul>
      </p>
      <p v-for="formacao in migrante.formacoes" :key="formacao">Formacao:
          <formacao :formacao="formacao"/>
      </p>

  </div>
</template>

<script>
import Formacao from './Formacao.vue'
export default {
  components: { Formacao },
    name: "DetalheMigrante",
    props: {
        migrante: Object
    }

}
</script>

<style>

</style>