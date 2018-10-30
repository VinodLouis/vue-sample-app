import Vue from 'vue'
import Router from 'vue-router'
import PizzaIngredients from './components/PizzaIngredients'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: PizzaIngredients,
      props:{ingredient:"base"}
    },
    {
      path: '/toppings',
      name: 'Toppings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"toppings"}
    },
    {
      path: '/vegges',
      name: 'Vegges',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"vegges"}
    },
    {
      path: '/cheese',
      name: 'Cheese',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"cheese"}
    },
    {
      path: '/sauces',
      name: 'Sauces',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"sauces"}
    },
    {
      path: '/desserts',
      name: 'Desserts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"desserts"}
    },
    {
      path: '/extra',
      name: 'Extra',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/PizzaIngredients.vue'),
      props:{ingredient:"extra"}
    }
  ]
})
