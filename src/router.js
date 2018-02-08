import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

// This way, the vue-router functionality is plugged into Vue.
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', // If I visit the login path without the hash, everything loads as expected.
    linkActiveClass: 'is-active',
    scrollBehavior: (to, from, savedPosition) => ({
        y: 0
    }),
    routes: [
        { path: '/category/front-end', component: Category },
        { path: '/login', component: Login},
        { path: '/', redirect: '/category/front-end' }
    ]
})

export default router
