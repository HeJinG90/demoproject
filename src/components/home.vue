
import func from './vue-temp/vue-editor-bridge';
<template>
  <div class="home" >
       <p>{{count}}</p>
       <p @click="gotoEditPage">跳转到editPage</p>
       <p @click="gotoVuexTestPage">跳转到vuexTest</p>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      count:this.$store.state.subComponentState.count,
    }
  },
  methods:{
    gotoEditPage:function(){
      this.$router.push({name:'EditPage'});
    },
    gotoVuexTestPage:function(){
      this.$router.push({name:'VuexTest'});
    }
  },
 
}
</script>
<style scoped>
.home{
  text-align: center;
}
</style>


