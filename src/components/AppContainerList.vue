<script>
import CardModel from './CardModel.vue';
import AppCardsFound from './AppCardsFound.vue';

// importo lo store
import {store} from '../store.js';

export default{
    name: "AppContainerList",
    components:{
        CardModel,
        AppCardsFound
    },
    data(){
        return {
            store,
        }
    }

}

</script>

<template>
    <div class="bg">

        <div class="container">
            <AppCardsFound />

            <CardModel v-for="card in store.cardList" :key="card.id" :infoCard="card"/>

        </div>
    </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg{
    padding-top: 20px;
    padding-bottom: 40px;
}

.container{
    width: 80%;
    margin: 0 auto;
    padding: 40px;
    background-color: $secondary;
    flex-wrap: wrap;
    gap:20px;

    .found{
        width: 100%;
        padding: 20px;
        font-size: 20px;
        background-color: $bg-black;
        color: $secondary;
    }
}


</style>