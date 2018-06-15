import "babel-polyfill";
// import './assets/css/global.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)

})