
<template>
   <div >

    
   </div> 
</template>


<script>
import OSS from 'ali-oss'
export default {
    mounted(){
        let client = new OSS({
            accessKeyId: 'LTAI1agzaBG5gXHe',
            accessKeySecret: 'WoNjdktSwLGSEQAsxYWkMkALUuz2CI',
            bucket: 'moby-oss-dev',
            region: 'oss-cn-beijing'
        });
    }
       

}
</script>
<style scoped>


</style>


