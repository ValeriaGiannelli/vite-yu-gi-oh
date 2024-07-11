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
      // definire l'endpoint dal quale poi si andranno a fare le selezioni
      let endPoint = store.apiURL;

      // se la persona ha selezionato qualcosa, prendi solo le card che hanno l'archetipo uguale
      if(store.archetypeSelected !== 'all' && store.archetypeSelected !== 'none'){
        endPoint += `&${store.apiArchetypeParam}=${store.archetypeSelected}`;
      } 
      axios.get(endPoint)
        .then(result =>{
          // questo è l'attay degli oggetti
          console.log(result.data.data);
          // lo devo salvare nel mio array vuoto
          store.cardList = result.data.data;

          // se le card non hanno archetipo mettile in un nuovo array
          if(store.archetypeSelected === 'none'){
            store.cardList = store.cardList.filter(obj => {
              return !obj.hasOwnProperty('archetype')
            })
          }

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
    },

    // metodo per prendere solo le card non archetipo
    getNonArchetypeCards(){
      // check if obj as how property 
      axios.get(store.apiURL)
      .then(result =>{
        store.cardList = result.data.data;
        
      })

    }
  },

  

  // lifeCicleHook
  created(){
    this.getCard();
    this.getArchetype();

    this.getNonArchetypeCards();
  },
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
