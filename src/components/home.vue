
<template>
  <div class="home" >
       <p @click="gotoEditPage">跳转到editPage</p>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods:{
    gotoEditPage:function(){
      this.$router.push({name:'EditPage'});
    }
  }
}
</script>
<style scoped>
.home{
  text-align: center;
}
</style>


