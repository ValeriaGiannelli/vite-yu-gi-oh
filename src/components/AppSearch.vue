<script>
// importo lo store
import {store} from '../store.js';

export default {
    name: "AppSearch",
    data(){
        return{
            store,
        }
    }
}

</script>

<template>
    <div class="container">
        <select>
            <option value="empty" selected="selected">---</option>
            <option v-for="archetipo in store.archetypeList" :value="archetipo.archetype_name">{{archetipo.archetype_name}}</option>
        </select>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as*;

.container{
    width: 80%;
    margin: 0 auto;
    select{
        margin-top:20px;
        height: 30px;
        width: auto;
        padding-left: 5px;
    }
}

</style>