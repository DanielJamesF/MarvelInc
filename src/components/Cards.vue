<template>
  <!-- <div id="product-list">
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="name">{{ product.title }}</span>
                <img :src="product.img" alt=""> -->
  <!-- <span class="price">{{ product.img }}</span> -->
  <!-- </li>
        </ul>
    </div> -->
  <!-- <div class='container-fluid' id="product-list">
        <div class="row">
            <div class="card mx-auto col-md-3 col-10 mt-5" v-for="product in products" :key="product.id">
                <img :src="product.img" alt="">
                <div class="card-body text-center mx-auto">
                    <div class='cvp'>
                        <h5 class="card-title font-weight-bold">{{ product.title }}</h5>
                        <p class="card-text"><span class="price">${{ product.price }}</span></p>
                        <a href="#" class="btn details px-auto">view details</a><br />
                        <a href="#" class="btn cart px-auto">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>

    </div> -->
  <div
    class="container-fluid bg-trasparent my-4 p-3"
    style="position: relative"
  >
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
            <h5 class="card-title">
              <a target="_blank" href="#"
                >{{ product.desc }}</a
              >
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
/* body {
  background: #e0e0e0;
}
.details {
  border: 1.5px solid grey;
  color: #212121;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px #212121;
}

.cart {
  background-color: #212121;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 900;
  width: 100%;
  height: 39px;
  padding-top: 9px;
  box-shadow: 0px 5px 10px #212121;
}

.card {
  width: fit-content;
}

.card-body {
  width: fit-content;
}

.btn {
  border-radius: 0;
}

/* .img-thumbnail {
            border: none;
        } */

/* .card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-bottom: 10px;
} */
</style>
