import "babel-polyfill";
// import './assets/css/global.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)

})