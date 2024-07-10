<script>
// importo lo store
import {store} from '../store.js';

export default{
    name: 'AppCardsFound',
    data(){
        return{
            store,
        }
    },
    computed: {
        resultCards(){
            return store.cardList.length;
        }
    }
}
</script>


<template>
    <div class="found">
        Found {{resultCards}} cards
    </div>
</template>

<style lang="scss" scoped>

</style>