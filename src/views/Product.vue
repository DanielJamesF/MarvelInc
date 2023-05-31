<template>
    <div v-if="product">
        <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"/>
        <div :to="{name: 'product', params: {id:product.id}}">
            <img :src="product.img" :alt="product.title">
            <h2>{{ product.title }}</h2>
        </div>
         </div>
       <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="products.img1" class="d-block w-100" :alt="product.title">
          </div>
          <div class="carousel-item">
            <img :src="products.img2" class="d-block w-100" :alt="product.title">
          </div>
          <div class="carousel-item">
            <img :src="products.im3" class="d-block w-100" :alt="product.title">
          </div>
        </div>
      </div> -->
    <div v-else>Loading...</div>
</template>

<script> 
import ProductCard from "../components/ProductCard.vue";

export default {
  mounted() {
    return this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    products() {
      return this.$store.state.product
    },
  },
  components: {ProductCard},
  props: ["id"]
}
</script>

<style scoped>

</style>
