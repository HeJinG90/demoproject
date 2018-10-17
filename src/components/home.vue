
<template>
  <div class="home" >
       <p>{{count}}</p>
       <p @click="gotoEditPage">跳转到editPage</p>
       <p @click="gotoVuexTestPage">跳转到vuexTest</p>
       <p @click="gotoVue3dPage">跳转到Vue3d</p>
  </div>
</template>


<script>
import { ModelObj  } from 'vue-3d-model'
export default {
  components: {
            ModelObj 
        },
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
    },
    gotoVue3dPage:function(){
      this.$router.push({name:'Vue3D'});
    }

  },
 
}
</script>
<style scoped>
.home{
  text-align: center;
}
</style>


