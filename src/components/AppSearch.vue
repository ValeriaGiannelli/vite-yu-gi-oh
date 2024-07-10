<script>
// importo lo store
import {store} from '../store.js';

export default {
    name: "AppSearch",
}

</script>

<template>
    <div class="container">
        <select>
            <option value="">Alien</option>
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
        width: 100px;
        padding-left: 5px;
    }
}

</style>