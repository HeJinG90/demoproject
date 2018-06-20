import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/home'
import EditPage from '../demo/editPage'
import QrcodePage from '../demo/qrcodePage'
import VuexTest from '../demo/vuexTest'

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/editPage',
            name: 'EditPage',
            component: EditPage
        },
        {
            path: '/qrcodePage',
            name: 'QrcodePage',
            component: QrcodePage
        },
        {
            path: '/vuexTest',
            name: 'VuexTest',
            component: VuexTest
        }
    ]
})