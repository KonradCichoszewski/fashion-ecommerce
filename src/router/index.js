import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import ProductsListing from '@/views/ProductsListing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/man',
    alias: ['/woman', '/kids'],
    name: 'ProductsListing',
    component: ProductsListing,
  },
  {
    path: '/man/:category',
    alias: ['/woman/:category', '/kids/:category'],
    component: ProductsListing,
  },
  {
    path: '/man/:category/:id',
    alias: ['/woman/:category/:id', '/kids/:category/:id'],
    name: 'ProductDetail',
    component: ProductDetail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
