<template>

</template>
    
<script>
export default {
props: ["id"],
mounted(){
    this.$store.dispatch('getProduct', this.id);
}
};
</script>
    
<style>
    
</style>