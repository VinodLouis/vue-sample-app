<template>
     <v-layout row  fill-height>
        <v-flex xs8 fill-height>
            <v-tabs centered
            color="cyan"
            dark
            icons-and-text>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab to="/">Base <img src="../assets/pizza.svg" width="22"/></v-tab>
            <v-tab to="/toppings">Toppings <img src="../assets/toppings.svg" width="22"/></v-tab>
            <v-tab to="/vegges">Vegges <img src="../assets/vegges.svg" width="22"/></v-tab>
            <v-tab to="/cheese">Cheese <img src="../assets/cheese.svg" width="22"/></v-tab>
            <v-tab to="/sauses">Sause(s) <img src="../assets/sause.svg" width="22"/></v-tab>
            <v-tab to="/desserts">Dessert(s) <img src="../assets/dessert.svg" width="22"/></v-tab>
            <v-tab to="/extra">Extra <img src="../assets/extra.svg" width="22"/></v-tab>
            </v-tabs> 
            <router-view/>
        </v-flex>
         <v-flex xs4 fill-height>
           <PizzaInvoice></PizzaInvoice>
         </v-flex>
     </v-layout>  
</template>

<script>
import PizzaInvoice from '../components/PizzaInvoice';
export default {
  name: 'PizzaOrder',
  components:{
    'PizzaInvoice' : PizzaInvoice
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .m-h{
   max-height: calc(100% - 72px) !important;
   overflow: auto;
 }
 .r-m-l-r{
   margin:auto 0px !important;
 }
</style>
