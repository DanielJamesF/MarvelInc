<template>
   <div
    class="container-fluid bg-trasparent my-4 p-3"
    style="position: relative">
    <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div class="col hp">
        <div class="card h-100 shadow-sm" > 
          <a href="#">
            <img
              :src="product.img"
              class="card-img-top"
              alt="product.title"
            />
          </a>

          <div class="label-top shadow-sm">
            <h5 class="card-title font-weight-bold">{{ product.title }}</h5>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success"
                >${{ product.price }}</span
              >

              <span class="float-end"
                ><a href="#" class="small text-muted text-uppercase aff-link btn"
                  ><router-link :to="{name: 'product', params: {id: product.id}}">view product</router-link></a
                ></span
              >
            </div>
            <!-- <h5 class="card-title">
              <a target="_blank" href="#"
                >{{ product.desc }}</a
              >
            </h5> -->
            <h5 class="card-title">
              <a target="_blank" href="#">
                {{product.category}}
              </a>
            </h5>

            <div class="d-grid gap-2 my-4">
              <a href="#" class="btn btn-warning bold-btn">add to cart</a>
            </div>
            <div class="clearfix mb-1">
              <span class="float-start"
                ><a href="#"><i class="fas fa-question-circle"></i></a
              ></span>

              <span class="float-end">
                <i class="far fa-heart" style="cursor: pointer"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ["product"]
};
</script>

<style scoped>
/* @import url("../assets/main.css"); */
</style>