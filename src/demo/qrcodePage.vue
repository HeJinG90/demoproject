<template>
  <div >
    <div @click="goBack">返回</div>
    <div @click="update">更新ID</div>
    <div> 此页有路由导航守卫的演示 </div>
      <div  id="qrcode" style="margin-left: 40%;margin-bottom: 0.2rem" ></div> 
  </div>
</template>      

<script>
export default {
   created:function(){
   
      let _this = this;
     setTimeout(function(){
      _this.showQrcode(_this.$route.query.id);
 },500);

   },
   
   methods:{
    goBack:function(){
      window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/');
    },
    update:function(){
      //更新ID 路由地址不变  参数变化 导致路由页面不刷新 所以要监听路由对象的变化
       this.$router.replace({name:'QrcodePage',query: { id:  33 } }); 
    },
    showQrcode:function(id){
      new QRCode("qrcode", {
            text: "http://172.17.188.102:8020/showQRcode/index.html?id="+id,
            width: 200,
            height: 200,
            colorDark: '#efb73e',
            colorLight: "#ffffff"
            });
    }
  },
  watch : {
      '$route' (to,from){
          this.showQrcode(this.$route.query.id);
    }
    
  },
  // beforeRouteEnter : function(to, from, next) { //组件内守卫  相当于拦截  获取不到this
  //       next();
  // },
  // beforeRouteLeave : function(to, from, next) { // 能获取到this
  //       next();
  // },
  // beforeRouteUpdate : function(to, from, next){ // 能获取到this  路由变化时触发
  //       next();
  //       this.showQrcode(this.$route.query.id);
  // }

  };
</script>