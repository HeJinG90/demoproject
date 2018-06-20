
// import func from './vue-temp/vue-editor-bridge';

<template>
<transition name="fade">
  <div >
    <div @click="goBack">返回</div>
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
			<input @change="showImg" type="file"   class="img_input"/>	
        	<img src="../assets/image/car.png" />
		</div>
		<div class="imgDiv">
			<input @change="showImg" type="file"  class="img_input"/>	
        	<img src="../assets/image/car.png" />
    </div>
		<div class="videoDiv" >
		<div>
		<input @change="showVideo" type="file"  class="video_input"/> 
		<span>点击上传视频</span>
		</div>	
		<video style="display: none;" :src=videoSrc controls autoplay ></video >
		</div>
		<div>
			<textarea  v-model=textareainput ></textarea>
		</div>
	</div>
	    <button @click="previewFun" >预览</button>
   		<button @click="submitFun" >提交</button>
    <div  :class="{'previewWrap': isshow, 'previewWrap active': !isshow  }" :style="preViewLeft" >
        <div v-show=imgSlideShow>
        <el-carousel height="200px">
        <el-carousel-item v-for="item in imgarr " :key="item">
            <img  :src = item  style="width: 375px;" />
        </el-carousel-item>
        </el-carousel>
        </div>
        <div v-html=html></div>
    </div>      

    <div v-show="shade" class="mui-backdrop " v-on:click='hideShade'></div>
  </div>
  </transition>
</template>
<script>
export default {
  name: "EditPage",
  data() {
    return {
      imgFile:{},
      imgarr: [],
      videoSrc: "",
      formData: new FormData(),
      videoFile:{},
      textareainput: "",
      preViewLeft: "",
      isshow: true,
      shade:false,
      html: "",
      imgSlideShow: false,
    };
  },
  created: function() {
    let _this = this;
    _this.setPreviewWrapLeft();
  },
  methods: {
     goBack:function(){
       window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
     },
    //隐藏遮罩
    hideShade:function(){
      var _this = this;
      _this.shade = false;
      _this.isshow = true;
    },
    //显示图片
    showImg: function(event) {
      let __this = event.currentTarget;
      let file = __this.files[0];
      this.formData.append("imgarr", file);
      if (!/image/g.test(file.type)) {
        //判断获取的是否为图片文件
        alert("请确保文件为图像文件");
        return;
      }
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          __this.nextElementSibling.src = reader.result;
        },
        false
      );
      reader.readAsDataURL(file);
    },
    //显示视频
    showVideo: function(event) {
      let _this = event.currentTarget;
      let file = _this.files[0];
      if (!/video/g.test(file.type)) {
        //判断获取的是否为视频文件
        alert("请确保文件为视频文件");
        return;
      }
      this.formData.append("file", file);
      var obj_url = window.URL.createObjectURL(file); //获取视频地址
      this.videoSrc = obj_url;
      _this.parentElement.nextElementSibling.src = obj_url;
      _this.parentElement.nextElementSibling.style.display = "block";
    },
    //计算预览页与左边的距离
    setPreviewWrapLeft: function() {
      let dwidth = document.documentElement.getBoundingClientRect().width;
      let leftwidth = (dwidth - 375) / 2 + "px";
      this.preViewLeft = "left:" + leftwidth;
    },
    //预览功能
    previewFun: function() {
      //点击预览按钮  显示预览页  与遮罩层
      var _this = this;
      _this.showPreviewPage();
      _this.isshow = false;
      _this.shade=true;
    },
    showPreviewPage: function() {
      var _this = this;
      let __this = document.getElementById("editor").children;
      let lenght = document.getElementById("editor").children.length;
      _this.imgarr = [];
      for (let i = 0; i < lenght; i++) {
        if (__this[i].className == "imgDiv") {
          if (__this[i].lastChild.currentSrc.indexOf("base64") > 0) {
            _this.imgarr.push(__this[i].lastChild.currentSrc);
            _this.imgSlideShow = true;
          }
        }
      }
      _this.html = "";
      if (_this.videoSrc != "") {
        _this.html += `<video class="previewVideo" style="width: 375px;margin-top: 0.3rem;" src="${
          _this.videoSrc
        }" controls autoplay></video >`;
      }
      if (_this.textareainput != "") {
        _this.html += `<div style='color:red;margin-top: 10px;margin-left: 3px;width: 369px;word-wrap: break-word;'>${ _this.textareainput}</div>`;
      }
    },
    submitFun: function() {
        // const loading = this.$loading({ //上传中
        //     lock: true,
        //     text: '上传中,请稍等',
        //     spinner: 'el-icon-loading',
        //     background: 'rgba(0, 0, 0, 0.7)'
        // });
    let _this = this;
    _this.$router.push({name:'QrcodePage',query: { id:  1233 } });
    _this.formData.append("id", new Date().getTime());
    _this.formData.append("textareainput", _this.textareainput);
    // 上传接口
    _this.$ajax({
        method: "post",
        url: "http://172.17.188.111:8080/upload/save",
        data: _this.formData
      })
        .then(function(response) {
            if(response.status==200){
            _this.$router.push({name:'QrcodePage',query: { id:  response.data.id } });
           }else{
               alert('传输失败');
           }
           loading.close();
        })
        .catch(function(response) {
            alert('服务器错误');
          loading.close();
        });
     
      //  location.reload();
    }
  }
};
</script>
<style scoped>
.imgDiv {
  position: relative;
  display: inline-block;
}
.imgDiv img {
  width: 1.77rem;
  height: 1.1rem;
}
.img_input {
  width: 1.77rem;
  height: 1.1rem;
  position: absolute;
  top: 0;
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
.videoDiv {
  position: relative;
}
.videoDiv video {
  width: 4rem;
  margin-left: 1.9rem;
}
.videoDiv span {
  line-height: 0.6rem;
  display: inline-block;
}
.video_input {
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
.videoDiv div {
  border: 1px dashed #d9d9d9;
  text-align: center;
  height: 0.6rem;
  color: grey;
}
.previewWrap {
  position: absolute;
  z-index: 999;
  display: none;
  width: 375px;
  height: 667px;
  overflow: auto;
  top: 3px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transform: none;
  transform: none;
  border-radius: 7px;
  background-color: #f7f7f7;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.previewWrap.active {
  display: block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

