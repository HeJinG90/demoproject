<template>
  <div >
    <p>{{count}}</p>
  <p>
    <button @click="numAdd">使用普通的方法做自加 直接改变仓库中状态（不建议）</button>
    <!-- <button @click="$store.commit('subComponentState/MUTATIONNUMADD',10)">使用mutations的方法做自加</button> -->
    <!-- <button @click="$store.dispatch('subComponentState/actionNumAdd')">使用action的方法做自加</button> -->
    <button @click="MUTATIONNUMADD(10)">使用mutations的方法做自加</button>
    <button @click="actionNumAdd">使用action的方法做自加</button>
    <button @click="getGettersNum" >使用getters获取状态{{gettersNumMinus}}</button>
  </p>
  </div>
</template>      

<script>
import { mapState , mapActions ,mapGetters ,mapMutations  } from 'vuex'
export default {
 data () {
    return {
      
    }
  },
  computed:{
      // count : function(){
      //   return this.$store.state.subComponentState.count;
      // }
      ...mapState('subComponentState',{  //带命名空间的  第一个参数传进去
        count :'count' //相当于this.$store.state.subComponentState.count;  
      }),
      ...mapGetters('subComponentState',{
        gettersNumMinus:'gettersNumMinus'
      })
  },
  methods: {
      ...mapMutations('subComponentState',{
        MUTATIONNUMADD:"MUTATIONNUMADD" //相当于this.$store.commit('subComponentState/MUTATIONNUMADD',10)
      }),
      ...mapActions('subComponentState',{
         actionNumAdd : 'actionNumAdd'  //相当于this.$store.dispatch('subComponentState/actionNumAdd')
       }),
    numAdd () {
      this.$store.state.subComponentState.count++;  //相当与一个全局变量  所有组件都能访问到
      alert( this.$store.state.subComponentState.count)
    },
    getGettersNum(){
      alert(this.$store.getters['subComponentState/gettersNumMinus']);
      // alert(this.$store.getters.gettersArrquery)
    }
  }

  };
</script>