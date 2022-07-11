<template>
    <div id="product-list">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="name">{{ product.title }}</span>
                <img :src="product.img" alt="">
                <!-- <span class="price">{{ product.img }}</span> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products(){
            return this.$store.state.products;
        }
    }
}
</script>

<style scoped>

</style>