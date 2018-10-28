<template>
 
    <v-app>
    <PizzaOrder></PizzaOrder>
    </v-app>
</template>

<script>
import PizzaOrder from './views/PizzaOrder'
export default {
  name: 'app',
  components: {
    PizzaOrder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
