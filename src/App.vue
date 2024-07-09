<script>
// import axios
import axios from "axios";

import AppHeader from './components/AppHeader.vue';
import AppContainerList from './components/AppContainerList.vue';

// importo lo store
import {store} from './store.js';


export default{
  name: "App",
  components:{
    AppHeader,
    AppContainerList,
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
          console.log(result.data.data);
          // lo devo salvare nel mio array vuoto
          store.cardList = result.data.data;

        }).catch(err => {
          console.log(err);
        })
    }
  },
  // lifeCicleHook
  created(){
    this.getCard();
  }
}

</script>

<template>

  <AppHeader />

  <main>
    <AppContainerList />

  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
