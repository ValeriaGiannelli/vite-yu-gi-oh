<script>
export default{
    name: "CardModel",
    props: {
        infoCard: Object,
    }
}

</script>

<template>

    <!-- container della card -->
    <div class="card">
        <!-- immagine della carta -->
        <img :src="infoCard.card_images[0].image_url" alt="">

        <!-- sezione del titolo della carta e tipèologia -->
        <div>
            <h3>{{infoCard.name}}</h3>
            <h5>{{infoCard.archetype}}</h5>
            <!-- <h5>{{infoCard.type}}</h5> -->
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card{
    text-align: center;
    background-color: $primary;
    width: calc(100% / 5 - 20px);
    margin-bottom: 20px;
    height: 520px;

    h3{
        text-transform: uppercase;
        margin-bottom: 20px;
        color:$secondary;
    }

    div{
        padding: 20px;
    }
}

</style>