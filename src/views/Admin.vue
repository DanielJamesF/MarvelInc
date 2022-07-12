 <template>
    <div class="container-fluid">
        <h1>Admin page</h1>
        <div class="row ">
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
    </div>
    <div class="container table-responsive py-5"> 
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.img}}</td>
      <td>{{item.desc}}</td>
      <td>@{{item.category}}</td>
    </tr>
   
  </tbody>
</table>
</div>

    <div class="container">
        
    </div>
 </template>
 
 <script>
 export default {
 computed:{
    items(){
        return this.$store.state.items;
        }
    }
 }
 </script>
 
 <style>
 li{
 list-style: none;
 }
 </style>