
<template>
  <div class="eventbusB" >
      <div>{{data}}</div>
  </div>
</template>


<script>
import eventbus from  '../../assets/js/eventbus.js'
export default {
  
  name: 'eventbusB',
  data () {
    return {
     data:'',
    }
  },
  mounted(){
    this.getdatafroma()
  },
  methods:{
    getdatafroma(){
        let _this = this;
        eventbus.$on('eventfroma',function(val){
            _this.data =  val;
        });
    }
  },
 
}
</script>
<style scoped>

</style>


