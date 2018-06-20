<template>
  <div >
  <p>
    <button @click="numAdd">使用普通的方法做自加 直接改变仓库中状态（不建议）</button>
    <button @click="$store.commit('subComponentState/mutationNumAdd',10)">使用mutations的方法做自加</button>
    <button @click="$store.dispatch('subComponentState/actionNumAdd')">使用action的方法做自加</button>
    <button @click="getGettersNum" >使用getters获取状态</button>
  </p>
  </div>
</template>      

<script>
export default {
 
  methods: {
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