

<template>
    <div class="uploading" id="uploading">
        <div  class="addImgDiv" v-for="item in imgs" >
            <img :src=item @click="showImg"/>
            <div class="icon"><img :src=deleteIcon @click="deleteImg"/></div>
        </div>
		<div class="imgDiv">
			<input  @change="uploadImg" type="file"  class="img_input"  accept="image/*"  />	
        	<img :src=addIcon />
		</div>	
		<!-- 图片 -->
       <div @click="concealImage" :style="{display:previewStatus}" class="previewImage" ><img  :src=previewImg /> </div>
    </div>
</template>
<script>
import deletepng from './delete.png';
import addpng from './add.png';
import OSS from 'ali-oss';
export default {
  name: "uploadImg",
  data() {
    return {
      client:'',
      imgs:[],
      deleteIcon:deletepng,
      addIcon:addpng,
      previewStatus:'none',
      previewImg:'',
      filename:'',
      dir:'test/'
    };
  },
  created: function() {
    this.configoss();
  },
  methods: {
    
    uploadImg: function(event) {
      let _this = this;
      let __this = event.currentTarget;
      let file = __this.files[0];//获取文件
      _this.filename = `${file.name}${new Date().getTime()}`;
      if (!/image/g.test(file.type)) {
        //判断获取的是否为图片文件
        alert("请确保文件为图像文件");
        return;
      }
      //文件转base64
      _this.filetoDataURL(file,function(url){
        //base64转image对象
       _this.urltoImage(url,function(image){
        //image对象转canvas对象
      let canvas =  _this.imagetoCanvas(image);
         //canvas对象压缩后转blob对象
        _this.canvasResizetoFile(canvas,0.3,function(file){
          //上传alioss 由于有防盗链 只能电脑上显示
          _this.putBlob(file,_this.dir+_this.filename,function(result){
            if(result){
              _this.imgs.push(result) ;
              _this.$emit('change',[_this.imgs,result])
            }
          });
          //blob对象转base64
          //本地预览
          // _this.filetoDataURL(file,function(url){
          //   _this.imgs.push(url) ;
          // })

        })
       })  
      });
    },
    putBlob:function(blob,name,fn){
        let _this = this;
        let result =  _this.client.put(name, blob);
        result.then(function(value) {
          alert('上传成功');
          fn(value.url);
          // success
        }, function(error) {
          alert('上传失败');
          fn('');
          // failure
        });
    },
    filetoDataURL:function (file,fn){
      var reader = new FileReader();
      reader.onloadend = function(e){
        fn(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    urltoImage:function  (url,fn){
      var img = new Image();
      img.src = url;
      img.onload = function(){
        fn(img);
      }
    },
    imagetoCanvas:function (image){
      var cvs = document.createElement("canvas");
      var ctx = cvs.getContext('2d');
      cvs.width = image.width;
      cvs.height = image.height;
      ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
      return cvs ;
    },
    canvasResizetoFile:function (canvas,quality,fn){
      canvas.toBlob(function(blob) {
        fn(blob);
      },'image/jpeg',quality);
    },

    showImg(event){
        let _this = this;
        _this.previewStatus = 'flex';
        _this.previewImg =event.currentTarget.currentSrc;
        
    },
    concealImage:function(event){
        event.stopPropagation();
        event.preventDefault();
        let _this = this;
        _this.previewStatus = 'none';
        },
    deleteImg(event){
        let _this = this;
        Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
        this.splice(index, 1);
        }
        }
        _this.imgs.remove(event.currentTarget.parentElement.parentElement.firstChild.currentSrc);

    },
    configoss(){
      this.client = new OSS({
            accessKeyId: 'LTAI1agzaBG5gXHe',
            accessKeySecret: 'WoNjdktSwLGSEQAsxYWkMkALUuz2CI',
            bucket: 'moby-oss-dev',
            region: 'oss-cn-beijing'
        });
    },
   
    
  }
};
</script>
<style scoped>
.uploading{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
}
.imgDiv {
  position: relative;
  display: inline-block;
  width: 100px;;
  height: 100px;
  text-align: center;
  background-color: #F2F2F2;
  margin: 10px;
}
.imgDiv img {
  width: 50px;
  height: 50px;
  margin-top: 25px;
}
.img_input {
  width: 100px;;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  -moz-opacity: 0;
  -ms-opacity: 0;
  -webkit-opacity: 0;
  opacity: 0; /*css属性——opcity不透明度，取值0-1*/
  filter: alpha(
    opacity=0
  ); /*兼容IE8及以下--filter属性是IE特有的，它还有很多其它滤镜效果，而filter: alpha(opacity=0); 兼容IE8及以下的IE浏览器(如果你的电脑IE是8以下的版本，使用某些效果是可能会有一个允许ActiveX的提示,注意点一下就ok啦)*/
  cursor: pointer;
}
.addImgDiv{
  position: relative;
  display: inline-block;
  width: 100px;;
  height: 100px;
  text-align: center;
  margin: 10px;
}
.addImgDiv img {
  width: 100px;
  height: 100px;
}
.addImgDiv .icon{
    position: absolute;
    top: 1px;
    right: 1px;
}
.addImgDiv .icon img{
    width: 20px;
    height: 20px;
}
.previewImage{
        position: fixed;
        display: flex;
        z-index: 11;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color:white;
    }
.previewImage img{
    width: 100vw;
}

</style>

