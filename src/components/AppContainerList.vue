<script>
import CardModel from './CardModel.vue';

export default{
    name: "AppContainerList",
    components:{
        CardModel,
    }
}

</script>

<template>
    <div class="bg">

        <div class="container">
            <div class="found">
                Found 39 cards
            </div>

            <CardModel />

        </div>
    </div>


</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg{
    background-color: $primary;
    padding-top: 40px;
    padding-bottom: 40px;
}

.container{
    width: 80%;
    margin: 0 auto;
    padding: 40px;
    background-color: $secondary;
    flex-wrap: wrap;

    .found{
        width: 100%;
        padding: 20px;
        font-size: 20px;
        background-color: $bg-black;
        color: $secondary;
    }
}


</style>