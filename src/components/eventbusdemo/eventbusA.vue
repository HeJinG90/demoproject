
<template>
  <div class="eventbusA" >
       <button @click="emittob">点击按钮把值传递给兄弟组件B</button>
  </div>
</template>


<script>
import eventbus from  '../../assets/js/eventbus.js'
export default {
  
  name: 'eventbusA',
  data () {
    return {

    }
  },
  methods:{
    emittob(){
        eventbus.$emit('eventfroma','这是A来的数据');
    }
  },
 
}
</script>
<style scoped>

</style>


