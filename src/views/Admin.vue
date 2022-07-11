<template>
 <div>
    <h2>admin</h2>
    <div text to="/admin/new">add admin</div>
    <!-- <div v-for="item of items":key="items.id" class="flex"> -->
<div>{{admin.title}}</div>
<div>{{admin.description}}</div>
<div>show edit delete</div>
    </div>
 <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style>
h1{
    text-align: center;
    color: white;
    text-decoration: underline;
    font-style: italic;
    font-weight: 500;
    font-size: 5rem;
}
table ,th ,td {
    border: 1px solid grey;
    /* text-align: center; */
    padding: 20px;
}
table{
    margin: auto;
    padding: 50px;
}
#img:hover{
    background-color: grey;
}
#footer{
    padding: 20px;
    }


img{
    object-fit: cover;
}
</style>