<script>

export default{
    name: "AppContainerList",
}

</script>

<template>
    <div class="bg">

        <div class="container">
            <div class="found">
                Found 39 cards
            </div>

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
    background-color: white;

    .found{
        width: 100%;
        padding: 20px;
        font-size: 20px;
        background-color: $secondary;
        color: white;
    }
}


</style>