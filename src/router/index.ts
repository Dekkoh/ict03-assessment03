import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RedWinesView from '@/views/RedWinesView.vue'
import WhiteWinesView from '@/views/WhiteWinesView.vue'
import CoolersView from '@/views/CoolersView.vue'
import OpenersView from '@/views/OpenersView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import PostCheckoutView from '@/views/PostCheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/red-wines',
      name: 'red-wines',
      component: RedWinesView
    },
    {
      path: '/white-wines',
      name: 'white-wines',
      component: WhiteWinesView
    },
    {
      path: '/coolers',
      name: 'coolers',
      component: CoolersView
    },
    {
      path: '/openers',
      name: 'openers',
      component: OpenersView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/checkout-successful',
      name: 'checkout-successful',
      component: PostCheckoutView
    }
  ]
})

export default router
