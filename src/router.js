import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'

// This way, the vue-router functionality is plugged into Vue.
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Category
    }]
})

export default router
