<template>
  <form action="#">
    {{dado}}
    {{dado.nome}}
      nome <input v-model="dado.nome"/>
 <!-- 
      <p>email: {{migranteData.email}}</p>    
      <p>telefone: {{migranteData.telefone}}</p> 
     
      idiomas: <button type="button" @click="addIdioma">+</button><br/>
      <div v-for="idioma in migranteData.idiomas" :key="idioma">
         <input :value='idioma'/>
      </div>
      -->

  </form>
</template>

<script>
export default {
    name: "MigranteForm",
    data(){ return {
         dado: Object
    }
    },
    props: {
        migrante: Object
    },
    created() {
      console.log(this.migrante.nome)
      console.log(this.dado.nome)
      this.dado = this.migrante
      console.log(this.dado.nome)
      
    }
    //,
    //methods:{
    //  addIdioma(){
    //    console.log(this.migranteData)
    //    console.log(this.migranteData.idiomas)
    //    this.migranteData.idiomas.push("")
    //  }
    //}

}
</script>

<style>

</style>