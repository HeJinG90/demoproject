
<template>
  <div class="vue3D" >
       <model-obj @on-click="onClick" src="/static/obj/tree.obj"></model-obj >
  </div>
</template>


<script>
import { ModelObj  } from 'vue-3d-model'
export default {
  components: {
            ModelObj ,
        },
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    onClick( event ) {
      debugger
            console.log( event );
            if ( !event ) {
                if ( this.intersected ) {
                    this.intersected.material.color.setStyle( '#fff' );
                }
                this.intersected = null;
                return;
            }
            this.intersected = event.object;
            this.intersected.material.color.setStyle( '#13ce66' );
        }
  },
 
}
</script>
<style scoped>
.vue3D{
  text-align: center;
}
</style>


