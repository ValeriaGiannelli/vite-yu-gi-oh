<script>
import AppHeader from './components/AppHeader.vue';
import AppContainerList from './components/AppContainerList.vue'

export default{
  components:{
    AppHeader,
    AppContainerList,
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
