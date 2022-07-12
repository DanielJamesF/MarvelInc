<template>
    <div id="app">
        <product-list></product-list>
    </div>
</template>

<script>
import Cards from '../components/Cards.vue';

export default {
components: {
    'product-list': Cards
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