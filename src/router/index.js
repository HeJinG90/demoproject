import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/home'
import EditPage from '../demo/editPage'
import QrcodePage from '../demo/qrcodePage'
import VuexTest from '../demo/vuexTest'


const router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            // meta: { loginAuth: true },
            // components: {
            //     default: Home,
            //     a: EditPage
            // },
            beforeEnter: (to, from, next) => {
                // next('/vuexTest');
                next();

            }
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
});
router.beforeEach((to, from, next) => {
    next();
})

export default router;