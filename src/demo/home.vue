
<template>
  <div class="home" >
       <p>{{count}}</p>
       <p @click="gotoEditPage" >跳转到editPage</p>
       <p @click="gotoVuexTestPage">跳转到vuexTest</p>
       <p @click="gotoVue3dPage">跳转到Vue3d</p>
       <p @click="gotoComponentdemoPage">跳转到componentdemo</p>
      
  </div>
</template>


<script>

export default {
  
  name: 'Home',
  components:{
    clickcar : () => import('../components/clickCar') //异步加载组件  其他路由组件页也同样异步加载此组件时不会重复加载 会拿缓存 异步加载的组件会另发送一次http请求一个组件js
  },
  data () {
    return {
      count:this.$store.state.subComponentState.count,
    }
  },
  mounted(){
    
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
    },
    gotoComponentdemoPage:function(){
      this.$router.push({name:'Componentdemo'});
    }
  },
 
}
</script>
<style scoped>
.home{
  /* text-align: center; */
  font-size: 28px;
}
.home p {
  background-color: red;
  width: 50vw;
}
</style>


