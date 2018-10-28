import Vue from 'vue'
import Router from 'vue-router'
import PizzaBase from './components/PizzaBase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: PizzaBase
    },
    {
      path: '/toppings',
      name: 'Toppings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaToppings.vue')
    },
    {
      path: '/vegges',
      name: 'Vegges',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaVegges.vue')
    },
    {
      path: '/cheese',
      name: 'Cheese',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaCheese.vue')
    },
    {
      path: '/sauses',
      name: 'Sauses',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaSauses.vue')
    },
    {
      path: '/desserts',
      name: 'Desserts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaDesserts.vue')
    },
    {
      path: '/extra',
      name: 'Extra',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaExtra.vue')
    }
  ]
})
