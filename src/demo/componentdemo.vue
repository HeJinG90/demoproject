<template>
    <div class="RingToCheckOpenBill">
   <clickCar :carpart = carpart v-on:onChange=carChange></clickCar>
   <uploading @change="ocr"></uploading>
    </div>
</template>

<script>
import clickCar from '@/components/clickCar'
import uploading from '@/components/uploadimg'
import {getIdCard} from '../assets/js/ocr'
export default {
   components:{
       clickCar,
       uploading
   },
   data(){
       return{
           carpart: ['component-4', 'component-2'],
       }
   },
   methods:{
       carChange(e){

        
        alert(e)
       },
       ocr(img){
           getIdCard(img[1], 'face')
                .then(resp => {
                  alert('ocr识别成功');
                  alert(JSON.stringify(resp));
                })
                .catch(e => {
                  
                })
       }
   }
}
</script>

<style scoped>

</style>
