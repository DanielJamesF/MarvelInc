<template>
  <div id="app">
    <div class="col-md-12 py-5">
      <div class="site-heading text-center">
        <h2>Browse <span>Our Wares</span></h2>
        <h4></h4>
      </div>
    </div>
    <product-card v-for="product in products" :key="product.id" />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  components: {
    "product-card": Cards,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    mounted() {
      this.$store.dispatch("getProducts");
    },
  },
};
</script>

<style scoped></style>
