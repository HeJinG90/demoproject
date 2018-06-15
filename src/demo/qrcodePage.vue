<template>
  <div >
      <div  id="qrcode" style="margin-left: 40%;margin-bottom: 0.2rem" ></div> 
  </div>
</template>      

<script>
export default {
   created:function(){
      let _this = this;
     setTimeout(function(){
     new QRCode("qrcode");
     this.rqcodeId
      var qrcode = new QRCode("qrcode", {
            text: "http://172.17.188.102:8020/showQRcode/index.html?id="+_this.rqcodeId,
            width: 200,
            height: 200,
            colorDark: '#efb73e',
            colorLight: "#ffffff"
            });
 },2000);

   },
  };
</script>