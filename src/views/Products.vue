<template>
    <div id="app">
                            <div class="col-md-12 py-5">
                    <div class="site-heading text-center">
                        <h2>Browse <span>Our Wares</span></h2>
                        <h4></h4>
                    </div>
                </div>
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