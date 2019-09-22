
<template>
  <div class="eventbus" >
       <eventbusA></eventbusA>
       <eventbusB></eventbusB>
  </div>
</template>


<script>
import eventbusA from  '../components/eventbusdemo/eventbusA'
import eventbusB from  '../components/eventbusdemo/eventbusB'
export default {
  
  name: 'eventbus',
  data () {
    return {

    }
  },
  components:{
      eventbusA,
      eventbusB,
  },
  methods:{
    
  },
 
}
</script>
<style scoped>

</style>


