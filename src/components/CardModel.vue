<script>
export default{
    name: "CardModel",
}

</script>

<template>
    <div class="card">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.QTXaEnb4nBZigUZ5mXkzgAAAAA%26pid%3DApi&f=1&ipt=1cca9c8fc4fbb53d19c50d5ff47e0b43e50e811e4847b882c068456ed154a20f&ipo=images" alt="">

        <div>

            <h3>Nome della carta</h3>
            <h5>Tipo di carta</h5>

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