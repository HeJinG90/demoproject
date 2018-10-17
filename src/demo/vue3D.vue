
<template>
  <div class="vue3D" >
       <model-obj  src="/static/obj/tree.obj"></model-obj >
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
    }
  },
  methods:{
    
  },
 
}
</script>
<style scoped>
.vue3D{
  text-align: center;
}
</style>


