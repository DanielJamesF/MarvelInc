<template>
    <div id="app">
        <product-list></product-list>
    </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue';

export default {
components: {
    'product-list': ProductsList
},
name: 'app',
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>