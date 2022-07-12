<template>
  <div class="container-fluid  text-white" id="grad">

    <h1>Admin page</h1>

    <div class="row">

      <nav class="d-flex flex-row justify-content-between">
        <a class="navbar-brand" href="#"><i class="bi bi-house-fill me-2"></i><router-link to="/">Home</router-link></a>
        <a class="navbar-brand" href="#"><i class="bi bi-bag-plus-fill"></i>Add Item</a>
      </nav>

    </div>

    <ul class="d-flex flex-row justify-content-end">
      <li>
        <a class="navbar-brand" href="#"><i class="bi bi-trash-fill"></i>Remove Item</a>
        <a class="navbar-brand" href="#"><i class="bi bi-pencil-fill"></i>Edit Item</a>
      </li>
    </ul>

 

  <div class="container table-responsive py-5 text-white">
    <table class="table table-bordered table-hover text-white">
      <thead class="thead-dark text-white">
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">img</th>
          <th scope="col">desc</th>
          <th scope="col">category</th>
          <th scope="col">price</th>
          <th scope="col">power</th>
          <th scope="col">used-by</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.img }}</td>
          <td>{{ product.desc }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.power }}</td>
          <td>{{ product.used-by }}</td>
        </tr>
      </tbody>
    </table>
  </div>
   </div>

</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
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


</style>
