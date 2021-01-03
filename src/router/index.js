import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Cart from '@/views/Cart.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import ProductsListing from '@/views/ProductsListing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/man',
    alias: ['/woman', '/kids'],
    meta: { side: true },
    name: 'Group',
    component: ProductsListing,
  },
  {
    path: '/man/:category',
    alias: ['/woman/:category', '/kids/:category'],
    meta: { side: true },
    name: 'Category',
    component: ProductsListing,
  },
  {
    path: '/man/:category/:subcategory/',
    alias: ['/woman/:category/:subcategory/', '/kids/:category/:subcategory/'],
    meta: { side: true },
    name: 'Subcategory',
    component: ProductsListing,
  },
  // {
  //     path: '/man',
  //     alias: ['/woman', '/kids', '/man/:category', '/woman/:category', '/kids/:category', '/man/:category/:subcategory/', '/woman/:category/:subcategory/', '/kids/:category/:subcategory/'],
  //     meta: { products: true },
  //     component: ProductsListing,
  // },
  {
    path: '/:group/product/:id',
    meta: { side: true },
    name: 'ProductDetails',
    component: ProductDetails,
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }  
})

export default router
