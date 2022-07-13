<template>
  <div class="container-fluid table-responsive" id="grad">

    <div class="site-heading text-center">
        <h2 class="text-white">Admin <span>Page</span></h2>
        <h4></h4>
      </div>

    <div class="row">
      <nav class="d-flex flex-row justify-content-between">
        <button type="button" id="addThis" class="btn btn"><router-link to="/">Home</router-link></button>
        <button type="button" class="btn" id="addThis" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
      </nav>
    </div>
  <div class="container table-responsive py-5 text-white">

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="name"></label>
        <input type="text" name="" id="add-Name" placeholder="Enter Name" required>
        <label for="img"></label>
        <input type="img" name="" id="add-Img" placeholder="Add Image" required>
        <label for="desc"></label>
        <input type="text" name="" id="add-Desc" placeholder="Add Description" required>
        <label for="category"></label>
        <input type="text" name="" id="add-Category" placeholder="Add Category Class" required>
        <label for="price"></label>
        <input type="number" name="" id="add-Price" placeholder="Add Price Value" required>
        <label for="power"></label>
        <input type="number" name="" id="add-Power" placeholder="Add Power Level" required>
        <label for="usedby"></label>
        <input type="text" name="" id="add-Usedby" placeholder="Add User" required>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="$store.commit('addProduct')" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <table class="table table-bordered text-white">
      <thead class="thead-dark text-white">
        <tr class="">
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">img</th>
          <th scope="col">desc</th>
          <th scope="col">category</th>
          <th scope="col">price</th>
          <th scope="col">power</th>
          <th scope="col">usedby</th>
          <th scope="col">actions</th>
        </tr>
      </thead>

      <tbody >
        <tr v-for="product in products" 
    :key="product.id" 
    :product="product" class="">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td><img :src="product.img" alt=""></td>
          <td>{{ product.desc }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.power }}</td>
          <td>{{ product["used_by"] }}</td>
          <td><i class="bi bi-trash-fill" @click="$store.commit('deleteProduct',product.id)">Remove Item</i></td>
        </tr>
      </tbody>
    </table>
  </div>
   </div>

</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    
 mounted() {
    return this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  components: { Modal },
};
</script>

<style>
li {
  list-style: none;
}
#grad{ 
    background-color: #F8002F;
background-image: linear-gradient(326deg, #F8002F 0%, #000C14 74%);
}
#addThis{
  text-decoration: underline;
  color:#a00000;
}
#addThis:hover{
color: white;
}
nav a{
  color:#a00000;

}
a:hover{
  color: white;}
  .site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.site-heading h2 span {
  color: #a00000;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}

td{
  color:white;
}
         
         .btn-grad {
            background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
</style>
