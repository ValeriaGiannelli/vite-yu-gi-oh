<script>
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
