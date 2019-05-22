import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/new-trip',
      name: 'new-trip',
      component: () => import(/* webpackChunkName: "about" */ './views/NewTrip.vue')
    },
    {
      path: '/trips/:id',
      name: 'trips-id',
      component: () => import(/* webpackChunkName: "about" */ './views/Trip.vue')
    },
    {
      path: '/events/:id',
      name: 'events-id',
      component: () => import(/* webpackChunkName: "about" */ './views/Event.vue')
    },
    {
      path: '/new-event',
      name: 'new-event',
      component: () => import(/* webpackChunkName: "about" */ './views/NewEvent.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "about" */ './views/Setting.vue')
    }
  ]
})
