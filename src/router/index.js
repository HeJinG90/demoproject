import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/home'
import EditPage from '../demo/editPage'


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
        }
    ]
})