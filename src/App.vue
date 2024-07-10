<script>
// import axios
import axios from "axios";

import AppHeader from './components/AppHeader.vue';
import AppContainerList from './components/AppContainerList.vue';
import AppSearch from './components/AppSearch.vue';

// importo lo store
import {store} from './store.js';


export default{
  name: "App",
  components:{
    AppHeader,
    AppContainerList,
    AppSearch,
  },
  // export il data store
  data(){
    return {
      store,
    }
  },

  // metodo per fare la chiamata all'API
  methods:{
    getCard(){

      axios.get(store.apiURL)
        .then(result =>{
          // questo è l'attay degli oggetti
          // console.log(result.data.data);
          console.log("ha caricato la pagina");
          // lo devo salvare nel mio array vuoto
          store.cardList = result.data.data;

        }).catch(err => {
          console.log(err);
        })
    },
    // metodo che farà la chiamata all'API archetipo
    getArchetype(){
      axios.get(store.apiURLArchetype)
      .then(result=>{
        // console.log(result.data);
        store.archetypeList = result.data;
      }).catch(err => {
        console.log(err);
      })
    }
  },

  

  // lifeCicleHook
  created(){
    this.getCard();
    this.getArchetype();
  }
}

</script>

<template>

  <AppHeader />

  <main>
    <AppSearch @changeArchetype="getCard"/>

    <AppContainerList />

  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

main{
  background-color: $primary;
}

</style>
