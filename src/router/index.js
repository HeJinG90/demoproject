import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = resolve => require(['../components/home'], resolve)
const EditPage = resolve => require(['../demo/editPage'], resolve)
const QrcodePage = resolve => require(['../demo/qrcodePage'], resolve)
const VuexTest = resolve => require(['../demo/vuexTest'], resolve)
const Vue3D = resolve => require(['../demo/vue3D'], resolve)
const CarChoose = resolve => require(['../demo/carChoose'], resolve)
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {

            position.x = 0
            position.y = 0
        }

        return position
    }
}
const router = new Router({
    scrollBehavior,
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
        },
        {
            path: '/vue3D',
            name: 'Vue3D',
            component: Vue3D
        },
        {
            path: '/carChoose',
            name: 'CarChoose',
            component: CarChoose
        }

    ],
});
router.beforeEach((to, from, next) => {
    next();
})

export default router;