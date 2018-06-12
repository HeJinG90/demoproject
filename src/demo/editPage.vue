
<template>
  <div >
    <div id="editor">
		<div class="imgDiv">
			<input  @change="showImg" type="file"  class="img_input"/>	
        	<img src="../assets/image/car.png" />
		</div>	
		<div class="imgDiv">
			<input @change="showImg" type="file"  class="img_input"/>	
        	<img src="../assets/image/car.png" />
		</div>
		<div class="imgDiv">
			<input @change="showImg" type="file"  class="img_input"/>	
        	<img src="../assets/image/car.png" />
		</div>
		<div class="imgDiv">
			<input @change="showImg" type="file"  class="img_input"/>	
        	<img src="../assets/image/car.png" />
		</div>
		<!--<div class="videoDiv" >
		<video  src="https://n8-pl-agv.autohome.com.cn/video-26/FF91E122A113F07F/2016-10-26/2B0D5FD3385ABEBF-300.mp4" controls autoplay></video >
		</div>-->
		<div class="videoDiv" >
		<div>
		<input @change="showVideo" type="file"  class="video_input"/> 
		点击上传视频
		</div>	
		<video style="display: none;" src="" controls autoplay ></video >
		</div>
		<div>
			<textarea id="textareainput"></textarea>
		</div>
	</div>
	    <button id="preview">预览</button>
   		<button id="submit">提交</button>
    <div class="previewWrap ">
    </div>           
  </div>
</template>
<script>
export default {
  name: 'EditPage',
  data () {
    return {
        video:{}
    }
  },
  created:function(){
    let _this = this;
    // _this.showImg();
    // _this.showVideo();
    // _this.previewFun();
    // _this.submitFun();
  },
  methods:{
    showImg: function(event){
        let _this = event.currentTarget;
        let file = _this.files[0];
        if(!/image/g.test(file.type))           //判断获取的是否为图片文件  
        {  
            alert("请确保文件为图像文件");  
            return ;  
        } 
        var reader=new FileReader(); 
        reader.addEventListener("load", function () {
            _this.nextElementSibling.src = reader.result;
            }, false);
            
        reader.readAsDataURL(file); 
                    
            
    },
    showVideo: function(event){
        let _this = event.currentTarget;;
        let file = _this.files[0];
        
        if(!/video/g.test(file.type))           //判断获取的是否为视频文件  
            {  
                alert("请确保文件为视频文件");  
                return ;  
            } 
        this.video = new FormData();
        this.video.append('file', file);
        this.video.append('id', "123455");
        var obj_url = window.URL.createObjectURL(file);//获取视频地址
        _this.parentElement.nextElementSibling.src = obj_url;    
        _this.parentElement.nextElementSibling.style.display="block"; 
    },
  }
 
}
</script>
<style scoped>
.imgDiv{
	position: relative;
    display: inline-block;
}
.imgDiv img{
	width: 1.8rem;
    height: 1.1rem;
}
.img_input {
    width: 1.8rem;
    height: 1.1rem;
    position: absolute;
    top: 0;
    z-index:1;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -webkit-opacity: 0;
    opacity: 0;  /*css属性——opcity不透明度，取值0-1*/
    filter: alpha(opacity=0); /*兼容IE8及以下--filter属性是IE特有的，它还有很多其它滤镜效果，而filter: alpha(opacity=0); 兼容IE8及以下的IE浏览器(如果你的电脑IE是8以下的版本，使用某些效果是可能会有一个允许ActiveX的提示,注意点一下就ok啦)*/
    cursor: pointer;
}
.videoDiv{
	position: relative;
}
.videoDiv video{
    width: 7.7rem;
}
.video_input{
	width: 7.7rem;
    height: 0.6rem;
    position: absolute;
    top: 0;
    left: 0.1rem;
    z-index: 1;
    -moz-opacity: 0;
    -ms-opacity: 0;
    -webkit-opacity: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
}
.videoDiv div{
	border: 1px dashed #d9d9d9;
    text-align: center;
    height: 0.6rem;
    color: grey;
}
.previewWrap{
	position: absolute;
    z-index: 999;
    display: none;
    width: 375px;
    height: 667px;
    top: 3px;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transform: none;
    transform: none;
    border-radius: 7px;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.1);
    box-shadow: 0 0 15px rgba(0,0,0,.1);
}
.previewWrap.active{
	display: block;
}

</style>

